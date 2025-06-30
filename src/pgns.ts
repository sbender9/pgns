import * as enums from './enums'

export interface PGNFields {
}

export interface PGN {
  pgn: number
  prio?: number
  src?: number
  dst: number
  timestamp?: string
  input?: string[]
  description?: string
  fields: PGNFields
}

/*
  PGN: 59392
  Description: ISO Acknowledgement
  Explanation: This message is provided by ISO 11783 for a handshake mechanism between transmitting and receiving devices. This message is the possible response to acknowledge the reception of a 'normal broadcast' message or the response to a specific command to indicate compliance or failure.
*/
export interface PGN_59392Fields extends PGNFields {
  control?: enums.IsoControl|number
  groupFunction?: number
  reserved?: number
  pgn?: number
}

export interface PGN_59392 extends PGN {
 fields: PGN_59392Fields
}

/*
  PGN: 59904
  Description: ISO Request
  Explanation: As defined by ISO, this message has a data length of 3 bytes with no padding added to complete the single frame. The appropriate response to this message is based on the PGN being requested, and whether the receiver supports the requested PGN.
*/
export interface PGN_59904Fields extends PGNFields {
  pgn?: number
}

export interface PGN_59904 extends PGN {
 fields: PGN_59904Fields
}

/*
  PGN: 60160
  Description: ISO Transport Protocol, Data Transfer
  Explanation: ISO 11783 defines this PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN represents a single packet of a multipacket message.
*/
export interface PGN_60160Fields extends PGNFields {
  sid?: number
  data?: number
}

export interface PGN_60160 extends PGN {
 fields: PGN_60160Fields
}

/*
  PGN: 60416
  Description: ISO Transport Protocol, Connection Management - Request To Send
  Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to prepare the receiver for the fact that this sender wants to transmit a long message. The receiver will respond with CTS.
  Match: Group Function Code == RTS
*/
export interface PGN_60416_RtsFields extends PGNFields {
  groupFunctionCode?: enums.IsoCommand|number
  messageSize?: number
  packets?: number
  packetsReply?: number
  pgn?: number
}

export interface PGN_60416_Rts extends PGN {
 fields: PGN_60416_RtsFields
}

/*
  PGN: 60416
  Description: ISO Transport Protocol, Connection Management - Clear To Send
  Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to signal to the sender that the receive is ready to receive a number of frames.
  Match: Group Function Code == CTS
*/
export interface PGN_60416_CtsFields extends PGNFields {
  groupFunctionCode?: enums.IsoCommand|number
  maxPackets?: number
  nextSid?: number
  reserved?: number
  pgn?: number
}

export interface PGN_60416_Cts extends PGN {
 fields: PGN_60416_CtsFields
}

/*
  PGN: 60416
  Description: ISO Transport Protocol, Connection Management - End Of Message
  Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to mark the end of the message.
  Match: Group Function Code == EOM
*/
export interface PGN_60416_EomFields extends PGNFields {
  groupFunctionCode?: enums.IsoCommand|number
  totalMessageSize?: number
  totalNumberOfFramesReceived?: number
  reserved?: number
  pgn?: number
}

export interface PGN_60416_Eom extends PGN {
 fields: PGN_60416_EomFields
}

/*
  PGN: 60416
  Description: ISO Transport Protocol, Connection Management - Broadcast Announce
  Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to announce a broadcast of a long message spanning multiple frames.
  Match: Group Function Code == BAM
*/
export interface PGN_60416_BamFields extends PGNFields {
  groupFunctionCode?: enums.IsoCommand|number
  messageSize?: number
  packets?: number
  reserved?: number
  pgn?: number
}

export interface PGN_60416_Bam extends PGN {
 fields: PGN_60416_BamFields
}

/*
  PGN: 60416
  Description: ISO Transport Protocol, Connection Management - Abort
  Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to announce an abort of a long message spanning multiple frames.
  Match: Group Function Code == Abort
*/
export interface PGN_60416_AbortFields extends PGNFields {
  groupFunctionCode?: enums.IsoCommand|number
  reason?: number
  reserved?: number
  pgn?: number
}

export interface PGN_60416_Abort extends PGN {
 fields: PGN_60416_AbortFields
}

/*
  PGN: 60928
  Description: ISO Address Claim
  Explanation: This network management message is used to claim network address, reply to devices requesting the claimed address, and to respond with device information (NAME) requested by the ISO Request or Complex Request Group Function. This PGN contains several fields that are requestable, either independently or in any combination. Note that there are several places where this 64-bit data also occurs, these are named ISO_NAME and can be recursively explained.
*/
export interface PGN_60928Fields extends PGNFields {
  uniqueNumber?: number
  manufacturerCode?: enums.ManufacturerCode|number
  deviceInstanceLower?: number
  deviceInstanceUpper?: number
  deviceFunction?: enums.DeviceFunction|number
  spare: string
  deviceClass?: enums.DeviceClass|number
  systemInstance?: number
  industryGroup?: enums.IndustryCode|number
  arbitraryAddressCapable: enums.YesNo|number
}

export interface PGN_60928 extends PGN {
 fields: PGN_60928Fields
}

/*
  PGN: 61184
  Description: Seatalk: Wireless Keypad Light Control
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Wireless Keypad Light Control
*/
export interface PGN_61184_Raymarine_WirelessKeypadLightControlFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: number
  variant?: number
  wirelessSetting?: number
  wiredSetting?: number
  reserved8?: number
}

export interface PGN_61184_Raymarine_WirelessKeypadLightControl extends PGN {
 fields: PGN_61184_Raymarine_WirelessKeypadLightControlFields
}

/*
  PGN: 61184
  Description: Seatalk: Wireless Keypad Control
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
*/
export interface PGN_61184_RaymarineFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  PID: number
  variant?: number
  beepControl?: number
  reserved7?: number
}

export interface PGN_61184_Raymarine extends PGN {
 fields: PGN_61184_RaymarineFields
}

/*
  PGN: 61184
  Description: Victron Battery Register
  Match: Manufacturer Code == Victron Energy
  Match: Industry Code == Marine Industry
*/
export interface PGN_61184_VictronEnergyFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  registerId?: number
  payload?: number
}

export interface PGN_61184_VictronEnergy extends PGN {
 fields: PGN_61184_VictronEnergyFields
}

/*
  PGN: 65001
  Description: Bus #1 Phase C Basic AC Quantities
*/
export interface PGN_65001Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  reserved?: number
}

export interface PGN_65001 extends PGN {
 fields: PGN_65001Fields
}

/*
  PGN: 65002
  Description: Bus #1 Phase B Basic AC Quantities
*/
export interface PGN_65002Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  reserved?: number
}

export interface PGN_65002 extends PGN {
 fields: PGN_65002Fields
}

/*
  PGN: 65003
  Description: Bus #1 Phase A Basic AC Quantities
*/
export interface PGN_65003Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  reserved?: number
}

export interface PGN_65003 extends PGN {
 fields: PGN_65003Fields
}

/*
  PGN: 65004
  Description: Bus #1 Average Basic AC Quantities
*/
export interface PGN_65004Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  reserved?: number
}

export interface PGN_65004 extends PGN {
 fields: PGN_65004Fields
}

/*
  PGN: 65005
  Description: Utility Total AC Energy
*/
export interface PGN_65005Fields extends PGNFields {
  totalEnergyExport?: number
  totalEnergyImport?: number
}

export interface PGN_65005 extends PGN {
 fields: PGN_65005Fields
}

/*
  PGN: 65006
  Description: Utility Phase C AC Reactive Power
*/
export interface PGN_65006Fields extends PGNFields {
  reactivePower?: number
  powerFactor?: number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

export interface PGN_65006 extends PGN {
 fields: PGN_65006Fields
}

/*
  PGN: 65007
  Description: Utility Phase C AC Power
*/
export interface PGN_65007Fields extends PGNFields {
  realPower?: number
  apparentPower?: number
}

export interface PGN_65007 extends PGN {
 fields: PGN_65007Fields
}

/*
  PGN: 65008
  Description: Utility Phase C Basic AC Quantities
*/
export interface PGN_65008Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  acRmsCurrent?: number
}

export interface PGN_65008 extends PGN {
 fields: PGN_65008Fields
}

/*
  PGN: 65009
  Description: Utility Phase B AC Reactive Power
*/
export interface PGN_65009Fields extends PGNFields {
  reactivePower?: number
  powerFactor?: number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

export interface PGN_65009 extends PGN {
 fields: PGN_65009Fields
}

/*
  PGN: 65010
  Description: Utility Phase B AC Power
*/
export interface PGN_65010Fields extends PGNFields {
  realPower?: number
  apparentPower?: number
}

export interface PGN_65010 extends PGN {
 fields: PGN_65010Fields
}

/*
  PGN: 65011
  Description: Utility Phase B Basic AC Quantities
*/
export interface PGN_65011Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  acRmsCurrent?: number
}

export interface PGN_65011 extends PGN {
 fields: PGN_65011Fields
}

/*
  PGN: 65012
  Description: Utility Phase A AC Reactive Power
*/
export interface PGN_65012Fields extends PGNFields {
  reactivePower?: number
  powerFactor?: number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

export interface PGN_65012 extends PGN {
 fields: PGN_65012Fields
}

/*
  PGN: 65013
  Description: Utility Phase A AC Power
*/
export interface PGN_65013Fields extends PGNFields {
  realPower?: number
  apparentPower?: number
}

export interface PGN_65013 extends PGN {
 fields: PGN_65013Fields
}

/*
  PGN: 65014
  Description: Utility Phase A Basic AC Quantities
*/
export interface PGN_65014Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  acRmsCurrent?: number
}

export interface PGN_65014 extends PGN {
 fields: PGN_65014Fields
}

/*
  PGN: 65015
  Description: Utility Total AC Reactive Power
*/
export interface PGN_65015Fields extends PGNFields {
  reactivePower?: number
  powerFactor?: number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

export interface PGN_65015 extends PGN {
 fields: PGN_65015Fields
}

/*
  PGN: 65016
  Description: Utility Total AC Power
*/
export interface PGN_65016Fields extends PGNFields {
  realPower?: number
  apparentPower?: number
}

export interface PGN_65016 extends PGN {
 fields: PGN_65016Fields
}

/*
  PGN: 65017
  Description: Utility Average Basic AC Quantities
*/
export interface PGN_65017Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  acRmsCurrent?: number
}

export interface PGN_65017 extends PGN {
 fields: PGN_65017Fields
}

/*
  PGN: 65018
  Description: Generator Total AC Energy
*/
export interface PGN_65018Fields extends PGNFields {
  totalEnergyExport?: number
  totalEnergyImport?: number
}

export interface PGN_65018 extends PGN {
 fields: PGN_65018Fields
}

/*
  PGN: 65019
  Description: Generator Phase C AC Reactive Power
*/
export interface PGN_65019Fields extends PGNFields {
  reactivePower?: number
  powerFactor?: number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

export interface PGN_65019 extends PGN {
 fields: PGN_65019Fields
}

/*
  PGN: 65020
  Description: Generator Phase C AC Power
*/
export interface PGN_65020Fields extends PGNFields {
  realPower?: number
  apparentPower?: number
}

export interface PGN_65020 extends PGN {
 fields: PGN_65020Fields
}

/*
  PGN: 65021
  Description: Generator Phase C Basic AC Quantities
*/
export interface PGN_65021Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  acRmsCurrent?: number
}

export interface PGN_65021 extends PGN {
 fields: PGN_65021Fields
}

/*
  PGN: 65022
  Description: Generator Phase B AC Reactive Power
*/
export interface PGN_65022Fields extends PGNFields {
  reactivePower?: number
  powerFactor?: number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

export interface PGN_65022 extends PGN {
 fields: PGN_65022Fields
}

/*
  PGN: 65023
  Description: Generator Phase B AC Power
*/
export interface PGN_65023Fields extends PGNFields {
  realPower?: number
  apparentPower?: number
}

export interface PGN_65023 extends PGN {
 fields: PGN_65023Fields
}

/*
  PGN: 65024
  Description: Generator Phase B Basic AC Quantities
*/
export interface PGN_65024Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  acRmsCurrent?: number
}

export interface PGN_65024 extends PGN {
 fields: PGN_65024Fields
}

/*
  PGN: 65025
  Description: Generator Phase A AC Reactive Power
*/
export interface PGN_65025Fields extends PGNFields {
  reactivePower?: number
  powerFactor?: number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

export interface PGN_65025 extends PGN {
 fields: PGN_65025Fields
}

/*
  PGN: 65026
  Description: Generator Phase A AC Power
*/
export interface PGN_65026Fields extends PGNFields {
  realPower?: number
  apparentPower?: number
}

export interface PGN_65026 extends PGN {
 fields: PGN_65026Fields
}

/*
  PGN: 65027
  Description: Generator Phase A Basic AC Quantities
*/
export interface PGN_65027Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  acRmsCurrent?: number
}

export interface PGN_65027 extends PGN {
 fields: PGN_65027Fields
}

/*
  PGN: 65028
  Description: Generator Total AC Reactive Power
*/
export interface PGN_65028Fields extends PGNFields {
  reactivePower?: number
  powerFactor?: number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

export interface PGN_65028 extends PGN {
 fields: PGN_65028Fields
}

/*
  PGN: 65029
  Description: Generator Total AC Power
*/
export interface PGN_65029Fields extends PGNFields {
  realPower?: number
  apparentPower?: number
}

export interface PGN_65029 extends PGN {
 fields: PGN_65029Fields
}

/*
  PGN: 65030
  Description: Generator Average Basic AC Quantities
*/
export interface PGN_65030Fields extends PGNFields {
  lineLineAcRmsVoltage?: number
  lineNeutralAcRmsVoltage?: number
  acFrequency?: number
  acRmsCurrent?: number
}

export interface PGN_65030 extends PGN {
 fields: PGN_65030Fields
}

/*
  PGN: 65240
  Description: ISO Commanded Address
  Explanation: ISO 11783 defined this message to provide a mechanism for assigning a network address to a node. The NAME information in the data portion of the message must match the name information of the node whose network address is to be set. ISO 11783-5 requires that this mesage to be sent using the BAM Transport Protocol method. The appropriate response to this message is defined in section 5.2.3 of 11783-5.
*/
export interface PGN_65240Fields extends PGNFields {
  uniqueNumber?: number
  manufacturerCode?: enums.ManufacturerCode|number
  deviceInstanceLower?: number
  deviceInstanceUpper?: number
  deviceFunction?: enums.DeviceFunction|number
  reserved: number
  deviceClass?: enums.DeviceClass|number
  systemInstance?: number
  industryCode?: enums.IndustryCode|number
  reserved10: number
  newSourceAddress?: number
}

export interface PGN_65240 extends PGN {
 fields: PGN_65240Fields
}

/*
  PGN: 65280
  Description: Furuno: Heave
*/
export interface PGN_65280Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  heave?: number
  reserved5?: number
}

export interface PGN_65280 extends PGN {
 fields: PGN_65280Fields
}

/*
  PGN: 65284
  Description: Maretron: Proprietary DC Breaker Current
*/
export interface PGN_65284Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  bankInstance: number
  indicatorNumber?: number
  breakerCurrent?: number
  reserved7?: number
}

export interface PGN_65284 extends PGN {
 fields: PGN_65284Fields
}

/*
  PGN: 65285
  Description: Airmar: Boot State Acknowledgment
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
*/
export interface PGN_65285_AirmarFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  bootState?: enums.BootState|number
  reserved5?: number
}

export interface PGN_65285_Airmar extends PGN {
 fields: PGN_65285_AirmarFields
}

/*
  PGN: 65285
  Description: Lowrance: Temperature
  Match: Manufacturer Code == Lowrance
  Match: Industry Code == Marine Industry
*/
export interface PGN_65285_LowranceFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  temperatureSource?: enums.TemperatureSource|number
  actualTemperature?: number
  reserved6?: number
}

export interface PGN_65285_Lowrance extends PGN {
 fields: PGN_65285_LowranceFields
}

/*
  PGN: 65286
  Description: Chetco: Dimmer
  Match: Manufacturer Code == Chetco
  Match: Industry Code == Marine Industry
*/
export interface PGN_65286_ChetcoFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  instance: number
  dimmer1?: number
  dimmer2?: number
  dimmer3?: number
  dimmer4?: number
  control?: number
}

export interface PGN_65286_Chetco extends PGN {
 fields: PGN_65286_ChetcoFields
}

/*
  PGN: 65286
  Description: Airmar: Boot State Request
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
*/
export interface PGN_65286_AirmarFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

export interface PGN_65286_Airmar extends PGN {
 fields: PGN_65286_AirmarFields
}

/*
  PGN: 65287
  Description: Airmar: Access Level
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
*/
export interface PGN_65287_AirmarFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  formatCode?: number
  accessLevel?: enums.AccessLevel|number
  reserved6?: number
  accessSeedKey?: number
}

export interface PGN_65287_Airmar extends PGN {
 fields: PGN_65287_AirmarFields
}

/*
  PGN: 65287
  Description: Simnet: Configure Temperature Sensor
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_65287_SimradFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

export interface PGN_65287_Simrad extends PGN {
 fields: PGN_65287_SimradFields
}

/*
  PGN: 65288
  Description: Seatalk: Alarm
*/
export interface PGN_65288Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: number
  alarmStatus?: enums.SeatalkAlarmStatus|number
  alarmId?: enums.SeatalkAlarmId|number
  alarmGroup?: enums.SeatalkAlarmGroup|number
  alarmPriority?: number
}

export interface PGN_65288 extends PGN {
 fields: PGN_65288Fields
}

/*
  PGN: 65289
  Description: Simnet: Trim Tab Sensor Calibration
*/
export interface PGN_65289Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

export interface PGN_65289 extends PGN {
 fields: PGN_65289Fields
}

/*
  PGN: 65290
  Description: Simnet: Paddle Wheel Speed Configuration
*/
export interface PGN_65290Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

export interface PGN_65290 extends PGN {
 fields: PGN_65290Fields
}

/*
  PGN: 65292
  Description: Simnet: Clear Fluid Level Warnings
*/
export interface PGN_65292Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

export interface PGN_65292 extends PGN {
 fields: PGN_65292Fields
}

/*
  PGN: 65293
  Description: Simnet: LGC-2000 Configuration
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_65293_SimradFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

export interface PGN_65293_Simrad extends PGN {
 fields: PGN_65293_SimradFields
}

/*
  PGN: 65293
  Description: Diverse Yacht Services: Load Cell
  Match: Manufacturer Code == Diverse Yacht Services
  Match: Industry Code == Marine Industry
*/
export interface PGN_65293_DiverseYachtServicesFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  instance: number
  reserved5?: number
  loadCell?: number
}

export interface PGN_65293_DiverseYachtServices extends PGN {
 fields: PGN_65293_DiverseYachtServicesFields
}

/*
  PGN: 65302
  Description: Simnet: AP Unknown 1
  Explanation: Seen as sent by AC-42 only so far.
*/
export interface PGN_65302Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: number
  b?: number
  c?: number
  d?: number
  reserved8?: number
}

export interface PGN_65302 extends PGN {
 fields: PGN_65302Fields
}

/*
  PGN: 65305
  Description: Simnet: Device Status
  Explanation: This PGN is reported by an Autopilot Computer (AC/NAC)
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Report == Status
*/
export interface PGN_65305_Simrad_StatusFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  model?: enums.SimnetDeviceModel|number
  report?: enums.SimnetDeviceReport|number
  status?: enums.SimnetApStatus|number
  spare7?: string
}

export interface PGN_65305_Simrad_Status extends PGN {
 fields: PGN_65305_Simrad_StatusFields
}

/*
  PGN: 65305
  Description: Simnet: Device Status Request
  Explanation: This PGN is sent by an active AutoPilot head controller (AP, MFD, Triton2). It is used by the AC (AutoPilot Controller) to verify that there is an active controller. If this PGN is not sent regularly the AC may report an error and go to standby.
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Report == Send Status
*/
export interface PGN_65305_Simrad_SendStatusFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  model?: enums.SimnetDeviceModel|number
  report?: enums.SimnetDeviceReport|number
  spare6?: string
}

export interface PGN_65305_Simrad_SendStatus extends PGN {
 fields: PGN_65305_Simrad_SendStatusFields
}

/*
  PGN: 65305
  Description: Simnet: Pilot Mode
  Explanation: This PGN is reported by an Autopilot Computer (AC/NAC)
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Report == Mode
*/
export interface PGN_65305_Simrad_ModeFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  model?: enums.SimnetDeviceModel|number
  report?: enums.SimnetDeviceReport|number
  mode?: enums.SimnetApModeBitfield[]
  spare7?: string
}

export interface PGN_65305_Simrad_Mode extends PGN {
 fields: PGN_65305_Simrad_ModeFields
}

/*
  PGN: 65305
  Description: Simnet: Device Mode Request
  Explanation: This PGN is sent by an active AutoPilot head controller (AP, MFD, Triton2). It is used by the AC (AutoPilot Controller) to verify that there is an active controller. If this PGN is not sent regularly the AC may report an error and go to standby.
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Report == Send Mode
*/
export interface PGN_65305_Simrad_SendModeFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  model?: enums.SimnetDeviceModel|number
  report?: enums.SimnetDeviceReport|number
  spare6?: string
}

export interface PGN_65305_Simrad_SendMode extends PGN {
 fields: PGN_65305_Simrad_SendModeFields
}

/*
  PGN: 65305
  Description: Simnet: Sailing Processor Status
  Explanation: This PGN has been seen to be reported by a Sailing Processor.
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Report == Sailing Processor Status
*/
export interface PGN_65305_Simrad_SailingProcessorStatusFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  model?: enums.SimnetDeviceModel|number
  report?: enums.SimnetDeviceReport|number
  data?: number
}

