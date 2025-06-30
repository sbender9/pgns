/* eslint-disable @typescript-eslint/no-explicit-any */

import { PGN, PGN_65305_Simrad_SendMode, ManufacturerCode } from './index'
//import { Definition } from './definition'
import { getPGN } from './index'

const obj: any = {
  fields: {
    manufacturerCode: 'BEP Marine',
    industryCode: 'Marine',
    model: 'AC',
    report: 'SimnetDeviceReport',
    spare6: 'dfksdsd'
  }
}

tryIt(obj)

function tryIt(pgn: PGN_65305_Simrad_SendMode) {
  if (pgn.fields.manufacturerCode === ManufacturerCode.BepMarine) {
    console.log(pgn.fields.manufacturerCode)
  }
}

let pgn = getPGN(60928)

console.log(pgn)
if ( pgn !== undefined ) {
  console.log(pgn[0].TransmissionInterval)
  let inter:number|undefined = pgn[0].TransmissionInterval
  console.log(inter)
}


