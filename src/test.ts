
import { PGN_65305_Simrad_SendMode, IndustryCode, ManufacturerCode } from './types/pgns'



let obj : any = {
  manufacturerCode: 'BEP Marine',
  industryCode: 'Marine',
  model: 'AC',
  report: 'SimnetDeviceReport',
  spare6: 'dfksdsd'
}


tryIt(obj)

function tryIt(pgn: PGN_65305_Simrad_SendMode) {
  if ( pgn.manufacturerCode === ManufacturerCode.BepMarine ) {
    console.log(pgn.manufacturerCode)
  }
}