export interface PGN_65305_Simrad_SailingProcessorStatus extends PGN {
 fields: PGN_65305_Simrad_SailingProcessorStatusFields
}

/*
  PGN: 65309
  Description: Navico: Wireless Battery Status
*/
export interface PGN_65309Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  status?: number
  batteryStatus?: number
  batteryChargeStatus?: number
  reserved7?: number
}

export interface PGN_65309 extends PGN {
 fields: PGN_65309Fields
}

/*
  PGN: 65312
  Description: Navico: Wireless Signal Status
*/
export interface PGN_65312Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  unknown?: number
  signalStrength?: number
  reserved6?: number
}

export interface PGN_65312 extends PGN {
 fields: PGN_65312Fields
}

/*
  PGN: 65340
  Description: Simnet: AP Unknown 2
  Explanation: Seen as sent by AC-42 only so far.
*/
export interface PGN_65340Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: number
  b?: number
  c?: number
  d?: number
  e?: number
  reserved9?: number
}

export interface PGN_65340 extends PGN {
 fields: PGN_65340Fields
}

/*
  PGN: 65341
  Description: Simnet: Autopilot Angle
*/
export interface PGN_65341Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  mode?: enums.SimnetApMode|number
  reserved6?: number
  angle?: number
}

export interface PGN_65341 extends PGN {
 fields: PGN_65341Fields
}

/*
  PGN: 65345
  Description: Seatalk: Pilot Wind Datum
*/
export interface PGN_65345Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  windDatum?: number
  rollingAverageWindAngle?: number
  reserved6?: number
}

export interface PGN_65345 extends PGN {
 fields: PGN_65345Fields
}

/*
  PGN: 65350
  Description: Simnet: Magnetic Field
*/
export interface PGN_65350Fields extends PGNFields {
  a?: number
  b?: number
  c?: number
  d?: number
  reserved?: number
}

export interface PGN_65350 extends PGN {
 fields: PGN_65350Fields
}

/*
  PGN: 65359
  Description: Seatalk: Pilot Heading
*/
export interface PGN_65359Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: number
  headingTrue?: number
  headingMagnetic?: number
  reserved7?: number
}

export interface PGN_65359 extends PGN {
 fields: PGN_65359Fields
}

/*
  PGN: 65360
  Description: Seatalk: Pilot Locked Heading
*/
export interface PGN_65360Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: number
  targetHeadingTrue?: number
  targetHeadingMagnetic?: number
  reserved7?: number
}

export interface PGN_65360 extends PGN {
 fields: PGN_65360Fields
}

/*
  PGN: 65361
  Description: Seatalk: Silence Alarm
*/
export interface PGN_65361Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  alarmId?: enums.SeatalkAlarmId|number
  alarmGroup?: enums.SeatalkAlarmGroup|number
  reserved6?: number
}

export interface PGN_65361 extends PGN {
 fields: PGN_65361Fields
}

/*
  PGN: 65371
  Description: Seatalk: Keypad Message
*/
export interface PGN_65371Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: number
  firstKey?: number
  secondKey?: number
  firstKeyState?: number
  secondKeyState?: number
  reserved9?: number
  encoderPosition?: number
  reserved11?: number
}

export interface PGN_65371 extends PGN {
 fields: PGN_65371Fields
}

/*
  PGN: 65374
  Description: SeaTalk: Keypad Heartbeat
*/
export interface PGN_65374Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: number
  variant?: number
  status?: number
  reserved7?: number
}

export interface PGN_65374 extends PGN {
 fields: PGN_65374Fields
}

/*
  PGN: 65379
  Description: Seatalk: Pilot Mode
*/
export interface PGN_65379Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  pilotMode?: enums.SeatalkPilotMode16|number
  subMode?: number
  pilotModeData?: number
  reserved7?: number
}

export interface PGN_65379 extends PGN {
 fields: PGN_65379Fields
}

/*
  PGN: 65408
  Description: Airmar: Depth Quality Factor
*/
export interface PGN_65408Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: number
  depthQualityFactor?: enums.AirmarDepthQualityFactor|number
  reserved6?: number
}

export interface PGN_65408 extends PGN {
 fields: PGN_65408Fields
}

/*
  PGN: 65409
  Description: Airmar: Speed Pulse Count
*/
export interface PGN_65409Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: number
  durationOfInterval?: string
  numberOfPulsesReceived?: number
  reserved7?: number
}

export interface PGN_65409 extends PGN {
 fields: PGN_65409Fields
}

/*
  PGN: 65410
  Description: Airmar: Device Information
*/
export interface PGN_65410Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: number
  internalDeviceTemperature?: number
  supplyVoltage?: number
  reserved7?: number
}

export interface PGN_65410 extends PGN {
 fields: PGN_65410Fields
}

/*
  PGN: 65420
  Description: Simnet: AP Unknown 3
  Explanation: Seen as sent by AC-42 only so far.
*/
export interface PGN_65420Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: number
  b?: number
  c?: number
  d?: number
  e?: number
  reserved9?: number
}

export interface PGN_65420 extends PGN {
 fields: PGN_65420Fields
}

/*
  PGN: 65480
  Description: Simnet: Autopilot Mode
*/
export interface PGN_65480Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

export interface PGN_65480 extends PGN {
 fields: PGN_65480Fields
}

/*
  PGN: 126208
  Description: NMEA - Request group function
  Explanation: This is the Request variation of this group function PGN. The receiver shall respond by sending the requested PGN, at the desired transmission interval.
*/
export interface PGN_126208Fields extends PGNFields {
  functionCode?: enums.GroupFunction|number
  pgn?: number
  transmissionInterval?: string
  transmissionIntervalOffset?: string
  numberOfParameters?: number
  parameter?: string
  value?: string
  list: any[]
}

export interface PGN_126208 extends PGN {
 fields: PGN_126208Fields
}

/*
  PGN: 126208
  Description: NMEA - Command group function
  Explanation: This is the Command variation of this group function PGN. This instructs the receiver to modify its internal state for the passed parameters. The receiver shall reply with an Acknowledge reply.
  Match: Function Code == Command
*/
export interface PGN_126208_CommandFields extends PGNFields {
  functionCode?: enums.GroupFunction|number
  pgn?: number
  priority?: enums.Priority|number
  reserved?: number
  numberOfParameters?: number
  parameter?: string
  value?: string
  list: any[]
}

export interface PGN_126208_Command extends PGN {
 fields: PGN_126208_CommandFields
}

/*
  PGN: 126208
  Description: NMEA - Acknowledge group function
  Explanation: This is the Acknowledge variation of this group function PGN. When a device receives a Command, it will attempt to perform the command (change its parameters) and reply positively or negatively.
  Match: Function Code == Acknowledge
*/
export interface PGN_126208_AcknowledgeFields extends PGNFields {
  functionCode?: enums.GroupFunction|number
  pgn?: number
  pgnErrorCode?: enums.PgnErrorCode|number
  transmissionIntervalPriorityErrorCode?: enums.TransmissionInterval|number
  numberOfParameters?: number
  parameter?: enums.ParameterField|number
  list: any[]
}

export interface PGN_126208_Acknowledge extends PGN {
 fields: PGN_126208_AcknowledgeFields
}

/*
  PGN: 126208
  Description: NMEA - Read Fields group function
  Explanation: This is the Read Fields variation of this group function PGN. The receiver shall respond by sending a Read Reply variation of this PGN, containing the desired values. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  Match: Function Code == Read Fields
*/
export interface PGN_126208_ReadFieldsFields extends PGNFields {
  functionCode?: enums.GroupFunction|number
  pgn?: number
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: number
  numberOfSelectionPairs?: number
  numberOfParameters?: number
  selectionParameter?: string
  selectionValue?: string
  parameter?: string
  list: any[]
  list2: any[]
}

export interface PGN_126208_ReadFields extends PGN {
 fields: PGN_126208_ReadFieldsFields
}

/*
  PGN: 126208
  Description: NMEA - Read Fields reply group function
  Explanation: This is the Read Fields Reply variation of this group function PGN. The receiver is responding to a Read Fields request. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  Match: Function Code == Read Fields Reply
*/
export interface PGN_126208_ReadFieldsReplyFields extends PGNFields {
  functionCode?: enums.GroupFunction|number
  pgn?: number
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: number
  numberOfSelectionPairs?: number
  numberOfParameters?: number
  selectionParameter?: string
  selectionValue?: string
  parameter?: string
  value?: string
  list: any[]
  list2: any[]
}

export interface PGN_126208_ReadFieldsReply extends PGN {
 fields: PGN_126208_ReadFieldsReplyFields
}

/*
  PGN: 126208
  Description: NMEA - Write Fields group function
  Explanation: This is the Write Fields variation of this group function PGN. The receiver shall modify internal state and reply with a Write Fields Reply message. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  Match: Function Code == Write Fields
*/
export interface PGN_126208_WriteFieldsFields extends PGNFields {
  functionCode?: enums.GroupFunction|number
  pgn?: number
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: number
  numberOfSelectionPairs?: number
  numberOfParameters?: number
  selectionParameter?: string
  selectionValue?: string
  parameter?: string
  value?: string
  list: any[]
  list2: any[]
}

export interface PGN_126208_WriteFields extends PGN {
 fields: PGN_126208_WriteFieldsFields
}

/*
  PGN: 126208
  Description: NMEA - Write Fields reply group function
  Explanation: This is the Write Fields Reply variation of this group function PGN. The receiver is responding to a Write Fields request. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  Match: Function Code == Write Fields Reply
*/
export interface PGN_126208_WriteFieldsReplyFields extends PGNFields {
  functionCode?: enums.GroupFunction|number
  pgn?: number
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: number
  numberOfSelectionPairs?: number
  numberOfParameters?: number
  selectionParameter?: string
  selectionValue?: string
  parameter?: string
  value?: string
  list: any[]
  list2: any[]
}

export interface PGN_126208_WriteFieldsReply extends PGN {
 fields: PGN_126208_WriteFieldsReplyFields
}

/*
  PGN: 126464
  Description: PGN List (Transmit and Receive)
*/
export interface PGN_126464Fields extends PGNFields {
  functionCode?: enums.PgnListFunction|number
  pgn?: number
  list: any[]
}

export interface PGN_126464 extends PGN {
 fields: PGN_126464Fields
}

/*
  PGN: 126720
  Description: Seatalk1: Pilot Mode
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 0x81f0
  Match: command == 0x84
*/
export interface PGN_126720_Raymarine__0X81F0__0X84Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: number
  command?: number
  unknown1?: number
  pilotMode?: enums.SeatalkPilotMode|number
  subMode?: number
  pilotModeData?: number
  unknown2?: number
}

export interface PGN_126720_Raymarine__0X81F0__0X84 extends PGN {
 fields: PGN_126720_Raymarine__0X81F0__0X84Fields
}

/*
  PGN: 126720
  Description: Fusion: Media Control
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Media Control
*/
export interface PGN_126720_FusionElectronics_MediaControlFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: number
  unknown?: number
  sourceId?: number
  command?: enums.FusionCommand|number
}

export interface PGN_126720_FusionElectronics_MediaControl extends PGN {
 fields: PGN_126720_FusionElectronics_MediaControlFields
}

/*
  PGN: 126720
  Description: Fusion: Sirius Control
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Sirius Control
*/
export interface PGN_126720_FusionElectronics_SiriusControlFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: number
  unknown?: number
  sourceId?: number
  command?: enums.FusionSiriusCommand|number
}

export interface PGN_126720_FusionElectronics_SiriusControl extends PGN {
 fields: PGN_126720_FusionElectronics_SiriusControlFields
}

/*
  PGN: 126720
  Description: Fusion: Request Status
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Request Status
*/
export interface PGN_126720_FusionElectronics_RequestStatusFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.FusionMessageId|number
  unknown?: number
}

export interface PGN_126720_FusionElectronics_RequestStatus extends PGN {
 fields: PGN_126720_FusionElectronics_RequestStatusFields
}

/*
  PGN: 126720
  Description: Fusion: Set Source
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Source
*/
export interface PGN_126720_FusionElectronics_SourceFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.FusionMessageId|number
  unknown?: number
  sourceId?: number
}

export interface PGN_126720_FusionElectronics_Source extends PGN {
 fields: PGN_126720_FusionElectronics_SourceFields
}

/*
  PGN: 126720
  Description: Fusion: Set Mute
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 23
*/
export interface PGN_126720_FusionElectronics_23Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.FusionMessageId|number
  command?: enums.FusionMuteCommand|number
}

export interface PGN_126720_FusionElectronics_23 extends PGN {
 fields: PGN_126720_FusionElectronics_23Fields
}

/*
  PGN: 126720
  Description: Fusion: Set Zone Volume
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Set Zone Volume
*/
export interface PGN_126720_FusionElectronics_SetZoneVolumeFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.FusionMessageId|number
  unknown?: number
  zone?: number
  volume?: number
}

export interface PGN_126720_FusionElectronics_SetZoneVolume extends PGN {
 fields: PGN_126720_FusionElectronics_SetZoneVolumeFields
}

/*
  PGN: 126720
  Description: Fusion: Set All Volumes
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Set All Volumes
*/
export interface PGN_126720_FusionElectronics_SetAllVolumesFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.FusionMessageId|number
  unknown?: number
  zone1?: number
  zone2?: number
  zone3?: number
  zone4?: number
}

export interface PGN_126720_FusionElectronics_SetAllVolumes extends PGN {
 fields: PGN_126720_FusionElectronics_SetAllVolumesFields
}

/*
  PGN: 126720
  Description: Seatalk1: Keystroke
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 0x81f0
  Match: command == 0x86
*/
export interface PGN_126720_Raymarine__0X81F0__0X86Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: number
  command?: number
  device?: number
  key?: enums.SeatalkKeystroke|number
  keyinverted?: number
  unknownData?: number
}

export interface PGN_126720_Raymarine__0X81F0__0X86 extends PGN {
 fields: PGN_126720_Raymarine__0X81F0__0X86Fields
}

/*
  PGN: 126720
  Description: Seatalk1: Device Identification
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 0x81f0
  Match: command == 0x90
*/
export interface PGN_126720_Raymarine__0X81F0__0X90Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: number
  command?: number
  reserved6?: number
  device?: enums.SeatalkDeviceId|number
}

export interface PGN_126720_Raymarine__0X81F0__0X90 extends PGN {
 fields: PGN_126720_Raymarine__0X81F0__0X90Fields
}

/*
  PGN: 126720
  Description: Seatalk1: Display Brightness
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 0x0c8c
*/
export interface PGN_126720_Raymarine__0X0C8CFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: number
  group?: enums.SeatalkNetworkGroup|number
  unknown1?: number
  command?: number
  brightness?: number
  unknown2?: number
}

export interface PGN_126720_Raymarine__0X0C8C extends PGN {
 fields: PGN_126720_Raymarine__0X0C8CFields
}

/*
  PGN: 126720
  Description: Seatalk1: Display Color
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 0x0c8c
  Match: Command == Color
*/
export interface PGN_126720_Raymarine__0X0C8C_ColorFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: number
  group?: enums.SeatalkNetworkGroup|number
  unknown1?: number
  command?: number
  color?: enums.SeatalkDisplayColor|number
  unknown2?: number
}

export interface PGN_126720_Raymarine__0X0C8C_Color extends PGN {
 fields: PGN_126720_Raymarine__0X0C8C_ColorFields
}

/*
  PGN: 126720
  Description: Airmar: Attitude Offset
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Attitude Offsets
*/
export interface PGN_126720_Airmar_AttitudeOffsetsFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  azimuthOffset?: number
  pitchOffset?: number
  rollOffset?: number
}

export interface PGN_126720_Airmar_AttitudeOffsets extends PGN {
 fields: PGN_126720_Airmar_AttitudeOffsetsFields
}

/*
  PGN: 126720
  Description: Airmar: Calibrate Compass
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Calibrate Compass
*/
export interface PGN_126720_Airmar_CalibrateCompassFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  calibrateFunction?: enums.AirmarCalibrateFunction|number
  calibrationStatus?: enums.AirmarCalibrateStatus|number
  verifyScore?: number
  xAxisGainValue?: number
  yAxisGainValue?: number
  zAxisGainValue?: number
  xAxisLinearOffset?: number
  yAxisLinearOffset?: number
  zAxisLinearOffset?: number
  xAxisAngularOffset?: number
  pitchAndRollDamping?: string
  compassRateGyroDamping?: string
}

export interface PGN_126720_Airmar_CalibrateCompass extends PGN {
 fields: PGN_126720_Airmar_CalibrateCompassFields
}

/*
  PGN: 126720
  Description: Airmar: True Wind Options
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == True Wind Options
*/
export interface PGN_126720_Airmar_TrueWindOptionsFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  cogSubstitutionForHdg?: enums.YesNo|number
  reserved6?: number
}

export interface PGN_126720_Airmar_TrueWindOptions extends PGN {
 fields: PGN_126720_Airmar_TrueWindOptionsFields
}

/*
  PGN: 126720
  Description: Airmar: Simulate Mode
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Simulate Mode
*/
export interface PGN_126720_Airmar_SimulateModeFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  simulateMode?: enums.OffOn|number
  reserved6?: number
}

export interface PGN_126720_Airmar_SimulateMode extends PGN {
 fields: PGN_126720_Airmar_SimulateModeFields
}

/*
  PGN: 126720
  Description: Airmar: Calibrate Depth
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Calibrate Depth
*/
export interface PGN_126720_Airmar_CalibrateDepthFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  speedOfSoundMode?: number
  reserved6?: number
}

export interface PGN_126720_Airmar_CalibrateDepth extends PGN {
 fields: PGN_126720_Airmar_CalibrateDepthFields
}

/*
  PGN: 126720
  Description: Airmar: Calibrate Speed
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Calibrate Speed
*/
export interface PGN_126720_Airmar_CalibrateSpeedFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  numberOfPairsOfDataPoints?: number
  inputFrequency?: number
  outputSpeed?: number
  list: any[]
}

export interface PGN_126720_Airmar_CalibrateSpeed extends PGN {
 fields: PGN_126720_Airmar_CalibrateSpeedFields
}

/*
  PGN: 126720
  Description: Airmar: Calibrate Temperature
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Calibrate Temperature
*/
export interface PGN_126720_Airmar_CalibrateTemperatureFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  temperatureInstance: enums.AirmarTemperatureInstance|number
  reserved6?: number
  temperatureOffset?: number
}

export interface PGN_126720_Airmar_CalibrateTemperature extends PGN {
 fields: PGN_126720_Airmar_CalibrateTemperatureFields
}

/*
  PGN: 126720
  Description: Airmar: Speed Filter None
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Speed Filter
*/
export interface PGN_126720_Airmar_SpeedFilterFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  filterType?: number
  reserved6?: number
  sampleInterval?: string
}

export interface PGN_126720_Airmar_SpeedFilter extends PGN {
 fields: PGN_126720_Airmar_SpeedFilterFields
}

/*
  PGN: 126720
  Description: Airmar: Speed Filter IIR
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Speed Filter
  Match: Filter type == IIR filter
*/
export interface PGN_126720_Airmar_SpeedFilter_IirFilterFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  filterType?: number
  reserved6?: number
  sampleInterval?: string
  filterDuration?: string
}

export interface PGN_126720_Airmar_SpeedFilter_IirFilter extends PGN {
 fields: PGN_126720_Airmar_SpeedFilter_IirFilterFields
}

/*
  PGN: 126720
  Description: Airmar: Temperature Filter None
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Temperature Filter
*/
export interface PGN_126720_Airmar_TemperatureFilterFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  filterType?: number
  reserved6?: number
  sampleInterval?: string
}

export interface PGN_126720_Airmar_TemperatureFilter extends PGN {
 fields: PGN_126720_Airmar_TemperatureFilterFields
}

/*
  PGN: 126720
  Description: Airmar: Temperature Filter IIR
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Temperature Filter
  Match: Filter type == IIR filter
*/
export interface PGN_126720_Airmar_TemperatureFilter_IirFilterFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  filterType?: number
  reserved6?: number
  sampleInterval?: string
  filterDuration?: string
}

export interface PGN_126720_Airmar_TemperatureFilter_IirFilter extends PGN {
 fields: PGN_126720_Airmar_TemperatureFilter_IirFilterFields
}

/*
  PGN: 126720
  Description: Airmar: NMEA 2000 options
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == NMEA 2000 options
*/
export interface PGN_126720_Airmar_Nmea2000OptionsFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  transmissionInterval?: enums.AirmarTransmissionInterval|number
  reserved6?: number
}

export interface PGN_126720_Airmar_Nmea2000Options extends PGN {
 fields: PGN_126720_Airmar_Nmea2000OptionsFields
}

/*
  PGN: 126720
  Description: Airmar: Addressable Multi-Frame
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
*/
export interface PGN_126720_AirmarFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: number
}

export interface PGN_126720_Airmar extends PGN {
 fields: PGN_126720_AirmarFields
}

/*
  PGN: 126720
  Description: Maretron: Slave Response
  Match: Manufacturer Code == Maretron
  Match: Industry Code == Marine Industry
*/
export interface PGN_126720_MaretronFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  productCode?: number
  softwareCode?: number
  command?: number
  status?: number
}

export interface PGN_126720_Maretron extends PGN {
 fields: PGN_126720_MaretronFields
}

/*
  PGN: 126720
  Description: Garmin: Day Mode
  Match: Manufacturer Code == Garmin
  Match: Industry Code == Marine Industry
  Match: Unknown ID 1 == Always 222
  Match: Unknown ID 2 == Always 5
  Match: Unknown ID 3 == Always 5
  Match: Unknown ID 4 == Always 5
*/
export interface PGN_126720_Garmin_Always222_Always5_Always5_Always5Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  unknownId1?: number
  unknownId2?: number
  unknownId3?: number
  unknownId4?: number
  spare8?: string
  mode?: enums.GarminColorMode|number
  spare10?: string
  backlight?: enums.GarminBacklightLevel|number
}

