/*
 * Copyright 2025 Scott Bender <scott@scottbender.net>
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

export * from './pgns'
export * from './definition'

import { Definition, PGNMap } from './definition'

const canboat = require('../canboat.json')

//for backwards compatibility
export const pgns = canboat
export const getPGNs = () : Definition[] => canboat.PGNs.filter((pgn:any) => pgn.Fallback === undefined || pgn.Fallback === false)


export const getAllPGNs = () : Definition[] => {
  return canboat.PGNs.filter((pgn:any) => 
    pgn.Fallback === undefined || pgn.Fallback === false
  )
}

let pgnMap : PGNMap

export const getPGNMap = () : PGNMap => {
  if ( pgnMap !== undefined ) {
    const res: { [key: number]: Definition[] } = {}
    
    getAllPGNs().forEach(pgn => {
      if ( !res[pgn.PGN] ) {
        res[pgn.PGN] = []
      }
      res[pgn.PGN].push(pgn)
    })
    pgnMap = res
  }

  return pgnMap
}

export const getPGN = (num: number) : Definition[] | undefined => {
  return getPGNMap()[num]
}
