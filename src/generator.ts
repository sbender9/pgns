/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * Copyright 2021 Scott Bender <scott@scottbender.net>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

import camelCase from 'camelcase'
import { pgns, getPGNs } from './index'
import { Definition, Field } from './definition'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2), {
  boolean: ['enums', 'pgns'],
  alias: { h: 'help' }
})

const filtered: Definition[] = getPGNs() as Definition[]

function enumName(name: string) {
  return fixIdentifier(camelCase(name, { pascalCase: true }), '_')
}

const organized: { [key: number]: Definition[] } = {}
const pgnNumbers: number[] = []

function organizePGNs() {
  filtered.forEach((pgn) => {
    if (!organized[pgn.PGN]) {
      organized[pgn.PGN] = []
      pgnNumbers.push(pgn.PGN)
    }
    organized[pgn.PGN].push(pgn)
  })
}

organizePGNs()

if ( argv.enums ) {
  pgns.LookupEnumerations.forEach((en: any) => {
    if (en.Name !== 'YES_NO') {
      const done: { [key: string]: number } = {}
      console.log(`export enum ${enumName(en.Name)} {`)
      en.EnumValues.forEach((v: any) => {
        const name = enumName(v.Name)
        const found = done[name]
        if (!found) {
          done[name] = 1
          console.log(`  ${name} = '${v.Name}',`)
        }
      })
      console.log('}\n')
    }
  })

  pgns.LookupIndirectEnumerations.forEach((en: any) => {
    const done: { [key: string]: number } = {}
    console.log(`export enum ${enumName(en.Name)} {`)
    en.EnumValues.forEach((v: any) => {
      const name = enumName(v.Name)
      const found = done[name]
      if (!found) {
        done[name] = 1
        console.log(`  ${name} = '${v.Name}',`)
      }
    })
    console.log('}\n')
  })

  pgns.LookupBitEnumerations.forEach((en: any) => {
    const done: { [key: string]: number } = {}
    console.log(`export enum ${enumName(en.Name)} {`)
    en.EnumBitValues.forEach((v: any) => {
      const name = enumName(v.Name)
      const found = done[name]
      if (!found) {
        done[name] = 1
        console.log(`  ${name} = '${v.Name}',`)
      }
    })
    console.log('}\n')
  })
}

if ( argv.pgns ) {
  console.log('import * as enums from \'./enums\'\n')

  console.log('export interface PGNFields {')
  console.log('}\n')
  
  console.log('export interface PGN {')
  console.log('  pgn: number')
  console.log('  prio?: number')
  console.log('  src?: number')
  console.log('  dst: number')
  console.log('  timestamp?: string')
  console.log('  input?: string[]')
  console.log('  description?: string')
  console.log('  fields: PGNFields')
  console.log('}\n')

  /*
    function getMatchFields(pgn: Definition) : Field[] {
    return pgn.Fields.filter(field => field.Match !== undefined)
    }

    function getPGNsWithMatchs(pgns: Definition[], count: number) : Definition[] {
    const res : Definition[] = []
    pgns.forEach(pgn => {
    const matches = getMatchFields(pgn)
    if ( matches.length == count ) {
    res.push(pgn)
    }
    })
    return res
    }

    function getMaxMatchs(pgns: Definition[]) : number {
    let res = 0
    pgns.forEach(pgn => {
    const matches = getMatchFields(pgn)
    if ( matches.length > res ) {
    res = matches.length
    }
    })
    return res
    }
  */

  pgnNumbers.forEach((pgnNumber) => {
    const pgns = organized[pgnNumber]
    pgns.forEach((pgn: any) => {
      outputPGN(pgn, pgns.length > 1)
    })
    /*
      const pgns = organized[pgnNumber]
      if ( pgns.length === 1 ) {
      outputPGN(pgns[0], false)
      } else {
      const matchesByCount = []
      for ( let i = 0; i < getMaxMatchs(pgns); i++ ) {
      const withCount = getPGNsWithMatchs(pgns, i)
      withCount.forEach(pgn => {
      outputPGN(pgn, true, i)
      })
      }
      }
    */
  })

  function outputPGN(pgn: Definition, isMulti: boolean) {
    console.log('/*')
    console.log(`  PGN: ${pgn.PGN}`)
    console.log(`  Description: ${pgn.Description}`)
    if (pgn.Explanation) {
      console.log(`  Explanation: ${pgn.Explanation}`)
    }
    if (isMulti) {
      pgn.Fields.forEach((field: Field) => {
        if (field.Match) {
          console.log(
            `  Match: ${field.Name} == ${field.Description || field.Match}`
          )
        }
      })
    }
    console.log('*/')

    let typeName = `PGN_${pgn.PGN}`

    if (isMulti) {
      pgn.Fields.forEach((field: Field) => {
        if (field.Match && field.LookupEnumeration !== 'INDUSTRY_CODE') {
          const desc = field.Description
                ? enumName(field.Description)
                : field.Match
          typeName = typeName + `_${desc}`
        }
      })
    }

    console.log(`export interface ${typeName}Fields extends PGNFields {`)
    pgn.Fields.forEach((field: Field) => {
      let type = 'string'
      switch (field.FieldType) {
      case 'NUMBER':
      case 'RESERVED':
      case 'BINARY':
        type = 'number'
        break

      case 'LOOKUP':
        if (field.LookupEnumeration === 'YES_NO') {
          type = 'boolean'
        } else if (field.LookupEnumeration) {
          type = `enums.${enumName(field.LookupEnumeration)}`
        }
        break

      case 'INDIRECT_LOOKUP':
        if (field.LookupIndirectEnumeration) {
          type = `enums.${enumName(field.LookupIndirectEnumeration)}`
        }
        break

      case 'BITLOOKUP':
        if (field.LookupBitEnumeration) {
          type = `enums.${enumName(field.LookupBitEnumeration)}[]`
        }
        break
      }

      const required = field.PartOfPrimaryKey == true ? '' : '?'

      console.log(`  ${fixIdentifier(field.Id, '_')}${required}: ${type}`)
    })
    console.log('}\n')

    console.log(`export interface ${typeName} extends PGN {`)
    console.log(` fields: ${typeName}Fields`)
    console.log('}\n')
  }

}

function fixIdentifier(str: string, prefix: string) {
  let res = str

  const firstChar = str[0]
  if (
    !(
      (firstChar >= 'a' && firstChar <= 'z') ||
        (firstChar >= 'A' && firstChar <= 'Z') ||
        firstChar === '_' ||
        firstChar === '$'
    ) &&
      firstChar !== '+' &&
      firstChar !== '-'
  ) {
    res = `${prefix}` + str
  }

  let newS = ''
  for (let i = 0; i < res.length; i++) {
    const char = res[i]

    if (char == '-') {
      newS = newS + 'Minus'
    } else if (char === '+') {
      newS = newS + 'Plus'
    } else if (
      (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9') ||
        char === '_' ||
        char === '$'
    ) {
      newS = newS + char
    }
  }
  return newS
}