export interface PGN_126720_Garmin_Always222_Always5_Always5_Always5 extends PGN {
 fields: PGN_126720_Garmin_Always222_Always5_Always5_Always5Fields
}

/*
  PGN: 126720
  Description: Garmin: Night Mode
  Match: Manufacturer Code == Garmin
  Match: Industry Code == Marine Industry
  Match: Unknown ID 1 == Always 222
  Match: Unknown ID 2 == Always 5
  Match: Unknown ID 3 == Always 5
  Match: Unknown ID 4 == Always 5
  Match: Mode == Night
*/
export interface PGN_126720_Garmin_Always222_Always5_Always5_Always5_NightFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  unknownId1?: number
  unknownId2?: number
  unknownId3?: number
  unknownId4?: number
  spare8?: string
  mode?: enums.GarminColorMode|number
  spare10?: string
  backlight?: enums.GarminBacklightLevel|number
}

export interface PGN_126720_Garmin_Always222_Always5_Always5_Always5_Night extends PGN {
 fields: PGN_126720_Garmin_Always222_Always5_Always5_Always5_NightFields
}

/*
  PGN: 126720
  Description: Garmin: Color mode
  Match: Manufacturer Code == Garmin
  Match: Industry Code == Marine Industry
  Match: Unknown ID 1 == Always 222
  Match: Unknown ID 2 == Always 5
  Match: Unknown ID 3 == Always 5
  Match: Unknown ID 4 == Always 5
  Match: Mode == Color
*/
export interface PGN_126720_Garmin_Always222_Always5_Always5_Always5_ColorFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  unknownId1?: number
  unknownId2?: number
  unknownId3?: number
  unknownId4?: number
  spare8?: string
  mode?: enums.GarminColorMode|number
  spare10?: string
  color?: enums.GarminColor|number
}

export interface PGN_126720_Garmin_Always222_Always5_Always5_Always5_Color extends PGN {
 fields: PGN_126720_Garmin_Always222_Always5_Always5_Always5_ColorFields
}

/*
  PGN: 126983
  Description: Alert
*/
export interface PGN_126983Fields extends PGNFields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: number
  alertSubSystem?: number
  alertId?: number
  dataSourceNetworkIdName?: string
  dataSourceInstance: number
  dataSourceIndexSource?: number
  alertOccurrenceNumber?: number
  temporarySilenceStatus: enums.YesNo|number
  acknowledgeStatus: enums.YesNo|number
  escalationStatus: enums.YesNo|number
  temporarySilenceSupport: enums.YesNo|number
  acknowledgeSupport: enums.YesNo|number
  escalationSupport: enums.YesNo|number
  reserved?: number
  acknowledgeSourceNetworkIdName?: string
  triggerCondition?: enums.AlertTriggerCondition|number
  thresholdStatus?: enums.AlertThresholdStatus|number
  alertPriority?: number
  alertState?: enums.AlertState|number
}

export interface PGN_126983 extends PGN {
 fields: PGN_126983Fields
}

/*
  PGN: 126984
  Description: Alert Response
*/
export interface PGN_126984Fields extends PGNFields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: number
  alertSubSystem?: number
  alertId?: number
  dataSourceNetworkIdName?: string
  dataSourceInstance: number
  dataSourceIndexSource?: number
  alertOccurrenceNumber?: number
  acknowledgeSourceNetworkIdName?: string
  responseCommand?: enums.AlertResponseCommand|number
  reserved?: number
}

export interface PGN_126984 extends PGN {
 fields: PGN_126984Fields
}

/*
  PGN: 126985
  Description: Alert Text
*/
export interface PGN_126985Fields extends PGNFields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: number
  alertSubSystem?: number
  alertId?: number
  dataSourceNetworkIdName?: string
  dataSourceInstance: number
  dataSourceIndexSource?: number
  alertOccurrenceNumber?: number
  languageId?: enums.AlertLanguageId|number
  alertTextDescription?: string
  alertLocationTextDescription?: string
}

export interface PGN_126985 extends PGN {
 fields: PGN_126985Fields
}

/*
  PGN: 126986
  Description: Alert Configuration
*/
export interface PGN_126986Fields extends PGNFields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: number
  alertSubSystem?: number
  alertId?: number
  dataSourceNetworkIdName?: string
  dataSourceInstance: number
  dataSourceIndexSource?: number
  alertOccurrenceNumber?: number
  alertControl?: number
  userDefinedAlertAssignment?: number
  reserved?: number
  reactivationPeriod?: number
  temporarySilencePeriod?: number
  escalationPeriod?: number
}

export interface PGN_126986 extends PGN {
 fields: PGN_126986Fields
}

/*
  PGN: 126987
  Description: Alert Threshold
*/
export interface PGN_126987Fields extends PGNFields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: number
  alertSubSystem?: number
  alertId?: number
  dataSourceNetworkIdName?: string
  dataSourceInstance: number
  dataSourceIndexSource?: number
  alertOccurrenceNumber?: number
  numberOfParameters?: number
  parameterNumber?: number
  triggerMethod?: number
  thresholdDataFormat?: number
  thresholdLevel?: number
  list: any[]
}

export interface PGN_126987 extends PGN {
 fields: PGN_126987Fields
}

/*
  PGN: 126988
  Description: Alert Value
*/
export interface PGN_126988Fields extends PGNFields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: number
  alertSubSystem?: number
  alertId?: number
  dataSourceNetworkIdName?: string
  dataSourceInstance: number
  dataSourceIndexSource?: number
  alertOccurrenceNumber?: number
  numberOfParameters?: number
  valueParameterNumber?: number
  valueDataFormat?: number
  valueData?: number
  list: any[]
}

export interface PGN_126988 extends PGN {
 fields: PGN_126988Fields
}

/*
  PGN: 126992
  Description: System Time
  Explanation: The purpose of this PGN is twofold: To provide a regular transmission of UTC time and date. To provide synchronism for measurement data.
*/
export interface PGN_126992Fields extends PGNFields {
  sid?: number
  source: enums.SystemTime|number
  reserved?: number
  date?: string
  time?: string
}

export interface PGN_126992 extends PGN {
 fields: PGN_126992Fields
}

/*
  PGN: 126993
  Description: Heartbeat
  Explanation: Reception of this PGN confirms that a device is still present on the network.  Reception of this PGN may also be used to maintain an address to NAME association table within the receiving device.  The transmission interval may be used by the receiving unit to determine the time-out value for the connection supervision.  The value contained in Field 1 of this PGN reflects the PGN's current Transmission Interval. Changes to this PGN's Transmission Interval shall be reflected in Field 1.  The transmission interval can only be changed by using the Request Group Function PGN 126208 with no pairs of request parameters provided. Field 3 of the Request Group Function PGN 126208 may contain values between 1,000ms and 60,000ms.  This PGN cannot be requested by the ISO Request PGN 059904 or Request Group Function PGN 126208. In Request Group Function PGN 126208, setting Field 3 to a value of 0xFFFF FFFF and Field 4 to a value of 0xFFFF: 'Transmit now without changing timing variables.' is prohibited.  The Command Group Function PGN 126208 shall not be used with this PGN.  Fields 3 and 4 of this PGN provide information which can be used to distinguish short duration disturbances from permanent failures. See ISO 11898 -1 Sections 6.12, 6.13, 6.14, 13.1.1, 13.1.4, 13.1.4.3 and Figure 16 ( node status transition diagram) for additional context.
*/
export interface PGN_126993Fields extends PGNFields {
  dataTransmitOffset?: string
  sequenceCounter?: number
  controller1State?: enums.ControllerState|number
  controller2State?: enums.ControllerState|number
  equipmentStatus?: enums.EquipmentStatus|number
  reserved?: number
}

export interface PGN_126993 extends PGN {
 fields: PGN_126993Fields
}

/*
  PGN: 126996
  Description: Product Information
  Explanation: Provides product information onto the network that could be important for determining quality of data coming from this product.
*/
export interface PGN_126996Fields extends PGNFields {
  nmea2000Version?: number
  productCode?: number
  modelId?: string
  softwareVersionCode?: string
  modelVersion?: string
  modelSerialCode?: string
  certificationLevel?: enums.CertificationLevel|number
  loadEquivalency?: number
}

export interface PGN_126996 extends PGN {
 fields: PGN_126996Fields
}

/*
  PGN: 126998
  Description: Configuration Information
  Explanation: Free-form alphanumeric fields describing the installation (e.g., starboard engine room location) of the device and installation notes (e.g., calibration data).
*/
export interface PGN_126998Fields extends PGNFields {
  installationDescription1?: string
  installationDescription2?: string
  manufacturerInformation?: string
}

export interface PGN_126998 extends PGN {
 fields: PGN_126998Fields
}

/*
  PGN: 127233
  Description: Man Overboard Notification
  Explanation: The MOB PGN is intended to provide notification from a MOB monitoring system. The included position information may be that of the vessel or the MOB device itself as identified in field 'X', position source. Additional information may include the current state of the MOB device, time of activation, and MOB device battery status.
This PGN may be used to set a MOB waypoint, or to initiate an alert process.
This PGN may be used to command or register a MOB device emitter Ids or other applicable fields in the message with an MOB System or other equipment. If the fields in this PGN are configured over the network, the Command Group Function (PGN 126208) shall be used.
Queries for this PGN shall be requested using either the ISO Request (PGN 059904) or the NMEA Request Group Function (PGN 126208).
A device receiving an ISO (PGN 059904) for this PGN (127233), shall respond by providing as many of these PGNs (127233) as necessary for every MOB Emitter ID that has associated data fields.
If a Request Group Function (PGN 126208) requesting this PGN (127233) is received, the receiving device shall respond in the following manner:
* If no requested fields have been included with the Request Group Function then the response is to return one or more PGNs, just like responding to the ISO Request (PGN 055904) described above.
* If the Request Group Function (PGN 126208) includes the MOB Emitter ID field or MOB Status field, then the response shall be filtered by these fields contained within this request resulting in one or more PGN (127233) responses.
If the MOB Emitter ID requested is not considered a valid MOB Emitter ID by the receiving device, then the appropriate response would be the Acknowledge Group Function (PGN 126208), containing the error state for PGN error code (Field 3) of '0x3 = Access denied.' And the requested MOB Emitter ID field parameter error code (Field 6) of '0x3 = Requested or command parameter out-of- range;'.
The Default update rate of this PGN is autonomous, as it is dependant upon notification rates of MOB devices.
*/
export interface PGN_127233Fields extends PGNFields {
  sid?: number
  mobEmitterId?: number
  manOverboardStatus?: enums.MobStatus|number
  reserved?: number
  activationTime?: string
  positionSource?: enums.MobPositionSource|number
  reserved7?: number
  positionDate?: string
  positionTime?: string
  latitude?: number
  longitude?: number
  cogReference?: enums.DirectionReference|number
  reserved13?: number
  cog?: number
  sog?: number
  mmsiOfVesselOfOrigin: string
  mobEmitterBatteryLowStatus?: enums.LowBattery|number
  reserved18?: number
}

export interface PGN_127233 extends PGN {
 fields: PGN_127233Fields
}

/*
  PGN: 127237
  Description: Heading/Track control
*/
export interface PGN_127237Fields extends PGNFields {
  rudderLimitExceeded?: enums.YesNo|number
  offHeadingLimitExceeded?: enums.YesNo|number
  offTrackLimitExceeded?: enums.YesNo|number
  override?: enums.YesNo|number
  steeringMode?: enums.SteeringMode|number
  turnMode?: enums.TurnMode|number
  headingReference?: enums.DirectionReference|number
  reserved?: number
  commandedRudderDirection?: enums.DirectionRudder|number
  commandedRudderAngle?: number
  headingToSteerCourse?: number
  track?: number
  rudderLimit?: number
  offHeadingLimit?: number
  radiusOfTurnOrder?: number
  rateOfTurnOrder?: number
  offTrackLimit?: number
  vesselHeading?: number
}

export interface PGN_127237 extends PGN {
 fields: PGN_127237Fields
}

/*
  PGN: 127245
  Description: Rudder
*/
export interface PGN_127245Fields extends PGNFields {
  instance: number
  directionOrder?: enums.DirectionRudder|number
  reserved?: number
  angleOrder?: number
  position?: number
  reserved6?: number
}

export interface PGN_127245 extends PGN {
 fields: PGN_127245Fields
}

/*
  PGN: 127250
  Description: Vessel Heading
*/
export interface PGN_127250Fields extends PGNFields {
  sid?: number
  heading?: number
  deviation?: number
  variation?: number
  reference?: enums.DirectionReference|number
  reserved?: number
}

export interface PGN_127250 extends PGN {
 fields: PGN_127250Fields
}

/*
  PGN: 127251
  Description: Rate of Turn
*/
export interface PGN_127251Fields extends PGNFields {
  sid?: number
  rate?: number
  reserved?: number
}

export interface PGN_127251 extends PGN {
 fields: PGN_127251Fields
}

/*
  PGN: 127252
  Description: Heave
*/
export interface PGN_127252Fields extends PGNFields {
  sid?: number
  heave?: number
  reserved?: number
}

export interface PGN_127252 extends PGN {
 fields: PGN_127252Fields
}

/*
  PGN: 127257
  Description: Attitude
*/
export interface PGN_127257Fields extends PGNFields {
  sid?: number
  yaw?: number
  pitch?: number
  roll?: number
  reserved?: number
}

export interface PGN_127257 extends PGN {
 fields: PGN_127257Fields
}

/*
  PGN: 127258
  Description: Magnetic Variation
*/
export interface PGN_127258Fields extends PGNFields {
  sid?: number
  source?: enums.MagneticVariation|number
  reserved?: number
  ageOfService?: string
  variation?: number
  reserved6?: number
}

export interface PGN_127258 extends PGN {
 fields: PGN_127258Fields
}

/*
  PGN: 127488
  Description: Engine Parameters, Rapid Update
*/
export interface PGN_127488Fields extends PGNFields {
  instance: enums.EngineInstance|number
  speed?: number
  boostPressure?: number
  tiltTrim?: number
  reserved?: number
}

export interface PGN_127488 extends PGN {
 fields: PGN_127488Fields
}

/*
  PGN: 127489
  Description: Engine Parameters, Dynamic
*/
export interface PGN_127489Fields extends PGNFields {
  instance: enums.EngineInstance|number
  oilPressure?: number
  oilTemperature?: number
  temperature?: number
  alternatorPotential?: number
  fuelRate?: number
  totalEngineHours?: string
  coolantPressure?: number
  fuelPressure?: number
  reserved?: number
  discreteStatus1?: enums.EngineStatus1[]
  discreteStatus2?: enums.EngineStatus2[]
  engineLoad?: number
  engineTorque?: number
}

export interface PGN_127489 extends PGN {
 fields: PGN_127489Fields
}

/*
  PGN: 127490
  Description: Electric Drive Status, Dynamic
  Explanation: This PGN is used to report status of Electric Drive Status control and can be used with Command Group Function (PGN Electric propulsion motor status) to command equipment. 
*/
export interface PGN_127490Fields extends PGNFields {
  inverterMotorIdentifier: number
  operatingMode?: number
  reserved?: number
  motorTemperature?: number
  inverterTemperature?: number
  coolantTemperature?: number
  gearTemperature?: number
  shaftTorque?: number
}

export interface PGN_127490 extends PGN {
 fields: PGN_127490Fields
}

/*
  PGN: 127491
  Description: Electric Energy Storage Status, Dynamic
  Explanation: This PGN is used to provide electric propulsion motor status and relevant data.
*/
export interface PGN_127491Fields extends PGNFields {
  energyStorageIdentifier: number
  stateOfCharge?: number
  timeRemaining?: string
  highestCellTemperature?: number
  lowestCellTemperature?: number
  averageCellTemperature?: number
  maxDischargeCurrent?: number
  maxChargeCurrent?: number
  coolingSystemStatus?: number
  heatingSystemStatus?: number
}

export interface PGN_127491 extends PGN {
 fields: PGN_127491Fields
}

/*
  PGN: 127493
  Description: Transmission Parameters, Dynamic
*/
export interface PGN_127493Fields extends PGNFields {
  instance: enums.EngineInstance|number
  transmissionGear?: enums.GearStatus|number
  reserved?: number
  oilPressure?: number
  oilTemperature?: number
  discreteStatus1?: number
  reserved7?: number
}

export interface PGN_127493 extends PGN {
 fields: PGN_127493Fields
}

/*
  PGN: 127494
  Description: Electric Drive Information
  Explanation: This PGN is used to provide information about electric motor specifications and ratings.
*/
export interface PGN_127494Fields extends PGNFields {
  inverterMotorIdentifier: number
  motorType?: number
  reserved?: number
  motorVoltageRating?: number
  maximumContinuousMotorPower?: number
  maximumBoostMotorPower?: number
  maximumMotorTemperatureRating?: number
  ratedMotorSpeed?: number
  maximumControllerTemperatureRating?: number
  motorShaftTorqueRating?: number
  motorDcVoltageDeratingThreshold?: number
  motorDcVoltageCutOffThreshold?: number
  driveMotorHours?: string
}

export interface PGN_127494 extends PGN {
 fields: PGN_127494Fields
}

/*
  PGN: 127495
  Description: Electric Energy Storage Information
  Explanation: This PGN is used to provide the status on power storage sources such as batteries.This PGN is new in v3.0 and has not been observed yet; field lengths and precisions are guesses.
*/
export interface PGN_127495Fields extends PGNFields {
  energyStorageIdentifier: number
  motorType?: number
  reserved?: number
  storageChemistryConversion?: number
  maximumTemperatureDerating?: number
  maximumTemperatureShutOff?: number
  minimumTemperatureDerating?: number
  minimumTemperatureShutOff?: number
  usableBatteryEnergy?: number
  stateOfHealth?: number
  batteryCycleCounter?: number
  batteryFullStatus?: number
  batteryEmptyStatus?: number
  reserved14?: number
  maximumChargeSoc?: number
  minimumChargeSoc?: number
}

export interface PGN_127495 extends PGN {
 fields: PGN_127495Fields
}

/*
  PGN: 127496
  Description: Trip Parameters, Vessel
*/
export interface PGN_127496Fields extends PGNFields {
  timeToEmpty?: string
  distanceToEmpty?: number
  estimatedFuelRemaining?: number
  tripRunTime?: string
}

export interface PGN_127496 extends PGN {
 fields: PGN_127496Fields
}

/*
  PGN: 127497
  Description: Trip Parameters, Engine
*/
export interface PGN_127497Fields extends PGNFields {
  instance: enums.EngineInstance|number
  tripFuelUsed?: number
  fuelRateAverage?: number
  fuelRateEconomy?: number
  instantaneousFuelEconomy?: number
}

export interface PGN_127497 extends PGN {
 fields: PGN_127497Fields
}

/*
  PGN: 127498
  Description: Engine Parameters, Static
*/
export interface PGN_127498Fields extends PGNFields {
  instance: enums.EngineInstance|number
  ratedEngineSpeed?: number
  vin?: string
  softwareId?: string
}

export interface PGN_127498 extends PGN {
 fields: PGN_127498Fields
}

/*
  PGN: 127500
  Description: Load Controller Connection State/Control
*/
export interface PGN_127500Fields extends PGNFields {
  sequenceId?: number
  connectionId?: number
  state?: number
  status?: number
  operationalStatusControl?: number
  pwmDutyCycle?: number
  timeon?: number
  timeoff?: number
}

export interface PGN_127500 extends PGN {
 fields: PGN_127500Fields
}

/*
  PGN: 127501
  Description: Binary Switch Bank Status
*/
export interface PGN_127501Fields extends PGNFields {
  instance: number
  indicator1?: enums.OffOn|number
  indicator2?: enums.OffOn|number
  indicator3?: enums.OffOn|number
  indicator4?: enums.OffOn|number
  indicator5?: enums.OffOn|number
  indicator6?: enums.OffOn|number
  indicator7?: enums.OffOn|number
  indicator8?: enums.OffOn|number
  indicator9?: enums.OffOn|number
  indicator10?: enums.OffOn|number
  indicator11?: enums.OffOn|number
  indicator12?: enums.OffOn|number
  indicator13?: enums.OffOn|number
  indicator14?: enums.OffOn|number
  indicator15?: enums.OffOn|number
  indicator16?: enums.OffOn|number
  indicator17?: enums.OffOn|number
  indicator18?: enums.OffOn|number
  indicator19?: enums.OffOn|number
  indicator20?: enums.OffOn|number
  indicator21?: enums.OffOn|number
  indicator22?: enums.OffOn|number
  indicator23?: enums.OffOn|number
  indicator24?: enums.OffOn|number
  indicator25?: enums.OffOn|number
  indicator26?: enums.OffOn|number
  indicator27?: enums.OffOn|number
  indicator28?: enums.OffOn|number
}

export interface PGN_127501 extends PGN {
 fields: PGN_127501Fields
}

