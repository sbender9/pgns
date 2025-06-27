import camelCase from 'camelcase'

import { pgns, getPGNs} from '../index.js'
const filtered = getPGNs()


function enumName(name: string) {
  return fixIdentifier(camelCase(name, {pascalCase:true}), "_")
}

const organized: { [key: number]: any[] } = {}
const pgnNumbers: number[] = []

function organizePGNs() {
  filtered.forEach(pgn => {
    if ( !organized[pgn.PGN] ) {
      organized[pgn.PGN] = []
      pgnNumbers.push(pgn.PGN)
    }
    organized[pgn.PGN].push(pgn)
  })
}

organizePGNs()

pgns.LookupEnumerations.forEach(en => {
  if ( en.Name !== 'YES_NO' ) {
    const done: { [key: string]: number } = {}
    console.log(`export enum ${enumName(en.Name)} {`)
    en.EnumValues.forEach(v => {
      let name = enumName(v.Name)
      let found = done[name]
      if ( !found ) {
        done[name] = 1
        console.log(`  ${name} = '${v.Name}',`)
      }
    })
    console.log('}\n')
  }
})

pgns.LookupIndirectEnumerations.forEach(en => {
  const done: { [key: string]: number } = {}
  console.log(`export enum ${enumName(en.Name)} {`)
  en.EnumValues.forEach(v => {
    let name = enumName(v.Name)
    let found = done[name]
    if ( !found ) {
      done[name] = 1
      console.log(`  ${name} = '${v.Name}',`)
    }
  })
  console.log('}\n')
})

pgns.LookupBitEnumerations.forEach(en => {
  const done: { [key: string]: number } = {}
  console.log(`export enum ${enumName(en.Name)} {`)
  en.EnumBitValues.forEach(v => {
    let name = enumName(v.Name)
    let found = done[name]
    if ( !found ) {
      done[name] = 1
      console.log(`  ${name} = '${v.Name}',`)
    }
  })
  console.log('}\n')
})

console.log('export interface PGN {')
console.log('}')

function getMatchFields(pgn: any) : any[] {
  return pgn.Fields.filter((field:any) => field.Match !== undefined)
}

function getPGNsWithMatchs(pgns: any[], count: number) : any[] {
  const res : any[] = []
  pgns.forEach(pgn => {
    const matches = getMatchFields(pgn)
    if ( matches.length == count ) {
      res.push(pgn)
    }
  })
  return res
}

function getMaxMatchs(pgns: any[]) : number {
  let res = 0
  pgns.forEach(pgn => {
    const matches = getMatchFields(pgn)
    if ( matches.length > res ) {
      res = matches.length
    }
  })
  return res
}

pgnNumbers.forEach((pgnNumber:number) => {
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

function outputPGN(pgn: any, isMulti: boolean) {
  console.log('/*')
  console.log(`  PGN: ${pgn.PGN}`)
  console.log(`  Description: ${pgn.Description}`)
  if ( pgn.Explanation ) {
    console.log(`  Explanation: ${pgn.Explanation}`)
  }
  if ( isMulti ) {
    pgn.Fields.forEach((field:any) => {
      if ( field.Match ) {
        console.log(`  Match: ${field.Name} == ${field.Description || field.Match}`)
      }
    })
  }
  console.log('*/')

  let typeName = `PGN_${pgn.PGN}`

  if ( isMulti ) {
    pgn.Fields.forEach((field:any) => {
      if ( field.Match && field.LookupEnumeration !== 'INDUSTRY_CODE') {
        const desc = field.Description ? enumName(field.Description) : field.Match
        typeName = typeName + `_${desc}`
      }
    })
  }
  
  console.log(`export interface ${typeName} extends PGN {`)
  let matchCount = 0
  pgn.Fields.forEach((field:any) => {
    let type = 'string'
    switch (field.FieldType) {
    case 'NUMBER':
    case 'RESERVED':
    case 'BINARY':
      type = 'number'
      break

    case 'LOOKUP':
      if ( field.LookupEnumeration === 'YES_NO' ) {
        type = 'boolean'
      } else {
        type = enumName(field.LookupEnumeration)
      }
      break

    case 'INDIRECT_LOOKUP':
      type = enumName(field.LookupIndirectEnumeration)
      break

    case 'BITLOOKUP':
      type = enumName(field.LookupBitEnumeration) + '[]'
      break
    }
    
    console.log(`  ${fixIdentifier(field.Id, '_')}: ${type}`)
  })
  console.log('}\n')
}


function fixIdentifier(str:string, prefix:string) {
  let res = str
  
  const firstChar = str[0];
  if (!((firstChar >= 'a' && firstChar <= 'z') ||
        (firstChar >= 'A' && firstChar <= 'Z') ||
        firstChar === '_' ||
        firstChar === '$') &&
      firstChar !== '+' &&
      firstChar !== '-' ) {
    res = `${prefix}` + str
  }

  let newS = ""
  for (let i = 0; i < res.length; i++) {
    const char = res[i];

    if ( char == '-' ) {
      newS = newS + 'Minus'
    } else if ( char === '+' ) {
      newS = newS + 'Plus'
    } else if ((char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9') ||
        char === '_' ||
        char === '$') {
      newS = newS + char
    }
  }
  return newS
}

