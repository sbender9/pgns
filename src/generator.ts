import camelCase from 'camelcase'

import { pgns, getPGNs} from '../index.js'
const filtered = getPGNs()


function enumName(name: string) {
  return fixIdentifier(camelCase(name, {pascalCase:true}), "_")
}

function getMultiples() {
  const multiples: number[] = []
  const found: number[] = []

  filtered.forEach(pgn => {
    const num = pgn.PGN
    if ( found.indexOf(pgn.PGN) !== -1 ) {
      multiples.push(pgn.PGN)
    } else {
      found.push(pgn.PGN)
    }
  })

  return multiples
}

const multiples = getMultiples()

pgns.LookupEnumerations.forEach(en => {
  if ( en.Name !== 'YES_NO' ) {
    const done: { [key: string]: number } = {}
    console.log(`export enum ${enumName(en.Name)} {`)
    en.EnumValues.forEach(v => {
      let name = enumName(v.Name)
      let found = done[name]
      /*
      if ( found ) {
        let num = found + 1
        done[name] = num
        name = name + num
      } else {
        done[name] = 1
        }*/
      if ( !found ) {
        done[name] = 1
        console.log(`  ${name} = '${v.Name}',`)
      }
    })
    console.log('}\n')
  }
})

console.log('export interface PGN {')
console.log('}')

filtered.forEach(pgn => {
  console.log('/*')
  console.log(`  PGN: ${pgn.PGN}`)
  console.log(`  Description: ${pgn.Description}`)
  if ( pgn.Explanation ) {
    console.log(`  Explanation: ${pgn.Explanation}`)
  }
  if ( multiples.indexOf(pgn.PGN) !== -1 ) {
    pgn.Fields.forEach((field:any) => {
      if ( field.Match ) {
        console.log(`  Match: ${field.Name} == ${field.Description || field.Match}`)
      }
    })
  }
  console.log('*/')

  let typeName = `PGN_${pgn.PGN}`

  if ( multiples.indexOf(pgn.PGN) !== -1 ) {
    pgn.Fields.forEach((field:any) => {
      if ( field.Match && field.LookupEnumeration !== 'INDUSTRY_CODE') {
        const desc = field.Description ? enumName(field.Description) : field.Match
        typeName = typeName + `_${desc}`
      }
    })
  }
  
  console.log(`export interface ${typeName} extends PGN {`)
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
    }
    
    console.log(`  ${fixIdentifier(field.Id, '_')}: ${type}`)
  })
  console.log('}\n')
})


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