/*
  PGN: 127502
  Description: Switch Bank Control
*/
export interface PGN_127502Fields extends PGNFields {
  instance: number
  switch1?: enums.OffOnControl|number
  switch2?: enums.OffOnControl|number
  switch3?: enums.OffOnControl|number
  switch4?: enums.OffOnControl|number
  switch5?: enums.OffOnControl|number
  switch6?: enums.OffOnControl|number
  switch7?: enums.OffOnControl|number
  switch8?: enums.OffOnControl|number
  switch9?: enums.OffOnControl|number
  switch10?: enums.OffOnControl|number
  switch11?: enums.OffOnControl|number
  switch12?: enums.OffOnControl|number
  switch13?: enums.OffOnControl|number
  switch14?: enums.OffOnControl|number
  switch15?: enums.OffOnControl|number
  switch16?: enums.OffOnControl|number
  switch17?: enums.OffOnControl|number
  switch18?: enums.OffOnControl|number
  switch19?: enums.OffOnControl|number
  switch20?: enums.OffOnControl|number
  switch21?: enums.OffOnControl|number
  switch22?: enums.OffOnControl|number
  switch23?: enums.OffOnControl|number
  switch24?: enums.OffOnControl|number
  switch25?: enums.OffOnControl|number
  switch26?: enums.OffOnControl|number
  switch27?: enums.OffOnControl|number
  switch28?: enums.OffOnControl|number
}

export interface PGN_127502 extends PGN {
 fields: PGN_127502Fields
}

/*
  PGN: 127503
  Description: AC Input Status
*/
export interface PGN_127503Fields extends PGNFields {
  instance: number
  numberOfLines?: number
  line?: enums.AcLine|number
  acceptability?: enums.Acceptability|number
  reserved?: number
  voltage?: number
  current?: number
  frequency?: number
  breakerSize?: number
  realPower?: number
  reactivePower?: number
  powerFactor?: number
  list: any[]
}

export interface PGN_127503 extends PGN {
 fields: PGN_127503Fields
}

/*
  PGN: 127504
  Description: AC Output Status
*/
export interface PGN_127504Fields extends PGNFields {
  instance: number
  numberOfLines?: number
  line?: enums.Line|number
  waveform?: enums.Waveform|number
  reserved?: number
  voltage?: number
  current?: number
  frequency?: number
  breakerSize?: number
  realPower?: number
  reactivePower?: number
  powerFactor?: number
  list: any[]
}

export interface PGN_127504 extends PGN {
 fields: PGN_127504Fields
}

/*
  PGN: 127505
  Description: Fluid Level
*/
export interface PGN_127505Fields extends PGNFields {
  instance: number
  type?: enums.TankType|number
  level?: number
  capacity?: number
  reserved?: number
}

export interface PGN_127505 extends PGN {
 fields: PGN_127505Fields
}

/*
  PGN: 127506
  Description: DC Detailed Status
*/
export interface PGN_127506Fields extends PGNFields {
  sid?: number
  instance: number
  dcType: enums.DcSource|number
  stateOfCharge?: number
  stateOfHealth?: number
  timeRemaining?: string
  rippleVoltage?: number
  remainingCapacity?: number
}

export interface PGN_127506 extends PGN {
 fields: PGN_127506Fields
}

/*
  PGN: 127507
  Description: Charger Status
*/
export interface PGN_127507Fields extends PGNFields {
  instance: number
  batteryInstance: number
  operatingState?: enums.ChargerState|number
  chargeMode?: enums.ChargerMode|number
  enabled?: enums.OffOn|number
  equalizationPending?: enums.OffOn|number
  reserved?: number
  equalizationTimeRemaining?: string
}

export interface PGN_127507 extends PGN {
 fields: PGN_127507Fields
}

/*
  PGN: 127508
  Description: Battery Status
*/
export interface PGN_127508Fields extends PGNFields {
  instance: number
  voltage?: number
  current?: number
  temperature?: number
  sid?: number
}

export interface PGN_127508 extends PGN {
 fields: PGN_127508Fields
}

/*
  PGN: 127509
  Description: Inverter Status
  Explanation: The NMEA wrote in the link in the URL that this PGN is obsolete and superceded by PGN 127751, but that PGN reference is obviously incorrect. They probably meant PGN 127511. The other interesting thing is that this PGN is only four bytes long but still referenced as a Fast PGN, which matches various sources; see github issue #428.
*/
export interface PGN_127509Fields extends PGNFields {
  instance: number
  acInstance: number
  dcInstance: number
  operatingState?: enums.InverterState|number
  inverterEnable?: enums.OffOn|number
  reserved?: number
}

export interface PGN_127509 extends PGN {
 fields: PGN_127509Fields
}

/*
  PGN: 127510
  Description: Charger Configuration Status
*/
export interface PGN_127510Fields extends PGNFields {
  instance: number
  batteryInstance: number
  chargerEnableDisable?: enums.OffOn|number
  reserved?: number
  chargeCurrentLimit?: number
  chargingAlgorithm?: enums.ChargingAlgorithm|number
  chargerMode?: enums.ChargerMode|number
  estimatedTemperature?: enums.DeviceTempState|number
  equalizeOneTimeEnableDisable?: enums.OffOn|number
  overChargeEnableDisable?: enums.OffOn|number
  equalizeTime?: string
}

export interface PGN_127510 extends PGN {
 fields: PGN_127510Fields
}

/*
  PGN: 127511
  Description: Inverter Configuration Status
*/
export interface PGN_127511Fields extends PGNFields {
  instance: number
  acInstance: number
  dcInstance: number
  inverterEnableDisable?: enums.OffOn|number
  inverterMode?: enums.InverterMode|number
  loadSenseEnableDisable?: enums.OffOn|number
  loadSensePowerThreshold?: number
  loadSenseInterval?: string
}

export interface PGN_127511 extends PGN {
 fields: PGN_127511Fields
}

/*
  PGN: 127512
  Description: AGS Configuration Status
*/
export interface PGN_127512Fields extends PGNFields {
  instance: number
  generatorInstance: number
  agsMode?: enums.AgsMode|number
  reserved?: number
}

export interface PGN_127512 extends PGN {
 fields: PGN_127512Fields
}

/*
  PGN: 127513
  Description: Battery Configuration Status
*/
export interface PGN_127513Fields extends PGNFields {
  instance: number
  batteryType?: enums.BatteryType|number
  supportsEqualization?: enums.YesNo|number
  reserved?: number
  nominalVoltage?: enums.BatteryVoltage|number
  chemistry?: enums.BatteryChemistry|number
  capacity?: number
  temperatureCoefficient?: number
  peukertExponent?: number
  chargeEfficiencyFactor?: number
}

export interface PGN_127513 extends PGN {
 fields: PGN_127513Fields
}

/*
  PGN: 127514
  Description: AGS Status
*/
export interface PGN_127514Fields extends PGNFields {
  instance: number
  generatorInstance: number
  agsOperatingState?: enums.AgsOperatingState|number
  generatorState?: enums.AgsGeneratingState|number
  generatorOnReason?: enums.AgsOnReason|number
  generatorOffReason?: enums.AgsOffReason|number
}

export interface PGN_127514 extends PGN {
 fields: PGN_127514Fields
}

/*
  PGN: 127744
  Description: AC Power / Current - Phase A
*/
export interface PGN_127744Fields extends PGNFields {
  sid?: number
  connectionNumber?: number
  acRmsCurrent?: number
  power?: number
}

export interface PGN_127744 extends PGN {
 fields: PGN_127744Fields
}

/*
  PGN: 127745
  Description: AC Power / Current - Phase B
*/
export interface PGN_127745Fields extends PGNFields {
  sid?: number
  connectionNumber?: number
  acRmsCurrent?: number
  power?: number
}

export interface PGN_127745 extends PGN {
 fields: PGN_127745Fields
}

/*
  PGN: 127746
  Description: AC Power / Current - Phase C
*/
export interface PGN_127746Fields extends PGNFields {
  sid?: number
  connectionNumber?: number
  acRmsCurrent?: number
  power?: number
}

export interface PGN_127746 extends PGN {
 fields: PGN_127746Fields
}

/*
  PGN: 127747
  Description: AC Voltage / Frequency - Phase A
*/
export interface PGN_127747Fields extends PGNFields {
  sid?: number
  connectionNumber?: number
  acVoltageLineToNeutral?: number
  acVoltageLineToLine?: number
  frequency?: number
}

export interface PGN_127747 extends PGN {
 fields: PGN_127747Fields
}

/*
  PGN: 127748
  Description: AC Voltage / Frequency - Phase B
*/
export interface PGN_127748Fields extends PGNFields {
  sid?: number
  connectionNumber?: number
  acVoltageLineToNeutral?: number
  acVoltageLineToLine?: number
  frequency?: number
}

export interface PGN_127748 extends PGN {
 fields: PGN_127748Fields
}

/*
  PGN: 127749
  Description: AC Voltage / Frequency - Phase C
*/
export interface PGN_127749Fields extends PGNFields {
  sid?: number
  connectionNumber?: number
  acVoltageLineToNeutral?: number
  acVoltageLineToLine?: number
  frequency?: number
}

export interface PGN_127749 extends PGN {
 fields: PGN_127749Fields
}

/*
  PGN: 127750
  Description: Converter Status
*/
export interface PGN_127750Fields extends PGNFields {
  sid?: number
  connectionNumber?: number
  operatingState?: enums.ConverterState|number
  temperatureState?: enums.GoodWarningError|number
  overloadState?: enums.GoodWarningError|number
  lowDcVoltageState?: enums.GoodWarningError|number
  rippleState?: enums.GoodWarningError|number
  reserved?: number
}

export interface PGN_127750 extends PGN {
 fields: PGN_127750Fields
}

/*
  PGN: 127751
  Description: DC Voltage/Current
*/
export interface PGN_127751Fields extends PGNFields {
  sid?: number
  connectionNumber?: number
  dcVoltage?: number
  dcCurrent?: number
  reserved?: number
}

export interface PGN_127751 extends PGN {
 fields: PGN_127751Fields
}

/*
  PGN: 128000
  Description: Leeway Angle
  Explanation: This PGN provides the Nautical Leeway Angle. Nautical leeway angle is defined as the angle between the direction a vessel is heading (pointing) and the direction it is actually travelling (tracking thru the water). It is commonly provided by dual-axis speed sensors.
*/
export interface PGN_128000Fields extends PGNFields {
  sid?: number
  leewayAngle?: number
  reserved?: number
}

export interface PGN_128000 extends PGN {
 fields: PGN_128000Fields
}

/*
  PGN: 128001
  Description: Vessel Acceleration
  Explanation: The Vessel Acceleration PGN transmits the acceleration of the vessel in all three axes, ahead/astern, port/starboard, and up/down.
*/
export interface PGN_128001Fields extends PGNFields {
  sid?: number
  longitudinalAcceleration?: number
  transverseAcceleration?: number
  verticalAcceleration?: number
  reserved?: number
}

export interface PGN_128001 extends PGN {
 fields: PGN_128001Fields
}

/*
  PGN: 128002
  Description: Electric Drive Status, Rapid Update
  Explanation: This PGN is used to provide the Electric Propulsion Drive System Status.
*/
export interface PGN_128002Fields extends PGNFields {
  inverterMotorController?: number
  activeMotorMode?: number
  brakeMode?: number
  reserved?: number
  rotationalShaftSpeed?: number
  motorDcVoltage?: number
  motorDcCurrent?: number
}

export interface PGN_128002 extends PGN {
 fields: PGN_128002Fields
}

/*
  PGN: 128003
  Description: Electric Energy Storage Status, Rapid Update
  Explanation: Electric Energy Storage Status message provides important energy storage information global at a rapid update rate.
*/
export interface PGN_128003Fields extends PGNFields {
  energyStorageIdentifier?: number
  batteryStatus?: number
  isolationStatus?: number
  batteryError?: number
  batteryVoltage?: number
  batteryCurrent?: number
  reserved?: number
}

export interface PGN_128003 extends PGN {
 fields: PGN_128003Fields
}

/*
  PGN: 128006
  Description: Thruster Control Status
*/
export interface PGN_128006Fields extends PGNFields {
  sid?: number
  identifier?: number
  directionControl?: enums.ThrusterDirectionControl|number
  powerEnabled?: enums.OffOn|number
  retractControl?: enums.ThrusterRetractControl|number
  speedControl?: number
  controlEvents?: enums.ThrusterControlEvents[]
  commandTimeout?: string
  azimuthControl?: number
}

export interface PGN_128006 extends PGN {
 fields: PGN_128006Fields
}

/*
  PGN: 128007
  Description: Thruster Information
*/
export interface PGN_128007Fields extends PGNFields {
  identifier?: number
  motorType?: enums.ThrusterMotorType|number
  reserved?: number
  powerRating?: number
  maximumTemperatureRating?: number
  maximumRotationalSpeed?: number
}

export interface PGN_128007 extends PGN {
 fields: PGN_128007Fields
}

/*
  PGN: 128008
  Description: Thruster Motor Status
*/
export interface PGN_128008Fields extends PGNFields {
  sid?: number
  identifier?: number
  motorEvents?: enums.ThrusterMotorEvents[]
  current?: number
  temperature?: number
  operatingTime?: string
}

export interface PGN_128008 extends PGN {
 fields: PGN_128008Fields
}

/*
  PGN: 128259
  Description: Speed
*/
export interface PGN_128259Fields extends PGNFields {
  sid?: number
  speedWaterReferenced?: number
  speedGroundReferenced?: number
  speedWaterReferencedType?: enums.WaterReference|number
  speedDirection?: number
  reserved?: number
}

export interface PGN_128259 extends PGN {
 fields: PGN_128259Fields
}

/*
  PGN: 128267
  Description: Water Depth
*/
export interface PGN_128267Fields extends PGNFields {
  sid?: number
  depth?: number
  offset?: number
  range?: number
}

export interface PGN_128267 extends PGN {
 fields: PGN_128267Fields
}

/*
  PGN: 128275
  Description: Distance Log
*/
export interface PGN_128275Fields extends PGNFields {
  date?: string
  time?: string
  log?: number
  tripLog?: number
}

export interface PGN_128275 extends PGN {
 fields: PGN_128275Fields
}

/*
  PGN: 128520
  Description: Tracked Target Data
*/
export interface PGN_128520Fields extends PGNFields {
  sid?: number
  targetId?: number
  trackStatus?: enums.Tracking[]
  reportedTarget: enums.YesNo|number
  targetAcquisition: enums.TargetAcquisition|number
  bearingReference?: enums.DirectionReference|number
  reserved?: number
  bearing?: number
  distance?: number
  course?: number
  speed?: number
  cpa?: number
  tcpa?: string
  utcOfFix?: string
  name?: string
  referenceTarget?: enums.YesNo|number
  reserved17?: number
}

export interface PGN_128520 extends PGN {
 fields: PGN_128520Fields
}

/*
  PGN: 128538
  Description: Elevator Car Status
  Explanation: This PGN provides the status information of an elevator car. This includes the elevator car id and type, sensors for load and weight limits, smoke detection, door status, motor status, and brake status. Also provided are weight and speed measurements, current and destination deck location, proximity switch status, inertial measurement unit status and Emergency button and buzzer status.
*/
export interface PGN_128538Fields extends PGNFields {
  sid?: number
  elevatorCarId?: number
  elevatorCarUsage?: number
  smokeSensorStatus?: number
  limitSwitchSensorStatus?: number
  proximitySwitchSensorStatus?: number
  inertialMeasurementUnitImuSensorStatus?: number
  elevatorLoadLimitStatus?: number
  elevatorLoadBalanceStatus?: number
  elevatorLoadSensor1Status?: number
  elevatorLoadSensor2Status?: number
  elevatorLoadSensor3Status?: number
  elevatorLoadSensor4Status?: number
  reserved?: number
  elevatorCarMotionStatus?: number
  elevatorCarDoorStatus?: number
  elevatorCarEmergencyButtonStatus?: number
  elevatorCarBuzzerStatus?: number
  openDoorButtonStatus?: number
  closeDoorButtonStatus?: number
  reserved21?: number
  currentDeck?: number
  destinationDeck?: number
  totalNumberOfDecks?: number
  weightOfLoadCell1?: number
  weightOfLoadCell2?: number
  weightOfLoadCell3?: number
  weightOfLoadCell4?: number
  speedOfElevatorCar?: number
  elevatorBrakeStatus?: number
  elevatorMotorRotationControlStatus?: number
  reserved32?: number
}

export interface PGN_128538 extends PGN {
 fields: PGN_128538Fields
}

/*
  PGN: 128768
  Description: Elevator Motor Control
  Explanation: This PGN provides the status of an elevator motor controller. Settings of the elevator motor controller may be changed using the NMEA Command Group Function.
*/
export interface PGN_128768Fields extends PGNFields {
  sid?: number
  elevatorCarId?: number
  elevatorCarUsage?: number
  motorAccelerationDecelerationProfileSelection?: number
  motorRotationalControlStatus?: number
  reserved?: number
}

export interface PGN_128768 extends PGN {
 fields: PGN_128768Fields
}

/*
  PGN: 128769
  Description: Elevator Deck Push Button
  Explanation: Transmit data of Deck controller to Elevator Main controller.
*/
export interface PGN_128769Fields extends PGNFields {
  sid?: number
  elevatorCallButtonId?: number
  deckButtonId?: number
  elevatorCarUsage?: number
  elevatorCarButtonSelection?: number
  reserved?: number
}

export interface PGN_128769 extends PGN {
 fields: PGN_128769Fields
}

/*
  PGN: 128776
  Description: Windlass Control Status
*/
export interface PGN_128776Fields extends PGNFields {
  sid?: number
  windlassId?: number
  windlassDirectionControl?: enums.WindlassDirection|number
  anchorDockingControl?: enums.OffOn|number
  speedControlType?: enums.SpeedType|number
  reserved?: number
  speedControl?: number
  powerEnable?: enums.OffOn|number
  mechanicalLock?: enums.OffOn|number
  deckAndAnchorWash?: enums.OffOn|number
  anchorLight?: enums.OffOn|number
  commandTimeout?: string
  windlassControlEvents?: enums.WindlassControl[]
  reserved14?: number
}

export interface PGN_128776 extends PGN {
 fields: PGN_128776Fields
}

/*
  PGN: 128777
  Description: Anchor Windlass Operating Status
*/
export interface PGN_128777Fields extends PGNFields {
  sid?: number
  windlassId?: number
  windlassDirectionControl?: enums.WindlassDirection|number
  windlassMotionStatus?: enums.WindlassMotion|number
  rodeTypeStatus?: enums.RodeType|number
  reserved?: number
  rodeCounterValue?: number
  windlassLineSpeed?: number
  anchorDockingStatus?: enums.DockingStatus|number
  windlassOperatingEvents?: enums.WindlassOperation[]
}

export interface PGN_128777 extends PGN {
 fields: PGN_128777Fields
}

/*
  PGN: 128778
  Description: Anchor Windlass Monitoring Status
*/
export interface PGN_128778Fields extends PGNFields {
  sid?: number
  windlassId?: number
  windlassMonitoringEvents?: enums.WindlassMonitoring[]
  controllerVoltage?: number
  motorCurrent?: number
  totalMotorTime?: string
  reserved?: number
}

export interface PGN_128778 extends PGN {
 fields: PGN_128778Fields
}

/*
  PGN: 128780
  Description: Linear Actuator Control/Status
  Explanation: Actuator is a broad description of any device that embodies moving an object between two fixed limits, such as raising or lowering an outboard engine assembly. In the context of this PGN, the word "Device" refers to the object being moved. In the case of multiple Actuators per controller, the Actuator Identifier field specifies which Actuator the PGN message is intended for, and all following data fields refer only to that Actuator. This PGN supports manufacturer calibrated systems and retrofit systems where it is impractical for the installer to enter the Maximum Travel distance of the device.
*/
export interface PGN_128780Fields extends PGNFields {
  actuatorIdentifier?: number
  commandedDevicePosition?: number
  devicePosition?: number
  maximumDeviceTravel?: number
  directionOfTravel?: number
  reserved?: number
}

export interface PGN_128780 extends PGN {
 fields: PGN_128780Fields
}

/*
  PGN: 129025
  Description: Position, Rapid Update
*/
export interface PGN_129025Fields extends PGNFields {
  latitude?: number
  longitude?: number
}

export interface PGN_129025 extends PGN {
 fields: PGN_129025Fields
}

/*
  PGN: 129026
  Description: COG & SOG, Rapid Update
*/
export interface PGN_129026Fields extends PGNFields {
  sid?: number
  cogReference?: enums.DirectionReference|number
  reserved?: number
  cog?: number
  sog?: number
  reserved6?: number
}

export interface PGN_129026 extends PGN {
 fields: PGN_129026Fields
}

/*
  PGN: 129027
  Description: Position Delta, Rapid Update
*/
export interface PGN_129027Fields extends PGNFields {
  sid?: number
  timeDelta?: string
  latitudeDelta?: number
  longitudeDelta?: number
}

export interface PGN_129027 extends PGN {
 fields: PGN_129027Fields
}

/*
  PGN: 129028
  Description: Altitude Delta, Rapid Update
*/
export interface PGN_129028Fields extends PGNFields {
  sid?: number
  timeDelta?: string
  gnssQuality?: enums.GnsMethod|number
  direction?: enums.DirectionReference|number
  reserved?: number
  cog?: number
  altitudeDelta?: number
}

export interface PGN_129028 extends PGN {
 fields: PGN_129028Fields
}

/*
  PGN: 129029
  Description: GNSS Position Data
*/
export interface PGN_129029Fields extends PGNFields {
  sid?: number
  date?: string
  time?: string
  latitude?: number
  longitude?: number
  altitude?: number
  gnssType?: enums.Gns|number
  method?: enums.GnsMethod|number
  integrity?: enums.GnsIntegrity|number
  reserved?: number
  numberOfSvs?: number
  hdop?: number
  pdop?: number
  geoidalSeparation?: number
  referenceStations?: number
  referenceStationType?: enums.Gns|number
  referenceStationId?: number
  ageOfDgnssCorrections?: string
  list: any[]
}

export interface PGN_129029 extends PGN {
 fields: PGN_129029Fields
}

/*
  PGN: 129033
  Description: Time & Date
*/
export interface PGN_129033Fields extends PGNFields {
  date?: string
  time?: string
  localOffset?: string
}

