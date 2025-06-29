/* eslint-disable @typescript-eslint/no-explicit-any */

import { PGN_65305_Simrad_SendMode, ManufacturerCode } from './pgns'
//import { Definition } from './definition'
import { getPGN } from './index'

const obj: any = {
  manufacturerCode: 'BEP Marine',
  industryCode: 'Marine',
  model: 'AC',
  report: 'SimnetDeviceReport',
  spare6: 'dfksdsd'
}

tryIt(obj)

function tryIt(pgn: PGN_65305_Simrad_SendMode) {
  if (pgn.manufacturerCode === ManufacturerCode.BepMarine) {
    console.log(pgn.manufacturerCode)
  }
}

let pgn = getPGN(60928)

console.log(pgn)
if ( pgn !== undefined ) {
  console.log(pgn[0].TransmissionInterval)
  let inter:number|undefined = pgn[0].TransmissionInterval
  
  console.log("NULL")
}