export interface PGN_129033 extends PGN {
 fields: PGN_129033Fields
}

/*
  PGN: 129038
  Description: AIS Class A Position Report
*/
export interface PGN_129038Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: string
  longitude?: number
  latitude?: number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  timeStamp?: enums.TimeStamp|number
  cog?: number
  sog?: number
  communicationState?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  heading?: number
  rateOfTurn?: number
  navStatus?: enums.NavStatus|number
  specialManeuverIndicator?: enums.AisSpecialManeuver|number
  reserved?: number
  spare18?: string
  reserved19?: number
  sequenceId?: number
}

export interface PGN_129038 extends PGN {
 fields: PGN_129038Fields
}

/*
  PGN: 129039
  Description: AIS Class B Position Report
*/
export interface PGN_129039Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: string
  longitude?: number
  latitude?: number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  timeStamp?: enums.TimeStamp|number
  cog?: number
  sog?: number
  communicationState?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  heading?: number
  regionalApplication?: string
  regionalApplicationB?: string
  unitType: enums.AisType|number
  integratedDisplay: enums.YesNo|number
  dsc: enums.YesNo|number
  band: enums.AisBand|number
  canHandleMsg22: enums.YesNo|number
  aisMode: enums.AisMode|number
  aisCommunicationState: enums.AisCommunicationState|number
  reserved?: number
}

export interface PGN_129039 extends PGN {
 fields: PGN_129039Fields
}

/*
  PGN: 129040
  Description: AIS Class B Extended Position Report
*/
export interface PGN_129040Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: string
  longitude?: number
  latitude?: number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  timeStamp?: enums.TimeStamp|number
  cog?: number
  sog?: number
  regionalApplication?: string
  regionalApplicationB?: string
  reserved?: number
  typeOfShip?: enums.ShipType|number
  trueHeading?: number
  reserved16?: number
  gnssType?: enums.PositionFixDevice|number
  length?: number
  beam?: number
  positionReferenceFromStarboard?: number
  positionReferenceFromBow?: number
  name?: string
  dte: enums.Available|number
  aisMode: enums.AisMode|number
  spare25?: string
  aisTransceiverInformation?: enums.AisTransceiver|number
  reserved27?: number
}

export interface PGN_129040 extends PGN {
 fields: PGN_129040Fields
}

/*
  PGN: 129041
  Description: AIS Aids to Navigation (AtoN) Report
*/
export interface PGN_129041Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: string
  longitude?: number
  latitude?: number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  timeStamp?: enums.TimeStamp|number
  lengthDiameter?: number
  beamDiameter?: number
  positionReferenceFromStarboardEdge?: number
  positionReferenceFromTrueNorthFacingEdge?: number
  atonType?: enums.AtonType|number
  offPositionIndicator: enums.YesNo|number
  virtualAtonFlag: enums.YesNo|number
  assignedModeFlag: enums.AisAssignedMode|number
  spare: string
  positionFixingDeviceType?: enums.PositionFixDevice|number
  reserved19?: number
  atonStatus?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  reserved22?: number
  atonName?: string
}

export interface PGN_129041 extends PGN {
 fields: PGN_129041Fields
}

/*
  PGN: 129044
  Description: Datum
*/
export interface PGN_129044Fields extends PGNFields {
  localDatum?: string
  deltaLatitude?: number
  deltaLongitude?: number
  deltaAltitude?: number
  referenceDatum?: string
}

export interface PGN_129044 extends PGN {
 fields: PGN_129044Fields
}

/*
  PGN: 129045
  Description: User Datum
*/
export interface PGN_129045Fields extends PGNFields {
  deltaX?: number
  deltaY?: number
  deltaZ?: number
  rotationInX?: string
  rotationInY?: string
  rotationInZ?: string
  scale?: string
  ellipsoidSemiMajorAxis?: number
  ellipsoidFlatteningInverse?: string
  datumName?: string
}

export interface PGN_129045 extends PGN {
 fields: PGN_129045Fields
}

/*
  PGN: 129283
  Description: Cross Track Error
*/
export interface PGN_129283Fields extends PGNFields {
  sid?: number
  xteMode?: enums.ResidualMode|number
  reserved?: number
  navigationTerminated?: enums.YesNo|number
  xte?: number
  reserved6?: number
}

export interface PGN_129283 extends PGN {
 fields: PGN_129283Fields
}

/*
  PGN: 129284
  Description: Navigation Data
*/
export interface PGN_129284Fields extends PGNFields {
  sid?: number
  distanceToWaypoint?: number
  courseBearingReference?: enums.DirectionReference|number
  perpendicularCrossed?: enums.YesNo|number
  arrivalCircleEntered?: enums.YesNo|number
  calculationType?: enums.BearingMode|number
  etaTime?: string
  etaDate?: string
  bearingOriginToDestinationWaypoint?: number
  bearingPositionToDestinationWaypoint?: number
  originWaypointNumber?: number
  destinationWaypointNumber?: number
  destinationLatitude?: number
  destinationLongitude?: number
  waypointClosingVelocity?: number
}

export interface PGN_129284 extends PGN {
 fields: PGN_129284Fields
}

/*
  PGN: 129285
  Description: Navigation - Route/WP Information
*/
export interface PGN_129285Fields extends PGNFields {
  startRps?: number
  nitems?: number
  databaseId?: number
  routeId?: number
  navigationDirectionInRoute?: enums.Direction|number
  supplementaryRouteWpDataAvailable?: enums.OffOn|number
  reserved?: number
  routeName?: string
  reserved9?: number
  wpId?: number
  wpName?: string
  wpLatitude?: number
  wpLongitude?: number
  list: any[]
}

export interface PGN_129285 extends PGN {
 fields: PGN_129285Fields
}

/*
  PGN: 129291
  Description: Set & Drift, Rapid Update
*/
export interface PGN_129291Fields extends PGNFields {
  sid?: number
  setReference?: enums.DirectionReference|number
  reserved?: number
  set?: number
  drift?: number
  reserved6?: number
}

export interface PGN_129291 extends PGN {
 fields: PGN_129291Fields
}

/*
  PGN: 129301
  Description: Navigation - Route / Time to+from Mark
*/
export interface PGN_129301Fields extends PGNFields {
  sid?: number
  timeToMark?: string
  markType?: enums.MarkType|number
  reserved?: number
  markId?: number
}

export interface PGN_129301 extends PGN {
 fields: PGN_129301Fields
}

/*
  PGN: 129302
  Description: Bearing and Distance between two Marks
*/
export interface PGN_129302Fields extends PGNFields {
  sid?: number
  bearingReference?: enums.DirectionReference|number
  calculationType?: enums.BearingMode|number
  reserved?: number
  bearingOriginToDestination?: number
  distance?: number
  originMarkType?: enums.MarkType|number
  destinationMarkType?: enums.MarkType|number
  originMarkId?: number
  destinationMarkId?: number
}

export interface PGN_129302 extends PGN {
 fields: PGN_129302Fields
}

/*
  PGN: 129538
  Description: GNSS Control Status
*/
export interface PGN_129538Fields extends PGNFields {
  svElevationMask?: number
  pdopMask?: number
  pdopSwitch?: number
  snrMask?: number
  gnssModeDesired?: enums.GnssMode|number
  dgnssModeDesired?: enums.DgnssMode|number
  positionVelocityFilter?: enums.YesNo|number
  maxCorrectionAge?: string
  antennaAltitudeFor2dMode?: number
  useAntennaAltitudeFor2dMode?: enums.YesNo|number
  reserved?: number
}

export interface PGN_129538 extends PGN {
 fields: PGN_129538Fields
}

/*
  PGN: 129539
  Description: GNSS DOPs
*/
export interface PGN_129539Fields extends PGNFields {
  sid?: number
  desiredMode?: enums.GnssMode|number
  actualMode?: enums.GnssMode|number
  reserved?: number
  hdop?: number
  vdop?: number
  tdop?: number
}

export interface PGN_129539 extends PGN {
 fields: PGN_129539Fields
}

/*
  PGN: 129540
  Description: GNSS Sats in View
*/
export interface PGN_129540Fields extends PGNFields {
  sid?: number
  rangeResidualMode?: enums.RangeResidualMode|number
  reserved?: number
  satsInView?: number
  prn?: number
  elevation?: number
  azimuth?: number
  snr?: number
  rangeResiduals?: number
  status?: enums.SatelliteStatus|number
  reserved11?: number
  list: any[]
}

export interface PGN_129540 extends PGN {
 fields: PGN_129540Fields
}

/*
  PGN: 129541
  Description: GPS Almanac Data
*/
export interface PGN_129541Fields extends PGNFields {
  prn?: number
  gpsWeekNumber?: number
  svHealthBits?: number
  eccentricity?: number
  almanacReferenceTime?: number
  inclinationAngle?: number
  rateOfRightAscension?: number
  rootOfSemiMajorAxis?: number
  argumentOfPerigee?: number
  longitudeOfAscensionNode?: number
  meanAnomaly?: number
  clockParameter1?: number
  clockParameter2?: number
  reserved?: number
}

export interface PGN_129541 extends PGN {
 fields: PGN_129541Fields
}

/*
  PGN: 129542
  Description: GNSS Pseudorange Noise Statistics
*/
export interface PGN_129542Fields extends PGNFields {
  sid?: number
  rmsOfPositionUncertainty?: number
  stdOfMajorAxis?: number
  stdOfMinorAxis?: number
  orientationOfMajorAxis?: number
  stdOfLatError?: number
  stdOfLonError?: number
  stdOfAltError?: number
}

export interface PGN_129542 extends PGN {
 fields: PGN_129542Fields
}

/*
  PGN: 129545
  Description: GNSS RAIM Output
*/
export interface PGN_129545Fields extends PGNFields {
  sid?: number
  integrityFlag?: enums.GnsIntegrity|number
  reserved?: number
  latitudeExpectedError?: number
  longitudeExpectedError?: number
  altitudeExpectedError?: number
  svIdOfMostLikelyFailedSat?: number
  probabilityOfMissedDetection?: number
  estimateOfPseudorangeBias?: number
  stdDeviationOfBias?: number
}

export interface PGN_129545 extends PGN {
 fields: PGN_129545Fields
}

/*
  PGN: 129546
  Description: GNSS RAIM Settings
*/
export interface PGN_129546Fields extends PGNFields {
  radialPositionErrorMaximumThreshold?: number
  probabilityOfFalseAlarm?: number
  probabilityOfMissedDetection?: number
  pseudorangeResidualFilteringTimeConstant?: string
  reserved?: number
}

export interface PGN_129546 extends PGN {
 fields: PGN_129546Fields
}

/*
  PGN: 129547
  Description: GNSS Pseudorange Error Statistics
*/
export interface PGN_129547Fields extends PGNFields {
  sid?: number
  rmsStdDevOfRangeInputs?: number
  stdDevOfMajorErrorEllipse?: number
  stdDevOfMinorErrorEllipse?: number
  orientationOfErrorEllipse?: number
  stdDevLatError?: number
  stdDevLonError?: number
  stdDevAltError?: number
}

export interface PGN_129547 extends PGN {
 fields: PGN_129547Fields
}

/*
  PGN: 129549
  Description: DGNSS Corrections
*/
export interface PGN_129549Fields extends PGNFields {
  sid?: number
  referenceStationId?: number
  referenceStationType?: enums.Gns|number
  timeOfCorrections?: string
  stationHealth?: enums.StationHealth|number
  reserved?: number
  satelliteId?: number
  prc?: number
  rrc?: number
  udre?: number
  iod?: number
}

export interface PGN_129549 extends PGN {
 fields: PGN_129549Fields
}

/*
  PGN: 129550
  Description: GNSS Differential Correction Receiver Interface
*/
export interface PGN_129550Fields extends PGNFields {
  channel?: number
  frequency?: number
  serialInterfaceBitRate?: enums.SerialBitRate|number
  serialInterfaceDetectionMode?: enums.SerialDetectionMode|number
  differentialSource?: enums.DifferentialSource|number
  differentialOperationMode?: enums.DifferentialMode|number
  reserved?: number
}

export interface PGN_129550 extends PGN {
 fields: PGN_129550Fields
}

/*
  PGN: 129551
  Description: GNSS Differential Correction Receiver Signal
*/
export interface PGN_129551Fields extends PGNFields {
  sid?: number
  channel?: number
  signalStrength?: number
  signalSnr?: number
  frequency?: number
  stationType?: enums.Gns|number
  referenceStationId?: number
  differentialSignalBitRate?: enums.SerialBitRate|number
  differentialSignalDetectionMode?: enums.SerialDetectionMode|number
  usedAsCorrectionSource?: enums.YesNo|number
  reserved?: number
  differentialSource?: enums.DifferentialSource|number
  timeSinceLastSatDifferentialSync?: string
  satelliteServiceIdNo?: number
}

export interface PGN_129551 extends PGN {
 fields: PGN_129551Fields
}

/*
  PGN: 129556
  Description: GLONASS Almanac Data
  Explanation: Almanac data for GLONASS products. The alamant contains satellite vehicle course orbital parameters. These parameters are described in the GLONASS ICS Section 4.5 Table 4.3. See URL.
*/
export interface PGN_129556Fields extends PGNFields {
  prn?: number
  na?: number
  reserved?: number
  cna: number
  hna?: number
  EpsilonNa?: number
  DeltatnaDot?: number
  OmegaNa?: number
  DeltaTna?: number
  tna?: number
  LambdaNa?: number
  DeltaIna?: number
  TauCa?: number
  TauNa?: number
}

export interface PGN_129556 extends PGN {
 fields: PGN_129556Fields
}

/*
  PGN: 129792
  Description: AIS DGNSS Broadcast Binary Message
*/
export interface PGN_129792Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: number
  sourceId: string
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: string
  longitude?: number
  latitude?: number
  reserved9?: number
  spare10?: string
  numberOfBitsInBinaryDataField?: number
  binaryData?: number
}

export interface PGN_129792 extends PGN {
 fields: PGN_129792Fields
}

/*
  PGN: 129793
  Description: AIS UTC and Date Report
*/
export interface PGN_129793Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: string
  longitude?: number
  latitude?: number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  reserved?: number
  positionTime?: string
  communicationState?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  positionDate?: string
  reserved13?: number
  gnssType?: enums.PositionFixDevice|number
}

export interface PGN_129793 extends PGN {
 fields: PGN_129793Fields
}

/*
  PGN: 129794
  Description: AIS Class A Static and Voyage Related Data
*/
export interface PGN_129794Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: string
  imoNumber?: number
  callsign?: string
  name?: string
  typeOfShip?: enums.ShipType|number
  length?: number
  beam?: number
  positionReferenceFromStarboard?: number
  positionReferenceFromBow?: number
  etaDate?: string
  etaTime?: string
  draft?: number
  destination?: string
  aisVersionIndicator?: enums.AisVersion|number
  gnssType?: enums.PositionFixDevice|number
  dte: enums.Available|number
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  reserved21?: number
}

export interface PGN_129794 extends PGN {
 fields: PGN_129794Fields
}

/*
  PGN: 129795
  Description: AIS Addressed Binary Message
*/
export interface PGN_129795Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: string
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  sequenceNumber?: number
  destinationId: string
  reserved8?: number
  retransmitFlag: enums.YesNo|number
  reserved10: number
  numberOfBitsInBinaryDataField?: number
  binaryData?: number
}

export interface PGN_129795 extends PGN {
 fields: PGN_129795Fields
}

/*
  PGN: 129796
  Description: AIS Acknowledge
*/
export interface PGN_129796Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: string
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: string
  destinationId: string
  sequenceNumber?: number
  reserved9?: number
  list: any[]
}

export interface PGN_129796 extends PGN {
 fields: PGN_129796Fields
}

/*
  PGN: 129797
  Description: AIS Binary Broadcast Message
*/
export interface PGN_129797Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId?: number
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: string
  numberOfBitsInBinaryDataField?: number
  binaryData?: number
}

export interface PGN_129797 extends PGN {
 fields: PGN_129797Fields
}

/*
  PGN: 129798
  Description: AIS SAR Aircraft Position Report
*/
export interface PGN_129798Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: string
  longitude?: number
  latitude?: number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  timeStamp?: enums.TimeStamp|number
  cog?: number
  sog?: number
  communicationState?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  altitude?: number
  reservedForRegionalApplications?: number
  dte: enums.Available|number
  spare?: string
  reserved17?: number
}

export interface PGN_129798 extends PGN {
 fields: PGN_129798Fields
}

/*
  PGN: 129799
  Description: Radio Frequency/Mode/Power
  Explanation: The Radio Channel is NOT a numeric field, it has been observed to contain values such as 9000L1-L3 and 9000F1-F3 (indicating private channels as allowed in some countries.)
*/
export interface PGN_129799Fields extends PGNFields {
  rxFrequency?: number
  txFrequency?: number
  radioChannel?: string
  txPower?: number
  mode?: enums.TelephoneMode|number
  channelBandwidth?: number
}

export interface PGN_129799 extends PGN {
 fields: PGN_129799Fields
}

/*
  PGN: 129800
  Description: AIS UTC/Date Inquiry
*/
export interface PGN_129800Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: string
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: string
  destinationId: string
}

export interface PGN_129800 extends PGN {
 fields: PGN_129800Fields
}

/*
  PGN: 129801
  Description: AIS Addressed Safety Related Message
*/
export interface PGN_129801Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: string
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  sequenceNumber?: number
  destinationId: string
  reserved8?: number
  retransmitFlag: enums.YesNo|number
  spare10: string
  safetyRelatedText?: string
}

export interface PGN_129801 extends PGN {
 fields: PGN_129801Fields
}

/*
  PGN: 129802
  Description: AIS Safety Related Broadcast Message
*/
export interface PGN_129802Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: string
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: string
  safetyRelatedText?: string
}

export interface PGN_129802 extends PGN {
 fields: PGN_129802Fields
}

/*
  PGN: 129803
  Description: AIS Interrogation
*/
export interface PGN_129803Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: string
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: string
  destinationId1: string
  reserved8?: number
  messageId11?: enums.AisMessageId|number
  slotOffset11?: number
  spare11?: string
  messageId12?: enums.AisMessageId|number
  slotOffset12?: number
  reserved14?: number
  reserved15?: number
  destinationId2: string
  reserved17?: number
  messageId21?: enums.AisMessageId|number
  slotOffset21?: number
  spare20?: string
  reserved21?: number
  sid?: number
}

export interface PGN_129803 extends PGN {
 fields: PGN_129803Fields
}

/*
  PGN: 129804
  Description: AIS Assignment Mode Command
*/
export interface PGN_129804Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: string
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: string
  destinationIdA: string
  offsetA?: number
  incrementA?: number
  destinationIdB: string
  offsetB?: number
  incrementB?: number
  spare13?: string
  reserved14?: number
}

export interface PGN_129804 extends PGN {
 fields: PGN_129804Fields
}

/*
  PGN: 129805
  Description: AIS Data Link Management Message
*/
export interface PGN_129805Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: string
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: string
  offset?: number
  numberOfSlots?: number
  timeout?: string
  increment?: number
  list: any[]
}

export interface PGN_129805 extends PGN {
 fields: PGN_129805Fields
}

/*
  PGN: 129806
  Description: AIS Channel Management
*/
export interface PGN_129806Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: string
  reserved: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: string
  channelA?: number
  channelB?: number
  reserved9?: number
  power: enums.PowerMode|number
  txRxMode?: enums.TxRxMode|number
  northEastLongitudeCorner1?: number
  northEastLatitudeCorner1?: number
  southWestLongitudeCorner2?: number
  southWestLatitudeCorner2?: number
  reserved16: number
  addressedOrBroadcastMessageIndicator: enums.BroadcastIndicator|number
  channelABandwidth: enums.Bandwidth|number
  channelBBandwidth: enums.Bandwidth|number
  reserved20: number
  transitionalZoneSize?: enums.ZoneSize|number
  spare22?: string
  reserved23: number
}

export interface PGN_129806 extends PGN {
 fields: PGN_129806Fields
}

/*
  PGN: 129807
  Description: AIS Class B Group Assignment
*/
export interface PGN_129807Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: string
  spare?: string
  txRxMode?: enums.TxRxMode|number
  reserved6?: number
  northEastLongitudeCorner1?: number
  northEastLatitudeCorner1?: number
  southWestLongitudeCorner2?: number
  southWestLatitudeCorner2?: number
  stationType?: enums.StationType|number
  reserved12?: number
  shipAndCargoFilter?: enums.ShipType|number
  spare14?: string
  reserved15?: number
  reportingInterval?: enums.ReportingInterval|number
  quietTime?: string
  spare18?: string
  reserved19?: number
}

export interface PGN_129807 extends PGN {
 fields: PGN_129807Fields
}

/*
  PGN: 129808
  Description: DSC Distress Call Information
  Match: DSC Category == Distress
*/
export interface PGN_129808_DistressFields extends PGNFields {
  dscFormat?: enums.DscFormat|number
  dscCategory?: enums.DscCategory|number
  dscMessageAddress?: string
  natureOfDistress?: enums.DscNature|number
  subsequentCommunicationModeOr2ndTelecommand?: enums.DscSecondTelecommand|number
  proposedRxFrequencyChannel?: string
  proposedTxFrequencyChannel?: string
  telephoneNumber?: string
  latitudeOfVesselReported?: number
  longitudeOfVesselReported?: number
  timeOfPosition?: string
  mmsiOfShipInDistress?: string
  dscEosSymbol?: number
  expansionEnabled?: enums.YesNo|number
  reserved?: number
  callingRxFrequencyChannel?: string
  callingTxFrequencyChannel?: string
  timeOfReceipt?: string
  dateOfReceipt?: string
  dscEquipmentAssignedMessageId?: number
  dscExpansionFieldSymbol?: enums.DscExpansionData|number
  dscExpansionFieldData?: string
  list: any[]
}

export interface PGN_129808_Distress extends PGN {
 fields: PGN_129808_DistressFields
}

/*
  PGN: 129808
  Description: DSC Call Information
*/
export interface PGN_129808Fields extends PGNFields {
  dscFormatSymbol?: enums.DscFormat|number
  dscCategorySymbol?: enums.DscCategory|number
  dscMessageAddress?: string
  _1stTelecommand?: enums.DscFirstTelecommand|number
  subsequentCommunicationModeOr2ndTelecommand?: enums.DscSecondTelecommand|number
  proposedRxFrequencyChannel?: string
  proposedTxFrequencyChannel?: string
  telephoneNumber?: string
  latitudeOfVesselReported?: number
  longitudeOfVesselReported?: number
  timeOfPosition?: string
  mmsiOfShipInDistress?: string
  dscEosSymbol?: number
  expansionEnabled?: enums.YesNo|number
  reserved?: number
  callingRxFrequencyChannel?: string
  callingTxFrequencyChannel?: string
  timeOfReceipt?: string
  dateOfReceipt?: string
  dscEquipmentAssignedMessageId?: number
  dscExpansionFieldSymbol?: enums.DscExpansionData|number
  dscExpansionFieldData?: string
  list: any[]
}

export interface PGN_129808 extends PGN {
 fields: PGN_129808Fields
}

/*
  PGN: 129809
  Description: AIS Class B static data (msg 24 Part A)
*/
export interface PGN_129809Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: string
  name?: string
  aisTransceiverInformation?: enums.AisTransceiver|number
  reserved?: number
  sequenceId?: number
}

export interface PGN_129809 extends PGN {
 fields: PGN_129809Fields
}

/*
  PGN: 129810
  Description: AIS Class B static data (msg 24 Part B)
*/
export interface PGN_129810Fields extends PGNFields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: string
  typeOfShip?: enums.ShipType|number
  vendorId?: string
  callsign?: string
  length?: number
  beam?: number
  positionReferenceFromStarboard?: number
  positionReferenceFromBow?: number
  mothershipUserId: string
  reserved?: number
  spare13?: string
  gnssType?: enums.PositionFixDevice|number
  aisTransceiverInformation?: enums.AisTransceiver|number
  reserved16?: number
  sequenceId?: number
}

export interface PGN_129810 extends PGN {
 fields: PGN_129810Fields
}

/*
  PGN: 130052
  Description: Loran-C TD Data
*/
export interface PGN_130052Fields extends PGNFields {
  groupRepetitionIntervalGri?: string
  masterRange?: string
  vSecondaryTd?: string
  wSecondaryTd?: string
  xSecondaryTd?: string
  ySecondaryTd?: string
  zSecondaryTd?: string
  stationStatusMaster?: enums.StationStatus[]
  stationStatusV?: enums.StationStatus[]
  stationStatusW?: enums.StationStatus[]
  stationStatusX?: enums.StationStatus[]
  stationStatusY?: enums.StationStatus[]
  stationStatusZ?: enums.StationStatus[]
  mode?: enums.ResidualMode|number
  reserved?: number
}

export interface PGN_130052 extends PGN {
 fields: PGN_130052Fields
}

/*
  PGN: 130053
  Description: Loran-C Range Data
*/
export interface PGN_130053Fields extends PGNFields {
  groupRepetitionIntervalGri?: string
  masterRange?: string
  vSecondaryRange?: string
  wSecondaryRange?: string
  xSecondaryRange?: string
  ySecondaryRange?: string
  zSecondaryRange?: string
  stationStatusMaster?: enums.StationStatus[]
  stationStatusV?: enums.StationStatus[]
  stationStatusW?: enums.StationStatus[]
  stationStatusX?: enums.StationStatus[]
  stationStatusY?: enums.StationStatus[]
  stationStatusZ?: enums.StationStatus[]
  mode?: enums.ResidualMode|number
  reserved?: number
}

export interface PGN_130053 extends PGN {
 fields: PGN_130053Fields
}

/*
  PGN: 130054
  Description: Loran-C Signal Data
*/
export interface PGN_130054Fields extends PGNFields {
  groupRepetitionIntervalGri?: string
  stationIdentifier?: string
  stationSnr?: number
  stationEcd?: string
  stationAsf?: string
}

export interface PGN_130054 extends PGN {
 fields: PGN_130054Fields
}

/*
  PGN: 130060
  Description: Label
*/
export interface PGN_130060Fields extends PGNFields {
  hardwareChannelId?: number
  pgn?: number
  dataSourceInstanceFieldNumber?: number
  dataSourceInstanceValue?: number
  secondaryEnumerationFieldNumber?: number
  secondaryEnumerationFieldValue?: number
  parameterFieldNumber?: number
  label?: string
}

export interface PGN_130060 extends PGN {
 fields: PGN_130060Fields
}

/*
  PGN: 130061
  Description: Channel Source Configuration
*/
export interface PGN_130061Fields extends PGNFields {
  dataSourceChannelId?: number
  sourceSelectionStatus?: number
  reserved?: number
  nameSelectionCriteriaMask?: number
  sourceName?: string
  pgn?: number
  dataSourceInstanceFieldNumber?: number
  dataSourceInstanceValue?: number
  secondaryEnumerationFieldNumber?: number
  secondaryEnumerationFieldValue?: number
  parameterFieldNumber?: number
}

export interface PGN_130061 extends PGN {
 fields: PGN_130061Fields
}

/*
  PGN: 130064
  Description: Route and WP Service - Database List
*/
export interface PGN_130064Fields extends PGNFields {
  startDatabaseId?: number
  nitems?: number
  numberOfDatabasesAvailable?: number
  databaseId?: number
  databaseName?: string
  databaseTimestamp?: string
  databaseDatestamp?: string
  wpPositionResolution?: enums.WpPositionResolution|number
  reserved?: number
  numberOfRoutesInDatabase?: number
  numberOfWpsInDatabase?: number
  numberOfBytesInDatabase?: number
  list: any[]
}

export interface PGN_130064 extends PGN {
 fields: PGN_130064Fields
}

/*
  PGN: 130065
  Description: Route and WP Service - Route List
*/
export interface PGN_130065Fields extends PGNFields {
  startRouteId?: number
  nitems?: number
  numberOfRoutesInDatabase?: number
  databaseId?: number
  routeId?: number
  routeName?: string
  reserved?: number
  wpIdentificationMethod?: enums.WpIdentificationMethod|number
  routeStatus?: enums.WpRouteStatus|number
  list: any[]
}

export interface PGN_130065 extends PGN {
 fields: PGN_130065Fields
}

/*
  PGN: 130066
  Description: Route and WP Service - Route/WP-List Attributes
*/
export interface PGN_130066Fields extends PGNFields {
  databaseId?: number
  routeId?: number
  routeWpListName?: string
  routeWpListTimestamp?: string
  routeWpListDatestamp?: string
  changeAtLastTimestamp?: enums.WpChange[]
  numberOfWpsInTheRouteWpList?: number
  criticalSupplementaryParameters?: enums.WpCriticalParameters[]
  navigationMethod?: enums.WpNavigationMethod|number
  wpIdentificationMethod?: enums.WpIdentificationMethod|number
  routeStatus?: enums.WpRouteStatus|number
  xteLimitForTheRoute?: number
}

export interface PGN_130066 extends PGN {
 fields: PGN_130066Fields
}

/*
  PGN: 130067
  Description: Route and WP Service - Route - WP Name & Position
*/
export interface PGN_130067Fields extends PGNFields {
  startRps?: number
  nitems?: number
  numberOfWpsInTheRouteWpList?: number
  databaseId?: number
  routeId?: number
  wpId?: number
  wpName?: string
  wpLatitude?: number
  wpLongitude?: number
  list: any[]
}

export interface PGN_130067 extends PGN {
 fields: PGN_130067Fields
}

/*
  PGN: 130068
  Description: Route and WP Service - Route - WP Name
*/
export interface PGN_130068Fields extends PGNFields {
  startRps?: number
  nitems?: number
  numberOfWpsInTheRouteWpList?: number
  databaseId?: number
  routeId?: number
  wpId?: number
  wpName?: string
  list: any[]
}

export interface PGN_130068 extends PGN {
 fields: PGN_130068Fields
}

/*
  PGN: 130069
  Description: Route and WP Service - XTE Limit & Navigation Method
*/
export interface PGN_130069Fields extends PGNFields {
  startRps?: number
  nitems?: number
  numberOfWpsWithASpecificXteLimitOrNavMethod?: number
  databaseId?: number
  routeId?: number
  rps?: number
  xteLimitInTheLegAfterWp?: number
  navMethodInTheLegAfterWp?: enums.WpNavigationMethod|number
  reserved?: number
  list: any[]
}

export interface PGN_130069 extends PGN {
 fields: PGN_130069Fields
}

/*
  PGN: 130070
  Description: Route and WP Service - WP Comment
*/
export interface PGN_130070Fields extends PGNFields {
  startId?: number
  nitems?: number
  numberOfWpsWithComments?: number
  databaseId?: number
  routeId?: number
  wpIdRps?: number
  comment?: string
  list: any[]
}

export interface PGN_130070 extends PGN {
 fields: PGN_130070Fields
}

/*
  PGN: 130071
  Description: Route and WP Service - Route Comment
*/
export interface PGN_130071Fields extends PGNFields {
  startRouteId?: number
  nitems?: number
  numberOfRoutesWithComments?: number
  databaseId?: number
  routeId?: number
  comment?: string
  list: any[]
}

export interface PGN_130071 extends PGN {
 fields: PGN_130071Fields
}

/*
  PGN: 130072
  Description: Route and WP Service - Database Comment
*/
export interface PGN_130072Fields extends PGNFields {
  startDatabaseId?: number
  nitems?: number
  numberOfDatabasesWithComments?: number
  databaseId?: number
  comment?: string
  list: any[]
}

export interface PGN_130072 extends PGN {
 fields: PGN_130072Fields
}

/*
  PGN: 130073
  Description: Route and WP Service - Radius of Turn
*/
export interface PGN_130073Fields extends PGNFields {
  startRps?: number
  nitems?: number
  numberOfWpsWithASpecificRadiusOfTurn?: number
  databaseId?: number
  routeId?: number
  rps?: number
  radiusOfTurn?: number
  list: any[]
}

export interface PGN_130073 extends PGN {
 fields: PGN_130073Fields
}

/*
  PGN: 130074
  Description: Route and WP Service - WP List - WP Name & Position
*/
export interface PGN_130074Fields extends PGNFields {
  startWpId?: number
  nitems?: number
  numberOfValidWpsInTheWpList?: number
  databaseId?: number
  reserved?: number
  wpId?: number
  wpName?: string
  wpLatitude?: number
  wpLongitude?: number
  list: any[]
}

export interface PGN_130074 extends PGN {
 fields: PGN_130074Fields
}

/*
  PGN: 130306
  Description: Wind Data
*/
export interface PGN_130306Fields extends PGNFields {
  sid?: number
  windSpeed?: number
  windAngle?: number
  reference: enums.WindReference|number
  reserved?: number
}

export interface PGN_130306 extends PGN {
 fields: PGN_130306Fields
}

/*
  PGN: 130310
  Description: Environmental Parameters (obsolete)
  Explanation: This PGN was succeeded by PGN 130310, but it should no longer be generated and separate PGNs in range 130312..130315 should be used
*/
export interface PGN_130310Fields extends PGNFields {
  sid?: number
  waterTemperature?: number
  outsideAmbientAirTemperature?: number
  atmosphericPressure?: number
  reserved?: number
}

export interface PGN_130310 extends PGN {
 fields: PGN_130310Fields
}

/*
  PGN: 130311
  Description: Environmental Parameters
  Explanation: This PGN was introduced as a better version of PGN 130310, but it should no longer be generated and separate PGNs in range 130312..130315 should be used
*/
export interface PGN_130311Fields extends PGNFields {
  sid?: number
  temperatureSource: enums.TemperatureSource|number
  humiditySource?: enums.HumiditySource|number
  temperature?: number
  humidity?: number
  atmosphericPressure?: number
}

export interface PGN_130311 extends PGN {
 fields: PGN_130311Fields
}

/*
  PGN: 130312
  Description: Temperature
*/
export interface PGN_130312Fields extends PGNFields {
  sid?: number
  instance: number
  source: enums.TemperatureSource|number
  actualTemperature?: number
  setTemperature?: number
  reserved?: number
}

export interface PGN_130312 extends PGN {
 fields: PGN_130312Fields
}

/*
  PGN: 130313
  Description: Humidity
*/
export interface PGN_130313Fields extends PGNFields {
  sid?: number
  instance: number
  source: enums.HumiditySource|number
  actualHumidity?: number
  setHumidity?: number
  reserved?: number
}

export interface PGN_130313 extends PGN {
 fields: PGN_130313Fields
}

/*
  PGN: 130314
  Description: Actual Pressure
*/
export interface PGN_130314Fields extends PGNFields {
  sid?: number
  instance: number
  source: enums.PressureSource|number
  pressure?: number
  reserved?: number
}

export interface PGN_130314 extends PGN {
 fields: PGN_130314Fields
}

/*
  PGN: 130315
  Description: Set Pressure
*/
export interface PGN_130315Fields extends PGNFields {
  sid?: number
  instance: number
  source: enums.PressureSource|number
  pressure?: number
  reserved?: number
}

export interface PGN_130315 extends PGN {
 fields: PGN_130315Fields
}

/*
  PGN: 130316
  Description: Temperature Extended Range
*/
export interface PGN_130316Fields extends PGNFields {
  sid?: number
  instance: number
  source: enums.TemperatureSource|number
  temperature?: number
  setTemperature?: number
}

export interface PGN_130316 extends PGN {
 fields: PGN_130316Fields
}

/*
  PGN: 130320
  Description: Tide Station Data
*/
export interface PGN_130320Fields extends PGNFields {
  mode?: enums.ResidualMode|number
  tideTendency?: enums.Tide|number
  reserved?: number
  measurementDate?: string
  measurementTime?: string
  stationLatitude?: number
  stationLongitude?: number
  tideLevel?: number
  tideLevelStandardDeviation?: number
  stationId: string
  stationName?: string
}

export interface PGN_130320 extends PGN {
 fields: PGN_130320Fields
}

/*
  PGN: 130321
  Description: Salinity Station Data
*/
export interface PGN_130321Fields extends PGNFields {
  mode?: enums.ResidualMode|number
  reserved?: number
  measurementDate?: string
  measurementTime?: string
  stationLatitude?: number
  stationLongitude?: number
  salinity?: string
  waterTemperature?: number
  stationId?: string
  stationName?: string
}

export interface PGN_130321 extends PGN {
 fields: PGN_130321Fields
}

/*
  PGN: 130322
  Description: Current Station Data
*/
export interface PGN_130322Fields extends PGNFields {
  mode?: enums.ResidualMode|number
  state?: enums.FloodState|number
  reserved: number
  measurementDate?: string
  measurementTime?: string
  stationLatitude?: number
  stationLongitude?: number
  measurementDepth?: number
  currentSpeed?: number
  currentFlowDirection?: number
  waterTemperature?: number
  stationId: string
  stationName?: string
}

export interface PGN_130322 extends PGN {
 fields: PGN_130322Fields
}

/*
  PGN: 130323
  Description: Meteorological Station Data
*/
export interface PGN_130323Fields extends PGNFields {
  mode?: enums.ResidualMode|number
  reserved?: number
  measurementDate?: string
  measurementTime?: string
  stationLatitude?: number
  stationLongitude?: number
  windSpeed?: number
  windDirection?: number
  windReference?: enums.WindReference|number
  reserved10?: number
  windGusts?: number
  atmosphericPressure?: number
  ambientTemperature?: number
  stationId: string
  stationName?: string
}

export interface PGN_130323 extends PGN {
 fields: PGN_130323Fields
}

/*
  PGN: 130324
  Description: Moored Buoy Station Data
*/
export interface PGN_130324Fields extends PGNFields {
  mode?: enums.ResidualMode|number
  reserved?: number
  measurementDate?: string
  measurementTime?: string
  stationLatitude?: number
  stationLongitude?: number
  windSpeed?: number
  windDirection?: number
  windReference?: enums.WindReference|number
  reserved10?: number
  windGusts?: number
  waveHeight?: number
  dominantWavePeriod?: string
  atmosphericPressure?: number
  pressureTendencyRate?: number
  airTemperature?: number
  waterTemperature?: number
  stationId: string
}

export interface PGN_130324 extends PGN {
 fields: PGN_130324Fields
}

/*
  PGN: 130330
  Description: Lighting System Settings
  Explanation: This PGN provides a lighting controller settings and number of supported capabilities.
*/
export interface PGN_130330Fields extends PGNFields {
  globalEnable?: number
  defaultSettingsCommand?: enums.LightingCommand|number
  reserved?: number
  nameOfTheLightingController?: string
  maxScenes?: number
  maxSceneConfigurationCount?: number
  maxZones?: number
  maxColorSequences?: number
  maxColorSequenceColorCount?: number
  numberOfPrograms?: number
  controllerCapabilities?: number
  identifyDevice?: number
}

export interface PGN_130330 extends PGN {
 fields: PGN_130330Fields
}

/*
  PGN: 130560
  Description: Payload Mass
*/
export interface PGN_130560Fields extends PGNFields {
  sid?: number
  measurementStatus?: number
  reserved?: number
  measurementId?: number
  payloadMass?: number
  reserved6?: number
}

export interface PGN_130560 extends PGN {
 fields: PGN_130560Fields
}

/*
  PGN: 130561
  Description: Lighting Zone
  Explanation: This PGN is used to report or configure a name for a given zone. A zone is a grouping of devices that are controlled by a Scene. This PGN is only sent upon request.
*/
export interface PGN_130561Fields extends PGNFields {
  zoneIndex?: number
  zoneName?: string
  redComponent?: number
  greenComponent?: number
  blueComponent?: number
  colorTemperature?: number
  intensity?: number
  programId?: number
  programColorSequenceIndex?: number
  programIntensity?: number
  programRate?: number
  programColorSequence?: number
  zoneEnabled?: enums.OffOn|number
  reserved?: number
}

export interface PGN_130561 extends PGN {
 fields: PGN_130561Fields
}

/*
  PGN: 130562
  Description: Lighting Scene
  Explanation: A Lighting Scene is a sequence of zone program configurations.
*/
export interface PGN_130562Fields extends PGNFields {
  sceneIndex?: number
  zoneName?: string
  control?: number
  configurationCount?: number
  configurationIndex?: number
  zoneIndex?: number
  devicesId?: number
  programIndex?: number
  programColorSequenceIndex?: number
  programIntensity?: number
  programRate?: number
  programColorSequenceRate?: number
  list: any[]
}

export interface PGN_130562 extends PGN {
 fields: PGN_130562Fields
}

/*
  PGN: 130563
  Description: Lighting Device
  Explanation: This PGN is used to provide status and capabilities of a lighting device. A lighting device may be a virtual device connected to a lighting controller or physical device on the network.
*/
export interface PGN_130563Fields extends PGNFields {
  deviceId?: number
  deviceCapabilities?: number
  colorCapabilities?: number
  zoneIndex?: number
  nameOfLightingDevice?: string
  status?: number
  redComponent?: number
  greenComponent?: number
  blueComponent?: number
  colorTemperature?: number
  intensity?: number
  programId?: number
  programColorSequenceIndex?: number
  programIntensity?: number
  programRate?: number
  programColorSequenceRate?: number
  enabled?: enums.OffOn|number
  reserved?: number
}

export interface PGN_130563 extends PGN {
 fields: PGN_130563Fields
}

/*
  PGN: 130564
  Description: Lighting Device Enumeration
  Explanation: This PGN allows for enumeration of the lighting devices on the controller.
*/
export interface PGN_130564Fields extends PGNFields {
  indexOfFirstDevice?: number
  totalNumberOfDevices?: number
  numberOfDevices?: number
  deviceId?: number
  status?: number
  list: any[]
}

export interface PGN_130564 extends PGN {
 fields: PGN_130564Fields
}

/*
  PGN: 130565
  Description: Lighting Color Sequence
  Explanation: Sequences could be 1 to (PGN Lighting - System Configuration) Max Color Sequence Color Count colors.
*/
export interface PGN_130565Fields extends PGNFields {
  sequenceIndex?: number
  colorCount?: number
  colorIndex?: number
  redComponent?: number
  greenComponent?: number
  blueComponent?: number
  colorTemperature?: number
  intensity?: number
  list: any[]
}

export interface PGN_130565 extends PGN {
 fields: PGN_130565Fields
}

/*
  PGN: 130566
  Description: Lighting Program
  Explanation: This PGN describes an available program on the controller. Can be a built in required NMEA one or a custom vendor program.
*/
export interface PGN_130566Fields extends PGNFields {
  programId?: number
  nameOfProgram?: string
  description?: string
  programCapabilities?: number
  reserved?: number
}

export interface PGN_130566 extends PGN {
 fields: PGN_130566Fields
}

/*
  PGN: 130567
  Description: Watermaker Input Setting and Status
*/
export interface PGN_130567Fields extends PGNFields {
  watermakerOperatingState?: enums.WatermakerState|number
  productionStartStop?: enums.YesNo|number
  rinseStartStop?: enums.YesNo|number
  lowPressurePumpStatus?: enums.YesNo|number
  highPressurePumpStatus?: enums.YesNo|number
  emergencyStop?: enums.YesNo|number
  productSolenoidValveStatus?: enums.OkWarning|number
  flushModeStatus?: enums.YesNo|number
  salinityStatus?: enums.OkWarning|number
  sensorStatus?: enums.OkWarning|number
  oilChangeIndicatorStatus?: enums.OkWarning|number
  filterStatus?: enums.OkWarning|number
  systemStatus?: enums.OkWarning|number
  reserved?: number
  salinity?: number
  productWaterTemperature?: number
  preFilterPressure?: number
  postFilterPressure?: number
  feedPressure?: number
  systemHighPressure?: number
  productWaterFlow?: number
  brineWaterFlow?: number
  runTime?: string
}

export interface PGN_130567 extends PGN {
 fields: PGN_130567Fields
}

/*
  PGN: 130569
  Description: Current Status and File
*/
export interface PGN_130569Fields extends PGNFields {
  zone?: enums.EntertainmentZone|number
  source?: enums.EntertainmentSource|number
  number?: number
  id?: number
  playStatus?: enums.EntertainmentPlayStatus|number
  elapsedTrackTime?: string
  trackTime?: string
  repeatStatus?: enums.EntertainmentRepeatStatus|number
  shuffleStatus?: enums.EntertainmentShuffleStatus|number
  saveFavoriteNumber?: number
  playFavoriteNumber?: number
  thumbsUpDown?: enums.EntertainmentLikeStatus|number
  signalStrength?: number
  radioFrequency?: number
  hdFrequencyMulticast?: number
  deleteFavoriteNumber?: number
  totalNumberOfTracks?: number
}

export interface PGN_130569 extends PGN {
 fields: PGN_130569Fields
}

/*
  PGN: 130570
  Description: Library Data File
*/
export interface PGN_130570Fields extends PGNFields {
  source?: enums.EntertainmentSource|number
  number?: number
  id?: number
  type?: enums.EntertainmentType|number
  name?: string
  track?: number
  station?: number
  favorite?: number
  radioFrequency?: number
  hdFrequency?: number
  zone?: enums.EntertainmentZone|number
  inPlayQueue?: enums.YesNo|number
  locked?: enums.YesNo|number
  reserved?: number
  artistName?: string
  albumName?: string
  stationName?: string
}

export interface PGN_130570 extends PGN {
 fields: PGN_130570Fields
}

/*
  PGN: 130571
  Description: Library Data Group
*/
export interface PGN_130571Fields extends PGNFields {
  source?: enums.EntertainmentSource|number
  number?: number
  type?: enums.EntertainmentType|number
  zone?: enums.EntertainmentZone|number
  groupId?: number
  idOffset?: number
  idCount?: number
  totalIdCount?: number
  idType?: enums.EntertainmentIdType|number
  id?: number
  name?: string
  artist?: string
  list: any[]
}

export interface PGN_130571 extends PGN {
 fields: PGN_130571Fields
}

/*
  PGN: 130572
  Description: Library Data Search
*/
export interface PGN_130572Fields extends PGNFields {
  source?: enums.EntertainmentSource|number
  number?: number
  groupId?: number
  groupType1?: enums.EntertainmentGroup|number
  groupName1?: string
  groupType2?: enums.EntertainmentGroup|number
  groupName2?: string
  groupType3?: enums.EntertainmentGroup|number
  groupName3?: string
}

export interface PGN_130572 extends PGN {
 fields: PGN_130572Fields
}

/*
  PGN: 130573
  Description: Supported Source Data
*/
export interface PGN_130573Fields extends PGNFields {
  idOffset?: number
  idCount?: number
  totalIdCount?: number
  id?: number
  source?: enums.EntertainmentSource|number
  number?: number
  name?: string
  playSupport?: enums.EntertainmentPlayStatusBitfield[]
  browseSupport?: enums.EntertainmentGroupBitfield[]
  thumbsSupport?: enums.YesNo|number
  connected?: enums.YesNo|number
  repeatSupport?: enums.EntertainmentRepeatBitfield[]
  shuffleSupport?: enums.EntertainmentShuffleBitfield[]
  list: any[]
}

export interface PGN_130573 extends PGN {
 fields: PGN_130573Fields
}

/*
  PGN: 130574
  Description: Supported Zone Data
*/
export interface PGN_130574Fields extends PGNFields {
  firstZoneId?: number
  zoneCount?: number
  totalZoneCount?: number
  zoneId?: enums.EntertainmentZone|number
  name?: string
  list: any[]
}

export interface PGN_130574 extends PGN {
 fields: PGN_130574Fields
}

/*
  PGN: 130576
  Description: Small Craft Status
*/
export interface PGN_130576Fields extends PGNFields {
  portTrimTab?: number
  starboardTrimTab?: number
  reserved?: number
}

export interface PGN_130576 extends PGN {
 fields: PGN_130576Fields
}

/*
  PGN: 130577
  Description: Direction Data
*/
export interface PGN_130577Fields extends PGNFields {
  dataMode?: enums.ResidualMode|number
  cogReference?: enums.DirectionReference|number
  reserved?: number
  sid?: number
  cog?: number
  sog?: number
  heading?: number
  speedThroughWater?: number
  set?: number
  drift?: number
}

export interface PGN_130577 extends PGN {
 fields: PGN_130577Fields
}

/*
  PGN: 130578
  Description: Vessel Speed Components
*/
export interface PGN_130578Fields extends PGNFields {
  longitudinalSpeedWaterReferenced?: number
  transverseSpeedWaterReferenced?: number
  longitudinalSpeedGroundReferenced?: number
  transverseSpeedGroundReferenced?: number
  sternSpeedWaterReferenced?: number
  sternSpeedGroundReferenced?: number
}

export interface PGN_130578 extends PGN {
 fields: PGN_130578Fields
}

/*
  PGN: 130579
  Description: System Configuration
*/
export interface PGN_130579Fields extends PGNFields {
  power?: enums.YesNo|number
  defaultSettings?: enums.EntertainmentDefaultSettings|number
  tunerRegions?: enums.EntertainmentRegions|number
  maxFavorites?: number
  videoProtocols?: enums.VideoProtocols|number
  reserved?: number
}

export interface PGN_130579 extends PGN {
 fields: PGN_130579Fields
}

/*
  PGN: 130580
  Description: System Configuration (deprecated)
*/
export interface PGN_130580Fields extends PGNFields {
  power?: enums.YesNo|number
  defaultSettings?: enums.EntertainmentDefaultSettings|number
  tunerRegions?: enums.EntertainmentRegions|number
  maxFavorites?: number
}

export interface PGN_130580 extends PGN {
 fields: PGN_130580Fields
}

/*
  PGN: 130581
  Description: Zone Configuration (deprecated)
*/
export interface PGN_130581Fields extends PGNFields {
  firstZoneId?: number
  zoneCount?: number
  totalZoneCount?: number
  zoneId?: enums.EntertainmentZone|number
  zoneName?: string
  list: any[]
}

export interface PGN_130581 extends PGN {
 fields: PGN_130581Fields
}

/*
  PGN: 130582
  Description: Zone Volume
*/
export interface PGN_130582Fields extends PGNFields {
  zoneId?: enums.EntertainmentZone|number
  volume?: number
  volumeChange?: enums.EntertainmentVolumeControl|number
  mute?: enums.YesNo|number
  reserved?: number
  channel?: enums.EntertainmentChannel|number
  reserved7?: number
}

export interface PGN_130582 extends PGN {
 fields: PGN_130582Fields
}

/*
  PGN: 130583
  Description: Available Audio EQ presets
*/
export interface PGN_130583Fields extends PGNFields {
  firstPreset?: number
  presetCount?: number
  totalPresetCount?: number
  presetType?: enums.EntertainmentEq|number
  presetName?: string
  list: any[]
}

export interface PGN_130583 extends PGN {
 fields: PGN_130583Fields
}

/*
  PGN: 130584
  Description: Available Bluetooth addresses
*/
export interface PGN_130584Fields extends PGNFields {
  firstAddress?: number
  addressCount?: number
  totalAddressCount?: number
  bluetoothAddress?: number
  status?: enums.BluetoothStatus|number
  deviceName?: string
  signalStrength?: number
  list: any[]
}

export interface PGN_130584 extends PGN {
 fields: PGN_130584Fields
}

/*
  PGN: 130585
  Description: Bluetooth source status
*/
export interface PGN_130585Fields extends PGNFields {
  sourceNumber?: number
  status?: enums.BluetoothSourceStatus|number
  forgetDevice?: enums.YesNo|number
  discovering?: enums.YesNo|number
  bluetoothAddress?: number
}

export interface PGN_130585 extends PGN {
 fields: PGN_130585Fields
}

/*
  PGN: 130586
  Description: Zone Configuration
*/
export interface PGN_130586Fields extends PGNFields {
  zoneId?: enums.EntertainmentZone|number
  volumeLimit?: number
  fade?: number
  balance?: number
  subVolume?: number
  eqTreble?: number
  eqMidRange?: number
  eqBass?: number
  presetType?: enums.EntertainmentEq|number
  audioFilter?: enums.EntertainmentFilter|number
  highPassFilterFrequency?: number
  lowPassFilterFrequency?: number
  channel?: enums.EntertainmentChannel|number
}

export interface PGN_130586 extends PGN {
 fields: PGN_130586Fields
}

/*
  PGN: 130816
  Description: SonicHub: Init #2
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Init #2
*/
export interface PGN_130816_Navico_Init2Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  a?: number
  b?: number
}

export interface PGN_130816_Navico_Init2 extends PGN {
 fields: PGN_130816_Navico_Init2Fields
}

/*
  PGN: 130816
  Description: SonicHub: AM Radio
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == AM Radio
*/
export interface PGN_130816_Navico_AmRadioFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: enums.SonichubTuning|number
  frequency?: number
  noiseLevel?: number
  signalLevel?: number
  reserved11?: number
  text?: string
}

export interface PGN_130816_Navico_AmRadio extends PGN {
 fields: PGN_130816_Navico_AmRadioFields
}

/*
  PGN: 130816
  Description: SonicHub: Zone info
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Zone Info
*/
export interface PGN_130816_Navico_ZoneInfoFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  zone?: number
}

export interface PGN_130816_Navico_ZoneInfo extends PGN {
 fields: PGN_130816_Navico_ZoneInfoFields
}

/*
  PGN: 130816
  Description: SonicHub: Source
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Source
*/
export interface PGN_130816_Navico_SourceFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  source?: enums.SonichubSource|number
}

export interface PGN_130816_Navico_Source extends PGN {
 fields: PGN_130816_Navico_SourceFields
}

/*
  PGN: 130816
  Description: SonicHub: Source List
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Source List
*/
export interface PGN_130816_Navico_SourceListFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  sourceId?: number
  a?: number
  text?: string
}

export interface PGN_130816_Navico_SourceList extends PGN {
 fields: PGN_130816_Navico_SourceListFields
}

/*
  PGN: 130816
  Description: SonicHub: Control
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Control
*/
export interface PGN_130816_Navico_ControlFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: enums.FusionMuteCommand|number
}

export interface PGN_130816_Navico_Control extends PGN {
 fields: PGN_130816_Navico_ControlFields
}

/*
  PGN: 130816
  Description: SonicHub: FM Radio
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == FM Radio
*/
export interface PGN_130816_Navico_FmRadioFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: enums.SonichubTuning|number
  frequency?: number
  noiseLevel?: number
  signalLevel?: number
  reserved11?: number
  text?: string
}

export interface PGN_130816_Navico_FmRadio extends PGN {
 fields: PGN_130816_Navico_FmRadioFields
}

/*
  PGN: 130816
  Description: SonicHub: Playlist
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Playlist
*/
export interface PGN_130816_Navico_PlaylistFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: enums.SonichubPlaylist|number
  a?: number
  currentTrack?: number
  tracks?: number
  length?: string
  positionInTrack?: string
}

export interface PGN_130816_Navico_Playlist extends PGN {
 fields: PGN_130816_Navico_PlaylistFields
}

/*
  PGN: 130816
  Description: SonicHub: Track
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Track
*/
export interface PGN_130816_Navico_TrackFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: number
  text?: string
}

export interface PGN_130816_Navico_Track extends PGN {
 fields: PGN_130816_Navico_TrackFields
}

/*
  PGN: 130816
  Description: SonicHub: Artist
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Artist
*/
export interface PGN_130816_Navico_ArtistFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: number
  text?: string
}

export interface PGN_130816_Navico_Artist extends PGN {
 fields: PGN_130816_Navico_ArtistFields
}

/*
  PGN: 130816
  Description: SonicHub: Album
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Album
*/
export interface PGN_130816_Navico_AlbumFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: number
  text?: string
}

export interface PGN_130816_Navico_Album extends PGN {
 fields: PGN_130816_Navico_AlbumFields
}

/*
  PGN: 130816
  Description: SonicHub: Menu Item
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Menu Item
*/
export interface PGN_130816_Navico_MenuItemFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: number
  c?: number
  d?: number
  e?: number
  text?: string
}

export interface PGN_130816_Navico_MenuItem extends PGN {
 fields: PGN_130816_Navico_MenuItemFields
}

/*
  PGN: 130816
  Description: SonicHub: Zones
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Zones
*/
export interface PGN_130816_Navico_ZonesFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  zones?: number
}

export interface PGN_130816_Navico_Zones extends PGN {
 fields: PGN_130816_Navico_ZonesFields
}

/*
  PGN: 130816
  Description: SonicHub: Max Volume
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Max Volume
*/
export interface PGN_130816_Navico_MaxVolumeFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  zone?: number
  level?: number
}

export interface PGN_130816_Navico_MaxVolume extends PGN {
 fields: PGN_130816_Navico_MaxVolumeFields
}

/*
  PGN: 130816
  Description: SonicHub: Volume
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Volume
*/
export interface PGN_130816_Navico_VolumeFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  zone?: number
  level?: number
}

export interface PGN_130816_Navico_Volume extends PGN {
 fields: PGN_130816_Navico_VolumeFields
}

/*
  PGN: 130816
  Description: SonicHub: Init #1
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Init #1
*/
export interface PGN_130816_Navico_Init1Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
}

export interface PGN_130816_Navico_Init1 extends PGN {
 fields: PGN_130816_Navico_Init1Fields
}

/*
  PGN: 130816
  Description: SonicHub: Position
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Position
*/
export interface PGN_130816_Navico_PositionFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  position?: string
}

export interface PGN_130816_Navico_Position extends PGN {
 fields: PGN_130816_Navico_PositionFields
}

/*
  PGN: 130816
  Description: SonicHub: Init #3
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Init #3
*/
export interface PGN_130816_Navico_Init3Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  a?: number
  b?: number
}

export interface PGN_130816_Navico_Init3 extends PGN {
 fields: PGN_130816_Navico_Init3Fields
}

/*
  PGN: 130816
  Description: Simrad: Text Message
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Text
*/
export interface PGN_130816_Simrad_TextFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SimnetCommand|number
  a?: number
  b?: number
  c?: number
  sid?: number
  prio?: number
  text?: string
}

export interface PGN_130816_Simrad_Text extends PGN {
 fields: PGN_130816_Simrad_TextFields
}

/*
  PGN: 130817
  Description: Navico: Unknown
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
*/
export interface PGN_130817_NavicoFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: number
  b?: number
  c?: number
  d?: number
  e?: number
}

export interface PGN_130817_Navico extends PGN {
 fields: PGN_130817_NavicoFields
}

/*
  PGN: 130817
  Description: Lowrance: Product Information
  Match: Manufacturer Code == Lowrance
  Match: Industry Code == Marine Industry
*/
export interface PGN_130817_LowranceFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  productCode?: number
  model?: string
  a?: number
  b?: number
  c?: number
  firmwareVersion?: string
  firmwareDate?: string
  firmwareTime?: string
}

export interface PGN_130817_Lowrance extends PGN {
 fields: PGN_130817_LowranceFields
}

/*
  PGN: 130818
  Description: Simnet: Reprogram Data
*/
export interface PGN_130818Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  version?: number
  sequence?: number
  data?: number
}

export interface PGN_130818 extends PGN {
 fields: PGN_130818Fields
}

/*
  PGN: 130819
  Description: Simnet: Request Reprogram
*/
export interface PGN_130819Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130819 extends PGN {
 fields: PGN_130819Fields
}

/*
  PGN: 130820
  Description: Simnet: Reprogram Status
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130820_SimradFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  status?: number
  reserved6?: number
}

export interface PGN_130820_Simrad extends PGN {
 fields: PGN_130820_SimradFields
}

/*
  PGN: 130820
  Description: Furuno: Unknown 130820
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130820_FurunoFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: number
  b?: number
  c?: number
  d?: number
  e?: number
}

export interface PGN_130820_Furuno extends PGN {
 fields: PGN_130820_FurunoFields
}

/*
  PGN: 130820
  Description: Fusion: Versions
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == API Version
*/
export interface PGN_130820_FusionElectronics_ApiVersionFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId?: enums.FusionStatusMessageId|number
  hwVersionMajor?: number
  hwVersionMinor?: number
  swVersionMajor?: number
  swVersionMinor?: number
  buildNumber?: number
}

export interface PGN_130820_FusionElectronics_ApiVersion extends PGN {
 fields: PGN_130820_FusionElectronics_ApiVersionFields
}

/*
  PGN: 130820
  Description: Fusion: Source
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Source
*/
export interface PGN_130820_FusionElectronics_SourceFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId?: enums.FusionStatusMessageId|number
  sourceId?: number
  currentSourceId?: number
  sourceType?: enums.FusionSourceType|number
  flags?: number
  source?: string
}

export interface PGN_130820_FusionElectronics_Source extends PGN {
 fields: PGN_130820_FusionElectronics_SourceFields
}

/*
  PGN: 130820
  Description: Fusion: Source Count
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Source Count
*/
export interface PGN_130820_FusionElectronics_SourceCountFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId?: enums.FusionStatusMessageId|number
  sourceCount?: number
}

export interface PGN_130820_FusionElectronics_SourceCount extends PGN {
 fields: PGN_130820_FusionElectronics_SourceCountFields
}

/*
  PGN: 130820
  Description: Fusion: Media
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Track Info
*/
export interface PGN_130820_FusionElectronics_TrackInfoFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  flags?: enums.FusionPlayStatus|number
  track?: number
  trackCount?: number
  length?: string
  positionInTrack?: string
}

export interface PGN_130820_FusionElectronics_TrackInfo extends PGN {
 fields: PGN_130820_FusionElectronics_TrackInfoFields
}

/*
  PGN: 130820
  Description: Fusion: Track Name
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Track Title
*/
export interface PGN_130820_FusionElectronics_TrackTitleFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  index?: number
  track?: string
}

export interface PGN_130820_FusionElectronics_TrackTitle extends PGN {
 fields: PGN_130820_FusionElectronics_TrackTitleFields
}

/*
  PGN: 130820
  Description: Fusion: Artist Name
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Track Artist
*/
export interface PGN_130820_FusionElectronics_TrackArtistFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  index?: number
  artist?: string
}

export interface PGN_130820_FusionElectronics_TrackArtist extends PGN {
 fields: PGN_130820_FusionElectronics_TrackArtistFields
}

/*
  PGN: 130820
  Description: Fusion: Album Name
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Track Album
*/
export interface PGN_130820_FusionElectronics_TrackAlbumFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  index?: number
  album?: string
}

export interface PGN_130820_FusionElectronics_TrackAlbum extends PGN {
 fields: PGN_130820_FusionElectronics_TrackAlbumFields
}

/*
  PGN: 130820
  Description: Fusion: Device Name
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Unit Name
*/
export interface PGN_130820_FusionElectronics_UnitNameFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  name?: string
}

export interface PGN_130820_FusionElectronics_UnitName extends PGN {
 fields: PGN_130820_FusionElectronics_UnitNameFields
}

/*
  PGN: 130820
  Description: Fusion: Zone Name
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Zone Name
*/
export interface PGN_130820_FusionElectronics_ZoneNameFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  number: number
  name?: string
}

export interface PGN_130820_FusionElectronics_ZoneName extends PGN {
 fields: PGN_130820_FusionElectronics_ZoneNameFields
}

/*
  PGN: 130820
  Description: Fusion: Track Position
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Track Progress
*/
export interface PGN_130820_FusionElectronics_TrackProgressFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  progress?: string
}

export interface PGN_130820_FusionElectronics_TrackProgress extends PGN {
 fields: PGN_130820_FusionElectronics_TrackProgressFields
}

/*
  PGN: 130820
  Description: Fusion: Tuner
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Tuner
*/
export interface PGN_130820_FusionElectronics_TunerFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: enums.FusionRadioSource|number
  scanning?: number
  frequency?: number
  signalStrength?: number
  track?: string
}

export interface PGN_130820_FusionElectronics_Tuner extends PGN {
 fields: PGN_130820_FusionElectronics_TunerFields
}

/*
  PGN: 130820
  Description: Fusion: MARINE_TUNER
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Marine Tuner
*/
export interface PGN_130820_FusionElectronics_MarineTunerFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  channel?: number
  signalStrength?: number
  name?: string
}

export interface PGN_130820_FusionElectronics_MarineTuner extends PGN {
 fields: PGN_130820_FusionElectronics_MarineTunerFields
}

/*
  PGN: 130820
  Description: Fusion: Marine Squelch
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Marine Squelch
*/
export interface PGN_130820_FusionElectronics_MarineSquelchFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  squelch?: number
}

export interface PGN_130820_FusionElectronics_MarineSquelch extends PGN {
 fields: PGN_130820_FusionElectronics_MarineSquelchFields
}

/*
  PGN: 130820
  Description: Fusion: Marine Scan Mode
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Marine Scan Mode
*/
export interface PGN_130820_FusionElectronics_MarineScanModeFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  scan?: enums.YesNo|number
}

export interface PGN_130820_FusionElectronics_MarineScanMode extends PGN {
 fields: PGN_130820_FusionElectronics_MarineScanModeFields
}

/*
  PGN: 130820
  Description: Fusion: Menu Item
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Menu Item
*/
export interface PGN_130820_FusionElectronics_MenuItemFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  itemIndex?: number
  flags?: number
  lockId?: number
  text?: string
}

export interface PGN_130820_FusionElectronics_MenuItem extends PGN {
 fields: PGN_130820_FusionElectronics_MenuItemFields
}

/*
  PGN: 130820
  Description: Fusion: Aux Gain
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Aux Gain
*/
export interface PGN_130820_FusionElectronics_AuxGainFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  gain?: number
}

export interface PGN_130820_FusionElectronics_AuxGain extends PGN {
 fields: PGN_130820_FusionElectronics_AuxGainFields
}

/*
  PGN: 130820
  Description: Fusion: USB Repeat Status
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Setting
  Match: ID == USB repeat
*/
export interface PGN_130820_FusionElectronics_Setting_UsbRepeatFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  id?: enums.FusionSetting|number
  status?: enums.FusionRepeatStatus|number
}

export interface PGN_130820_FusionElectronics_Setting_UsbRepeat extends PGN {
 fields: PGN_130820_FusionElectronics_Setting_UsbRepeatFields
}

/*
  PGN: 130820
  Description: Fusion: Setting
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Setting
*/
export interface PGN_130820_FusionElectronics_SettingFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  id?: enums.FusionSetting|number
  value?: number
}

export interface PGN_130820_FusionElectronics_Setting extends PGN {
 fields: PGN_130820_FusionElectronics_SettingFields
}

/*
  PGN: 130820
  Description: Fusion: Settings
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Settings
*/
export interface PGN_130820_FusionElectronics_SettingsFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  count?: number
  id?: enums.FusionSetting|number
  value?: number
  list: any[]
}

export interface PGN_130820_FusionElectronics_Settings extends PGN {
 fields: PGN_130820_FusionElectronics_SettingsFields
}

/*
  PGN: 130820
  Description: Fusion: Mute
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Mute
*/
export interface PGN_130820_FusionElectronics_MuteFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  mute?: enums.FusionMuteCommand|number
}

export interface PGN_130820_FusionElectronics_Mute extends PGN {
 fields: PGN_130820_FusionElectronics_MuteFields
}

/*
  PGN: 130820
  Description: Fusion: Balance
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Balance
*/
export interface PGN_130820_FusionElectronics_BalanceFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone: number
  value?: number
}

export interface PGN_130820_FusionElectronics_Balance extends PGN {
 fields: PGN_130820_FusionElectronics_BalanceFields
}

/*
  PGN: 130820
  Description: Fusion: Low Pass Filter
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Low Pass Filter
*/
export interface PGN_130820_FusionElectronics_LowPassFilterFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone: number
  filter?: number
}

export interface PGN_130820_FusionElectronics_LowPassFilter extends PGN {
 fields: PGN_130820_FusionElectronics_LowPassFilterFields
}

/*
  PGN: 130820
  Description: Fusion: Sublevels
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Sublevels
*/
export interface PGN_130820_FusionElectronics_SublevelsFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone1?: number
  zone2?: number
  zone3?: number
  zone4?: number
}

export interface PGN_130820_FusionElectronics_Sublevels extends PGN {
 fields: PGN_130820_FusionElectronics_SublevelsFields
}

/*
  PGN: 130820
  Description: Fusion: EQ
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Tone
*/
export interface PGN_130820_FusionElectronics_ToneFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone: number
  bass?: number
  mid?: number
  treble?: number
}

export interface PGN_130820_FusionElectronics_Tone extends PGN {
 fields: PGN_130820_FusionElectronics_ToneFields
}

/*
  PGN: 130820
  Description: Fusion: Volume Limits
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Volume Limits
*/
export interface PGN_130820_FusionElectronics_VolumeLimitsFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone1VolumeLimit?: number
  zone2VolumeLimit?: number
  zone3VolumeLimit?: number
  zone4VolumeLimit?: number
}

export interface PGN_130820_FusionElectronics_VolumeLimits extends PGN {
 fields: PGN_130820_FusionElectronics_VolumeLimitsFields
}

/*
  PGN: 130820
  Description: Fusion: Volumes
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Volume
*/
export interface PGN_130820_FusionElectronics_VolumeFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone1?: number
  zone2?: number
  zone3?: number
  zone4?: number
}

export interface PGN_130820_FusionElectronics_Volume extends PGN {
 fields: PGN_130820_FusionElectronics_VolumeFields
}

/*
  PGN: 130820
  Description: Fusion: Capabilities
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Capabilities
*/
export interface PGN_130820_FusionElectronics_CapabilitiesFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone1?: number
  zone2?: number
  zone3?: number
  zone4?: number
  global?: number
}

export interface PGN_130820_FusionElectronics_Capabilities extends PGN {
 fields: PGN_130820_FusionElectronics_CapabilitiesFields
}

/*
  PGN: 130820
  Description: Fusion: Line Level Control
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Line Level Control
*/
export interface PGN_130820_FusionElectronics_LineLevelControlFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone: number
  control?: number
}

export interface PGN_130820_FusionElectronics_LineLevelControl extends PGN {
 fields: PGN_130820_FusionElectronics_LineLevelControlFields
}

/*
  PGN: 130820
  Description: Fusion: Power State
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Power
*/
export interface PGN_130820_FusionElectronics_PowerFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  state?: enums.FusionPowerState|number
}

export interface PGN_130820_FusionElectronics_Power extends PGN {
 fields: PGN_130820_FusionElectronics_PowerFields
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Sirius
*/
export interface PGN_130820_FusionElectronics_SiriusFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  comState?: enums.FusionSiriusComState|number
  alert?: enums.FusionSiriusComState|number
  advisoryChannel?: number
  tuningMode?: enums.FusionSiriusTuningMode|number
}

export interface PGN_130820_FusionElectronics_Sirius extends PGN {
 fields: PGN_130820_FusionElectronics_SiriusFields
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Channel
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Channel
*/
export interface PGN_130820_FusionElectronics_SiriusXmChannelFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  channelNumber?: number
  channel?: string
}

export interface PGN_130820_FusionElectronics_SiriusXmChannel extends PGN {
 fields: PGN_130820_FusionElectronics_SiriusXmChannelFields
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Title
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Title
*/
export interface PGN_130820_FusionElectronics_SiriusXmTitleFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  channel?: number
  title?: string
}

export interface PGN_130820_FusionElectronics_SiriusXmTitle extends PGN {
 fields: PGN_130820_FusionElectronics_SiriusXmTitleFields
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Artist
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Artist
*/
export interface PGN_130820_FusionElectronics_SiriusXmArtistFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  channel?: number
  artist?: string
}

export interface PGN_130820_FusionElectronics_SiriusXmArtist extends PGN {
 fields: PGN_130820_FusionElectronics_SiriusXmArtistFields
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Content Info
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Genre
*/
export interface PGN_130820_FusionElectronics_SiriusXmGenreFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  channel?: number
  genre?: string
}

export interface PGN_130820_FusionElectronics_SiriusXmGenre extends PGN {
 fields: PGN_130820_FusionElectronics_SiriusXmGenreFields
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Category
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Category
*/
export interface PGN_130820_FusionElectronics_SiriusXmCategoryFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  channel?: number
  name?: string
}

export interface PGN_130820_FusionElectronics_SiriusXmCategory extends PGN {
 fields: PGN_130820_FusionElectronics_SiriusXmCategoryFields
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Signal
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXm Signal
*/
export interface PGN_130820_FusionElectronics_SiriusXmSignalFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  signal?: number
}

export interface PGN_130820_FusionElectronics_SiriusXmSignal extends PGN {
 fields: PGN_130820_FusionElectronics_SiriusXmSignalFields
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Presets
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Presets
*/
export interface PGN_130820_FusionElectronics_SiriusXmPresetsFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: number
  count?: number
  values?: number
}

export interface PGN_130820_FusionElectronics_SiriusXmPresets extends PGN {
 fields: PGN_130820_FusionElectronics_SiriusXmPresetsFields
}

/*
  PGN: 130821
  Description: Navico: ASCII Data
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
*/
export interface PGN_130821_NavicoFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: number
  message?: string
}

export interface PGN_130821_Navico extends PGN {
 fields: PGN_130821_NavicoFields
}

/*
  PGN: 130821
  Description: Furuno: Unknown 130821
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130821_FurunoFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: number
  a?: number
  b?: number
  c?: number
  d?: number
  e?: number
  f?: number
  g?: number
  h?: number
  i?: number
}

export interface PGN_130821_Furuno extends PGN {
 fields: PGN_130821_FurunoFields
}

/*
  PGN: 130822
  Description: Navico: Unknown 1
*/
export interface PGN_130822Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  data?: number
}

export interface PGN_130822 extends PGN {
 fields: PGN_130822Fields
}

/*
  PGN: 130823
  Description: Maretron: Proprietary Temperature High Range
*/
export interface PGN_130823Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: number
  instance: number
  source?: enums.TemperatureSource|number
  actualTemperature?: number
  setTemperature?: number
}

export interface PGN_130823 extends PGN {
 fields: PGN_130823Fields
}

/*
  PGN: 130824
  Description: B&G: key-value data
  Explanation: Contains any number of key/value pairs, sent by various B&G devices such as MFDs and Sailing Processors.
  Match: Manufacturer Code == B & G
  Match: Industry Code == Marine Industry
*/
export interface PGN_130824_BGFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  key?: string
  length?: string
  value?: string
  list: any[]
}

export interface PGN_130824_BG extends PGN {
 fields: PGN_130824_BGFields
}

/*
  PGN: 130824
  Description: Maretron: Annunciator
  Match: Manufacturer Code == Maretron
  Match: Industry Code == Marine Industry
*/
export interface PGN_130824_MaretronFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  field4?: number
  field5?: number
  field6?: number
  field7?: number
  field8?: number
}

export interface PGN_130824_Maretron extends PGN {
 fields: PGN_130824_MaretronFields
}

/*
  PGN: 130825
  Description: Navico: Unknown 2
*/
export interface PGN_130825Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  data?: number
}

export interface PGN_130825 extends PGN {
 fields: PGN_130825Fields
}

/*
  PGN: 130827
  Description: Lowrance: unknown
*/
export interface PGN_130827Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: number
  b?: number
  c?: number
  d?: number
  e?: number
  f?: number
}

export interface PGN_130827 extends PGN {
 fields: PGN_130827Fields
}

/*
  PGN: 130828
  Description: Simnet: Set Serial Number
*/
export interface PGN_130828Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130828 extends PGN {
 fields: PGN_130828Fields
}

/*
  PGN: 130831
  Description: Suzuki: Engine and Storage Device Config
*/
export interface PGN_130831Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130831 extends PGN {
 fields: PGN_130831Fields
}

/*
  PGN: 130832
  Description: Simnet: Fuel Used - High Resolution
*/
export interface PGN_130832Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130832 extends PGN {
 fields: PGN_130832Fields
}

/*
  PGN: 130833
  Description: B&G: User and Remote rename
*/
export interface PGN_130833Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  dataType?: string
  length?: number
  reserved6?: number
  decimals?: enums.BandgDecimals|number
  shortName?: string
  longName?: string
}

export interface PGN_130833 extends PGN {
 fields: PGN_130833Fields
}

/*
  PGN: 130834
  Description: Simnet: Engine and Tank Configuration
*/
export interface PGN_130834Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130834 extends PGN {
 fields: PGN_130834Fields
}

/*
  PGN: 130835
  Description: Simnet: Set Engine and Tank Configuration
*/
export interface PGN_130835Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130835 extends PGN {
 fields: PGN_130835Fields
}

/*
  PGN: 130836
  Description: Simnet: Fluid Level Sensor Configuration
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130836_SimradFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  c?: number
  device: number
  instance: number
  f?: number
  tankType?: enums.TankType|number
  capacity?: number
  g?: number
  h?: number
  i?: number
}

export interface PGN_130836_Simrad extends PGN {
 fields: PGN_130836_SimradFields
}

/*
  PGN: 130836
  Description: Maretron: Switch Status Counter
  Match: Manufacturer Code == Maretron
  Match: Industry Code == Marine Industry
*/
export interface PGN_130836_MaretronFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  instance: number
  indicatorNumber?: number
  startDate?: string
  startTime?: string
  offCounter?: number
  onCounter?: number
  errorCounter?: number
  switchStatus?: enums.OffOn|number
  reserved12?: number
}

export interface PGN_130836_Maretron extends PGN {
 fields: PGN_130836_MaretronFields
}

/*
  PGN: 130837
  Description: Simnet: Fuel Flow Turbine Configuration
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130837_SimradFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130837_Simrad extends PGN {
 fields: PGN_130837_SimradFields
}

/*
  PGN: 130837
  Description: Maretron: Switch Status Timer
  Match: Manufacturer Code == Maretron
  Match: Industry Code == Marine Industry
*/
export interface PGN_130837_MaretronFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  instance: number
  indicatorNumber?: number
  startDate?: string
  startTime?: string
  accumulatedOffPeriod?: string
  accumulatedOnPeriod?: string
  accumulatedErrorPeriod?: string
  switchStatus?: enums.OffOn|number
  reserved12?: number
}

export interface PGN_130837_Maretron extends PGN {
 fields: PGN_130837_MaretronFields
}

/*
  PGN: 130838
  Description: Simnet: Fluid Level Warning
*/
export interface PGN_130838Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130838 extends PGN {
 fields: PGN_130838Fields
}

/*
  PGN: 130839
  Description: Simnet: Pressure Sensor Configuration
*/
export interface PGN_130839Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130839 extends PGN {
 fields: PGN_130839Fields
}

/*
  PGN: 130840
  Description: Simnet: Data User Group Configuration
*/
export interface PGN_130840Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130840 extends PGN {
 fields: PGN_130840Fields
}

/*
  PGN: 130842
  Description: Simnet: AIS Class B static data (msg 24 Part A)
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130842_SimradFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: number
  repeatIndicator?: enums.RepeatIndicator|number
  d?: number
  e?: number
  userId: string
  name?: string
}

export interface PGN_130842_Simrad extends PGN {
 fields: PGN_130842_SimradFields
}

/*
  PGN: 130842
  Description: Furuno: Six Degrees Of Freedom Movement
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130842_FurunoFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: number
  b?: number
  c?: number
  d?: number
  e?: number
  f?: number
  g?: number
  h?: number
  i?: number
}

export interface PGN_130842_Furuno extends PGN {
 fields: PGN_130842_FurunoFields
}

/*
  PGN: 130842
  Description: Simnet: AIS Class B static data (msg 24 Part B)
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Message ID == Msg 24 Part B
*/
export interface PGN_130842_Simrad_Msg24PartBFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: number
  repeatIndicator?: enums.RepeatIndicator|number
  d?: number
  e?: number
  userId: string
  typeOfShip?: enums.ShipType|number
  vendorId?: string
  callsign?: string
  length?: number
  beam?: number
  positionReferenceFromStarboard?: number
  positionReferenceFromBow?: number
  mothershipUserId: string
  spare17?: string
  reserved18?: number
}

export interface PGN_130842_Simrad_Msg24PartB extends PGN {
 fields: PGN_130842_Simrad_Msg24PartBFields
}

/*
  PGN: 130843
  Description: Furuno: Heel Angle, Roll Information
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130843_FurunoFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: number
  b?: number
  yaw?: number
  pitch?: number
  roll?: number
}

export interface PGN_130843_Furuno extends PGN {
 fields: PGN_130843_FurunoFields
}

/*
  PGN: 130843
  Description: Simnet: Sonar Status, Frequency and DSP Voltage
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130843_SimradFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130843_Simrad extends PGN {
 fields: PGN_130843_SimradFields
}

/*
  PGN: 130845
  Description: Furuno: Multi Sats In View Extended
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130845_FurunoFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130845_Furuno extends PGN {
 fields: PGN_130845_FurunoFields
}

/*
  PGN: 130845
  Description: Simnet: Key Value
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130845_SimradFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  address?: number
  repeatIndicator?: enums.RepeatIndicator|number
  displayGroup?: enums.SimnetDisplayGroup|number
  reserved7?: number
  key?: string
  spare9?: string
  minlength?: number
  value?: string
}

export interface PGN_130845_Simrad extends PGN {
 fields: PGN_130845_SimradFields
}

/*
  PGN: 130846
  Description: Simnet: Parameter Set
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130846_SimradFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  address?: number
  b?: number
  displayGroup?: enums.SimnetDisplayGroup|number
  d?: number
  key?: string
  spare9?: string
  length?: number
  value?: string
}

export interface PGN_130846_Simrad extends PGN {
 fields: PGN_130846_SimradFields
}

/*
  PGN: 130846
  Description: Furuno: Motion Sensor Status Extended
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130846_FurunoFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

export interface PGN_130846_Furuno extends PGN {
 fields: PGN_130846_FurunoFields
}

/*
  PGN: 130847
  Description: SeaTalk: Node Statistics
*/
export interface PGN_130847Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  productCode?: number
  year?: number
  month?: number
  deviceNumber?: number
  nodeVoltage?: number
}

export interface PGN_130847 extends PGN {
 fields: PGN_130847Fields
}

/*
  PGN: 130848
  Description: SeaTalk: Waypoint Information
*/
export interface PGN_130848Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: number
  waypointName?: string
  waypointSequence?: string
  bearingToWaypointTrue?: number
  bearingToWaypointMagnetic?: number
  distanceToWaypoint?: number
}

export interface PGN_130848 extends PGN {
 fields: PGN_130848Fields
}

/*
  PGN: 130850
  Description: Simnet: AP Command
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Autopilot
*/
export interface PGN_130850_Simrad_AutopilotFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  address?: number
  reserved5?: number
  proprietaryId: enums.SimnetEventCommand|number
  apStatus?: enums.SimnetApStatus|number
  apCommand?: enums.SimnetApEvents|number
  spare9?: string
  direction?: enums.SimnetDirection|number
  angle?: number
}

export interface PGN_130850_Simrad_Autopilot extends PGN {
 fields: PGN_130850_Simrad_AutopilotFields
}

/*
  PGN: 130850
  Description: Simnet: Event Command: AP command
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == AP command
*/
export interface PGN_130850_Simrad_ApCommandFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.SimnetEventCommand|number
  unusedA?: number
  controllingDevice?: number
  event?: enums.SimnetApEvents|number
  unusedB?: number
  direction?: enums.SimnetDirection|number
  angle?: number
  unusedC?: number
}

export interface PGN_130850_Simrad_ApCommand extends PGN {
 fields: PGN_130850_Simrad_ApCommandFields
}

/*
  PGN: 130850
  Description: Simnet: Alarm
  Explanation: There may follow a PGN 130856 'Simnet: Alarm Text' message with a textual explanation of the alarm
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Alarm
*/
export interface PGN_130850_Simrad_AlarmFields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  address?: number
  reserved5?: number
  proprietaryId: enums.SimnetEventCommand|number
  reserved7?: number
  alarm?: enums.SimnetAlarm|number
  messageId?: number
  f?: number
  g?: number
}

export interface PGN_130850_Simrad_Alarm extends PGN {
 fields: PGN_130850_Simrad_AlarmFields
}

/*
  PGN: 130851
  Description: Simnet: Event Reply: AP command
*/
export interface PGN_130851Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.SimnetEventCommand|number
  b?: number
  address?: number
  event?: enums.SimnetApEvents|number
  c?: number
  direction?: enums.SimnetDirection|number
  angle?: number
  g?: number
}

export interface PGN_130851 extends PGN {
 fields: PGN_130851Fields
}

/*
  PGN: 130856
  Description: Simnet: Alarm Message
  Explanation: Usually accompanied by a PGN 130850 'Simnet: Alarm' message with the same information in binary form.
*/
export interface PGN_130856Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId?: number
  b?: number
  c?: number
  text?: string
}

export interface PGN_130856 extends PGN {
 fields: PGN_130856Fields
}

/*
  PGN: 130860
  Description: Simnet: AP Unknown 4
  Explanation: Seen as sent by AC-42 and H5000 AP only so far.
*/
export interface PGN_130860Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: number
  b?: number
  c?: number
  d?: number
  e?: number
  f?: number
}

export interface PGN_130860 extends PGN {
 fields: PGN_130860Fields
}

/*
  PGN: 130880
  Description: Airmar: Additional Weather Data
*/
export interface PGN_130880Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  c?: number
  apparentWindchillTemperature?: number
  trueWindchillTemperature?: number
  dewpoint?: number
}

export interface PGN_130880 extends PGN {
 fields: PGN_130880Fields
}

/*
  PGN: 130881
  Description: Airmar: Heater Control
*/
export interface PGN_130881Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  c?: number
  plateTemperature?: number
  airTemperature?: number
  dewpoint?: number
}

export interface PGN_130881 extends PGN {
 fields: PGN_130881Fields
}

/*
  PGN: 130918
  Description: SeaTalk: Route Information
*/
export interface PGN_130918Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  currentWaypointSequence?: number
  currentWaypointName?: string
  nextWaypointSequence?: number
  nextWaypointName?: string
  unknown?: number
  distancePositionToNextWaypoint?: number
  bearingPositionToNextWaypointTrue?: number
  bearingCurrentWaypointToNextWaypointTrue?: number
}

export interface PGN_130918 extends PGN {
 fields: PGN_130918Fields
}

/*
  PGN: 130944
  Description: Airmar: POST
*/
export interface PGN_130944Fields extends PGNFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  control: enums.AirmarPostControl|number
  reserved5?: number
  numberOfIdTestResultPairsToFollow?: number
  testId?: enums.AirmarPostId|number
  testResult?: number
}

export interface PGN_130944 extends PGN {
 fields: PGN_130944Fields
}

