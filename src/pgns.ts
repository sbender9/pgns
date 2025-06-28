export enum LightingCommand {
  Idle = 'Idle',
  DetectDevices = 'Detect Devices',
  Reboot = 'Reboot',
  FactoryReset = 'Factory Reset',
  PoweringUp = 'Powering Up',
}

export enum IndustryCode {
  Global = 'Global',
  Highway = 'Highway',
  Agriculture = 'Agriculture',
  Construction = 'Construction',
  Marine = 'Marine',
  Industrial = 'Industrial',
}

export enum ManufacturerCode {
  ArksEnterprisesInc = 'ARKS Enterprises, Inc.',
  FwMurphyenovationControls = 'FW Murphy/Enovation Controls',
  TwinDisc = 'Twin Disc',
  KohlerPowerSystems = 'Kohler Power Systems',
  HemisphereGpsInc = 'Hemisphere GPS Inc',
  BepMarine = 'BEP Marine',
  Airmar = 'Airmar',
  Maretron = 'Maretron',
  Lowrance = 'Lowrance',
  MercuryMarine = 'Mercury Marine',
  NautibusElectronicGmbH = 'Nautibus Electronic GmbH',
  BlueWaterData = 'Blue Water Data',
  Westerbeke = 'Westerbeke',
  IssproInc = 'ISSPRO Inc',
  OffshoreSystemsukLtd = 'Offshore Systems (UK) Ltd.',
  Evinrudebrp = 'Evinrude/BRP',
  CpacSystemsAb = 'CPAC Systems AB',
  XantrexTechnologyInc = 'Xantrex Technology Inc.',
  MarlinTechnologiesInc = 'Marlin Technologies, Inc.',
  YanmarMarine = 'Yanmar Marine',
  VolvoPenta = 'Volvo Penta',
  HondaMarine = 'Honda Marine',
  CarlingTechnologiesIncmoritzAerospace = 'Carling Technologies Inc. (Moritz Aerospace)',
  BeedeInstruments = 'Beede Instruments',
  FloscanInstrumentCoInc = 'Floscan Instrument Co. Inc.',
  Nobletec = 'Nobletec',
  MysticValleyCommunications = 'Mystic Valley Communications',
  Actia = 'Actia',
  DisenosYTechnologia = 'Disenos Y Technologia',
  DigitalSwitchingSystems = 'Digital Switching Systems',
  Xintexatena = 'Xintex/Atena',
  EmmiNetworkSL = 'EMMI NETWORK S.L.',
  Zf = 'ZF',
  Garmin = 'Garmin',
  YachtMonitoringSolutions = 'Yacht Monitoring Solutions',
  SailormadeMarineTelemetrytetraTechnologyLtd = 'Sailormade Marine Telemetry/Tetra Technology LTD',
  Eride = 'Eride',
  HondaMotorCompanyLtd = 'Honda Motor Company LTD',
  Groco = 'Groco',
  Actisense = 'Actisense',
  AmphenolLtwTechnology = 'Amphenol LTW Technology',
  Navico = 'Navico',
  HamiltonJet = 'Hamilton Jet',
  SeaRecovery = 'Sea Recovery',
  CoelmoSrlItaly = 'Coelmo SRL Italy',
  EmpirBus = 'Empir Bus',
  NovAtel = 'NovAtel',
  SleipnerMotorAs = 'Sleipner Motor AS',
  MbwTechnologies = 'MBW Technologies',
  FischerPanda = 'Fischer Panda',
  Icom = 'ICOM',
  Qwerty = 'Qwerty',
  Dief = 'Dief',
  BoeningAutomationstechnologieGmbHCoKg = 'Boening Automationstechnologie GmbH & Co. KG',
  KoreanMaritimeUniversity = 'Korean Maritime University',
  ThraneAndThrane = 'Thrane and Thrane',
  Mastervolt = 'Mastervolt',
  FischerPandaGenerators = 'Fischer Panda Generators',
  VictronEnergy = 'Victron Energy',
  RollsRoyceMarine = 'Rolls Royce Marine',
  ElectronicDesign = 'Electronic Design',
  NorthernLights = 'Northern Lights',
  Glendinning = 'Glendinning',
  BG = 'B & G',
  RosePointNavigationSystems = 'Rose Point Navigation Systems',
  JohnsonOutdoorsMarineElectronicsIncGeonav = 'Johnson Outdoors Marine Electronics Inc Geonav',
  Capi2 = 'Capi 2',
  BeyondMeasure = 'Beyond Measure',
  LivorsiMarine = 'Livorsi Marine',
  ComNav = 'ComNav',
  Chetco = 'Chetco',
  FusionElectronics = 'Fusion Electronics',
  StandardHorizon = 'Standard Horizon',
  TrueHeadingAb = 'True Heading AB',
  EgersundMarineElectronicsAs = 'Egersund Marine Electronics AS',
  EmTrakMarineElectronics = 'em-trak Marine Electronics',
  TohatsuCoJp = 'Tohatsu Co, JP',
  DigitalYacht = 'Digital Yacht',
  ComarSystemsLimited = 'Comar Systems Limited',
  Cummins = 'Cummins',
  VdoakaContinentalCorporation = 'VDO (aka Continental-Corporation)',
  ParkerHannifinAkaVillageMarineTech = 'Parker Hannifin aka Village Marine Tech',
  AlltekMarineElectronicsCorp = 'Alltek Marine Electronics Corp',
  SanGiorgioSEIN = 'SAN GIORGIO S.E.I.N',
  VeethreeElectronicsMarine = 'Veethree Electronics & Marine',
  HumminbirdMarineElectronics = 'Humminbird Marine Electronics',
  SiTexMarineElectronics = 'SI-TEX Marine Electronics',
  SeaCrossMarineAb = 'Sea Cross Marine AB',
  GmeAkaStandardCommunicationsPtyLtd = 'GME aka Standard Communications Pty LTD',
  OceanSatBv = 'Ocean Sat BV',
  ChetcoDigitialInstruments = 'Chetco Digitial Instruments',
  Watcheye = 'Watcheye',
  LcjCapteurs = 'Lcj Capteurs',
  AttwoodMarine = 'Attwood Marine',
  NaviopSRL = 'Naviop S.R.L.',
  VesperMarineLtd = 'Vesper Marine Ltd',
  MarinesoftCoLtd = 'Marinesoft Co. LTD',
  NoLandEngineering = 'NoLand Engineering',
  TransasUsa = 'Transas USA',
  NationalInstrumentsKorea = 'National Instruments Korea',
  NationalMarineElectronicsAssociation = 'National Marine Electronics Association',
  OnwaMarine = 'Onwa Marine',
  Webasto = 'Webasto',
  MarinecraftsouthKorea = 'Marinecraft (South Korea)',
  McMurdoGroupAkaOroliaLtd = 'McMurdo Group aka Orolia LTD',
  Advansea = 'Advansea',
  Kvh = 'KVH',
  SanJoseTechnology = 'San Jose Technology',
  YachtControl = 'Yacht Control',
  SuzukiMotorCorporation = 'Suzuki Motor Corporation',
  UsCoastGuard = 'US Coast Guard',
  ShipModuleAkaCustomware = 'Ship Module aka Customware',
  AquaticAv = 'Aquatic AV',
  AventicsGmbH = 'Aventics GmbH',
  Intellian = 'Intellian',
  SamwonIt = 'SamwonIT',
  ArltTecnologies = 'Arlt Tecnologies',
  BavariaYacts = 'Bavaria Yacts',
  DiverseYachtServices = 'Diverse Yacht Services',
  WemaUSADbaKus = 'Wema U.S.A dba KUS',
  ShenzhenJiuzhouHimunication = 'Shenzhen Jiuzhou Himunication',
  RockfordCorp = 'Rockford Corp',
  HarmanInternational = 'Harman International',
  JlAudio = 'JL Audio',
  LarsThrane = 'Lars Thrane',
  Autonnic = 'Autonnic',
  YachtDevices = 'Yacht Devices',
  ReapSystems = 'REAP Systems',
  AuElectronicsGroup = 'Au Electronics Group',
  LxNav = 'LxNav',
  LittelfuseIncformerlyCarlingTechnologies = 'Littelfuse, Inc (formerly Carling Technologies)',
  DaeMyung = 'DaeMyung',
  Woosung = 'Woosung',
  IsottaIfraSrl = 'ISOTTA IFRA srl',
  ClarionUs = 'Clarion US',
  HmiSystems = 'HMI Systems',
  OceanSignal = 'Ocean Signal',
  Seekeeper = 'Seekeeper',
  PolyPlanar = 'Poly Planar',
  FischerPandaDe = 'Fischer Panda DE',
  BroydaIndustries = 'Broyda Industries',
  CanadianAutomotive = 'Canadian Automotive',
  TidesMarine = 'Tides Marine',
  Lumishore = 'Lumishore',
  StillWaterDesignsAndAudio = 'Still Water Designs and Audio',
  BjTechnologiesbeneteau = 'BJ Technologies (Beneteau)',
  GillSensors = 'Gill Sensors',
  BlueWaterDesalination = 'Blue Water Desalination',
  Flir = 'FLIR',
  UndheimSystems = 'Undheim Systems',
  LewmarInc = 'Lewmar Inc',
  TeamSurv = 'TeamSurv',
  FellMarine = 'Fell Marine',
  Oceanvolt = 'Oceanvolt',
  Prospec = 'Prospec',
  DataPanelCorp = 'Data Panel Corp',
  L3Technologies = 'L3 Technologies',
  RhodanMarineSystems = 'Rhodan Marine Systems',
  NexfourSolutions = 'Nexfour Solutions',
  AsaElectronics = 'ASA Electronics',
  MarinesCosouthKorea = 'Marines Co (South Korea)',
  NauticOn = 'Nautic-on',
  Sentinel = 'Sentinel',
  JlMarineYstems = 'JL Marine ystems',
  Ecotronix = 'Ecotronix',
  ZontisaMarine = 'Zontisa Marine',
  ExorInternational = 'EXOR International',
  TimbolierIndustries = 'Timbolier Industries',
  TjcMicro = 'TJC Micro',
  CoxPowertrain = 'Cox Powertrain',
  BlueSeas = 'Blue Seas',
  KobeltManufacturingCoLtd = 'Kobelt Manufacturing Co. Ltd',
  BlueOceanIot = 'Blue Ocean IOT',
  XentaSystems = 'Xenta Systems',
  UltraflexSpA = 'Ultraflex SpA',
  LintestSmartBoat = 'Lintest SmartBoat',
  Soundmax = 'Soundmax',
  TeamItaliaMarineonyxMarineAutomationSRL = 'Team Italia Marine (Onyx Marine Automation s.r.l)',
  Entratech = 'Entratech',
  ItcInc = 'ITC Inc.',
  TheMarineGuardianLlc = 'The Marine Guardian LLC',
  SonicCorporation = 'Sonic Corporation',
  ProNav = 'ProNav',
  VetusMaxwellInc = 'Vetus Maxwell INC.',
  LithiumPros = 'Lithium Pros',
  Boatrax = 'Boatrax',
  MarolCoLtd = 'Marol Co ltd',
  CalypsoInstruments = 'CALYPSO Instruments',
  SpotZeroWater = 'Spot Zero Water',
  LithionicsBatteryLlc = 'Lithionics Battery LLC',
  QuickTeckElectronicsLtd = 'Quick-teck Electronics Ltd',
  UnidenAmerica = 'Uniden America',
  Nauticoncept = 'Nauticoncept',
  ShadowCasterLedLightingLlc = 'Shadow-Caster LED lighting LLC',
  WetSoundsLlc = 'Wet Sounds, LLC',
  ETACircuitBreakers = 'E-T-A Circuit Breakers',
  Scheiber = 'Scheiber',
  SmartYachtsInternationalLimited = 'Smart Yachts International Limited',
  Dockmate = 'Dockmate',
  BobsMachine = 'Bobs Machine',
  L3HarrisAsv = 'L3Harris ASV',
  BalmarLlc = 'Balmar LLC',
  ElettromediaSpa = 'Elettromedia spa',
  Electromaax = 'Electromaax',
  AcrossOceansSystemsLtd = 'Across Oceans Systems Ltd.',
  KiwiYachting = 'Kiwi Yachting',
  BsbArtificialIntelligenceGmbH = 'BSB Artificial Intelligence GmbH',
  OrcaTechnologoesAs = 'Orca Technologoes AS',
  TbsElectronicsBv = 'TBS Electronics BV',
  TechnotonElectroics = 'Technoton Electroics',
  MgEnergySystemsBV = 'MG Energy Systems B.V.',
  SeaMacineRoboticsInc = 'Sea Macine Robotics Inc.',
  VistaManufacturing = 'Vista Manufacturing',
  Zipwake = 'Zipwake',
  SailmonBv = 'Sailmon BV',
  AirmoniqProKft = 'Airmoniq Pro Kft',
  SierraMarine = 'Sierra Marine',
  XinuoInformationTechnologyxiamen = 'Xinuo Information Technology (Xiamen)',
  Septentrio = 'Septentrio',
  NkeMarineElecronics = 'NKE Marine Elecronics',
  SuperTrackAps = 'SuperTrack Aps',
  HondaElectronicsCoLtd = 'Honda Electronics Co., LTD',
  RaritanEngineeringCompanyInc = 'Raritan Engineering Company, Inc',
  IntegratedPowerSolutionsAg = 'Integrated Power Solutions AG',
  InteractiveTechnologiesInc = 'Interactive Technologies, Inc.',
  LtgTech = 'LTG-Tech',
  EnergySolutionsukLtd = 'Energy Solutions (UK) LTD.',
  WattFuelCellCorp = 'WATT Fuel Cell Corp',
  ProMainer = 'Pro Mainer',
  DragonflyEnergy = 'Dragonfly Energy',
  KodenElectronicsCoLtd = 'Koden Electronics Co., Ltd',
  HumphreeAb = 'Humphree AB',
  HinkleyYachts = 'Hinkley Yachts',
  GlobalMarineManagementGmbHgmm = 'Global Marine Management GmbH (GMM)',
  TriskelMarineLtd = 'Triskel Marine Ltd',
  WarwickControlTechnologies = 'Warwick Control Technologies',
  DolphinCharger = 'Dolphin Charger',
  BarnacleSystemsInc = 'Barnacle Systems Inc',
  RadianIoTInc = 'Radian IoT, Inc.',
  OceanLedMarineLtd = 'Ocean LED Marine Ltd',
  BluNav = 'BluNav',
  OvanantongSaiyangElectronicsCoLtd = 'OVA (Nantong Saiyang Electronics Co., Ltd)',
  RadPropulsion = 'RAD Propulsion',
  ElectricYacht = 'Electric Yacht',
  ElcoMotorYachts = 'Elco Motor Yachts',
  TecnosealFoundrySRL = 'Tecnoseal Foundry S.r.l',
  ProChargingSystemsLlc = 'Pro Charging Systems, LLC',
  EvexCoLtd = 'EVEX Co., LTD',
  GobiusSensorTechnologyAb = 'Gobius Sensor Technology AB',
  ArcoMarine = 'Arco Marine',
  LencoMarineInc = 'Lenco Marine Inc.',
  NaocontrolSL = 'Naocontrol S.L.',
  Revatek = 'Revatek',
  Aeolionics = 'Aeolionics',
  PredictWindLtd = 'PredictWind Ltd',
  EgisMobileElectric = 'Egis Mobile Electric',
  StarboardYachtGroup = 'Starboard Yacht Group',
  RoswellMarine = 'Roswell Marine',
  EPropulsionguangdongEPropulsionTechnologyLtd = 'ePropulsion (Guangdong ePropulsion Technology Ltd.)',
  MicroAirLlc = 'Micro-Air LLC',
  VitalBattery = 'Vital Battery',
  RideControllerLlc = 'Ride Controller LLC',
  TocaroBlue = 'Tocaro Blue',
  VanquishYachts = 'Vanquish Yachts',
  FtTechnologies = 'FT Technologies',
  AlpsAlpineCoLtd = 'Alps Alpine Co., Ltd.',
  EForceMarine = 'E-Force Marine',
  CmcMarine = 'CMC Marine',
  NanjingSandemarineInformationTechnologyCoLtd = 'Nanjing Sandemarine Information Technology Co., Ltd.',
  TeleflexMarineseaStarSolutions = 'Teleflex Marine (SeaStar Solutions)',
  Raymarine = 'Raymarine',
  Navionics = 'Navionics',
  JapanRadioCo = 'Japan Radio Co',
  NorthstarTechnologies = 'Northstar Technologies',
  Furuno = 'Furuno',
  Trimble = 'Trimble',
  Simrad = 'Simrad',
  Litton = 'Litton',
  KvasarAb = 'Kvasar AB',
  Mmp = 'MMP',
  VectorCantech = 'Vector Cantech',
  YamahaMarine = 'Yamaha Marine',
  FariaInstruments = 'Faria Instruments',
}

export enum AisMessageId {
  ScheduledClassAPositionReport = 'Scheduled Class A position report',
  AssignedScheduledClassAPositionReport = 'Assigned scheduled Class A position report',
  InterrogatedClassAPositionReport = 'Interrogated Class A position report',
  BaseStationReport = 'Base station report',
  StaticAndVoyageRelatedData = 'Static and voyage related data',
  BinaryAddressedMessage = 'Binary addressed message',
  BinaryAcknowledgement = 'Binary acknowledgement',
  BinaryBroadcastMessage = 'Binary broadcast message',
  StandardSarAircraftPositionReport = 'Standard SAR aircraft position report',
  UtcdateInquiry = 'UTC/date inquiry',
  UtcdateResponse = 'UTC/date response',
  SafetyRelatedAddressedMessage = 'Safety related addressed message',
  SafetyRelatedAcknowledgement = 'Safety related acknowledgement',
  SatetyRelatedBroadcastMessage = 'Satety related broadcast message',
  Interrogation = 'Interrogation',
  AssignmentModeCommand = 'Assignment mode command',
  DgnssBroadcastBinaryMessage = 'DGNSS broadcast binary message',
  StandardClassBPositionReport = 'Standard Class B position report',
  ExtendedClassBPositionReport = 'Extended Class B position report',
  DataLinkManagementMessage = 'Data link management message',
  AtonReport = 'ATON report',
  ChannelManagement = 'Channel management',
  GroupAssignmentCommand = 'Group assignment command',
  StaticDataReport = 'Static data report',
  SingleSlotBinaryMessage = 'Single slot binary message',
  MultipleSlotBinaryMessage = 'Multiple slot binary message',
  PositionReportForLongRangeApplications = 'Position report for long range applications',
}

export enum ShipType {
  Unavailable = 'Unavailable',
  WingInGround = 'Wing In Ground',
  WingInGroundhazardCatX = 'Wing In Ground (hazard cat X)',
  WingInGroundhazardCatY = 'Wing In Ground (hazard cat Y)',
  WingInGroundhazardCatZ = 'Wing In Ground (hazard cat Z)',
  WingInGroundhazardCatOs = 'Wing In Ground (hazard cat OS)',
  WingInGroundnoAdditionalInformation = 'Wing In Ground (no additional information)',
  Fishing = 'Fishing',
  Towing = 'Towing',
  TowingExceeds200MOrWiderThan25M = 'Towing exceeds 200m or wider than 25m',
  EngagedInDredgingOrUnderwaterOperations = 'Engaged in dredging or underwater operations',
  EngagedInDivingOperations = 'Engaged in diving operations',
  EngagedInMilitaryOperations = 'Engaged in military operations',
  Sailing = 'Sailing',
  Pleasure = 'Pleasure',
  HighSpeedCraft = 'High speed craft',
  HighSpeedCrafthazardCatX = 'High speed craft (hazard cat X)',
  HighSpeedCrafthazardCatY = 'High speed craft (hazard cat Y)',
  HighSpeedCrafthazardCatZ = 'High speed craft (hazard cat Z)',
  HighSpeedCrafthazardCatOs = 'High speed craft (hazard cat OS)',
  HighSpeedCraftnoAdditionalInformation = 'High speed craft (no additional information)',
  PilotVessel = 'Pilot vessel',
  Sar = 'SAR',
  Tug = 'Tug',
  PortTender = 'Port tender',
  AntiPollution = 'Anti-pollution',
  LawEnforcement = 'Law enforcement',
  Spare = 'Spare',
  Spare2 = 'Spare #2',
  Medical = 'Medical',
  ShipsAndAircraftOfStatesNotPartiesToAnArmedConflict = 'Ships and aircraft of States not parties to an armed conflict',
  PassengerShip = 'Passenger ship',
  PassengerShiphazardCatX = 'Passenger ship (hazard cat X)',
  PassengerShiphazardCatY = 'Passenger ship (hazard cat Y)',
  PassengerShiphazardCatZ = 'Passenger ship (hazard cat Z)',
  PassengerShiphazardCatOs = 'Passenger ship (hazard cat OS)',
  PassengerShipnoAdditionalInformation = 'Passenger ship (no additional information)',
  CargoShip = 'Cargo ship',
  CargoShiphazardCatX = 'Cargo ship (hazard cat X)',
  CargoShiphazardCatY = 'Cargo ship (hazard cat Y)',
  CargoShiphazardCatZ = 'Cargo ship (hazard cat Z)',
  CargoShiphazardCatOs = 'Cargo ship (hazard cat OS)',
  CargoShipnoAdditionalInformation = 'Cargo ship (no additional information)',
  Tanker = 'Tanker',
  TankerhazardCatX = 'Tanker (hazard cat X)',
  TankerhazardCatY = 'Tanker (hazard cat Y)',
  TankerhazardCatZ = 'Tanker (hazard cat Z)',
  TankerhazardCatOs = 'Tanker (hazard cat OS)',
  TankernoAdditionalInformation = 'Tanker (no additional information)',
  Other = 'Other',
  OtherhazardCatX = 'Other (hazard cat X)',
  OtherhazardCatY = 'Other (hazard cat Y)',
  OtherhazardCatZ = 'Other (hazard cat Z)',
  OtherhazardCatOs = 'Other (hazard cat OS)',
  OthernoAdditionalInformation = 'Other (no additional information)',
}

export enum DeviceClass {
  ReservedFor2000Use = 'Reserved for 2000 Use',
  SystemTools = 'System tools',
  SafetySystems = 'Safety systems',
  InternetworkDevice = 'Internetwork device',
  ElectricalDistribution = 'Electrical Distribution',
  ElectricalGeneration = 'Electrical Generation',
  SteeringAndControlSurfaces = 'Steering and Control surfaces',
  Propulsion = 'Propulsion',
  Navigation = 'Navigation',
  Communication = 'Communication',
  SensorCommunicationInterface = 'Sensor Communication Interface',
  InstrumentationgeneralSystems = 'Instrumentation/general systems',
  ExternalEnvironment = 'External Environment',
  InternalEnvironment = 'Internal Environment',
  DeckPlusCargoPlusFishingEquipmentSystems = 'Deck + cargo + fishing equipment systems',
  HumanInterface = 'Human Interface',
  Display = 'Display',
  Entertainment = 'Entertainment',
}

export enum RepeatIndicator {
  Initial = 'Initial',
  FirstRetransmission = 'First retransmission',
  SecondRetransmission = 'Second retransmission',
  FinalRetransmission = 'Final retransmission',
}

export enum TxRxMode {
  TxAtxBRxArxB = 'Tx A/Tx B, Rx A/Rx B',
  TxARxArxB = 'Tx A, Rx A/Rx B',
  TxBRxArxB = 'Tx B, Rx A/Rx B',
}

export enum StationType {
  AllTypesOfMobileStation = 'All types of mobile station',
  AllTypesOfClassBMobileStation = 'All types of Class B mobile station',
  SarAirborneMobileStation = 'SAR airborne mobile station',
  AtoNStation = 'AtoN station',
  ClassBCsShipborneMobileStation = 'Class B CS shipborne mobile station',
  InlandWaterways = 'Inland waterways',
  RegionalUse7 = 'Regional use 7',
  RegionalUse8 = 'Regional use 8',
  RegionalUse9 = 'Regional use 9',
}

export enum ReportingInterval {
  AsGivenByTheAutonomousMode = 'As given by the autonomous mode',
  _10Min = '10 min',
  _6Min = '6 min',
  _3Min = '3 min',
  _1Min = '1 min',
  _30Sec = '30 sec',
  _15Sec = '15 sec',
  _10Sec = '10 sec',
  _5Sec = '5 sec',
  _2SecnotApplicableToClassBCs = '2 sec (not applicable to Class B CS)',
  NextShorterReportingInterval = 'Next shorter reporting interval',
  NextLongerReportingInterval = 'Next longer reporting interval',
}

export enum AisTransceiver {
  ChannelAVdlReception = 'Channel A VDL reception',
  ChannelBVdlReception = 'Channel B VDL reception',
  ChannelAVdlTransmission = 'Channel A VDL transmission',
  ChannelBVdlTransmission = 'Channel B VDL transmission',
  OwnInformationNotBroadcast = 'Own information not broadcast',
  Reserved = 'Reserved',
}

export enum AisAssignedMode {
  AutonomousAndContinuous = 'Autonomous and continuous',
  AssignedMode = 'Assigned mode',
}

export enum AtonType {
  DefaultTypeOfAtoNNotSpecified = 'Default: Type of AtoN not specified',
  ReferencePoint = 'Reference point',
  Racon = 'RACON',
  FixedStructureOffShore = 'Fixed structure off-shore',
  ReservedForFutureUse = 'Reserved for future use',
  FixedLightWithoutSectors = 'Fixed light: without sectors',
  FixedLightWithSectors = 'Fixed light: with sectors',
  FixedLeadingLightFront = 'Fixed leading light front',
  FixedLeadingLightRear = 'Fixed leading light rear',
  FixedBeaconCardinalN = 'Fixed beacon: cardinal N',
  FixedBeaconCardinalE = 'Fixed beacon: cardinal E',
  FixedBeaconCardinalS = 'Fixed beacon: cardinal S',
  FixedBeaconCardinalW = 'Fixed beacon: cardinal W',
  FixedBeaconPortHand = 'Fixed beacon: port hand',
  FixedBeaconStarboardHand = 'Fixed beacon: starboard hand',
  FixedBeaconPreferredChannelPortHand = 'Fixed beacon: preferred channel port hand',
  FixedBeaconPreferredChannelStarboardHand = 'Fixed beacon: preferred channel starboard hand',
  FixedBeaconIsolatedDanger = 'Fixed beacon: isolated danger',
  FixedBeaconSafeWater = 'Fixed beacon: safe water',
  FixedBeaconSpecialMark = 'Fixed beacon: special mark',
  FloatingAtoNCardinalN = 'Floating AtoN: cardinal N',
  FloatingAtoNCardinalE = 'Floating AtoN: cardinal E',
  FloatingAtoNCardinalS = 'Floating AtoN: cardinal S',
  FloatingAtoNCardinalW = 'Floating AtoN: cardinal W',
  FloatingAtoNPortHandMark = 'Floating AtoN: port hand mark',
  FloatingAtoNStarboardHandMark = 'Floating AtoN: starboard hand mark',
  FloatingAtoNPreferredChannelPortHand = 'Floating AtoN: preferred channel port hand',
  FloatingAtoNPreferredChannelStarboardHand = 'Floating AtoN: preferred channel starboard hand',
  FloatingAtoNIsolatedDanger = 'Floating AtoN: isolated danger',
  FloatingAtoNSafeWater = 'Floating AtoN: safe water',
  FloatingAtoNSpecialMark = 'Floating AtoN: special mark',
  FloatingAtoNLightVessellanbyrigs = 'Floating AtoN: light vessel/LANBY/rigs',
}

export enum AisSpecialManeuver {
  NotAvailable = 'Not available',
  NotEngagedInSpecialManeuver = 'Not engaged in special maneuver',
  EngagedInSpecialManeuver = 'Engaged in special maneuver',
  Reserved = 'Reserved',
}

export enum PositionFixDevice {
  DefaultUndefined = 'Default: undefined',
  Gps = 'GPS',
  Glonass = 'GLONASS',
  CombinedGpsglonass = 'Combined GPS/GLONASS',
  LoranC = 'Loran-C',
  Chayka = 'Chayka',
  IntegratedNavigationSystem = 'Integrated navigation system',
  Surveyed = 'Surveyed',
  Galileo = 'Galileo',
}

export enum Gns {
  Gps = 'GPS',
  Glonass = 'GLONASS',
  GpsPlusglonass = 'GPS+GLONASS',
  GpsPlussbaswaas = 'GPS+SBAS/WAAS',
  GpsPlussbaswaasPlusglonass = 'GPS+SBAS/WAAS+GLONASS',
  Chayka = 'Chayka',
  Integrated = 'integrated',
  Surveyed = 'surveyed',
  Galileo = 'Galileo',
}

export enum EngineInstance {
  SingleEngineOrDualEnginePort = 'Single Engine or Dual Engine Port',
  DualEngineStarboard = 'Dual Engine Starboard',
}

export enum GearStatus {
  Forward = 'Forward',
  Neutral = 'Neutral',
  Reverse = 'Reverse',
}

export enum Direction {
  Forward = 'Forward',
  Reverse = 'Reverse',
}

export enum PositionAccuracy {
  Low = 'Low',
  High = 'High',
}

export enum RaimFlag {
  NotInUse = 'not in use',
  InUse = 'in use',
}

export enum TimeStamp {
  NotAvailable = 'Not available',
  ManualInputMode = 'Manual input mode',
  DeadReckoningMode = 'Dead reckoning mode',
  PositioningSystemIsInoperative = 'Positioning system is inoperative',
}

export enum GnsMethod {
  NoGnss = 'no GNSS',
  GnssFix = 'GNSS fix',
  DgnssFix = 'DGNSS fix',
  PreciseGnss = 'Precise GNSS',
  RtkFixedInteger = 'RTK Fixed Integer',
  RtkFloat = 'RTK float',
  EstimateddrMode = 'Estimated (DR) mode',
  ManualInput = 'Manual Input',
  SimulateMode = 'Simulate mode',
}

export enum GnsIntegrity {
  NoIntegrityChecking = 'No integrity checking',
  Safe = 'Safe',
  Caution = 'Caution',
  Unsafe = 'Unsafe',
}

export enum SystemTime {
  Gps = 'GPS',
  Glonass = 'GLONASS',
  RadioStation = 'Radio Station',
  LocalCesiumClock = 'Local Cesium clock',
  LocalRubidiumClock = 'Local Rubidium clock',
  LocalCrystalClock = 'Local Crystal clock',
}

export enum MagneticVariation {
  Manual = 'Manual',
  AutomaticChart = 'Automatic Chart',
  AutomaticTable = 'Automatic Table',
  AutomaticCalculation = 'Automatic Calculation',
  Wmm2000 = 'WMM 2000',
  Wmm2005 = 'WMM 2005',
  Wmm2010 = 'WMM 2010',
  Wmm2015 = 'WMM 2015',
  Wmm2020 = 'WMM 2020',
}

export enum ResidualMode {
  Autonomous = 'Autonomous',
  DifferentialEnhanced = 'Differential enhanced',
  Estimated = 'Estimated',
  Simulator = 'Simulator',
  Manual = 'Manual',
}

export enum WindReference {
  TruegroundReferencedToNorth = 'True (ground referenced to North)',
  MagneticgroundReferencedToMagneticNorth = 'Magnetic (ground referenced to Magnetic North)',
  Apparent = 'Apparent',
  TrueboatReferenced = 'True (boat referenced)',
  TruewaterReferenced = 'True (water referenced)',
}

export enum WaterReference {
  PaddleWheel = 'Paddle wheel',
  PitotTube = 'Pitot tube',
  Doppler = 'Doppler',
  CorrelationultraSound = 'Correlation (ultra sound)',
  ElectroMagnetic = 'Electro Magnetic',
}

export enum OkWarning {
  Ok = 'OK',
  Warning = 'Warning',
}

export enum OffOn {
  Off = 'Off',
  On = 'On',
}

export enum OffOnControl {
  Off = 'Off',
  On = 'On',
  Reserved = 'Reserved',
  TakeNoActionnoChange = 'Take no action (no change)',
}

export enum DirectionReference {
  True = 'True',
  Magnetic = 'Magnetic',
  Error = 'Error',
}

export enum DirectionRudder {
  NoOrder = 'No Order',
  MoveToStarboard = 'Move to starboard',
  MoveToPort = 'Move to port',
}

export enum NavStatus {
  UnderWayUsingEngine = 'Under way using engine',
  AtAnchor = 'At anchor',
  NotUnderCommand = 'Not under command',
  RestrictedManeuverability = 'Restricted maneuverability',
  ConstrainedByHerDraught = 'Constrained by her draught',
  Moored = 'Moored',
  Aground = 'Aground',
  EngagedInFishing = 'Engaged in Fishing',
  UnderWaySailing = 'Under way sailing',
  HazardousMaterialHighSpeed = 'Hazardous material - High Speed',
  HazardousMaterialWingInGround = 'Hazardous material - Wing in Ground',
  PowerDrivenVesselTowingAstern = 'Power-driven vessel towing astern',
  PowerDrivenVesselPushingAheadOrTowingAlongside = 'Power-driven vessel pushing ahead or towing alongside',
  AisSart = 'AIS-SART',
}

export enum PowerFactor {
  Leading = 'Leading',
  Lagging = 'Lagging',
  Error = 'Error',
}

export enum TemperatureSource {
  SeaTemperature = 'Sea Temperature',
  OutsideTemperature = 'Outside Temperature',
  InsideTemperature = 'Inside Temperature',
  EngineRoomTemperature = 'Engine Room Temperature',
  MainCabinTemperature = 'Main Cabin Temperature',
  LiveWellTemperature = 'Live Well Temperature',
  BaitWellTemperature = 'Bait Well Temperature',
  RefrigerationTemperature = 'Refrigeration Temperature',
  HeatingSystemTemperature = 'Heating System Temperature',
  DewPointTemperature = 'Dew Point Temperature',
  ApparentWindChillTemperature = 'Apparent Wind Chill Temperature',
  TheoreticalWindChillTemperature = 'Theoretical Wind Chill Temperature',
  HeatIndexTemperature = 'Heat Index Temperature',
  FreezerTemperature = 'Freezer Temperature',
  ExhaustGasTemperature = 'Exhaust Gas Temperature',
  ShaftSealTemperature = 'Shaft Seal Temperature',
}

export enum HumiditySource {
  Inside = 'Inside',
  Outside = 'Outside',
}

export enum PressureSource {
  Atmospheric = 'Atmospheric',
  Water = 'Water',
  Steam = 'Steam',
  CompressedAir = 'Compressed Air',
  Hydraulic = 'Hydraulic',
  Filter = 'Filter',
  AltimeterSetting = 'AltimeterSetting',
  Oil = 'Oil',
  Fuel = 'Fuel',
}

export enum DscFormat {
  GeographicalArea = 'Geographical area',
  Distress = 'Distress',
  CommonInterest = 'Common interest',
  AllShips = 'All ships',
  IndividualStations = 'Individual stations',
  NonCallingPurpose = 'Non-calling purpose',
  IndividualStationAutomatic = 'Individual station automatic',
}

export enum DscCategory {
  Routine = 'Routine',
  Safety = 'Safety',
  Urgency = 'Urgency',
  Distress = 'Distress',
}

export enum DscNature {
  Fire = 'Fire',
  Flooding = 'Flooding',
  Collision = 'Collision',
  Grounding = 'Grounding',
  Listing = 'Listing',
  Sinking = 'Sinking',
  DisabledAndAdrift = 'Disabled and adrift',
  Undesignated = 'Undesignated',
  AbandoningShip = 'Abandoning ship',
  Piracy = 'Piracy',
  ManOverboard = 'Man overboard',
  EpirbEmission = 'EPIRB emission',
}

export enum DscFirstTelecommand {
  F3Eg3EAllModesTp = 'F3E/G3E All modes TP',
  F3Eg3EDuplexTp = 'F3E/G3E duplex TP',
  Polling = 'Polling',
  UnableToComply = 'Unable to comply',
  EndOfCall = 'End of call',
  Data = 'Data',
  J3ETp = 'J3E TP',
  DistressAcknowledgement = 'Distress acknowledgement',
  DistressRelay = 'Distress relay',
  F1Bj2BTtyFec = 'F1B/J2B TTY-FEC',
  F1Bj2BTtyArq = 'F1B/J2B TTY-ARQ',
  Test = 'Test',
  ShipPositionOrLocationRegistrationUpdating = 'Ship position or location registration updating',
  NoInformation = 'No information',
}

export enum DscSecondTelecommand {
  NoReasonGiven = 'No reason given',
  CongestionAtMsc = 'Congestion at MSC',
  Busy = 'Busy',
  QueueIndication = 'Queue indication',
  StationBarred = 'Station barred',
  NoOperatorAvailable = 'No operator available',
  OperatorTemporarilyUnavailable = 'Operator temporarily unavailable',
  EquipmentDisabled = 'Equipment disabled',
  UnableToUseProposedChannel = 'Unable to use proposed channel',
  UnableToUseProposedMode = 'Unable to use proposed mode',
  ShipsAndAircraftOfStatesNotPartiesToAnArmedConflict = 'Ships and aircraft of States not parties to an armed conflict',
  MedicalTransports = 'Medical transports',
  PayPhonepublicCallOffice = 'Pay phone/public call office',
  Faxdata = 'Fax/data',
  NoInformation = 'No information',
}

export enum DscExpansionData {
  EnhancedPosition = 'Enhanced position',
  SourceAndDatumOfPosition = 'Source and datum of position',
  Sog = 'SOG',
  Cog = 'COG',
  AdditionalStationIdentification = 'Additional station identification',
  EnhancedGeographicArea = 'Enhanced geographic area',
  NumberOfPersonsOnBoard = 'Number of persons on board',
}

export enum SeatalkAlarmStatus {
  AlarmConditionNotMet = 'Alarm condition not met',
  AlarmConditionMetAndNotSilenced = 'Alarm condition met and not silenced',
  AlarmConditionMetAndSilenced = 'Alarm condition met and silenced',
}

export enum SeatalkAlarmId {
  NoAlarm = 'No Alarm',
  ShallowDepth = 'Shallow Depth',
  DeepDepth = 'Deep Depth',
  ShallowAnchor = 'Shallow Anchor',
  DeepAnchor = 'Deep Anchor',
  OffCourse = 'Off Course',
  AwaHigh = 'AWA High',
  AwaLow = 'AWA Low',
  AwsHigh = 'AWS High',
  AwsLow = 'AWS Low',
  TwaHigh = 'TWA High',
  TwaLow = 'TWA Low',
  TwsHigh = 'TWS High',
  TwsLow = 'TWS Low',
  WpArrival = 'WP Arrival',
  BoatSpeedHigh = 'Boat Speed High',
  BoatSpeedLow = 'Boat Speed Low',
  SeaTemperatureHigh = 'Sea Temperature High',
  SeaTemperatureLow = 'Sea Temperature Low',
  PilotWatch = 'Pilot Watch',
  PilotOffCourse = 'Pilot Off Course',
  PilotWindShift = 'Pilot Wind Shift',
  PilotLowBattery = 'Pilot Low Battery',
  PilotLastMinuteOfWatch = 'Pilot Last Minute Of Watch',
  PilotNoNmeaData = 'Pilot No NMEA Data',
  PilotLargeXte = 'Pilot Large XTE',
  PilotNmeaDataError = 'Pilot NMEA DataError',
  PilotCuDisconnected = 'Pilot CU Disconnected',
  PilotAutoRelease = 'Pilot Auto Release',
  PilotWayPointAdvance = 'Pilot Way Point Advance',
  PilotDriveStopped = 'Pilot Drive Stopped',
  PilotTypeUnspecified = 'Pilot Type Unspecified',
  PilotCalibrationRequired = 'Pilot Calibration Required',
  PilotLastHeading = 'Pilot Last Heading',
  PilotNoPilot = 'Pilot No Pilot',
  PilotRouteComplete = 'Pilot Route Complete',
  PilotVariableText = 'Pilot Variable Text',
  GpsFailure = 'GPS Failure',
  Mob = 'MOB',
  Seatalk1Anchor = 'Seatalk1 Anchor',
  PilotSwappedMotorPower = 'Pilot Swapped Motor Power',
  PilotStandbyTooFastToFish = 'Pilot Standby Too Fast To Fish',
  PilotNoGpsFix = 'Pilot No GPS Fix',
  PilotNoGpsCog = 'Pilot No GPS COG',
  PilotStartUp = 'Pilot Start Up',
  PilotTooSlow = 'Pilot Too Slow',
  PilotNoCompass = 'Pilot No Compass',
  PilotRateGyroFault = 'Pilot Rate Gyro Fault',
  PilotCurrentLimit = 'Pilot Current Limit',
  PilotWayPointAdvancePort = 'Pilot Way Point Advance Port',
  PilotWayPointAdvanceStbd = 'Pilot Way Point Advance Stbd',
  PilotNoWindData = 'Pilot No Wind Data',
  PilotNoSpeedData = 'Pilot No Speed Data',
  PilotSeatalkFail1 = 'Pilot Seatalk Fail1',
  PilotSeatalkFail2 = 'Pilot Seatalk Fail2',
  PilotWarningTooFastToFish = 'Pilot Warning Too Fast To Fish',
  PilotAutoDocksideFail = 'Pilot Auto Dockside Fail',
  PilotTurnTooFast = 'Pilot Turn Too Fast',
  PilotNoNavData = 'Pilot No Nav Data',
  PilotLostWaypointData = 'Pilot Lost Waypoint Data',
  PilotEepromCorrupt = 'Pilot EEPROM Corrupt',
  PilotRudderFeedbackFail = 'Pilot Rudder Feedback Fail',
  PilotAutolearnFail1 = 'Pilot Autolearn Fail1',
  PilotAutolearnFail2 = 'Pilot Autolearn Fail2',
  PilotAutolearnFail3 = 'Pilot Autolearn Fail3',
  PilotAutolearnFail4 = 'Pilot Autolearn Fail4',
  PilotAutolearnFail5 = 'Pilot Autolearn Fail5',
  PilotAutolearnFail6 = 'Pilot Autolearn Fail6',
  PilotWarningCalRequired = 'Pilot Warning Cal Required',
  PilotWarningOffCourse = 'Pilot Warning OffCourse',
  PilotWarningXte = 'Pilot Warning XTE',
  PilotWarningWindShift = 'Pilot Warning Wind Shift',
  PilotWarningDriveShort = 'Pilot Warning Drive Short',
  PilotWarningClutchShort = 'Pilot Warning Clutch Short',
  PilotWarningSolenoidShort = 'Pilot Warning Solenoid Short',
  PilotJoystickFault = 'Pilot Joystick Fault',
  PilotNoJoystickData = 'Pilot No Joystick Data',
  PilotInvalidCommand = 'Pilot Invalid Command',
  AisTxMalfunction = 'AIS TX Malfunction',
  AisAntennaVswrFault = 'AIS Antenna VSWR fault',
  AisRxChannel1Malfunction = 'AIS Rx channel 1 malfunction',
  AisRxChannel2Malfunction = 'AIS Rx channel 2 malfunction',
  AisNoSensorPositionInUse = 'AIS No sensor position in use',
  AisNoValidSogInformation = 'AIS No valid SOG information',
  AisNoValidCogInformation = 'AIS No valid COG information',
  Ais12VAlarm = 'AIS 12V alarm',
  Ais6VAlarm = 'AIS 6V alarm',
  AisNoiseThresholdExceededChannelA = 'AIS Noise threshold exceeded channel A',
  AisNoiseThresholdExceededChannelB = 'AIS Noise threshold exceeded channel B',
  AisTransmitterPaFault = 'AIS Transmitter PA fault',
  Ais3V3Alarm = 'AIS 3V3 alarm',
  AisRxChannel70Malfunction = 'AIS Rx channel 70 malfunction',
  AisHeadingLostinvalid = 'AIS Heading lost/invalid',
  AisInternalGpsLost = 'AIS internal GPS lost',
  AisNoSensorPosition = 'AIS No sensor position',
  AisLockFailure = 'AIS Lock failure',
  AisInternalGgaTimeout = 'AIS Internal GGA timeout',
  AisProtocolStackRestart = 'AIS Protocol stack restart',
  PilotNoIpsCommunications = 'Pilot No IPS communications',
  PilotPowerOnOrSleepSwitchResetWhileEngaged = 'Pilot Power-On or Sleep-Switch Reset While Engaged',
  PilotUnexpectedResetWhileEngaged = 'Pilot Unexpected Reset While Engaged',
  AisDangerousTarget = 'AIS Dangerous Target',
  AisLostTarget = 'AIS Lost Target',
  AisSafetyRelatedMessageusedToSilence = 'AIS Safety Related Message (used to silence)',
  AisConnectionLost = 'AIS Connection Lost',
  NoFix = 'No Fix',
}

export enum SeatalkAlarmGroup {
  Instrument = 'Instrument',
  Autopilot = 'Autopilot',
  Radar = 'Radar',
  ChartPlotter = 'Chart Plotter',
  Ais = 'AIS',
}

export enum SeatalkPilotMode {
  Standby = 'Standby',
  Auto = 'Auto',
  Wind = 'Wind',
  Track = 'Track',
}

export enum EntertainmentZone {
  AllZones = 'All zones',
  Zone1 = 'Zone 1',
  Zone2 = 'Zone 2',
  Zone3 = 'Zone 3',
  Zone4 = 'Zone 4',
}

export enum EntertainmentSource {
  VesselAlarm = 'Vessel alarm',
  Am = 'AM',
  Fm = 'FM',
  Weather = 'Weather',
  Dab = 'DAB',
  Aux = 'Aux',
  Usb = 'USB',
  Cd = 'CD',
  Mp3 = 'MP3',
  AppleIOs = 'Apple iOS',
  Android = 'Android',
  Bluetooth = 'Bluetooth',
  SiriusXm = 'Sirius XM',
  Pandora = 'Pandora',
  Spotify = 'Spotify',
  Slacker = 'Slacker',
  Songza = 'Songza',
  AppleRadio = 'Apple Radio',
  LastFm = 'Last FM',
  Ethernet = 'Ethernet',
  VideoMp4 = 'Video MP4',
  VideoDvd = 'Video DVD',
  VideoBluRay = 'Video BluRay',
  Hdmi = 'HDMI',
  Video = 'Video',
}

export enum EntertainmentPlayStatus {
  Play = 'Play',
  Pause = 'Pause',
  Stop = 'Stop',
  Ff1X = 'FF 1x',
  Ff2X = 'FF 2x',
  Ff3X = 'FF 3x',
  Ff4X = 'FF 4x',
  Rw1X = 'RW 1x',
  Rw2X = 'RW 2x',
  Rw3X = 'RW 3x',
  Rw4X = 'RW 4x',
  SkipAhead = 'Skip ahead',
  SkipBack = 'Skip back',
  JogAhead = 'Jog ahead',
  JogBack = 'Jog back',
  SeekUp = 'Seek up',
  SeekDown = 'Seek down',
  ScanUp = 'Scan up',
  ScanDown = 'Scan down',
  TuneUp = 'Tune up',
  TuneDown = 'Tune down',
  SlowMotion75X = 'Slow motion .75x',
  SlowMotion5X = 'Slow motion .5x',
  SlowMotion25X = 'Slow motion .25x',
  SlowMotion125X = 'Slow motion .125x',
}

export enum EntertainmentRepeatStatus {
  Off = 'Off',
  One = 'One',
  All = 'All',
}

export enum EntertainmentShuffleStatus {
  Off = 'Off',
  PlayQueue = 'Play queue',
  All = 'All',
}

export enum EntertainmentLikeStatus {
  None = 'None',
  ThumbsUp = 'Thumbs up',
  ThumbsDown = 'Thumbs down',
}

export enum EntertainmentType {
  File = 'File',
  PlaylistName = 'Playlist Name',
  GenreName = 'Genre Name',
  AlbumName = 'Album Name',
  ArtistName = 'Artist Name',
  TrackName = 'Track Name',
  StationName = 'Station Name',
  StationNumber = 'Station Number',
  FavouriteNumber = 'Favourite Number',
  PlayQueue = 'Play Queue',
  ContentInfo = 'Content Info',
}

export enum EntertainmentGroup {
  File = 'File',
  PlaylistName = 'Playlist Name',
  GenreName = 'Genre Name',
  AlbumName = 'Album Name',
  ArtistName = 'Artist Name',
  TrackName = 'Track Name',
  StationName = 'Station Name',
  StationNumber = 'Station Number',
  FavouriteNumber = 'Favourite Number',
  PlayQueue = 'Play Queue',
  ContentInfo = 'Content Info',
}

export enum EntertainmentChannel {
  AllChannels = 'All channels',
  StereoFullRange = 'Stereo full range',
  StereoFront = 'Stereo front',
  StereoBack = 'Stereo back',
  StereoSurround = 'Stereo surround',
  Center = 'Center',
  Subwoofer = 'Subwoofer',
  FrontLeft = 'Front left',
  FrontRight = 'Front right',
  BackLeft = 'Back left',
  BackRight = 'Back right',
  SurroundLeft = 'Surround left',
  SurroundRight = 'Surround right',
}

export enum EntertainmentEq {
  Flat = 'Flat',
  Rock = 'Rock',
  Hall = 'Hall',
  Jazz = 'Jazz',
  Pop = 'Pop',
  Live = 'Live',
  Classic = 'Classic',
  Vocal = 'Vocal',
  Arena = 'Arena',
  Cinema = 'Cinema',
  Custom = 'Custom',
}

export enum EntertainmentFilter {
  FullRange = 'Full range',
  HighPass = 'High pass',
  LowPass = 'Low pass',
  BandPass = 'Band pass',
  NotchFilter = 'Notch filter',
}

export enum AlertType {
  EmergencyAlarm = 'Emergency Alarm',
  Alarm = 'Alarm',
  Warning = 'Warning',
  Caution = 'Caution',
}

export enum AlertCategory {
  Navigational = 'Navigational',
  Technical = 'Technical',
}

export enum AlertTriggerCondition {
  Manual = 'Manual',
  Auto = 'Auto',
  Test = 'Test',
  Disabled = 'Disabled',
}

export enum AlertThresholdStatus {
  Normal = 'Normal',
  ThresholdExceeded = 'Threshold Exceeded',
  ExtremeThresholdExceeded = 'Extreme Threshold Exceeded',
  LowThresholdExceeded = 'Low Threshold Exceeded',
  Acknowledged = 'Acknowledged',
  AwaitingAcknowledge = 'Awaiting Acknowledge',
}

export enum AlertState {
  Disabled = 'Disabled',
  Normal = 'Normal',
  Active = 'Active',
  Silenced = 'Silenced',
  Acknowledged = 'Acknowledged',
  AwaitingAcknowledge = 'Awaiting Acknowledge',
}

export enum AlertLanguageId {
  Englishus = 'English (US)',
  Englishuk = 'English (UK)',
  Arabic = 'Arabic',
  Chinesesimplified = 'Chinese (simplified)',
  Croatian = 'Croatian',
  Danish = 'Danish',
  Dutch = 'Dutch',
  Finnish = 'Finnish',
  French = 'French',
  German = 'German',
  Greek = 'Greek',
  Italian = 'Italian',
  Japanese = 'Japanese',
  Korean = 'Korean',
  Norwegian = 'Norwegian',
  Polish = 'Polish',
  Portuguese = 'Portuguese',
  Russian = 'Russian',
  Spanish = 'Spanish',
  Swedish = 'Swedish',
}

export enum AlertResponseCommand {
  Acknowledge = 'Acknowledge',
  TemporarySilence = 'Temporary Silence',
  TestCommandOff = 'Test Command off',
  TestCommandOn = 'Test Command on',
}

export enum ConverterState {
  Off = 'Off',
  LowPowerMode = 'Low Power Mode',
  Fault = 'Fault',
  Bulk = 'Bulk',
  Absorption = 'Absorption',
  Float = 'Float',
  Storage = 'Storage',
  Equalize = 'Equalize',
  PassThru = 'Pass thru',
  Inverting = 'Inverting',
  Assisting = 'Assisting',
}

export enum ThrusterDirectionControl {
  Off = 'Off',
  Ready = 'Ready',
  ToPort = 'To Port',
  ToStarboard = 'To Starboard',
}

export enum ThrusterRetractControl {
  Off = 'Off',
  Extend = 'Extend',
  Retract = 'Retract',
}

export enum ThrusterMotorType {
  _12Vdc = '12VDC',
  _24Vdc = '24VDC',
  _48Vdc = '48VDC',
  _24Vac = '24VAC',
  Hydraulic = 'Hydraulic',
}

export enum BootState {
  InStartupMonitor = 'in Startup Monitor',
  RunningBootloader = 'running Bootloader',
  RunningApplication = 'running Application',
}

export enum AccessLevel {
  Locked = 'Locked',
  UnlockedLevel1 = 'unlocked level 1',
  UnlockedLevel2 = 'unlocked level 2',
}

export enum TransmissionInterval {
  Acknowledge = 'Acknowledge',
  TransmitIntervalpriorityNotSupported = 'Transmit Interval/Priority not supported',
  TransmitIntervalTooLow = 'Transmit Interval too low',
  AccessDenied = 'Access denied',
  NotSupported = 'Not supported',
}

export enum ParameterField {
  Acknowledge = 'Acknowledge',
  InvalidParameterField = 'Invalid parameter field',
  TemporaryError = 'Temporary error',
  ParameterOutOfRange = 'Parameter out of range',
  AccessDenied = 'Access denied',
  NotSupported = 'Not supported',
  ReadOrWriteNotSupported = 'Read or Write not supported',
}

export enum PgnListFunction {
  TransmitPgnList = 'Transmit PGN list',
  ReceivePgnList = 'Receive PGN list',
}

export enum FusionCommand {
  Play = 'Play',
  Pause = 'Pause',
  Next = 'Next',
  Prev = 'Prev',
}

export enum FusionSiriusCommand {
  Next = 'Next',
  Prev = 'Prev',
}

export enum FusionMuteCommand {
  MuteOn = 'Mute On',
  MuteOff = 'Mute Off',
}

export enum SeatalkKeystroke {
  Auto = 'Auto',
  Standby = 'Standby',
  Wind = 'Wind',
  _1 = '-1',
  _10 = '-10',
  Plus1 = '+1',
  Plus10 = '+10',
  _1And10 = '-1 and -10',
  Plus1AndPlus10 = '+1 and +10',
  Track = 'Track',
}

export enum SeatalkDeviceId {
  S100 = 'S100',
  CourseComputer = 'Course Computer',
}

export enum SeatalkNetworkGroup {
  None = 'None',
  Helm1 = 'Helm 1',
  Helm2 = 'Helm 2',
  Cockpit = 'Cockpit',
  Flybridge = 'Flybridge',
  Mast = 'Mast',
  Group1 = 'Group 1',
  Group2 = 'Group 2',
  Group3 = 'Group 3',
  Group4 = 'Group 4',
  Group5 = 'Group 5',
}

export enum SeatalkDisplayColor {
  Day1 = 'Day 1',
  Day2 = 'Day 2',
  Redblack = 'Red/Black',
  Inverse = 'Inverse',
}

export enum AirmarCalibrateFunction {
  NormalcancelCalibration = 'Normal/cancel calibration',
  EnterCalibrationMode = 'Enter calibration mode',
  ResetCalibrationTo0 = 'Reset calibration to 0',
  Verify = 'Verify',
  ResetCompassToDefaults = 'Reset compass to defaults',
  ResetDampingToDefaults = 'Reset damping to defaults',
}

export enum AirmarCalibrateStatus {
  Queried = 'Queried',
  Passed = 'Passed',
  FailedTimeout = 'Failed - timeout',
  FailedTiltError = 'Failed - tilt error',
  FailedOther = 'Failed - other',
  InProgress = 'In progress',
}

export enum AirmarTemperatureInstance {
  DeviceSensor = 'Device Sensor',
  OnboardWaterSensor = 'Onboard Water Sensor',
  OptionalWaterSensor = 'Optional Water Sensor',
}

export enum AirmarFilter {
  NoFilter = 'No filter',
  BasicIirFilter = 'Basic IIR filter',
}

export enum ControllerState {
  ErrorActive = 'Error Active',
  ErrorPassive = 'Error Passive',
  BusOff = 'Bus Off',
}

export enum EquipmentStatus {
  Operational = 'Operational',
  Fault = 'Fault',
}

export enum MobStatus {
  MobEmitterActivated = 'MOB Emitter Activated',
  ManualOnBoardMobButtonActivation = 'Manual on-board MOB Button Activation',
  TestMode = 'Test mode',
}

export enum LowBattery {
  Good = 'Good',
  Low = 'Low',
}

export enum TurnMode {
  RudderLimitControlled = 'Rudder limit controlled',
  TurnRateControlled = 'Turn rate controlled',
  RadiusControlled = 'Radius controlled',
}

export enum Acceptability {
  BadLevel = 'Bad level',
  BadFrequency = 'Bad frequency',
  BeingQualified = 'Being qualified',
  Good = 'Good',
}

export enum Line {
  Line1 = 'Line 1',
  Line2 = 'Line 2',
  Line3 = 'Line 3',
}

export enum Waveform {
  SineWave = 'Sine wave',
  ModifiedSineWave = 'Modified sine wave',
}

export enum TankType {
  Fuel = 'Fuel',
  Water = 'Water',
  GrayWater = 'Gray water',
  LiveWell = 'Live well',
  Oil = 'Oil',
  BlackWater = 'Black water',
}

export enum DcSource {
  Battery = 'Battery',
  Alternator = 'Alternator',
  Convertor = 'Convertor',
  SolarCell = 'Solar cell',
  WindGenerator = 'Wind generator',
}

export enum ChargerState {
  NotCharging = 'Not charging',
  Bulk = 'Bulk',
  Absorption = 'Absorption',
  Overcharge = 'Overcharge',
  Equalise = 'Equalise',
  Float = 'Float',
  NoFloat = 'No float',
  ConstantVi = 'Constant VI',
  Disabled = 'Disabled',
  Fault = 'Fault',
}

export enum ChargingAlgorithm {
  Trickle = 'Trickle',
  ConstantVoltageConstantCurrent = 'Constant voltage / Constant current',
  _2StagenoFloat = '2 stage (no float)',
  _3Stage = '3 stage',
}

export enum ChargerMode {
  Standalone = 'Standalone',
  Primary = 'Primary',
  Secondary = 'Secondary',
  Echo = 'Echo',
}

export enum InverterState {
  Invert = 'Invert',
  AcPassthru = 'AC passthru',
  LoadSense = 'Load sense',
  Fault = 'Fault',
  Disabled = 'Disabled',
}

export enum BatteryType {
  Flooded = 'Flooded',
  Gel = 'Gel',
  Agm = 'AGM',
}

export enum BatteryVoltage {
  _6V = '6V',
  _12V = '12V',
  _24V = '24V',
  _32V = '32V',
  _36V = '36V',
  _42V = '42V',
  _48V = '48V',
}

export enum BatteryChemistry {
  Pblead = 'Pb (Lead)',
  Li = 'Li',
  NiCd = 'NiCd',
  ZnO = 'ZnO',
  NiMh = 'NiMH',
}

export enum GoodWarningError {
  Good = 'Good',
  Warning = 'Warning',
  Error = 'Error',
}

export enum Tracking {
  Cancelled = 'Cancelled',
  Acquiring = 'Acquiring',
  Tracking = 'Tracking',
  Lost = 'Lost',
}

export enum TargetAcquisition {
  Manual = 'Manual',
  Automatic = 'Automatic',
}

export enum WindlassDirection {
  Off = 'Off',
  Down = 'Down',
  Up = 'Up',
}

export enum SpeedType {
  SingleSpeed = 'Single speed',
  DualSpeed = 'Dual speed',
  ProportionalSpeed = 'Proportional speed',
}

export enum WindlassMotion {
  WindlassStopped = 'Windlass stopped',
  DeploymentOccurring = 'Deployment occurring',
  RetrievalOccurring = 'Retrieval occurring',
}

export enum RodeType {
  ChainPresentlyDetected = 'Chain presently detected',
  RopePresentlyDetected = 'Rope presently detected',
}

export enum DockingStatus {
  NotDocked = 'Not docked',
  FullyDocked = 'Fully docked',
}

export enum AisType {
  Sotdma = 'SOTDMA',
  Cs = 'CS',
}

export enum AisBand {
  Top525KHzOfMarineBand = 'Top 525 kHz of marine band',
  EntireMarineBand = 'Entire marine band',
}

export enum AisMode {
  Autonomous = 'Autonomous',
  Assigned = 'Assigned',
}

export enum AisCommunicationState {
  Sotdma = 'SOTDMA',
  Itdma = 'ITDMA',
}

export enum Available {
  Available = 'Available',
  NotAvailable = 'Not available',
}

export enum BearingMode {
  GreatCircle = 'Great Circle',
  Rhumbline = 'Rhumbline',
}

export enum MarkType {
  Collision = 'Collision',
  TurningPoint = 'Turning point',
  Reference = 'Reference',
  Wheelover = 'Wheelover',
  Waypoint = 'Waypoint',
}

export enum GnssMode {
  _1D = '1D',
  _2D = '2D',
  _3D = '3D',
  Auto = 'Auto',
}

export enum RangeResidualMode {
  RangeResidualsWereUsedToCalculateData = 'Range residuals were used to calculate data',
  RangeResidualsWereCalculatedAfterThePosition = 'Range residuals were calculated after the position',
}

export enum DgnssMode {
  None = 'None',
  SbasIfAvailable = 'SBAS if available',
  Sbas = 'SBAS',
}

export enum SatelliteStatus {
  NotTracked = 'Not tracked',
  Tracked = 'Tracked',
  Used = 'Used',
  NotTrackedPlusdiff = 'Not tracked+Diff',
  TrackedPlusdiff = 'Tracked+Diff',
  UsedPlusdiff = 'Used+Diff',
}

export enum AisVersion {
  ItuRM13711 = 'ITU-R M.1371-1',
  ItuRM13713 = 'ITU-R M.1371-3',
  ItuRM13715 = 'ITU-R M.1371-5',
  ItuRM1371FutureEdition = 'ITU-R M.1371 future edition',
}

export enum Tide {
  Falling = 'Falling',
  Rising = 'Rising',
}

export enum WatermakerState {
  Stopped = 'Stopped',
  Starting = 'Starting',
  Running = 'Running',
  Stopping = 'Stopping',
  Flushing = 'Flushing',
  Rinsing = 'Rinsing',
  Initiating = 'Initiating',
  Manual = 'Manual',
}

export enum EntertainmentIdType {
  Group = 'Group',
  File = 'File',
  EncryptedGroup = 'Encrypted group',
  EncryptedFile = 'Encrypted file',
}

export enum EntertainmentDefaultSettings {
  SaveCurrentSettingsAsUserDefault = 'Save current settings as user default',
  LoadUserDefault = 'Load user default',
  LoadManufacturerDefault = 'Load manufacturer default',
}

export enum EntertainmentRegions {
  Usa = 'USA',
  Europe = 'Europe',
  Asia = 'Asia',
  MiddleEast = 'Middle East',
  LatinAmerica = 'Latin America',
  Australia = 'Australia',
  Russia = 'Russia',
  Japan = 'Japan',
}

export enum VideoProtocols {
  Pal = 'PAL',
  Ntsc = 'NTSC',
}

export enum EntertainmentVolumeControl {
  Up = 'Up',
  Down = 'Down',
}

export enum BluetoothStatus {
  Connected = 'Connected',
  NotConnected = 'Not connected',
  NotPaired = 'Not paired',
}

export enum BluetoothSourceStatus {
  Reserved = 'Reserved',
  Connected = 'Connected',
  Connecting = 'Connecting',
  NotConnected = 'Not connected',
}

export enum SonichubCommand {
  Init2 = 'Init #2',
  AmRadio = 'AM Radio',
  ZoneInfo = 'Zone Info',
  Source = 'Source',
  SourceList = 'Source List',
  Control = 'Control',
  FmRadio = 'FM Radio',
  Playlist = 'Playlist',
  Track = 'Track',
  Artist = 'Artist',
  Album = 'Album',
  MenuItem = 'Menu Item',
  Zones = 'Zones',
  MaxVolume = 'Max Volume',
  Volume = 'Volume',
  Init1 = 'Init #1',
  Position = 'Position',
  Init3 = 'Init #3',
}

export enum SimnetApMode {
  Heading = 'Heading',
  Wind = 'Wind',
  Nav = 'Nav',
  NoDrift = 'No Drift',
}

export enum SimnetDeviceModel {
  Ac = 'AC',
  OtherDevice = 'Other device',
  Nac = 'NAC',
}

export enum SimnetDeviceReport {
  Status = 'Status',
  SendStatus = 'Send Status',
  Mode = 'Mode',
  SendMode = 'Send Mode',
  SailingProcessorStatus = 'Sailing Processor Status',
}

export enum SimnetApStatus {
  Manual = 'Manual',
  Automatic = 'Automatic',
}

export enum SimnetCommand {
  Text = 'Text',
}

export enum SimnetEventCommand {
  Alarm = 'Alarm',
  ApCommand = 'AP command',
  Autopilot = 'Autopilot',
}

export enum SimnetNightMode {
  Day = 'Day',
  Night = 'Night',
}

export enum SimnetNightModeColor {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
  White = 'White',
}

export enum SimnetDisplayGroup {
  Default = 'Default',
  Group1 = 'Group 1',
  Group2 = 'Group 2',
  Group3 = 'Group 3',
  Group4 = 'Group 4',
  Group5 = 'Group 5',
  Group6 = 'Group 6',
}

export enum SimnetHourDisplay {
  _24Hour = '24 hour',
  _12Hour = '12 hour',
}

export enum SimnetTimeFormat {
  Mmddyyyy = 'MM/dd/yyyy',
  Ddmmyyyy = 'dd/MM/yyyy',
}

export enum SimnetBacklightLevel {
  _10min = '10% (Min)',
  DayMode = 'Day mode',
  NightMode = 'Night mode',
  _20 = '20%',
  _30 = '30%',
  _40 = '40%',
  _50 = '50%',
  _60 = '60%',
  _70 = '70%',
  _80 = '80%',
  _90 = '90%',
  _100max = '100% (Max)',
}

export enum SimnetApEvents {
  Standby = 'Standby',
  AutoMode = 'Auto mode',
  NavMode = 'Nav mode',
  NonFollowUpMode = 'Non Follow Up mode',
  FollowUpMode = 'Follow Up mode',
  WindMode = 'Wind mode',
  Squareturn = 'Square (Turn)',
  CTurn = 'C-Turn',
  UTurn = 'U-Turn',
  Spiralturn = 'Spiral (Turn)',
  ZigZagturn = 'Zig Zag (Turn)',
  LazySturn = 'Lazy-S (Turn)',
  Depthturn = 'Depth (Turn)',
  ChangeCourse = 'Change course',
  TimerSync = 'Timer sync',
  PingPortEnd = 'Ping port end',
  PingStarboardEnd = 'Ping starboard end',
}

export enum SimnetDirection {
  Port = 'Port',
  Starboard = 'Starboard',
  LeftRudderport = 'Left rudder (port)',
  RightRudderstarboard = 'Right rudder (starboard)',
}

export enum SimnetAlarm {
  LowBoatSpeed = 'Low boat speed',
  WindDataMissing = 'Wind data missing',
}

export enum FusionMessageId {
  RequestStatus = 'Request Status',
  Source = 'Source',
  TrackInfo = 'Track Info',
  TrackTitle = 'Track Title',
  TrackArtist = 'Track Artist',
  TrackAlbum = 'Track Album',
  TrackProgress = 'Track Progress',
  AmfmStation = 'AM/FM Station',
  Vhf = 'VHF',
  Squelch = 'Squelch',
  Scan = 'Scan',
  Mute = 'Mute',
  Replay = 'Replay',
  SetZoneVolume = 'Set Zone Volume',
  SetAllVolumes = 'Set All Volumes',
  SubVolume = 'Sub Volume',
  Tone = 'Tone',
  Volume = 'Volume',
  Power = 'Power',
  UnitName = 'Unit Name',
  SiriusXmChannel = 'SiriusXM Channel',
  SiriusXmTitle = 'SiriusXM Title',
  SiriusXmArtist = 'SiriusXM Artist',
  SiriusXmGenre = 'SiriusXM Genre',
  ZoneName = 'Zone Name',
}

export enum FusionPlayStatus {
  Invalid = 'Invalid',
  Playing = 'Playing',
  Paused = 'Paused',
  Stopped = 'Stopped',
  SkipForward = 'Skip Forward',
  SkipRewind = 'Skip Rewind',
}

export enum FusionSourceType {
  Am = 'AM',
  Fm = 'FM',
  Aux = 'Aux',
  Sirius = 'Sirius',
  Ipod = 'Ipod',
  Usb = 'USB',
  Dvd = 'DVD',
  Vhf = 'VHF',
  Invalid = 'Invalid',
  Mtp = 'MTP',
  Bluetooth = 'Bluetooth',
  Arc = 'ARC',
  Android = 'Android',
  Pandora = 'Pandora',
  Dab = 'DAB',
  AirPlay = 'AirPlay',
  Upnp = 'UPNP',
  Unknown = 'Unknown',
}

export enum FusionSiriusComState {
  Unknown = 'Unknown',
  Off = 'Off',
  Initialising = 'Initialising',
  On = 'On',
}

export enum FusionSiriusAlert {
  Unknown = 'Unknown',
  None = 'None',
  Antenna = 'Antenna',
  NoSignal = 'NoSignal',
  SubscriptionUpdate = 'Subscription Update',
}

export enum FusionSiriusTuningMode {
  Normal = 'Normal',
  Category = 'Category',
  Preset = 'Preset',
}

export enum FusionStatusMessageId {
  Unknown = 'Unknown',
  ApiVersion = 'API Version',
  Source = 'Source',
  SourceCount = 'Source Count',
  TrackInfo = 'Track Info',
  TrackTitle = 'Track Title',
  TrackArtist = 'Track Artist',
  TrackAlbum = 'Track Album',
  CoverArt = 'Cover Art',
  TrackProgress = 'Track Progress',
  TunerAlign = 'Tuner Align',
  Tuner = 'Tuner',
  MarineTuner = 'Marine Tuner',
  MarineSquelch = 'Marine Squelch',
  MarineScanMode = 'Marine Scan Mode',
  MenuAction = 'Menu Action',
  MenuCount = 'Menu Count',
  MenuItem = 'Menu Item',
  MenuLockId = 'Menu Lock ID',
  AuxGain = 'Aux Gain',
  Setting = 'Setting',
  Settings = 'Settings',
  UpdateFirmwareResult = 'Update Firmware Result',
  Mute = 'Mute',
  Balance = 'Balance',
  LowPassFilter = 'Low Pass Filter',
  Sublevels = 'Sublevels',
  Tone = 'Tone',
  VolumeLimits = 'Volume Limits',
  Volume = 'Volume',
  Capabilities = 'Capabilities',
  LineLevelControl = 'Line Level Control',
  Power = 'Power',
  UnitName = 'Unit Name',
  Sirius = 'Sirius',
  SiriusXmPresetEvent = 'SiriusXM Preset Event',
  SiriusXmChannel = 'SiriusXM Channel',
  SiriusXmTitle = 'SiriusXM Title',
  SiriusXmArtist = 'SiriusXM Artist',
  SiriusXmGenre = 'SiriusXM Genre',
  SiriusXmCategory = 'SiriusXM Category',
  SiriusXmSignal = 'SiriusXm Signal',
  SiriusXmParentalRequest = 'SiriusXM Parental Request',
  SiriusXmDiagnostics = 'SiriusXM Diagnostics',
  SiriusXmPresets = 'SiriusXM Presets',
  ZoneName = 'Zone Name',
}

export enum SonichubControl {
  Set = 'Set',
  Ack = 'Ack',
}

export enum SonichubSource {
  Am = 'AM',
  Fm = 'FM',
  IPod = 'iPod',
  Usb = 'USB',
  Aux = 'AUX',
  Aux2 = 'AUX 2',
  Mic = 'Mic',
}

export enum IsoControl {
  Ack = 'ACK',
  Nak = 'NAK',
  AccessDenied = 'Access Denied',
  AddressBusy = 'Address Busy',
}

export enum IsoCommand {
  Ack = 'ACK',
  Rts = 'RTS',
  Cts = 'CTS',
  Eom = 'EOM',
  Bam = 'BAM',
  Abort = 'Abort',
}

export enum GroupFunction {
  Request = 'Request',
  Command = 'Command',
  Acknowledge = 'Acknowledge',
  ReadFields = 'Read Fields',
  ReadFieldsReply = 'Read Fields Reply',
  WriteFields = 'Write Fields',
  WriteFieldsReply = 'Write Fields Reply',
}

export enum AirmarCommand {
  AttitudeOffsets = 'Attitude Offsets',
  CalibrateCompass = 'Calibrate Compass',
  TrueWindOptions = 'True Wind Options',
  SimulateMode = 'Simulate Mode',
  CalibrateDepth = 'Calibrate Depth',
  CalibrateSpeed = 'Calibrate Speed',
  CalibrateTemperature = 'Calibrate Temperature',
  SpeedFilter = 'Speed Filter',
  TemperatureFilter = 'Temperature Filter',
  Nmea2000Options = 'NMEA 2000 options',
}

export enum AirmarDepthQualityFactor {
  DepthUnlocked = 'Depth unlocked',
  Quality10 = 'Quality 10%',
  Quality20 = 'Quality 20%',
  Quality30 = 'Quality 30%',
  Quality40 = 'Quality 40%',
  Quality50 = 'Quality 50%',
  Quality60 = 'Quality 60%',
  Quality70 = 'Quality 70%',
  Quality80 = 'Quality 80%',
  Quality90 = 'Quality 90%',
  Quality100 = 'Quality 100%',
}

export enum PgnErrorCode {
  Acknowledge = 'Acknowledge',
  PgnNotSupported = 'PGN not supported',
  PgnNotAvailable = 'PGN not available',
  AccessDenied = 'Access denied',
  NotSupported = 'Not supported',
  TagNotSupported = 'Tag not supported',
  ReadOrWriteNotSupported = 'Read or Write not supported',
}

export enum AirmarTransmissionInterval {
  MeasureInterval = 'Measure interval',
  RequestedByUser = 'Requested by user',
}

export enum MobPositionSource {
  PositionEstimatedByTheVessel = 'Position estimated by the vessel',
  PositionReportedByMobEmitter = 'Position reported by MOB emitter',
}

export enum SteeringMode {
  MainSteering = 'Main Steering',
  NonFollowUpDevice = 'Non-Follow-Up Device',
  FollowUpDevice = 'Follow-Up Device',
  HeadingControlStandalone = 'Heading Control Standalone',
  HeadingControl = 'Heading Control',
  TrackControl = 'Track Control',
}

export enum FusionRadioSource {
  Am = 'AM',
  Fm = 'FM',
}

export enum FusionSetting {
  AlphaSearchThreshold = 'Alpha Search Threshold',
  IPodSubtitles = 'iPod Subtitles',
  Zone2Linked = 'Zone 2 Linked',
  Zone2Enabled = 'Zone 2 Enabled',
  Zone3Enabled = 'Zone 3 Enabled',
  Zone4Enabled = 'Zone 4 Enabled',
  Telemute = 'Telemute',
  TunerRegion = 'Tuner Region',
  MarineZone = 'Marine Zone',
  UsbRepeat = 'USB repeat',
  UsbShuffle = 'USB shuffle',
  IPodAlbumArtwork = 'iPod Album Artwork',
  IPodRepeat = 'iPod repeat',
  IPodShuffle = 'iPod shuffle',
  AmPreset0 = 'AM Preset 0',
  AmPreset1 = 'AM Preset 1',
  AmPreset2 = 'AM Preset 2',
  AmPreset3 = 'AM Preset 3',
  AmPreset4 = 'AM Preset 4',
  AmPreset5 = 'AM Preset 5',
  AmPreset6 = 'AM Preset 6',
  AmPreset7 = 'AM Preset 7',
  AmPreset8 = 'AM Preset 8',
  AmPreset9 = 'AM Preset 9',
  AmPreset10 = 'AM Preset 10',
  AmPreset11 = 'AM Preset 11',
  AmPreset12 = 'AM Preset 12',
  AmPreset13 = 'AM Preset 13',
  AmPreset14 = 'AM Preset 14',
  FmPreset0 = 'FM Preset 0',
  FmPreset1 = 'FM Preset 1',
  FmPreset2 = 'FM Preset 2',
  FmPreset3 = 'FM Preset 3',
  FmPreset4 = 'FM Preset 4',
  FmPreset5 = 'FM Preset 5',
  FmPreset6 = 'FM Preset 6',
  FmPreset7 = 'FM Preset 7',
  FmPreset8 = 'FM Preset 8',
  FmPreset9 = 'FM Preset 9',
  FmPreset10 = 'FM Preset 10',
  FmPreset11 = 'FM Preset 11',
  FmPreset12 = 'FM Preset 12',
  FmPreset13 = 'FM Preset 13',
  FmPreset14 = 'FM Preset 14',
  VhfPreset0 = 'VHF Preset 0',
  VhfPreset1 = 'VHF Preset 1',
  VhfPreset2 = 'VHF Preset 2',
  VhfPreset3 = 'VHF Preset 3',
  VhfPreset4 = 'VHF Preset 4',
  VhfPreset5 = 'VHF Preset 5',
  VhfPreset6 = 'VHF Preset 6',
  VhfPreset7 = 'VHF Preset 7',
  VhfPreset8 = 'VHF Preset 8',
  VhfPreset9 = 'VHF Preset 9',
  VhfPreset10 = 'VHF Preset 10',
  VhfPreset11 = 'VHF Preset 11',
  VhfPreset12 = 'VHF Preset 12',
  VhfPreset13 = 'VHF Preset 13',
  VhfPreset14 = 'VHF Preset 14',
  ClockTime = 'Clock Time',
  ClockAlarm = 'Clock Alarm',
  IPodVideoSignal = 'iPod Video Signal',
  IPodMonitorAspect = 'iPod Monitor Aspect',
  AuxNameIndex = 'Aux Name Index',
  AmEnabled = 'AM Enabled',
  VhfEnabled = 'VHF Enabled',
  Language = 'Language',
  InternalAmpsOn = 'Internal Amps On',
  MtpRepeat = 'MTP Repeat',
  MtpShuffle = 'MTP Shuffle',
  IdAccessorySource = 'Id Accessory Source',
  NmeaPower = 'NMEA Power',
  LowPowerMode = 'Low Power Mode',
  DvdRegion = 'DVD region',
  VolumeZoneSync = 'Volume Zone Sync',
  MaxVolumeStart = 'Max Volume Start',
  BtAutoConnect = 'BT Auto Connect',
  NullSetting = 'Null Setting',
}

export enum FusionRepeatStatus {
  Off = 'Off',
  Onetrack = 'One/track',
  Allalbum = 'All/album',
}

export enum AirmarPostControl {
  ReportPreviousValues = 'Report previous values',
  GenerateNewValues = 'Generate new values',
}

export enum AirmarPostId {
  FormatCode = 'Format Code',
  FactoryEeprom = 'Factory EEPROM',
  UserEeprom = 'User EEPROM',
  WaterTemperatureSensor = 'Water Temperature Sensor',
  SonarTransceiver = 'Sonar Transceiver',
  SpeedSensor = 'Speed sensor',
  InternalTemperatureSensor = 'Internal temperature sensor',
  BatteryVoltageSensor = 'Battery voltage sensor',
}

export enum SonichubTuning {
  SeekingUp = 'Seeking up',
  Tuned = 'Tuned',
  SeekingDown = 'Seeking down',
}

export enum SonichubPlaylist {
  Report = 'Report',
  NextSong = 'Next song',
  PreviousSong = 'Previous song',
}

export enum FusionPowerState {
  On = 'On',
  Off = 'Off',
}

export enum Priority {
  _0 = '0',
  _1 = '1',
  _2 = '2',
  _3 = '3',
  _4 = '4',
  _5 = '5',
  _6 = '6',
  _7 = '7',
  LeaveUnchanged = 'Leave unchanged',
  ResetToDefault = 'Reset to default',
}

export enum DeviceTempState {
  Cold = 'Cold',
  Warm = 'Warm',
  Hot = 'Hot',
}

export enum BandgDecimals {
  _0 = '0',
  _1 = '1',
  _2 = '2',
  _3 = '3',
  _4 = '4',
  Auto = 'Auto',
}

export enum GarminColorMode {
  Day = 'Day',
  Night = 'Night',
  Color = 'Color',
}

export enum GarminColor {
  DayFullColor = 'Day full color',
  DayHighContrast = 'Day high contrast',
  NightFullColor = 'Night full color',
  NightRedblack = 'Night red/black',
  NightGreenblack = 'Night green/black',
}

export enum GarminBacklightLevel {
  _0 = '0%',
  _5 = '5%',
  _10 = '10%',
  _15 = '15%',
  _20 = '20%',
  _25 = '25%',
  _30 = '30%',
  _35 = '35%',
  _40 = '40%',
  _45 = '45%',
  _50 = '50%',
  _55 = '55%',
  _60 = '60%',
  _65 = '65%',
  _70 = '70%',
  _75 = '75%',
  _80 = '80%',
  _85 = '85%',
  _90 = '90%',
  _95 = '95%',
  _100 = '100%',
}

export enum SeatalkPilotMode16 {
  Standby = 'Standby',
  AutoCompassCommanded = 'Auto, compass commanded',
  VaneWindMode = 'Vane, Wind Mode',
  TrackMode = 'Track Mode',
  NoDriftCogReferencedinTrackCourseChanges = 'No Drift, COG referenced (In track, course changes)',
}

export enum StationHealth {
  NotWorking = 'Not Working',
  Unmonitored = 'Unmonitored',
  HealthyOperational = 'Healthy Operational',
  HealthyTestMode = 'Healthy Test Mode',
  TestMode = 'Test Mode',
}

export enum SerialBitRate {
  _25 = '25',
  _50 = '50',
  _100 = '100',
  _200 = '200',
  _300 = '300',
  _600 = '600',
  _1200 = '1200',
  _2400 = '2400',
  _4800 = '4800',
  _9600 = '9600',
  _19200 = '19200',
  _38400 = '38400',
  _57600 = '57600',
}

export enum SerialDetectionMode {
  AutoBitRate = 'Auto bit rate',
  ManualBitRate = 'Manual bit rate',
}

export enum DifferentialSource {
  Auto = 'Auto',
  Loran = 'Loran',
  MskBeacon = 'MSK Beacon',
  FmSubcarrier = 'FM Subcarrier',
  Ais = 'AIS',
  GroundBasedRadio = 'Ground based radio',
  Sbas = 'SBAS',
  Satellite = 'Satellite',
}

export enum DifferentialMode {
  Manual = 'Manual',
  AutoPower = 'Auto Power',
  AutoRange = 'Auto Range',
}

export enum WpPositionResolution {
  MoreThan01Min = 'more than 0.1 min',
  _00101Min = '<0.01 .. 0.1] min',
  _0001001Min = '<0.001 .. 0.01] min',
  _000010001Min = '<0.0001 .. 0.001] min',
  _000001Min = '<0 .. 0.0001] min',
}

export enum WpIdentificationMethod {
  WaypointsInWpList = 'Waypoints in WP list',
  WaypointsEmbeddedInRoute = 'Waypoints embedded in route',
}

export enum WpRouteStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Deleted = 'Deleted',
}

export enum WpNavigationMethod {
  GreatCircle = 'Great Circle',
  RhumbLine = 'Rhumb Line',
}

export enum InverterMode {
  Standalone = 'Standalone',
  SeriesMaster = 'Series Master',
  SeriesSlave = 'Series Slave',
  ParallelMaster = 'Parallel Master',
  ParallelSlave = 'Parallel Slave',
}

export enum CertificationLevel {
  LevelA = 'Level A',
  LevelB = 'Level B',
}

export enum AgsMode {
  Off = 'Off',
  On = 'On',
  Automatic = 'Automatic',
}

export enum AgsOperatingState {
  QuietTime = 'Quiet time',
  AutoOn = 'Auto on',
  AutoOff = 'Auto off',
  ManualOn = 'Manual On',
  ManualOff = 'Manual Off',
  GeneratorShutdown = 'Generator shutdown',
  ExternalShutdown = 'External shutdown',
  Fault = 'Fault',
  Suspend = 'Suspend',
  NotOperating = 'Not operating',
}

export enum AgsGeneratingState {
  Preheating = 'Preheating',
  StartDelay = 'Start delay',
  Cranking = 'Cranking',
  StarterCooling = 'Starter cooling',
  WarmingUp = 'Warming up',
  CoolingDown = 'Cooling down',
  SpinningUp = 'Spinning up',
  ShutdownBypass = 'Shutdown bypass',
  Stopping = 'Stopping',
  Running = 'Running',
  Stopped = 'Stopped',
  CrankDelaty = 'Crank delaty',
}

export enum AgsOnReason {
  NotOn = 'Not on',
  DcVoltageLow = 'DC voltage low',
  BatteryStateOfChargeLow = 'Battery state of charge low',
  AcCurrentHigh = 'AC current high',
  ContactClosed = 'Contact closed',
  ManualOn = 'Manual on',
  Exercise = 'Exercise',
  NonQuietTime = 'Non Quiet time',
  ExternalOnViaAgs = 'External on via AGS',
  ExternalOnViaGenerator = 'External on via generator',
  UnableToStop = 'Unable to stop',
}

export enum AgsOffReason {
  NotOff = 'Not off',
  DcVoltageHigh = 'DC voltage high',
  BatteryStateOfChargeHigh = 'Battery state of charge high',
  AcCurrentLow = 'AC current low',
  ContactOpened = 'Contact opened',
  ReachedAbsorption = 'Reached absorption',
  ReachedFloat = 'Reached float',
  ManualOff = 'Manual off',
  MaxRunTime = 'Max run time',
  MaxAutoCycle = 'Max auto cycle',
  ExerciseDone = 'Exercise done',
  QuietTime = 'Quiet time',
  ExternalOffViaAgs = 'External off via AGS',
  SafeMode = 'Safe mode',
  ExternalOffViaGenerator = 'External off via generator',
  ExternalShutdown = 'External shutdown',
  AutoOff = 'Auto off',
  Fault = 'Fault',
  UnableToStart = 'Unable to start',
}

export enum TelephoneMode {
  F3Eg3ESimplexTelephone = 'F3E/G3E simplex, telephone',
  F3Eg3EDuplexTelephone = 'F3E/G3E duplex, telephone',
  J3ETelephone = 'J3E, telephone',
  H3ETelephone = 'H3E, telephone',
  F1Bj2BFecNbdpTelexteleprinter = 'F1B/J2B FEC NBDP, telex/teleprinter',
  F1Bj2BArqNbdpTelexteleprinter = 'F1B/J2B ARQ NBDP, telex/teleprinter',
  F1Bj2BReceiveOnlyTeleprinterdsc = 'F1B/J2B receive only, teleprinter/DSC',
  F1Bj2BTeleprinterdsc = 'F1B/J2B, teleprinter/DSC',
  A1AMorseTapeRecorder = 'A1A Morse, tape recorder',
  A1AMorseMorseKeyheadSet = 'A1A Morse, Morse key/head set',
  F1Cf2Cf3CFaxMachine = 'F1C/F2C/F3C, FAX machine',
}

export enum PowerMode {
  High = 'High',
  Low = 'Low',
}

export enum BroadcastIndicator {
  BroadcastGeoAreaMessage = 'Broadcast geo area message',
  AddressedMessage = 'Addressed message',
}

export enum Bandwidth {
  Default = 'Default',
  _125KHz = '12.5 kHz',
}

export enum FloodState {
  Flood = 'Flood',
  Slack = 'Slack',
  Ebb = 'Ebb',
}

export enum AcLine {
  Line1 = 'Line 1',
  Line2 = 'Line 2',
  Line3 = 'Line 3',
}

export enum ZoneSize {
  _1Nm = '1 nm',
  _2Nm = '2 nm',
  _3Nm = '3 nm',
  _4Nm = '4 nm',
  _5Nm = '5 nm',
  _6Nm = '6 nm',
}

export enum DeviceFunction {
  Diagnostic = 'Diagnostic',
  BusTrafficLogger = 'Bus Traffic Logger',
  AlarmEnunciator = 'Alarm Enunciator',
  EmergencyPositionIndicatingRadioBeaconepirb = 'Emergency Position Indicating Radio Beacon (EPIRB)',
  ManOverboard = 'Man Overboard',
  VoyageDataRecorder = 'Voyage Data Recorder',
  Camera = 'Camera',
  PcGateway = 'PC Gateway',
  Nmea2000ToAnalogGateway = 'NMEA 2000 to Analog Gateway',
  AnalogToNmea2000Gateway = 'Analog to NMEA 2000 Gateway',
  Nmea2000ToSerialGateway = 'NMEA 2000 to Serial Gateway',
  Nmea0183Gateway = 'NMEA 0183 Gateway',
  NmeaNetworkGateway = 'NMEA Network Gateway',
  Nmea2000WirelessGateway = 'NMEA 2000 Wireless Gateway',
  Router = 'Router',
  Bridge = 'Bridge',
  Repeater = 'Repeater',
  BinaryEventMonitor = 'Binary Event Monitor',
  LoadController = 'Load Controller',
  AcdcInput = 'AC/DC Input',
  FunctionController = 'Function Controller',
  Engine = 'Engine',
  DcGeneratoralternator = 'DC Generator/Alternator',
  SolarPanelsolarArray = 'Solar Panel (Solar Array)',
  WindGeneratordc = 'Wind Generator (DC)',
  FuelCell = 'Fuel Cell',
  NetworkPowerSupply = 'Network Power Supply',
  AcGenerator = 'AC Generator',
  AcBus = 'AC Bus',
  AcMainsutilityshore = 'AC Mains (Utility/Shore)',
  AcOutput = 'AC Output',
  PowerConverterBatteryCharger = 'Power Converter - Battery Charger',
  PowerConverterBatteryChargerPlusinverter = 'Power Converter - Battery Charger+Inverter',
  PowerConverterInverter = 'Power Converter - Inverter',
  PowerConverterDc = 'Power Converter - DC',
  Battery = 'Battery',
  EngineGateway = 'Engine Gateway',
  FollowUpController = 'Follow-up Controller',
  ModeController = 'Mode Controller',
  Autopilot = 'Autopilot',
  Rudder = 'Rudder',
  HeadingSensors = 'Heading Sensors',
  Trimtabsinterceptors = 'Trim (Tabs)/Interceptors',
  AttitudepitchRollYawControl = 'Attitude (Pitch, Roll, Yaw) Control',
  EngineroomMonitoring = 'Engineroom Monitoring',
  EngineController = 'Engine Controller',
  Motor = 'Motor',
  Transmission = 'Transmission',
  ThrottleshiftControl = 'Throttle/Shift Control',
  Actuator = 'Actuator',
  GaugeInterface = 'Gauge Interface',
  GaugeLarge = 'Gauge Large',
  GaugeSmall = 'Gauge Small',
  BottomDepth = 'Bottom Depth',
  BottomDepthspeed = 'Bottom Depth/Speed',
  BottomDepthspeedtemperature = 'Bottom Depth/Speed/Temperature',
  OwnshipAttitude = 'Ownship Attitude',
  OwnshipPositiongnss = 'Ownship Position (GNSS)',
  OwnshipPositionloranC = 'Ownship Position (Loran C)',
  Speed = 'Speed',
  TurnRateIndicator = 'Turn Rate Indicator',
  IntegratedNavigation = 'Integrated Navigation',
  IntegratedNavigationSystem = 'Integrated Navigation System',
  NavigationManagement = 'Navigation Management',
  AutomaticIdentificationSystemais = 'Automatic Identification System (AIS)',
  Radar = 'Radar',
  InfraredImaging = 'Infrared Imaging',
  Ecdis = 'ECDIS',
  Ecs = 'ECS',
  DirectionFinder = 'Direction Finder',
  VoyageStatus = 'Voyage Status',
  Epirb = 'EPIRB',
  Ais = 'AIS',
  Dsc = 'DSC',
  DataReceivertransceiver = 'Data Receiver/Transceiver',
  Satellite = 'Satellite',
  RadioTelephonemfhf = 'Radio-telephone (MF/HF)',
  Radiotelephone = 'Radiotelephone',
  Temperature = 'Temperature',
  Pressure = 'Pressure',
  FluidLevel = 'Fluid Level',
  Flow = 'Flow',
  Humidity = 'Humidity',
  TimedateSystems = 'Time/Date Systems',
  Vdr = 'VDR',
  IntegratedInstrumentation = 'Integrated Instrumentation',
  GeneralPurposeDisplays = 'General Purpose Displays',
  GeneralSensorBox = 'General Sensor Box',
  WeatherInstruments = 'Weather Instruments',
  Transducergeneral = 'Transducer/General',
  Nmea0183Converter = 'NMEA 0183 Converter',
  Atmospheric = 'Atmospheric',
  Aquatic = 'Aquatic',
  Hvac = 'HVAC',
  Scalecatch = 'Scale (Catch)',
  ButtonInterface = 'Button Interface',
  SwitchInterface = 'Switch Interface',
  AnalogInterface = 'Analog Interface',
  Display = 'Display',
  MultimediaPlayer = 'Multimedia Player',
  MultimediaController = 'Multimedia Controller',
}

export enum StationStatus {
  StationInUse = 'Station in use',
  LowSnr = 'Low SNR',
  CycleError = 'Cycle Error',
  Blink = 'Blink',
}

export enum EngineStatus1 {
  CheckEngine = 'Check Engine',
  OverTemperature = 'Over Temperature',
  LowOilPressure = 'Low Oil Pressure',
  LowOilLevel = 'Low Oil Level',
  LowFuelPressure = 'Low Fuel Pressure',
  LowSystemVoltage = 'Low System Voltage',
  LowCoolantLevel = 'Low Coolant Level',
  WaterFlow = 'Water Flow',
  WaterInFuel = 'Water In Fuel',
  ChargeIndicator = 'Charge Indicator',
  PreheatIndicator = 'Preheat Indicator',
  HighBoostPressure = 'High Boost Pressure',
  RevLimitExceeded = 'Rev Limit Exceeded',
  EgrSystem = 'EGR System',
  ThrottlePositionSensor = 'Throttle Position Sensor',
  EmergencyStop = 'Emergency Stop',
}

export enum EngineStatus2 {
  WarningLevel1 = 'Warning Level 1',
  WarningLevel2 = 'Warning Level 2',
  PowerReduction = 'Power Reduction',
  MaintenanceNeeded = 'Maintenance Needed',
  EngineCommError = 'Engine Comm Error',
  SubOrSecondaryThrottle = 'Sub or Secondary Throttle',
  NeutralStartProtect = 'Neutral Start Protect',
  EngineShuttingDown = 'Engine Shutting Down',
}

export enum EntertainmentPlayStatusBitfield {
  Play = 'Play',
  Pause = 'Pause',
  Stop = 'Stop',
  Ff1X = 'FF 1x',
  Ff2X = 'FF 2x',
  Ff3X = 'FF 3x',
  Ff4X = 'FF 4x',
  Rw1X = 'RW 1x',
  Rw2X = 'RW 2x',
  Rw3X = 'RW 3x',
  Rw4X = 'RW 4x',
  SkipAhead = 'Skip ahead',
  SkipBack = 'Skip back',
  JogAhead = 'Jog ahead',
  JogBack = 'Jog back',
  SeekUp = 'Seek up',
  SeekDown = 'Seek down',
  ScanUp = 'Scan up',
  ScanDown = 'Scan down',
  TuneUp = 'Tune up',
  TuneDown = 'Tune down',
  SlowMotion75X = 'Slow motion .75x',
  SlowMotion5X = 'Slow motion .5x',
  SlowMotion25X = 'Slow motion .25x',
  SlowMotion125X = 'Slow motion .125x',
  SourceRenaming = 'Source renaming',
}

export enum EntertainmentGroupBitfield {
  File = 'File',
  PlaylistName = 'Playlist Name',
  GenreName = 'Genre Name',
  AlbumName = 'Album Name',
  ArtistName = 'Artist Name',
  TrackName = 'Track Name',
  StationName = 'Station Name',
  StationNumber = 'Station Number',
  FavouriteNumber = 'Favourite Number',
  PlayQueue = 'Play Queue',
  ContentInfo = 'Content Info',
}

export enum ThrusterControlEvents {
  AnotherDeviceControllingThruster = 'Another device controlling thruster',
  BoatSpeedTooFastToSafelyUseThruster = 'Boat speed too fast to safely use thruster',
}

export enum ThrusterMotorEvents {
  MotorOverTemperatureCutout = 'Motor over temperature cutout',
  MotorOverCurrentCutout = 'Motor over current cutout',
  LowOilLevelWarning = 'Low oil level warning',
  OilOverTemperatureWarning = 'Oil over temperature warning',
  ControllerUnderVoltageCutout = 'Controller under voltage cutout',
  ManufacturerDefined = 'Manufacturer defined',
}

export enum WindlassControl {
  AnotherDeviceControllingWindlass = 'Another device controlling windlass',
}

export enum WindlassOperation {
  SystemError = 'System error',
  SensorError = 'Sensor error',
  NoWindlassMotionDetected = 'No windlass motion detected',
  RetrievalDockingDistanceReached = 'Retrieval docking distance reached',
  EndOfRodeReached = 'End of rode reached',
}

export enum WindlassMonitoring {
  ControllerUnderVoltageCutOut = 'Controller under voltage cut-out',
  ControllerOverCurrentCutOut = 'Controller over current cut-out',
  ControllerOverTemperatureCutOut = 'Controller over temperature cut-out',
  ManufacturerDefined = 'Manufacturer defined',
}

export enum SimnetApModeBitfield {
  Standby = 'Standby',
  Heading = 'Heading',
  Nav = 'Nav',
  NoDrift = 'No Drift',
  Wind = 'Wind',
}

export enum SimnetAlertBitfield {
  NoGpsFix = 'No GPS fix',
  NoActiveAutopilotControlUnit = 'No active autopilot control unit',
  NoAutopilotComputer = 'No autopilot computer',
  ApClutchOverload = 'AP clutch overload',
  ApClutchDisengaged = 'AP clutch disengaged',
  RudderControllerFault = 'Rudder controller fault',
  NoRudderResponse = 'No rudder response',
  RudderDriveOverload = 'Rudder drive overload',
  HighDriveSupply = 'High drive supply',
  LowDriveSupply = 'Low drive supply',
  MemoryFail = 'Memory fail',
  ApPositionDataMissing = 'AP position data missing',
  ApSpeedDataMissing = 'AP speed data missing',
  ApDepthDataMissing = 'AP depth data missing',
  ApHeadingDataMissing = 'AP heading data missing',
  ApNavDataMissing = 'AP nav data missing',
  ApRudderDataMissing = 'AP rudder data missing',
  ApWindDataMissing = 'AP wind data missing',
  ApOffCourse = 'AP off course',
  HighDriveTemperature = 'High drive temperature',
  DriveInhibit = 'Drive inhibit',
  RudderLimit = 'Rudder limit',
  DriveComputerMissing = 'Drive computer missing',
  DriveReadyMissing = 'Drive ready missing',
  EvcComError = 'EVC com error',
  EvcOverride = 'EVC override',
  LowCanBusVoltage = 'Low CAN bus voltage',
  CanBusSupplyOverload = 'CAN bus supply overload',
  WindSensorBatteryLow = 'Wind sensor battery low',
}

export enum EntertainmentRepeatBitfield {
  Song = 'Song',
  PlayQueue = 'Play queue',
}

export enum EntertainmentShuffleBitfield {
  PlayQueue = 'Play queue',
  All = 'All',
}

export enum WpChange {
  ChangeInMainDatapositionName = 'Change in main data (Position, Name)',
  ChangeInSupplementaryParametersorNewAdded = 'Change in supplementary parameters (or new added)',
  ChangedNumberOfWPsInRoutewpListAndorNameChangedadded = 'Changed number of WPs in Route/WP-List, and/or name changed/added',
  RouteChangeSupplementaryParametersorNewAdded = 'Route: Change supplementary parameters (or new added)',
  OtherNotSpecifiedChanged = 'Other not specified changed',
}

export enum WpCriticalParameters {
  NavigationMethod = 'Navigation Method',
  XteLimit = 'XTE Limit',
}

export interface PGN {}

/*
  PGN: 59392
  Description: ISO Acknowledgement
  Explanation: This message is provided by ISO 11783 for a handshake mechanism between transmitting and receiving devices. This message is the possible response to acknowledge the reception of a 'normal broadcast' message or the response to a specific command to indicate compliance or failure.
*/
export interface PGN_59392 extends PGN {
  control: IsoControl
  groupFunction: number
  reserved: number
  pgn: string
}

/*
  PGN: 59904
  Description: ISO Request
  Explanation: As defined by ISO, this message has a data length of 3 bytes with no padding added to complete the single frame. The appropriate response to this message is based on the PGN being requested, and whether the receiver supports the requested PGN.
*/
export interface PGN_59904 extends PGN {
  pgn: string
}

/*
  PGN: 60160
  Description: ISO Transport Protocol, Data Transfer
  Explanation: ISO 11783 defines this PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN represents a single packet of a multipacket message.
*/
export interface PGN_60160 extends PGN {
  sid: number
  data: number
}

/*
  PGN: 60416
  Description: ISO Transport Protocol, Connection Management - Request To Send
  Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to prepare the receiver for the fact that this sender wants to transmit a long message. The receiver will respond with CTS.
  Match: Group Function Code == RTS
*/
export interface PGN_60416_Rts extends PGN {
  groupFunctionCode: IsoCommand
  messageSize: number
  packets: number
  packetsReply: number
  pgn: string
}

/*
  PGN: 60416
  Description: ISO Transport Protocol, Connection Management - Clear To Send
  Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to signal to the sender that the receive is ready to receive a number of frames.
  Match: Group Function Code == CTS
*/
export interface PGN_60416_Cts extends PGN {
  groupFunctionCode: IsoCommand
  maxPackets: number
  nextSid: number
  reserved: number
  pgn: string
}

/*
  PGN: 60416
  Description: ISO Transport Protocol, Connection Management - End Of Message
  Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to mark the end of the message.
  Match: Group Function Code == EOM
*/
export interface PGN_60416_Eom extends PGN {
  groupFunctionCode: IsoCommand
  totalMessageSize: number
  totalNumberOfFramesReceived: number
  reserved: number
  pgn: string
}

/*
  PGN: 60416
  Description: ISO Transport Protocol, Connection Management - Broadcast Announce
  Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to announce a broadcast of a long message spanning multiple frames.
  Match: Group Function Code == BAM
*/
export interface PGN_60416_Bam extends PGN {
  groupFunctionCode: IsoCommand
  messageSize: number
  packets: number
  reserved: number
  pgn: string
}

/*
  PGN: 60416
  Description: ISO Transport Protocol, Connection Management - Abort
  Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to announce an abort of a long message spanning multiple frames.
  Match: Group Function Code == Abort
*/
export interface PGN_60416_Abort extends PGN {
  groupFunctionCode: IsoCommand
  reason: number
  reserved: number
  pgn: string
}

/*
  PGN: 60928
  Description: ISO Address Claim
  Explanation: This network management message is used to claim network address, reply to devices requesting the claimed address, and to respond with device information (NAME) requested by the ISO Request or Complex Request Group Function. This PGN contains several fields that are requestable, either independently or in any combination. Note that there are several places where this 64-bit data also occurs, these are named ISO_NAME and can be recursively explained.
*/
export interface PGN_60928 extends PGN {
  uniqueNumber: number
  manufacturerCode: ManufacturerCode
  deviceInstanceLower: number
  deviceInstanceUpper: number
  deviceFunction: DeviceFunction
  spare: string
  deviceClass: DeviceClass
  systemInstance: number
  industryGroup: IndustryCode
  arbitraryAddressCapable: boolean
}

/*
  PGN: 61184
  Description: Seatalk: Wireless Keypad Light Control
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Wireless Keypad Light Control
*/
export interface PGN_61184_Raymarine_WirelessKeypadLightControl extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: number
  variant: number
  wirelessSetting: number
  wiredSetting: number
  reserved8: number
}

/*
  PGN: 61184
  Description: Seatalk: Wireless Keypad Control
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
*/
export interface PGN_61184_Raymarine extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  PID: number
  variant: number
  beepControl: number
  reserved7: number
}

/*
  PGN: 61184
  Description: Victron Battery Register
  Match: Manufacturer Code == Victron Energy
  Match: Industry Code == Marine Industry
*/
export interface PGN_61184_VictronEnergy extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  registerId: number
  payload: number
}

/*
  PGN: 65001
  Description: Bus #1 Phase C Basic AC Quantities
*/
export interface PGN_65001 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  reserved: number
}

/*
  PGN: 65002
  Description: Bus #1 Phase B Basic AC Quantities
*/
export interface PGN_65002 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  reserved: number
}

/*
  PGN: 65003
  Description: Bus #1 Phase A Basic AC Quantities
*/
export interface PGN_65003 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  reserved: number
}

/*
  PGN: 65004
  Description: Bus #1 Average Basic AC Quantities
*/
export interface PGN_65004 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  reserved: number
}

/*
  PGN: 65005
  Description: Utility Total AC Energy
*/
export interface PGN_65005 extends PGN {
  totalEnergyExport: number
  totalEnergyImport: number
}

/*
  PGN: 65006
  Description: Utility Phase C AC Reactive Power
*/
export interface PGN_65006 extends PGN {
  reactivePower: number
  powerFactor: number
  powerFactorLagging: PowerFactor
  reserved: number
}

/*
  PGN: 65007
  Description: Utility Phase C AC Power
*/
export interface PGN_65007 extends PGN {
  realPower: number
  apparentPower: number
}

/*
  PGN: 65008
  Description: Utility Phase C Basic AC Quantities
*/
export interface PGN_65008 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  acRmsCurrent: number
}

/*
  PGN: 65009
  Description: Utility Phase B AC Reactive Power
*/
export interface PGN_65009 extends PGN {
  reactivePower: number
  powerFactor: number
  powerFactorLagging: PowerFactor
  reserved: number
}

/*
  PGN: 65010
  Description: Utility Phase B AC Power
*/
export interface PGN_65010 extends PGN {
  realPower: number
  apparentPower: number
}

/*
  PGN: 65011
  Description: Utility Phase B Basic AC Quantities
*/
export interface PGN_65011 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  acRmsCurrent: number
}

/*
  PGN: 65012
  Description: Utility Phase A AC Reactive Power
*/
export interface PGN_65012 extends PGN {
  reactivePower: number
  powerFactor: number
  powerFactorLagging: PowerFactor
  reserved: number
}

/*
  PGN: 65013
  Description: Utility Phase A AC Power
*/
export interface PGN_65013 extends PGN {
  realPower: number
  apparentPower: number
}

/*
  PGN: 65014
  Description: Utility Phase A Basic AC Quantities
*/
export interface PGN_65014 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  acRmsCurrent: number
}

/*
  PGN: 65015
  Description: Utility Total AC Reactive Power
*/
export interface PGN_65015 extends PGN {
  reactivePower: number
  powerFactor: number
  powerFactorLagging: PowerFactor
  reserved: number
}

/*
  PGN: 65016
  Description: Utility Total AC Power
*/
export interface PGN_65016 extends PGN {
  realPower: number
  apparentPower: number
}

/*
  PGN: 65017
  Description: Utility Average Basic AC Quantities
*/
export interface PGN_65017 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  acRmsCurrent: number
}

/*
  PGN: 65018
  Description: Generator Total AC Energy
*/
export interface PGN_65018 extends PGN {
  totalEnergyExport: number
  totalEnergyImport: number
}

/*
  PGN: 65019
  Description: Generator Phase C AC Reactive Power
*/
export interface PGN_65019 extends PGN {
  reactivePower: number
  powerFactor: number
  powerFactorLagging: PowerFactor
  reserved: number
}

/*
  PGN: 65020
  Description: Generator Phase C AC Power
*/
export interface PGN_65020 extends PGN {
  realPower: number
  apparentPower: number
}

/*
  PGN: 65021
  Description: Generator Phase C Basic AC Quantities
*/
export interface PGN_65021 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  acRmsCurrent: number
}

/*
  PGN: 65022
  Description: Generator Phase B AC Reactive Power
*/
export interface PGN_65022 extends PGN {
  reactivePower: number
  powerFactor: number
  powerFactorLagging: PowerFactor
  reserved: number
}

/*
  PGN: 65023
  Description: Generator Phase B AC Power
*/
export interface PGN_65023 extends PGN {
  realPower: number
  apparentPower: number
}

/*
  PGN: 65024
  Description: Generator Phase B Basic AC Quantities
*/
export interface PGN_65024 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  acRmsCurrent: number
}

/*
  PGN: 65025
  Description: Generator Phase A AC Reactive Power
*/
export interface PGN_65025 extends PGN {
  reactivePower: number
  powerFactor: number
  powerFactorLagging: PowerFactor
  reserved: number
}

/*
  PGN: 65026
  Description: Generator Phase A AC Power
*/
export interface PGN_65026 extends PGN {
  realPower: number
  apparentPower: number
}

/*
  PGN: 65027
  Description: Generator Phase A Basic AC Quantities
*/
export interface PGN_65027 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  acRmsCurrent: number
}

/*
  PGN: 65028
  Description: Generator Total AC Reactive Power
*/
export interface PGN_65028 extends PGN {
  reactivePower: number
  powerFactor: number
  powerFactorLagging: PowerFactor
  reserved: number
}

/*
  PGN: 65029
  Description: Generator Total AC Power
*/
export interface PGN_65029 extends PGN {
  realPower: number
  apparentPower: number
}

/*
  PGN: 65030
  Description: Generator Average Basic AC Quantities
*/
export interface PGN_65030 extends PGN {
  lineLineAcRmsVoltage: number
  lineNeutralAcRmsVoltage: number
  acFrequency: number
  acRmsCurrent: number
}

/*
  PGN: 65240
  Description: ISO Commanded Address
  Explanation: ISO 11783 defined this message to provide a mechanism for assigning a network address to a node. The NAME information in the data portion of the message must match the name information of the node whose network address is to be set. ISO 11783-5 requires that this mesage to be sent using the BAM Transport Protocol method. The appropriate response to this message is defined in section 5.2.3 of 11783-5.
*/
export interface PGN_65240 extends PGN {
  uniqueNumber: number
  manufacturerCode: ManufacturerCode
  deviceInstanceLower: number
  deviceInstanceUpper: number
  deviceFunction: DeviceFunction
  reserved: number
  deviceClass: DeviceClass
  systemInstance: number
  industryCode: IndustryCode
  reserved10: number
  newSourceAddress: number
}

/*
  PGN: 65280
  Description: Furuno: Heave
*/
export interface PGN_65280 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  heave: number
  reserved5: number
}

/*
  PGN: 65284
  Description: Maretron: Proprietary DC Breaker Current
*/
export interface PGN_65284 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  bankInstance: number
  indicatorNumber: number
  breakerCurrent: number
  reserved7: number
}

/*
  PGN: 65285
  Description: Airmar: Boot State Acknowledgment
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
*/
export interface PGN_65285_Airmar extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  bootState: BootState
  reserved5: number
}

/*
  PGN: 65285
  Description: Lowrance: Temperature
  Match: Manufacturer Code == Lowrance
  Match: Industry Code == Marine Industry
*/
export interface PGN_65285_Lowrance extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  temperatureSource: TemperatureSource
  actualTemperature: number
  reserved6: number
}

/*
  PGN: 65286
  Description: Chetco: Dimmer
  Match: Manufacturer Code == Chetco
  Match: Industry Code == Marine Industry
*/
export interface PGN_65286_Chetco extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  instance: number
  dimmer1: number
  dimmer2: number
  dimmer3: number
  dimmer4: number
  control: number
}

/*
  PGN: 65286
  Description: Airmar: Boot State Request
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
*/
export interface PGN_65286_Airmar extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
}

/*
  PGN: 65287
  Description: Airmar: Access Level
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
*/
export interface PGN_65287_Airmar extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  formatCode: number
  accessLevel: AccessLevel
  reserved6: number
  accessSeedKey: number
}

/*
  PGN: 65287
  Description: Simnet: Configure Temperature Sensor
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_65287_Simrad extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
}

/*
  PGN: 65288
  Description: Seatalk: Alarm
*/
export interface PGN_65288 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  sid: number
  alarmStatus: SeatalkAlarmStatus
  alarmId: SeatalkAlarmId
  alarmGroup: SeatalkAlarmGroup
  alarmPriority: number
}

/*
  PGN: 65289
  Description: Simnet: Trim Tab Sensor Calibration
*/
export interface PGN_65289 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
}

/*
  PGN: 65290
  Description: Simnet: Paddle Wheel Speed Configuration
*/
export interface PGN_65290 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
}

/*
  PGN: 65292
  Description: Simnet: Clear Fluid Level Warnings
*/
export interface PGN_65292 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
}

/*
  PGN: 65293
  Description: Simnet: LGC-2000 Configuration
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_65293_Simrad extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
}

/*
  PGN: 65293
  Description: Diverse Yacht Services: Load Cell
  Match: Manufacturer Code == Diverse Yacht Services
  Match: Industry Code == Marine Industry
*/
export interface PGN_65293_DiverseYachtServices extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  instance: number
  reserved5: number
  loadCell: number
}

/*
  PGN: 65302
  Description: Simnet: AP Unknown 1
  Explanation: Seen as sent by AC-42 only so far.
*/
export interface PGN_65302 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  a: number
  b: number
  c: number
  d: number
  reserved8: number
}

/*
  PGN: 65305
  Description: Simnet: Device Status
  Explanation: This PGN is reported by an Autopilot Computer (AC/NAC)
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Report == Status
*/
export interface PGN_65305_Simrad_Status extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  model: SimnetDeviceModel
  report: SimnetDeviceReport
  status: SimnetApStatus
  spare7: string
}

/*
  PGN: 65305
  Description: Simnet: Device Status Request
  Explanation: This PGN is sent by an active AutoPilot head controller (AP, MFD, Triton2). It is used by the AC (AutoPilot Controller) to verify that there is an active controller. If this PGN is not sent regularly the AC may report an error and go to standby.
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Report == Send Status
*/
export interface PGN_65305_Simrad_SendStatus extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  model: SimnetDeviceModel
  report: SimnetDeviceReport
  spare6: string
}

/*
  PGN: 65305
  Description: Simnet: Pilot Mode
  Explanation: This PGN is reported by an Autopilot Computer (AC/NAC)
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Report == Mode
*/
export interface PGN_65305_Simrad_Mode extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  model: SimnetDeviceModel
  report: SimnetDeviceReport
  mode: SimnetApModeBitfield[]
  spare7: string
}

/*
  PGN: 65305
  Description: Simnet: Device Mode Request
  Explanation: This PGN is sent by an active AutoPilot head controller (AP, MFD, Triton2). It is used by the AC (AutoPilot Controller) to verify that there is an active controller. If this PGN is not sent regularly the AC may report an error and go to standby.
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Report == Send Mode
*/
export interface PGN_65305_Simrad_SendMode extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  model: SimnetDeviceModel
  report: SimnetDeviceReport
  spare6: string
}

/*
  PGN: 65305
  Description: Simnet: Sailing Processor Status
  Explanation: This PGN has been seen to be reported by a Sailing Processor.
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Report == Sailing Processor Status
*/
export interface PGN_65305_Simrad_SailingProcessorStatus extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  model: SimnetDeviceModel
  report: SimnetDeviceReport
  data: number
}

/*
  PGN: 65309
  Description: Navico: Wireless Battery Status
*/
export interface PGN_65309 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  status: number
  batteryStatus: number
  batteryChargeStatus: number
  reserved7: number
}

/*
  PGN: 65312
  Description: Navico: Wireless Signal Status
*/
export interface PGN_65312 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  unknown: number
  signalStrength: number
  reserved6: number
}

/*
  PGN: 65340
  Description: Simnet: AP Unknown 2
  Explanation: Seen as sent by AC-42 only so far.
*/
export interface PGN_65340 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  a: number
  b: number
  c: number
  d: number
  e: number
  reserved9: number
}

/*
  PGN: 65341
  Description: Simnet: Autopilot Angle
*/
export interface PGN_65341 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  mode: SimnetApMode
  reserved6: number
  angle: number
}

/*
  PGN: 65345
  Description: Seatalk: Pilot Wind Datum
*/
export interface PGN_65345 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  windDatum: number
  rollingAverageWindAngle: number
  reserved6: number
}

/*
  PGN: 65350
  Description: Simnet: Magnetic Field
*/
export interface PGN_65350 extends PGN {
  a: number
  b: number
  c: number
  d: number
  reserved: number
}

/*
  PGN: 65359
  Description: Seatalk: Pilot Heading
*/
export interface PGN_65359 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  sid: number
  headingTrue: number
  headingMagnetic: number
  reserved7: number
}

/*
  PGN: 65360
  Description: Seatalk: Pilot Locked Heading
*/
export interface PGN_65360 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  sid: number
  targetHeadingTrue: number
  targetHeadingMagnetic: number
  reserved7: number
}

/*
  PGN: 65361
  Description: Seatalk: Silence Alarm
*/
export interface PGN_65361 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  alarmId: SeatalkAlarmId
  alarmGroup: SeatalkAlarmGroup
  reserved6: number
}

/*
  PGN: 65371
  Description: Seatalk: Keypad Message
*/
export interface PGN_65371 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: number
  firstKey: number
  secondKey: number
  firstKeyState: number
  secondKeyState: number
  reserved9: number
  encoderPosition: number
  reserved11: number
}

/*
  PGN: 65374
  Description: SeaTalk: Keypad Heartbeat
*/
export interface PGN_65374 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: number
  variant: number
  status: number
  reserved7: number
}

/*
  PGN: 65379
  Description: Seatalk: Pilot Mode
*/
export interface PGN_65379 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  pilotMode: SeatalkPilotMode16
  subMode: number
  pilotModeData: number
  reserved7: number
}

/*
  PGN: 65408
  Description: Airmar: Depth Quality Factor
*/
export interface PGN_65408 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  sid: number
  depthQualityFactor: AirmarDepthQualityFactor
  reserved6: number
}

/*
  PGN: 65409
  Description: Airmar: Speed Pulse Count
*/
export interface PGN_65409 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  sid: number
  durationOfInterval: string
  numberOfPulsesReceived: number
  reserved7: number
}

/*
  PGN: 65410
  Description: Airmar: Device Information
*/
export interface PGN_65410 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  sid: number
  internalDeviceTemperature: number
  supplyVoltage: number
  reserved7: number
}

/*
  PGN: 65420
  Description: Simnet: AP Unknown 3
  Explanation: Seen as sent by AC-42 only so far.
*/
export interface PGN_65420 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  a: number
  b: number
  c: number
  d: number
  e: number
  reserved9: number
}

/*
  PGN: 65480
  Description: Simnet: Autopilot Mode
*/
export interface PGN_65480 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
}

/*
  PGN: 126208
  Description: NMEA - Request group function
  Explanation: This is the Request variation of this group function PGN. The receiver shall respond by sending the requested PGN, at the desired transmission interval.
*/
export interface PGN_126208 extends PGN {
  functionCode: GroupFunction
  pgn: string
  transmissionInterval: string
  transmissionIntervalOffset: string
  numberOfParameters: number
  parameter: string
  value: string
}

/*
  PGN: 126208
  Description: NMEA - Command group function
  Explanation: This is the Command variation of this group function PGN. This instructs the receiver to modify its internal state for the passed parameters. The receiver shall reply with an Acknowledge reply.
  Match: Function Code == Command
*/
export interface PGN_126208_Command extends PGN {
  functionCode: GroupFunction
  pgn: string
  priority: Priority
  reserved: number
  numberOfParameters: number
  parameter: string
  value: string
}

/*
  PGN: 126208
  Description: NMEA - Acknowledge group function
  Explanation: This is the Acknowledge variation of this group function PGN. When a device receives a Command, it will attempt to perform the command (change its parameters) and reply positively or negatively.
  Match: Function Code == Acknowledge
*/
export interface PGN_126208_Acknowledge extends PGN {
  functionCode: GroupFunction
  pgn: string
  pgnErrorCode: PgnErrorCode
  transmissionIntervalPriorityErrorCode: TransmissionInterval
  numberOfParameters: number
  parameter: ParameterField
}

/*
  PGN: 126208
  Description: NMEA - Read Fields group function
  Explanation: This is the Read Fields variation of this group function PGN. The receiver shall respond by sending a Read Reply variation of this PGN, containing the desired values. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  Match: Function Code == Read Fields
*/
export interface PGN_126208_ReadFields extends PGN {
  functionCode: GroupFunction
  pgn: string
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  uniqueId: number
  numberOfSelectionPairs: number
  numberOfParameters: number
  selectionParameter: string
  selectionValue: string
  parameter: string
}

/*
  PGN: 126208
  Description: NMEA - Read Fields reply group function
  Explanation: This is the Read Fields Reply variation of this group function PGN. The receiver is responding to a Read Fields request. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  Match: Function Code == Read Fields Reply
*/
export interface PGN_126208_ReadFieldsReply extends PGN {
  functionCode: GroupFunction
  pgn: string
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  uniqueId: number
  numberOfSelectionPairs: number
  numberOfParameters: number
  selectionParameter: string
  selectionValue: string
  parameter: string
  value: string
}

/*
  PGN: 126208
  Description: NMEA - Write Fields group function
  Explanation: This is the Write Fields variation of this group function PGN. The receiver shall modify internal state and reply with a Write Fields Reply message. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  Match: Function Code == Write Fields
*/
export interface PGN_126208_WriteFields extends PGN {
  functionCode: GroupFunction
  pgn: string
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  uniqueId: number
  numberOfSelectionPairs: number
  numberOfParameters: number
  selectionParameter: string
  selectionValue: string
  parameter: string
  value: string
}

/*
  PGN: 126208
  Description: NMEA - Write Fields reply group function
  Explanation: This is the Write Fields Reply variation of this group function PGN. The receiver is responding to a Write Fields request. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  Match: Function Code == Write Fields Reply
*/
export interface PGN_126208_WriteFieldsReply extends PGN {
  functionCode: GroupFunction
  pgn: string
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  uniqueId: number
  numberOfSelectionPairs: number
  numberOfParameters: number
  selectionParameter: string
  selectionValue: string
  parameter: string
  value: string
}

/*
  PGN: 126464
  Description: PGN List (Transmit and Receive)
*/
export interface PGN_126464 extends PGN {
  functionCode: PgnListFunction
  pgn: string
}

/*
  PGN: 126720
  Description: Seatalk1: Pilot Mode
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 0x81f0
  Match: command == 0x84
*/
export interface PGN_126720_Raymarine__0X81F0__0X84 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: number
  command: number
  unknown1: number
  pilotMode: SeatalkPilotMode
  subMode: number
  pilotModeData: number
  unknown2: number
}

/*
  PGN: 126720
  Description: Fusion: Media Control
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Media Control
*/
export interface PGN_126720_FusionElectronics_MediaControl extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: number
  unknown: number
  sourceId: number
  command: FusionCommand
}

/*
  PGN: 126720
  Description: Fusion: Sirius Control
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Sirius Control
*/
export interface PGN_126720_FusionElectronics_SiriusControl extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: number
  unknown: number
  sourceId: number
  command: FusionSiriusCommand
}

/*
  PGN: 126720
  Description: Fusion: Request Status
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Request Status
*/
export interface PGN_126720_FusionElectronics_RequestStatus extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: FusionMessageId
  unknown: number
}

/*
  PGN: 126720
  Description: Fusion: Set Source
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Source
*/
export interface PGN_126720_FusionElectronics_Source extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: FusionMessageId
  unknown: number
  sourceId: number
}

/*
  PGN: 126720
  Description: Fusion: Set Mute
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 23
*/
export interface PGN_126720_FusionElectronics_23 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: FusionMessageId
  command: FusionMuteCommand
}

/*
  PGN: 126720
  Description: Fusion: Set Zone Volume
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Set Zone Volume
*/
export interface PGN_126720_FusionElectronics_SetZoneVolume extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: FusionMessageId
  unknown: number
  zone: number
  volume: number
}

/*
  PGN: 126720
  Description: Fusion: Set All Volumes
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Set All Volumes
*/
export interface PGN_126720_FusionElectronics_SetAllVolumes extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: FusionMessageId
  unknown: number
  zone1: number
  zone2: number
  zone3: number
  zone4: number
}

/*
  PGN: 126720
  Description: Seatalk1: Keystroke
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 0x81f0
  Match: command == 0x86
*/
export interface PGN_126720_Raymarine__0X81F0__0X86 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: number
  command: number
  device: number
  key: SeatalkKeystroke
  keyinverted: number
  unknownData: number
}

/*
  PGN: 126720
  Description: Seatalk1: Device Identification
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 0x81f0
  Match: command == 0x90
*/
export interface PGN_126720_Raymarine__0X81F0__0X90 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: number
  command: number
  reserved6: number
  device: SeatalkDeviceId
}

/*
  PGN: 126720
  Description: Seatalk1: Display Brightness
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 0x0c8c
*/
export interface PGN_126720_Raymarine__0X0C8C extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: number
  group: SeatalkNetworkGroup
  unknown1: number
  command: number
  brightness: number
  unknown2: number
}

/*
  PGN: 126720
  Description: Seatalk1: Display Color
  Match: Manufacturer Code == Raymarine
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == 0x0c8c
  Match: Command == Color
*/
export interface PGN_126720_Raymarine__0X0C8C_Color extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: number
  group: SeatalkNetworkGroup
  unknown1: number
  command: number
  color: SeatalkDisplayColor
  unknown2: number
}

/*
  PGN: 126720
  Description: Airmar: Attitude Offset
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Attitude Offsets
*/
export interface PGN_126720_Airmar_AttitudeOffsets extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  azimuthOffset: number
  pitchOffset: number
  rollOffset: number
}

/*
  PGN: 126720
  Description: Airmar: Calibrate Compass
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Calibrate Compass
*/
export interface PGN_126720_Airmar_CalibrateCompass extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  calibrateFunction: AirmarCalibrateFunction
  calibrationStatus: AirmarCalibrateStatus
  verifyScore: number
  xAxisGainValue: number
  yAxisGainValue: number
  zAxisGainValue: number
  xAxisLinearOffset: number
  yAxisLinearOffset: number
  zAxisLinearOffset: number
  xAxisAngularOffset: number
  pitchAndRollDamping: string
  compassRateGyroDamping: string
}

/*
  PGN: 126720
  Description: Airmar: True Wind Options
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == True Wind Options
*/
export interface PGN_126720_Airmar_TrueWindOptions extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  cogSubstitutionForHdg: boolean
  reserved6: number
}

/*
  PGN: 126720
  Description: Airmar: Simulate Mode
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Simulate Mode
*/
export interface PGN_126720_Airmar_SimulateMode extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  simulateMode: OffOn
  reserved6: number
}

/*
  PGN: 126720
  Description: Airmar: Calibrate Depth
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Calibrate Depth
*/
export interface PGN_126720_Airmar_CalibrateDepth extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  speedOfSoundMode: number
  reserved6: number
}

/*
  PGN: 126720
  Description: Airmar: Calibrate Speed
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Calibrate Speed
*/
export interface PGN_126720_Airmar_CalibrateSpeed extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  numberOfPairsOfDataPoints: number
  inputFrequency: number
  outputSpeed: number
}

/*
  PGN: 126720
  Description: Airmar: Calibrate Temperature
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Calibrate Temperature
*/
export interface PGN_126720_Airmar_CalibrateTemperature extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  temperatureInstance: AirmarTemperatureInstance
  reserved6: number
  temperatureOffset: number
}

/*
  PGN: 126720
  Description: Airmar: Speed Filter None
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Speed Filter
*/
export interface PGN_126720_Airmar_SpeedFilter extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  filterType: number
  reserved6: number
  sampleInterval: string
}

/*
  PGN: 126720
  Description: Airmar: Speed Filter IIR
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Speed Filter
  Match: Filter type == IIR filter
*/
export interface PGN_126720_Airmar_SpeedFilter_IirFilter extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  filterType: number
  reserved6: number
  sampleInterval: string
  filterDuration: string
}

/*
  PGN: 126720
  Description: Airmar: Temperature Filter None
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Temperature Filter
*/
export interface PGN_126720_Airmar_TemperatureFilter extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  filterType: number
  reserved6: number
  sampleInterval: string
}

/*
  PGN: 126720
  Description: Airmar: Temperature Filter IIR
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Temperature Filter
  Match: Filter type == IIR filter
*/
export interface PGN_126720_Airmar_TemperatureFilter_IirFilter extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  filterType: number
  reserved6: number
  sampleInterval: string
  filterDuration: string
}

/*
  PGN: 126720
  Description: Airmar: NMEA 2000 options
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == NMEA 2000 options
*/
export interface PGN_126720_Airmar_Nmea2000Options extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: AirmarCommand
  transmissionInterval: AirmarTransmissionInterval
  reserved6: number
}

/*
  PGN: 126720
  Description: Airmar: Addressable Multi-Frame
  Match: Manufacturer Code == Airmar
  Match: Industry Code == Marine Industry
*/
export interface PGN_126720_Airmar extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: number
}

/*
  PGN: 126720
  Description: Maretron: Slave Response
  Match: Manufacturer Code == Maretron
  Match: Industry Code == Marine Industry
*/
export interface PGN_126720_Maretron extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  productCode: number
  softwareCode: number
  command: number
  status: number
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
export interface PGN_126720_Garmin_Always222_Always5_Always5_Always5 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  unknownId1: number
  unknownId2: number
  unknownId3: number
  unknownId4: number
  spare8: string
  mode: GarminColorMode
  spare10: string
  backlight: GarminBacklightLevel
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
export interface PGN_126720_Garmin_Always222_Always5_Always5_Always5_Night extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  unknownId1: number
  unknownId2: number
  unknownId3: number
  unknownId4: number
  spare8: string
  mode: GarminColorMode
  spare10: string
  backlight: GarminBacklightLevel
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
export interface PGN_126720_Garmin_Always222_Always5_Always5_Always5_Color extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  unknownId1: number
  unknownId2: number
  unknownId3: number
  unknownId4: number
  spare8: string
  mode: GarminColorMode
  spare10: string
  color: GarminColor
}

/*
  PGN: 126983
  Description: Alert
*/
export interface PGN_126983 extends PGN {
  alertType: AlertType
  alertCategory: AlertCategory
  alertSystem: number
  alertSubSystem: number
  alertId: number
  dataSourceNetworkIdName: string
  dataSourceInstance: number
  dataSourceIndexSource: number
  alertOccurrenceNumber: number
  temporarySilenceStatus: boolean
  acknowledgeStatus: boolean
  escalationStatus: boolean
  temporarySilenceSupport: boolean
  acknowledgeSupport: boolean
  escalationSupport: boolean
  reserved: number
  acknowledgeSourceNetworkIdName: string
  triggerCondition: AlertTriggerCondition
  thresholdStatus: AlertThresholdStatus
  alertPriority: number
  alertState: AlertState
}

/*
  PGN: 126984
  Description: Alert Response
*/
export interface PGN_126984 extends PGN {
  alertType: AlertType
  alertCategory: AlertCategory
  alertSystem: number
  alertSubSystem: number
  alertId: number
  dataSourceNetworkIdName: string
  dataSourceInstance: number
  dataSourceIndexSource: number
  alertOccurrenceNumber: number
  acknowledgeSourceNetworkIdName: string
  responseCommand: AlertResponseCommand
  reserved: number
}

/*
  PGN: 126985
  Description: Alert Text
*/
export interface PGN_126985 extends PGN {
  alertType: AlertType
  alertCategory: AlertCategory
  alertSystem: number
  alertSubSystem: number
  alertId: number
  dataSourceNetworkIdName: string
  dataSourceInstance: number
  dataSourceIndexSource: number
  alertOccurrenceNumber: number
  languageId: AlertLanguageId
  alertTextDescription: string
  alertLocationTextDescription: string
}

/*
  PGN: 126986
  Description: Alert Configuration
*/
export interface PGN_126986 extends PGN {
  alertType: AlertType
  alertCategory: AlertCategory
  alertSystem: number
  alertSubSystem: number
  alertId: number
  dataSourceNetworkIdName: string
  dataSourceInstance: number
  dataSourceIndexSource: number
  alertOccurrenceNumber: number
  alertControl: number
  userDefinedAlertAssignment: number
  reserved: number
  reactivationPeriod: number
  temporarySilencePeriod: number
  escalationPeriod: number
}

/*
  PGN: 126987
  Description: Alert Threshold
*/
export interface PGN_126987 extends PGN {
  alertType: AlertType
  alertCategory: AlertCategory
  alertSystem: number
  alertSubSystem: number
  alertId: number
  dataSourceNetworkIdName: string
  dataSourceInstance: number
  dataSourceIndexSource: number
  alertOccurrenceNumber: number
  numberOfParameters: number
  parameterNumber: number
  triggerMethod: number
  thresholdDataFormat: number
  thresholdLevel: number
}

/*
  PGN: 126988
  Description: Alert Value
*/
export interface PGN_126988 extends PGN {
  alertType: AlertType
  alertCategory: AlertCategory
  alertSystem: number
  alertSubSystem: number
  alertId: number
  dataSourceNetworkIdName: string
  dataSourceInstance: number
  dataSourceIndexSource: number
  alertOccurrenceNumber: number
  numberOfParameters: number
  valueParameterNumber: number
  valueDataFormat: number
  valueData: number
}

/*
  PGN: 126992
  Description: System Time
  Explanation: The purpose of this PGN is twofold: To provide a regular transmission of UTC time and date. To provide synchronism for measurement data.
*/
export interface PGN_126992 extends PGN {
  sid: number
  source: SystemTime
  reserved: number
  date: string
  time: string
}

/*
  PGN: 126993
  Description: Heartbeat
  Explanation: Reception of this PGN confirms that a device is still present on the network.  Reception of this PGN may also be used to maintain an address to NAME association table within the receiving device.  The transmission interval may be used by the receiving unit to determine the time-out value for the connection supervision.  The value contained in Field 1 of this PGN reflects the PGN's current Transmission Interval. Changes to this PGN's Transmission Interval shall be reflected in Field 1.  The transmission interval can only be changed by using the Request Group Function PGN 126208 with no pairs of request parameters provided. Field 3 of the Request Group Function PGN 126208 may contain values between 1,000ms and 60,000ms.  This PGN cannot be requested by the ISO Request PGN 059904 or Request Group Function PGN 126208. In Request Group Function PGN 126208, setting Field 3 to a value of 0xFFFF FFFF and Field 4 to a value of 0xFFFF: 'Transmit now without changing timing variables.' is prohibited.  The Command Group Function PGN 126208 shall not be used with this PGN.  Fields 3 and 4 of this PGN provide information which can be used to distinguish short duration disturbances from permanent failures. See ISO 11898 -1 Sections 6.12, 6.13, 6.14, 13.1.1, 13.1.4, 13.1.4.3 and Figure 16 ( node status transition diagram) for additional context.
*/
export interface PGN_126993 extends PGN {
  dataTransmitOffset: string
  sequenceCounter: number
  controller1State: ControllerState
  controller2State: ControllerState
  equipmentStatus: EquipmentStatus
  reserved: number
}

/*
  PGN: 126996
  Description: Product Information
  Explanation: Provides product information onto the network that could be important for determining quality of data coming from this product.
*/
export interface PGN_126996 extends PGN {
  nmea2000Version: number
  productCode: number
  modelId: string
  softwareVersionCode: string
  modelVersion: string
  modelSerialCode: string
  certificationLevel: CertificationLevel
  loadEquivalency: number
}

/*
  PGN: 126998
  Description: Configuration Information
  Explanation: Free-form alphanumeric fields describing the installation (e.g., starboard engine room location) of the device and installation notes (e.g., calibration data).
*/
export interface PGN_126998 extends PGN {
  installationDescription1: string
  installationDescription2: string
  manufacturerInformation: string
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
export interface PGN_127233 extends PGN {
  sid: number
  mobEmitterId: number
  manOverboardStatus: MobStatus
  reserved: number
  activationTime: string
  positionSource: MobPositionSource
  reserved7: number
  positionDate: string
  positionTime: string
  latitude: number
  longitude: number
  cogReference: DirectionReference
  reserved13: number
  cog: number
  sog: number
  mmsiOfVesselOfOrigin: string
  mobEmitterBatteryLowStatus: LowBattery
  reserved18: number
}

/*
  PGN: 127237
  Description: Heading/Track control
*/
export interface PGN_127237 extends PGN {
  rudderLimitExceeded: boolean
  offHeadingLimitExceeded: boolean
  offTrackLimitExceeded: boolean
  override: boolean
  steeringMode: SteeringMode
  turnMode: TurnMode
  headingReference: DirectionReference
  reserved: number
  commandedRudderDirection: DirectionRudder
  commandedRudderAngle: number
  headingToSteerCourse: number
  track: number
  rudderLimit: number
  offHeadingLimit: number
  radiusOfTurnOrder: number
  rateOfTurnOrder: number
  offTrackLimit: number
  vesselHeading: number
}

/*
  PGN: 127245
  Description: Rudder
*/
export interface PGN_127245 extends PGN {
  instance: number
  directionOrder: DirectionRudder
  reserved: number
  angleOrder: number
  position: number
  reserved6: number
}

/*
  PGN: 127250
  Description: Vessel Heading
*/
export interface PGN_127250 extends PGN {
  sid: number
  heading: number
  deviation: number
  variation: number
  reference: DirectionReference
  reserved: number
}

/*
  PGN: 127251
  Description: Rate of Turn
*/
export interface PGN_127251 extends PGN {
  sid: number
  rate: number
  reserved: number
}

/*
  PGN: 127252
  Description: Heave
*/
export interface PGN_127252 extends PGN {
  sid: number
  heave: number
  reserved: number
}

/*
  PGN: 127257
  Description: Attitude
*/
export interface PGN_127257 extends PGN {
  sid: number
  yaw: number
  pitch: number
  roll: number
  reserved: number
}

/*
  PGN: 127258
  Description: Magnetic Variation
*/
export interface PGN_127258 extends PGN {
  sid: number
  source: MagneticVariation
  reserved: number
  ageOfService: string
  variation: number
  reserved6: number
}

/*
  PGN: 127488
  Description: Engine Parameters, Rapid Update
*/
export interface PGN_127488 extends PGN {
  instance: EngineInstance
  speed: number
  boostPressure: number
  tiltTrim: number
  reserved: number
}

/*
  PGN: 127489
  Description: Engine Parameters, Dynamic
*/
export interface PGN_127489 extends PGN {
  instance: EngineInstance
  oilPressure: number
  oilTemperature: number
  temperature: number
  alternatorPotential: number
  fuelRate: number
  totalEngineHours: string
  coolantPressure: number
  fuelPressure: number
  reserved: number
  discreteStatus1: EngineStatus1[]
  discreteStatus2: EngineStatus2[]
  engineLoad: number
  engineTorque: number
}

/*
  PGN: 127490
  Description: Electric Drive Status, Dynamic
  Explanation: This PGN is used to report status of Electric Drive Status control and can be used with Command Group Function (PGN Electric propulsion motor status) to command equipment. 
*/
export interface PGN_127490 extends PGN {
  inverterMotorIdentifier: number
  operatingMode: number
  reserved: number
  motorTemperature: number
  inverterTemperature: number
  coolantTemperature: number
  gearTemperature: number
  shaftTorque: number
}

/*
  PGN: 127491
  Description: Electric Energy Storage Status, Dynamic
  Explanation: This PGN is used to provide electric propulsion motor status and relevant data.
*/
export interface PGN_127491 extends PGN {
  energyStorageIdentifier: number
  stateOfCharge: number
  timeRemaining: string
  highestCellTemperature: number
  lowestCellTemperature: number
  averageCellTemperature: number
  maxDischargeCurrent: number
  maxChargeCurrent: number
  coolingSystemStatus: number
  heatingSystemStatus: number
}

/*
  PGN: 127493
  Description: Transmission Parameters, Dynamic
*/
export interface PGN_127493 extends PGN {
  instance: EngineInstance
  transmissionGear: GearStatus
  reserved: number
  oilPressure: number
  oilTemperature: number
  discreteStatus1: number
  reserved7: number
}

/*
  PGN: 127494
  Description: Electric Drive Information
  Explanation: This PGN is used to provide information about electric motor specifications and ratings.
*/
export interface PGN_127494 extends PGN {
  inverterMotorIdentifier: number
  motorType: number
  reserved: number
  motorVoltageRating: number
  maximumContinuousMotorPower: number
  maximumBoostMotorPower: number
  maximumMotorTemperatureRating: number
  ratedMotorSpeed: number
  maximumControllerTemperatureRating: number
  motorShaftTorqueRating: number
  motorDcVoltageDeratingThreshold: number
  motorDcVoltageCutOffThreshold: number
  driveMotorHours: string
}

/*
  PGN: 127495
  Description: Electric Energy Storage Information
  Explanation: This PGN is used to provide the status on power storage sources such as batteries.This PGN is new in v3.0 and has not been observed yet; field lengths and precisions are guesses.
*/
export interface PGN_127495 extends PGN {
  energyStorageIdentifier: number
  motorType: number
  reserved: number
  storageChemistryConversion: number
  maximumTemperatureDerating: number
  maximumTemperatureShutOff: number
  minimumTemperatureDerating: number
  minimumTemperatureShutOff: number
  usableBatteryEnergy: number
  stateOfHealth: number
  batteryCycleCounter: number
  batteryFullStatus: number
  batteryEmptyStatus: number
  reserved14: number
  maximumChargeSoc: number
  minimumChargeSoc: number
}

/*
  PGN: 127496
  Description: Trip Parameters, Vessel
*/
export interface PGN_127496 extends PGN {
  timeToEmpty: string
  distanceToEmpty: number
  estimatedFuelRemaining: number
  tripRunTime: string
}

/*
  PGN: 127497
  Description: Trip Parameters, Engine
*/
export interface PGN_127497 extends PGN {
  instance: EngineInstance
  tripFuelUsed: number
  fuelRateAverage: number
  fuelRateEconomy: number
  instantaneousFuelEconomy: number
}

/*
  PGN: 127498
  Description: Engine Parameters, Static
*/
export interface PGN_127498 extends PGN {
  instance: EngineInstance
  ratedEngineSpeed: number
  vin: string
  softwareId: string
}

/*
  PGN: 127500
  Description: Load Controller Connection State/Control
*/
export interface PGN_127500 extends PGN {
  sequenceId: number
  connectionId: number
  state: number
  status: number
  operationalStatusControl: number
  pwmDutyCycle: number
  timeon: number
  timeoff: number
}

/*
  PGN: 127501
  Description: Binary Switch Bank Status
*/
export interface PGN_127501 extends PGN {
  instance: number
  indicator1: OffOn
  indicator2: OffOn
  indicator3: OffOn
  indicator4: OffOn
  indicator5: OffOn
  indicator6: OffOn
  indicator7: OffOn
  indicator8: OffOn
  indicator9: OffOn
  indicator10: OffOn
  indicator11: OffOn
  indicator12: OffOn
  indicator13: OffOn
  indicator14: OffOn
  indicator15: OffOn
  indicator16: OffOn
  indicator17: OffOn
  indicator18: OffOn
  indicator19: OffOn
  indicator20: OffOn
  indicator21: OffOn
  indicator22: OffOn
  indicator23: OffOn
  indicator24: OffOn
  indicator25: OffOn
  indicator26: OffOn
  indicator27: OffOn
  indicator28: OffOn
}

/*
  PGN: 127502
  Description: Switch Bank Control
*/
export interface PGN_127502 extends PGN {
  instance: number
  switch1: OffOnControl
  switch2: OffOnControl
  switch3: OffOnControl
  switch4: OffOnControl
  switch5: OffOnControl
  switch6: OffOnControl
  switch7: OffOnControl
  switch8: OffOnControl
  switch9: OffOnControl
  switch10: OffOnControl
  switch11: OffOnControl
  switch12: OffOnControl
  switch13: OffOnControl
  switch14: OffOnControl
  switch15: OffOnControl
  switch16: OffOnControl
  switch17: OffOnControl
  switch18: OffOnControl
  switch19: OffOnControl
  switch20: OffOnControl
  switch21: OffOnControl
  switch22: OffOnControl
  switch23: OffOnControl
  switch24: OffOnControl
  switch25: OffOnControl
  switch26: OffOnControl
  switch27: OffOnControl
  switch28: OffOnControl
}

/*
  PGN: 127503
  Description: AC Input Status
*/
export interface PGN_127503 extends PGN {
  instance: number
  numberOfLines: number
  line: AcLine
  acceptability: Acceptability
  reserved: number
  voltage: number
  current: number
  frequency: number
  breakerSize: number
  realPower: number
  reactivePower: number
  powerFactor: number
}

/*
  PGN: 127504
  Description: AC Output Status
*/
export interface PGN_127504 extends PGN {
  instance: number
  numberOfLines: number
  line: Line
  waveform: Waveform
  reserved: number
  voltage: number
  current: number
  frequency: number
  breakerSize: number
  realPower: number
  reactivePower: number
  powerFactor: number
}

/*
  PGN: 127505
  Description: Fluid Level
*/
export interface PGN_127505 extends PGN {
  instance: number
  type: TankType
  level: number
  capacity: number
  reserved: number
}

/*
  PGN: 127506
  Description: DC Detailed Status
*/
export interface PGN_127506 extends PGN {
  sid: number
  instance: number
  dcType: DcSource
  stateOfCharge: number
  stateOfHealth: number
  timeRemaining: string
  rippleVoltage: number
  remainingCapacity: number
}

/*
  PGN: 127507
  Description: Charger Status
*/
export interface PGN_127507 extends PGN {
  instance: number
  batteryInstance: number
  operatingState: ChargerState
  chargeMode: ChargerMode
  enabled: OffOn
  equalizationPending: OffOn
  reserved: number
  equalizationTimeRemaining: string
}

/*
  PGN: 127508
  Description: Battery Status
*/
export interface PGN_127508 extends PGN {
  instance: number
  voltage: number
  current: number
  temperature: number
  sid: number
}

/*
  PGN: 127509
  Description: Inverter Status
  Explanation: The NMEA wrote in the link in the URL that this PGN is obsolete and superceded by PGN 127751, but that PGN reference is obviously incorrect. They probably meant PGN 127511. The other interesting thing is that this PGN is only four bytes long but still referenced as a Fast PGN, which matches various sources; see github issue #428.
*/
export interface PGN_127509 extends PGN {
  instance: number
  acInstance: number
  dcInstance: number
  operatingState: InverterState
  inverterEnable: OffOn
  reserved: number
}

/*
  PGN: 127510
  Description: Charger Configuration Status
*/
export interface PGN_127510 extends PGN {
  instance: number
  batteryInstance: number
  chargerEnableDisable: OffOn
  reserved: number
  chargeCurrentLimit: number
  chargingAlgorithm: ChargingAlgorithm
  chargerMode: ChargerMode
  estimatedTemperature: DeviceTempState
  equalizeOneTimeEnableDisable: OffOn
  overChargeEnableDisable: OffOn
  equalizeTime: string
}

/*
  PGN: 127511
  Description: Inverter Configuration Status
*/
export interface PGN_127511 extends PGN {
  instance: number
  acInstance: number
  dcInstance: number
  inverterEnableDisable: OffOn
  inverterMode: InverterMode
  loadSenseEnableDisable: OffOn
  loadSensePowerThreshold: number
  loadSenseInterval: string
}

/*
  PGN: 127512
  Description: AGS Configuration Status
*/
export interface PGN_127512 extends PGN {
  instance: number
  generatorInstance: number
  agsMode: AgsMode
  reserved: number
}

/*
  PGN: 127513
  Description: Battery Configuration Status
*/
export interface PGN_127513 extends PGN {
  instance: number
  batteryType: BatteryType
  supportsEqualization: boolean
  reserved: number
  nominalVoltage: BatteryVoltage
  chemistry: BatteryChemistry
  capacity: number
  temperatureCoefficient: number
  peukertExponent: number
  chargeEfficiencyFactor: number
}

/*
  PGN: 127514
  Description: AGS Status
*/
export interface PGN_127514 extends PGN {
  instance: number
  generatorInstance: number
  agsOperatingState: AgsOperatingState
  generatorState: AgsGeneratingState
  generatorOnReason: AgsOnReason
  generatorOffReason: AgsOffReason
}

/*
  PGN: 127744
  Description: AC Power / Current - Phase A
*/
export interface PGN_127744 extends PGN {
  sid: number
  connectionNumber: number
  acRmsCurrent: number
  power: number
}

/*
  PGN: 127745
  Description: AC Power / Current - Phase B
*/
export interface PGN_127745 extends PGN {
  sid: number
  connectionNumber: number
  acRmsCurrent: number
  power: number
}

/*
  PGN: 127746
  Description: AC Power / Current - Phase C
*/
export interface PGN_127746 extends PGN {
  sid: number
  connectionNumber: number
  acRmsCurrent: number
  power: number
}

/*
  PGN: 127747
  Description: AC Voltage / Frequency - Phase A
*/
export interface PGN_127747 extends PGN {
  sid: number
  connectionNumber: number
  acVoltageLineToNeutral: number
  acVoltageLineToLine: number
  frequency: number
}

/*
  PGN: 127748
  Description: AC Voltage / Frequency - Phase B
*/
export interface PGN_127748 extends PGN {
  sid: number
  connectionNumber: number
  acVoltageLineToNeutral: number
  acVoltageLineToLine: number
  frequency: number
}

/*
  PGN: 127749
  Description: AC Voltage / Frequency - Phase C
*/
export interface PGN_127749 extends PGN {
  sid: number
  connectionNumber: number
  acVoltageLineToNeutral: number
  acVoltageLineToLine: number
  frequency: number
}

/*
  PGN: 127750
  Description: Converter Status
*/
export interface PGN_127750 extends PGN {
  sid: number
  connectionNumber: number
  operatingState: ConverterState
  temperatureState: GoodWarningError
  overloadState: GoodWarningError
  lowDcVoltageState: GoodWarningError
  rippleState: GoodWarningError
  reserved: number
}

/*
  PGN: 127751
  Description: DC Voltage/Current
*/
export interface PGN_127751 extends PGN {
  sid: number
  connectionNumber: number
  dcVoltage: number
  dcCurrent: number
  reserved: number
}

/*
  PGN: 128000
  Description: Leeway Angle
  Explanation: This PGN provides the Nautical Leeway Angle. Nautical leeway angle is defined as the angle between the direction a vessel is heading (pointing) and the direction it is actually travelling (tracking thru the water). It is commonly provided by dual-axis speed sensors.
*/
export interface PGN_128000 extends PGN {
  sid: number
  leewayAngle: number
  reserved: number
}

/*
  PGN: 128001
  Description: Vessel Acceleration
  Explanation: The Vessel Acceleration PGN transmits the acceleration of the vessel in all three axes, ahead/astern, port/starboard, and up/down.
*/
export interface PGN_128001 extends PGN {
  sid: number
  longitudinalAcceleration: number
  transverseAcceleration: number
  verticalAcceleration: number
  reserved: number
}

/*
  PGN: 128002
  Description: Electric Drive Status, Rapid Update
  Explanation: This PGN is used to provide the Electric Propulsion Drive System Status.
*/
export interface PGN_128002 extends PGN {
  inverterMotorController: number
  activeMotorMode: number
  brakeMode: number
  reserved: number
  rotationalShaftSpeed: number
  motorDcVoltage: number
  motorDcCurrent: number
}

/*
  PGN: 128003
  Description: Electric Energy Storage Status, Rapid Update
  Explanation: Electric Energy Storage Status message provides important energy storage information global at a rapid update rate.
*/
export interface PGN_128003 extends PGN {
  energyStorageIdentifier: number
  batteryStatus: number
  isolationStatus: number
  batteryError: number
  batteryVoltage: number
  batteryCurrent: number
  reserved: number
}

/*
  PGN: 128006
  Description: Thruster Control Status
*/
export interface PGN_128006 extends PGN {
  sid: number
  identifier: number
  directionControl: ThrusterDirectionControl
  powerEnabled: OffOn
  retractControl: ThrusterRetractControl
  speedControl: number
  controlEvents: ThrusterControlEvents[]
  commandTimeout: string
  azimuthControl: number
}

/*
  PGN: 128007
  Description: Thruster Information
*/
export interface PGN_128007 extends PGN {
  identifier: number
  motorType: ThrusterMotorType
  reserved: number
  powerRating: number
  maximumTemperatureRating: number
  maximumRotationalSpeed: number
}

/*
  PGN: 128008
  Description: Thruster Motor Status
*/
export interface PGN_128008 extends PGN {
  sid: number
  identifier: number
  motorEvents: ThrusterMotorEvents[]
  current: number
  temperature: number
  operatingTime: string
}

/*
  PGN: 128259
  Description: Speed
*/
export interface PGN_128259 extends PGN {
  sid: number
  speedWaterReferenced: number
  speedGroundReferenced: number
  speedWaterReferencedType: WaterReference
  speedDirection: number
  reserved: number
}

/*
  PGN: 128267
  Description: Water Depth
*/
export interface PGN_128267 extends PGN {
  sid: number
  depth: number
  offset: number
  range: number
}

/*
  PGN: 128275
  Description: Distance Log
*/
export interface PGN_128275 extends PGN {
  date: string
  time: string
  log: number
  tripLog: number
}

/*
  PGN: 128520
  Description: Tracked Target Data
*/
export interface PGN_128520 extends PGN {
  sid: number
  targetId: number
  trackStatus: Tracking[]
  reportedTarget: boolean
  targetAcquisition: TargetAcquisition
  bearingReference: DirectionReference
  reserved: number
  bearing: number
  distance: number
  course: number
  speed: number
  cpa: number
  tcpa: string
  utcOfFix: string
  name: string
  referenceTarget: boolean
  reserved17: number
}

/*
  PGN: 128538
  Description: Elevator Car Status
  Explanation: This PGN provides the status information of an elevator car. This includes the elevator car id and type, sensors for load and weight limits, smoke detection, door status, motor status, and brake status. Also provided are weight and speed measurements, current and destination deck location, proximity switch status, inertial measurement unit status and Emergency button and buzzer status.
*/
export interface PGN_128538 extends PGN {
  sid: number
  elevatorCarId: number
  elevatorCarUsage: number
  smokeSensorStatus: number
  limitSwitchSensorStatus: number
  proximitySwitchSensorStatus: number
  inertialMeasurementUnitImuSensorStatus: number
  elevatorLoadLimitStatus: number
  elevatorLoadBalanceStatus: number
  elevatorLoadSensor1Status: number
  elevatorLoadSensor2Status: number
  elevatorLoadSensor3Status: number
  elevatorLoadSensor4Status: number
  reserved: number
  elevatorCarMotionStatus: number
  elevatorCarDoorStatus: number
  elevatorCarEmergencyButtonStatus: number
  elevatorCarBuzzerStatus: number
  openDoorButtonStatus: number
  closeDoorButtonStatus: number
  reserved21: number
  currentDeck: number
  destinationDeck: number
  totalNumberOfDecks: number
  weightOfLoadCell1: number
  weightOfLoadCell2: number
  weightOfLoadCell3: number
  weightOfLoadCell4: number
  speedOfElevatorCar: number
  elevatorBrakeStatus: number
  elevatorMotorRotationControlStatus: number
  reserved32: number
}

/*
  PGN: 128768
  Description: Elevator Motor Control
  Explanation: This PGN provides the status of an elevator motor controller. Settings of the elevator motor controller may be changed using the NMEA Command Group Function.
*/
export interface PGN_128768 extends PGN {
  sid: number
  elevatorCarId: number
  elevatorCarUsage: number
  motorAccelerationDecelerationProfileSelection: number
  motorRotationalControlStatus: number
  reserved: number
}

/*
  PGN: 128769
  Description: Elevator Deck Push Button
  Explanation: Transmit data of Deck controller to Elevator Main controller.
*/
export interface PGN_128769 extends PGN {
  sid: number
  elevatorCallButtonId: number
  deckButtonId: number
  elevatorCarUsage: number
  elevatorCarButtonSelection: number
  reserved: number
}

/*
  PGN: 128776
  Description: Windlass Control Status
*/
export interface PGN_128776 extends PGN {
  sid: number
  windlassId: number
  windlassDirectionControl: WindlassDirection
  anchorDockingControl: OffOn
  speedControlType: SpeedType
  reserved: number
  speedControl: number
  powerEnable: OffOn
  mechanicalLock: OffOn
  deckAndAnchorWash: OffOn
  anchorLight: OffOn
  commandTimeout: string
  windlassControlEvents: WindlassControl[]
  reserved14: number
}

/*
  PGN: 128777
  Description: Anchor Windlass Operating Status
*/
export interface PGN_128777 extends PGN {
  sid: number
  windlassId: number
  windlassDirectionControl: WindlassDirection
  windlassMotionStatus: WindlassMotion
  rodeTypeStatus: RodeType
  reserved: number
  rodeCounterValue: number
  windlassLineSpeed: number
  anchorDockingStatus: DockingStatus
  windlassOperatingEvents: WindlassOperation[]
}

/*
  PGN: 128778
  Description: Anchor Windlass Monitoring Status
*/
export interface PGN_128778 extends PGN {
  sid: number
  windlassId: number
  windlassMonitoringEvents: WindlassMonitoring[]
  controllerVoltage: number
  motorCurrent: number
  totalMotorTime: string
  reserved: number
}

/*
  PGN: 128780
  Description: Linear Actuator Control/Status
  Explanation: Actuator is a broad description of any device that embodies moving an object between two fixed limits, such as raising or lowering an outboard engine assembly. In the context of this PGN, the word "Device" refers to the object being moved. In the case of multiple Actuators per controller, the Actuator Identifier field specifies which Actuator the PGN message is intended for, and all following data fields refer only to that Actuator. This PGN supports manufacturer calibrated systems and retrofit systems where it is impractical for the installer to enter the Maximum Travel distance of the device.
*/
export interface PGN_128780 extends PGN {
  actuatorIdentifier: number
  commandedDevicePosition: number
  devicePosition: number
  maximumDeviceTravel: number
  directionOfTravel: number
  reserved: number
}

/*
  PGN: 129025
  Description: Position, Rapid Update
*/
export interface PGN_129025 extends PGN {
  latitude: number
  longitude: number
}

/*
  PGN: 129026
  Description: COG & SOG, Rapid Update
*/
export interface PGN_129026 extends PGN {
  sid: number
  cogReference: DirectionReference
  reserved: number
  cog: number
  sog: number
  reserved6: number
}

/*
  PGN: 129027
  Description: Position Delta, Rapid Update
*/
export interface PGN_129027 extends PGN {
  sid: number
  timeDelta: string
  latitudeDelta: number
  longitudeDelta: number
}

/*
  PGN: 129028
  Description: Altitude Delta, Rapid Update
*/
export interface PGN_129028 extends PGN {
  sid: number
  timeDelta: string
  gnssQuality: GnsMethod
  direction: DirectionReference
  reserved: number
  cog: number
  altitudeDelta: number
}

/*
  PGN: 129029
  Description: GNSS Position Data
*/
export interface PGN_129029 extends PGN {
  sid: number
  date: string
  time: string
  latitude: number
  longitude: number
  altitude: number
  gnssType: Gns
  method: GnsMethod
  integrity: GnsIntegrity
  reserved: number
  numberOfSvs: number
  hdop: number
  pdop: number
  geoidalSeparation: number
  referenceStations: number
  referenceStationType: Gns
  referenceStationId: number
  ageOfDgnssCorrections: string
}

/*
  PGN: 129033
  Description: Time & Date
*/
export interface PGN_129033 extends PGN {
  date: string
  time: string
  localOffset: string
}

/*
  PGN: 129038
  Description: AIS Class A Position Report
*/
export interface PGN_129038 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  userId: string
  longitude: number
  latitude: number
  positionAccuracy: PositionAccuracy
  raim: RaimFlag
  timeStamp: TimeStamp
  cog: number
  sog: number
  communicationState: number
  aisTransceiverInformation: AisTransceiver
  heading: number
  rateOfTurn: number
  navStatus: NavStatus
  specialManeuverIndicator: AisSpecialManeuver
  reserved: number
  spare18: string
  reserved19: number
  sequenceId: number
}

/*
  PGN: 129039
  Description: AIS Class B Position Report
*/
export interface PGN_129039 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  userId: string
  longitude: number
  latitude: number
  positionAccuracy: PositionAccuracy
  raim: RaimFlag
  timeStamp: TimeStamp
  cog: number
  sog: number
  communicationState: number
  aisTransceiverInformation: AisTransceiver
  heading: number
  regionalApplication: string
  regionalApplicationB: string
  unitType: AisType
  integratedDisplay: boolean
  dsc: boolean
  band: AisBand
  canHandleMsg22: boolean
  aisMode: AisMode
  aisCommunicationState: AisCommunicationState
  reserved: number
}

/*
  PGN: 129040
  Description: AIS Class B Extended Position Report
*/
export interface PGN_129040 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  userId: string
  longitude: number
  latitude: number
  positionAccuracy: PositionAccuracy
  raim: RaimFlag
  timeStamp: TimeStamp
  cog: number
  sog: number
  regionalApplication: string
  regionalApplicationB: string
  reserved: number
  typeOfShip: ShipType
  trueHeading: number
  reserved16: number
  gnssType: PositionFixDevice
  length: number
  beam: number
  positionReferenceFromStarboard: number
  positionReferenceFromBow: number
  name: string
  dte: Available
  aisMode: AisMode
  spare25: string
  aisTransceiverInformation: AisTransceiver
  reserved27: number
}

/*
  PGN: 129041
  Description: AIS Aids to Navigation (AtoN) Report
*/
export interface PGN_129041 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  userId: string
  longitude: number
  latitude: number
  positionAccuracy: PositionAccuracy
  raim: RaimFlag
  timeStamp: TimeStamp
  lengthDiameter: number
  beamDiameter: number
  positionReferenceFromStarboardEdge: number
  positionReferenceFromTrueNorthFacingEdge: number
  atonType: AtonType
  offPositionIndicator: boolean
  virtualAtonFlag: boolean
  assignedModeFlag: AisAssignedMode
  spare: string
  positionFixingDeviceType: PositionFixDevice
  reserved19: number
  atonStatus: number
  aisTransceiverInformation: AisTransceiver
  reserved22: number
  atonName: string
}

/*
  PGN: 129044
  Description: Datum
*/
export interface PGN_129044 extends PGN {
  localDatum: string
  deltaLatitude: number
  deltaLongitude: number
  deltaAltitude: number
  referenceDatum: string
}

/*
  PGN: 129045
  Description: User Datum
*/
export interface PGN_129045 extends PGN {
  deltaX: number
  deltaY: number
  deltaZ: number
  rotationInX: string
  rotationInY: string
  rotationInZ: string
  scale: string
  ellipsoidSemiMajorAxis: number
  ellipsoidFlatteningInverse: string
  datumName: string
}

/*
  PGN: 129283
  Description: Cross Track Error
*/
export interface PGN_129283 extends PGN {
  sid: number
  xteMode: ResidualMode
  reserved: number
  navigationTerminated: boolean
  xte: number
  reserved6: number
}

/*
  PGN: 129284
  Description: Navigation Data
*/
export interface PGN_129284 extends PGN {
  sid: number
  distanceToWaypoint: number
  courseBearingReference: DirectionReference
  perpendicularCrossed: boolean
  arrivalCircleEntered: boolean
  calculationType: BearingMode
  etaTime: string
  etaDate: string
  bearingOriginToDestinationWaypoint: number
  bearingPositionToDestinationWaypoint: number
  originWaypointNumber: number
  destinationWaypointNumber: number
  destinationLatitude: number
  destinationLongitude: number
  waypointClosingVelocity: number
}

/*
  PGN: 129285
  Description: Navigation - Route/WP Information
*/
export interface PGN_129285 extends PGN {
  startRps: number
  nitems: number
  databaseId: number
  routeId: number
  navigationDirectionInRoute: Direction
  supplementaryRouteWpDataAvailable: OffOn
  reserved: number
  routeName: string
  reserved9: number
  wpId: number
  wpName: string
  wpLatitude: number
  wpLongitude: number
}

/*
  PGN: 129291
  Description: Set & Drift, Rapid Update
*/
export interface PGN_129291 extends PGN {
  sid: number
  setReference: DirectionReference
  reserved: number
  set: number
  drift: number
  reserved6: number
}

/*
  PGN: 129301
  Description: Navigation - Route / Time to+from Mark
*/
export interface PGN_129301 extends PGN {
  sid: number
  timeToMark: string
  markType: MarkType
  reserved: number
  markId: number
}

/*
  PGN: 129302
  Description: Bearing and Distance between two Marks
*/
export interface PGN_129302 extends PGN {
  sid: number
  bearingReference: DirectionReference
  calculationType: BearingMode
  reserved: number
  bearingOriginToDestination: number
  distance: number
  originMarkType: MarkType
  destinationMarkType: MarkType
  originMarkId: number
  destinationMarkId: number
}

/*
  PGN: 129538
  Description: GNSS Control Status
*/
export interface PGN_129538 extends PGN {
  svElevationMask: number
  pdopMask: number
  pdopSwitch: number
  snrMask: number
  gnssModeDesired: GnssMode
  dgnssModeDesired: DgnssMode
  positionVelocityFilter: boolean
  maxCorrectionAge: string
  antennaAltitudeFor2dMode: number
  useAntennaAltitudeFor2dMode: boolean
  reserved: number
}

/*
  PGN: 129539
  Description: GNSS DOPs
*/
export interface PGN_129539 extends PGN {
  sid: number
  desiredMode: GnssMode
  actualMode: GnssMode
  reserved: number
  hdop: number
  vdop: number
  tdop: number
}

/*
  PGN: 129540
  Description: GNSS Sats in View
*/
export interface PGN_129540 extends PGN {
  sid: number
  rangeResidualMode: RangeResidualMode
  reserved: number
  satsInView: number
  prn: number
  elevation: number
  azimuth: number
  snr: number
  rangeResiduals: number
  status: SatelliteStatus
  reserved11: number
}

/*
  PGN: 129541
  Description: GPS Almanac Data
*/
export interface PGN_129541 extends PGN {
  prn: number
  gpsWeekNumber: number
  svHealthBits: number
  eccentricity: number
  almanacReferenceTime: number
  inclinationAngle: number
  rateOfRightAscension: number
  rootOfSemiMajorAxis: number
  argumentOfPerigee: number
  longitudeOfAscensionNode: number
  meanAnomaly: number
  clockParameter1: number
  clockParameter2: number
  reserved: number
}

/*
  PGN: 129542
  Description: GNSS Pseudorange Noise Statistics
*/
export interface PGN_129542 extends PGN {
  sid: number
  rmsOfPositionUncertainty: number
  stdOfMajorAxis: number
  stdOfMinorAxis: number
  orientationOfMajorAxis: number
  stdOfLatError: number
  stdOfLonError: number
  stdOfAltError: number
}

/*
  PGN: 129545
  Description: GNSS RAIM Output
*/
export interface PGN_129545 extends PGN {
  sid: number
  integrityFlag: GnsIntegrity
  reserved: number
  latitudeExpectedError: number
  longitudeExpectedError: number
  altitudeExpectedError: number
  svIdOfMostLikelyFailedSat: number
  probabilityOfMissedDetection: number
  estimateOfPseudorangeBias: number
  stdDeviationOfBias: number
}

/*
  PGN: 129546
  Description: GNSS RAIM Settings
*/
export interface PGN_129546 extends PGN {
  radialPositionErrorMaximumThreshold: number
  probabilityOfFalseAlarm: number
  probabilityOfMissedDetection: number
  pseudorangeResidualFilteringTimeConstant: string
  reserved: number
}

/*
  PGN: 129547
  Description: GNSS Pseudorange Error Statistics
*/
export interface PGN_129547 extends PGN {
  sid: number
  rmsStdDevOfRangeInputs: number
  stdDevOfMajorErrorEllipse: number
  stdDevOfMinorErrorEllipse: number
  orientationOfErrorEllipse: number
  stdDevLatError: number
  stdDevLonError: number
  stdDevAltError: number
}

/*
  PGN: 129549
  Description: DGNSS Corrections
*/
export interface PGN_129549 extends PGN {
  sid: number
  referenceStationId: number
  referenceStationType: Gns
  timeOfCorrections: string
  stationHealth: StationHealth
  reserved: number
  satelliteId: number
  prc: number
  rrc: number
  udre: number
  iod: number
}

/*
  PGN: 129550
  Description: GNSS Differential Correction Receiver Interface
*/
export interface PGN_129550 extends PGN {
  channel: number
  frequency: number
  serialInterfaceBitRate: SerialBitRate
  serialInterfaceDetectionMode: SerialDetectionMode
  differentialSource: DifferentialSource
  differentialOperationMode: DifferentialMode
  reserved: number
}

/*
  PGN: 129551
  Description: GNSS Differential Correction Receiver Signal
*/
export interface PGN_129551 extends PGN {
  sid: number
  channel: number
  signalStrength: number
  signalSnr: number
  frequency: number
  stationType: Gns
  referenceStationId: number
  differentialSignalBitRate: SerialBitRate
  differentialSignalDetectionMode: SerialDetectionMode
  usedAsCorrectionSource: boolean
  reserved: number
  differentialSource: DifferentialSource
  timeSinceLastSatDifferentialSync: string
  satelliteServiceIdNo: number
}

/*
  PGN: 129556
  Description: GLONASS Almanac Data
  Explanation: Almanac data for GLONASS products. The alamant contains satellite vehicle course orbital parameters. These parameters are described in the GLONASS ICS Section 4.5 Table 4.3. See URL.
*/
export interface PGN_129556 extends PGN {
  prn: number
  na: number
  reserved: number
  cna: number
  hna: number
  EpsilonNa: number
  DeltatnaDot: number
  OmegaNa: number
  DeltaTna: number
  tna: number
  LambdaNa: number
  DeltaIna: number
  TauCa: number
  TauNa: number
}

/*
  PGN: 129792
  Description: AIS DGNSS Broadcast Binary Message
*/
export interface PGN_129792 extends PGN {
  messageId: AisMessageId
  repeatIndicator: number
  sourceId: string
  reserved: number
  aisTransceiverInformation: AisTransceiver
  spare6: string
  longitude: number
  latitude: number
  reserved9: number
  spare10: string
  numberOfBitsInBinaryDataField: number
  binaryData: number
}

/*
  PGN: 129793
  Description: AIS UTC and Date Report
*/
export interface PGN_129793 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  userId: string
  longitude: number
  latitude: number
  positionAccuracy: PositionAccuracy
  raim: RaimFlag
  reserved: number
  positionTime: string
  communicationState: number
  aisTransceiverInformation: AisTransceiver
  positionDate: string
  reserved13: number
  gnssType: PositionFixDevice
}

/*
  PGN: 129794
  Description: AIS Class A Static and Voyage Related Data
*/
export interface PGN_129794 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  userId: string
  imoNumber: number
  callsign: string
  name: string
  typeOfShip: ShipType
  length: number
  beam: number
  positionReferenceFromStarboard: number
  positionReferenceFromBow: number
  etaDate: string
  etaTime: string
  draft: number
  destination: string
  aisVersionIndicator: AisVersion
  gnssType: PositionFixDevice
  dte: Available
  reserved: number
  aisTransceiverInformation: AisTransceiver
  reserved21: number
}

/*
  PGN: 129795
  Description: AIS Addressed Binary Message
*/
export interface PGN_129795 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  sourceId: string
  reserved: number
  aisTransceiverInformation: AisTransceiver
  sequenceNumber: number
  destinationId: string
  reserved8: number
  retransmitFlag: boolean
  reserved10: number
  numberOfBitsInBinaryDataField: number
  binaryData: number
}

/*
  PGN: 129796
  Description: AIS Acknowledge
*/
export interface PGN_129796 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  sourceId: string
  reserved: number
  aisTransceiverInformation: AisTransceiver
  spare6: string
  destinationId: string
  sequenceNumber: number
  reserved9: number
}

/*
  PGN: 129797
  Description: AIS Binary Broadcast Message
*/
export interface PGN_129797 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  sourceId: number
  reserved: number
  aisTransceiverInformation: AisTransceiver
  spare6: string
  numberOfBitsInBinaryDataField: number
  binaryData: number
}

/*
  PGN: 129798
  Description: AIS SAR Aircraft Position Report
*/
export interface PGN_129798 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  userId: string
  longitude: number
  latitude: number
  positionAccuracy: PositionAccuracy
  raim: RaimFlag
  timeStamp: TimeStamp
  cog: number
  sog: number
  communicationState: number
  aisTransceiverInformation: AisTransceiver
  altitude: number
  reservedForRegionalApplications: number
  dte: Available
  spare: string
  reserved17: number
}

/*
  PGN: 129799
  Description: Radio Frequency/Mode/Power
  Explanation: The Radio Channel is NOT a numeric field, it has been observed to contain values such as 9000L1-L3 and 9000F1-F3 (indicating private channels as allowed in some countries.)
*/
export interface PGN_129799 extends PGN {
  rxFrequency: number
  txFrequency: number
  radioChannel: string
  txPower: number
  mode: TelephoneMode
  channelBandwidth: number
}

/*
  PGN: 129800
  Description: AIS UTC/Date Inquiry
*/
export interface PGN_129800 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  sourceId: string
  reserved: number
  aisTransceiverInformation: AisTransceiver
  spare6: string
  destinationId: string
}

/*
  PGN: 129801
  Description: AIS Addressed Safety Related Message
*/
export interface PGN_129801 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  sourceId: string
  reserved: number
  aisTransceiverInformation: AisTransceiver
  sequenceNumber: number
  destinationId: string
  reserved8: number
  retransmitFlag: boolean
  spare10: string
  safetyRelatedText: string
}

/*
  PGN: 129802
  Description: AIS Safety Related Broadcast Message
*/
export interface PGN_129802 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  sourceId: string
  reserved: number
  aisTransceiverInformation: AisTransceiver
  spare6: string
  safetyRelatedText: string
}

/*
  PGN: 129803
  Description: AIS Interrogation
*/
export interface PGN_129803 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  sourceId: string
  reserved: number
  aisTransceiverInformation: AisTransceiver
  spare6: string
  destinationId1: string
  reserved8: number
  messageId11: AisMessageId
  slotOffset11: number
  spare11: string
  messageId12: AisMessageId
  slotOffset12: number
  reserved14: number
  reserved15: number
  destinationId2: string
  reserved17: number
  messageId21: AisMessageId
  slotOffset21: number
  spare20: string
  reserved21: number
  sid: number
}

/*
  PGN: 129804
  Description: AIS Assignment Mode Command
*/
export interface PGN_129804 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  sourceId: string
  reserved: number
  aisTransceiverInformation: AisTransceiver
  spare6: string
  destinationIdA: string
  offsetA: number
  incrementA: number
  destinationIdB: string
  offsetB: number
  incrementB: number
  spare13: string
  reserved14: number
}

/*
  PGN: 129805
  Description: AIS Data Link Management Message
*/
export interface PGN_129805 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  sourceId: string
  reserved: number
  aisTransceiverInformation: AisTransceiver
  spare6: string
  offset: number
  numberOfSlots: number
  timeout: string
  increment: number
}

/*
  PGN: 129806
  Description: AIS Channel Management
*/
export interface PGN_129806 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  sourceId: string
  reserved: number
  aisTransceiverInformation: AisTransceiver
  spare6: string
  channelA: number
  channelB: number
  reserved9: number
  power: PowerMode
  txRxMode: TxRxMode
  northEastLongitudeCorner1: number
  northEastLatitudeCorner1: number
  southWestLongitudeCorner2: number
  southWestLatitudeCorner2: number
  reserved16: number
  addressedOrBroadcastMessageIndicator: BroadcastIndicator
  channelABandwidth: Bandwidth
  channelBBandwidth: Bandwidth
  reserved20: number
  transitionalZoneSize: ZoneSize
  spare22: string
  reserved23: number
}

/*
  PGN: 129807
  Description: AIS Class B Group Assignment
*/
export interface PGN_129807 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  sourceId: string
  spare: string
  txRxMode: TxRxMode
  reserved6: number
  northEastLongitudeCorner1: number
  northEastLatitudeCorner1: number
  southWestLongitudeCorner2: number
  southWestLatitudeCorner2: number
  stationType: StationType
  reserved12: number
  shipAndCargoFilter: ShipType
  spare14: string
  reserved15: number
  reportingInterval: ReportingInterval
  quietTime: string
  spare18: string
  reserved19: number
}

/*
  PGN: 129808
  Description: DSC Distress Call Information
  Match: DSC Category == Distress
*/
export interface PGN_129808_Distress extends PGN {
  dscFormat: DscFormat
  dscCategory: DscCategory
  dscMessageAddress: string
  natureOfDistress: DscNature
  subsequentCommunicationModeOr2ndTelecommand: DscSecondTelecommand
  proposedRxFrequencyChannel: string
  proposedTxFrequencyChannel: string
  telephoneNumber: string
  latitudeOfVesselReported: number
  longitudeOfVesselReported: number
  timeOfPosition: string
  mmsiOfShipInDistress: string
  dscEosSymbol: number
  expansionEnabled: boolean
  reserved: number
  callingRxFrequencyChannel: string
  callingTxFrequencyChannel: string
  timeOfReceipt: string
  dateOfReceipt: string
  dscEquipmentAssignedMessageId: number
  dscExpansionFieldSymbol: DscExpansionData
  dscExpansionFieldData: string
}

/*
  PGN: 129808
  Description: DSC Call Information
*/
export interface PGN_129808 extends PGN {
  dscFormatSymbol: DscFormat
  dscCategorySymbol: DscCategory
  dscMessageAddress: string
  _1stTelecommand: DscFirstTelecommand
  subsequentCommunicationModeOr2ndTelecommand: DscSecondTelecommand
  proposedRxFrequencyChannel: string
  proposedTxFrequencyChannel: string
  telephoneNumber: string
  latitudeOfVesselReported: number
  longitudeOfVesselReported: number
  timeOfPosition: string
  mmsiOfShipInDistress: string
  dscEosSymbol: number
  expansionEnabled: boolean
  reserved: number
  callingRxFrequencyChannel: string
  callingTxFrequencyChannel: string
  timeOfReceipt: string
  dateOfReceipt: string
  dscEquipmentAssignedMessageId: number
  dscExpansionFieldSymbol: DscExpansionData
  dscExpansionFieldData: string
}

/*
  PGN: 129809
  Description: AIS Class B static data (msg 24 Part A)
*/
export interface PGN_129809 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  userId: string
  name: string
  aisTransceiverInformation: AisTransceiver
  reserved: number
  sequenceId: number
}

/*
  PGN: 129810
  Description: AIS Class B static data (msg 24 Part B)
*/
export interface PGN_129810 extends PGN {
  messageId: AisMessageId
  repeatIndicator: RepeatIndicator
  userId: string
  typeOfShip: ShipType
  vendorId: string
  callsign: string
  length: number
  beam: number
  positionReferenceFromStarboard: number
  positionReferenceFromBow: number
  mothershipUserId: string
  reserved: number
  spare13: string
  gnssType: PositionFixDevice
  aisTransceiverInformation: AisTransceiver
  reserved16: number
  sequenceId: number
}

/*
  PGN: 130052
  Description: Loran-C TD Data
*/
export interface PGN_130052 extends PGN {
  groupRepetitionIntervalGri: string
  masterRange: string
  vSecondaryTd: string
  wSecondaryTd: string
  xSecondaryTd: string
  ySecondaryTd: string
  zSecondaryTd: string
  stationStatusMaster: StationStatus[]
  stationStatusV: StationStatus[]
  stationStatusW: StationStatus[]
  stationStatusX: StationStatus[]
  stationStatusY: StationStatus[]
  stationStatusZ: StationStatus[]
  mode: ResidualMode
  reserved: number
}

/*
  PGN: 130053
  Description: Loran-C Range Data
*/
export interface PGN_130053 extends PGN {
  groupRepetitionIntervalGri: string
  masterRange: string
  vSecondaryRange: string
  wSecondaryRange: string
  xSecondaryRange: string
  ySecondaryRange: string
  zSecondaryRange: string
  stationStatusMaster: StationStatus[]
  stationStatusV: StationStatus[]
  stationStatusW: StationStatus[]
  stationStatusX: StationStatus[]
  stationStatusY: StationStatus[]
  stationStatusZ: StationStatus[]
  mode: ResidualMode
  reserved: number
}

/*
  PGN: 130054
  Description: Loran-C Signal Data
*/
export interface PGN_130054 extends PGN {
  groupRepetitionIntervalGri: string
  stationIdentifier: string
  stationSnr: number
  stationEcd: string
  stationAsf: string
}

/*
  PGN: 130060
  Description: Label
*/
export interface PGN_130060 extends PGN {
  hardwareChannelId: number
  pgn: string
  dataSourceInstanceFieldNumber: number
  dataSourceInstanceValue: number
  secondaryEnumerationFieldNumber: number
  secondaryEnumerationFieldValue: number
  parameterFieldNumber: number
  label: string
}

/*
  PGN: 130061
  Description: Channel Source Configuration
*/
export interface PGN_130061 extends PGN {
  dataSourceChannelId: number
  sourceSelectionStatus: number
  reserved: number
  nameSelectionCriteriaMask: number
  sourceName: string
  pgn: string
  dataSourceInstanceFieldNumber: number
  dataSourceInstanceValue: number
  secondaryEnumerationFieldNumber: number
  secondaryEnumerationFieldValue: number
  parameterFieldNumber: number
}

/*
  PGN: 130064
  Description: Route and WP Service - Database List
*/
export interface PGN_130064 extends PGN {
  startDatabaseId: number
  nitems: number
  numberOfDatabasesAvailable: number
  databaseId: number
  databaseName: string
  databaseTimestamp: string
  databaseDatestamp: string
  wpPositionResolution: WpPositionResolution
  reserved: number
  numberOfRoutesInDatabase: number
  numberOfWpsInDatabase: number
  numberOfBytesInDatabase: number
}

/*
  PGN: 130065
  Description: Route and WP Service - Route List
*/
export interface PGN_130065 extends PGN {
  startRouteId: number
  nitems: number
  numberOfRoutesInDatabase: number
  databaseId: number
  routeId: number
  routeName: string
  reserved: number
  wpIdentificationMethod: WpIdentificationMethod
  routeStatus: WpRouteStatus
}

/*
  PGN: 130066
  Description: Route and WP Service - Route/WP-List Attributes
*/
export interface PGN_130066 extends PGN {
  databaseId: number
  routeId: number
  routeWpListName: string
  routeWpListTimestamp: string
  routeWpListDatestamp: string
  changeAtLastTimestamp: WpChange[]
  numberOfWpsInTheRouteWpList: number
  criticalSupplementaryParameters: WpCriticalParameters[]
  navigationMethod: WpNavigationMethod
  wpIdentificationMethod: WpIdentificationMethod
  routeStatus: WpRouteStatus
  xteLimitForTheRoute: number
}

/*
  PGN: 130067
  Description: Route and WP Service - Route - WP Name & Position
*/
export interface PGN_130067 extends PGN {
  startRps: number
  nitems: number
  numberOfWpsInTheRouteWpList: number
  databaseId: number
  routeId: number
  wpId: number
  wpName: string
  wpLatitude: number
  wpLongitude: number
}

/*
  PGN: 130068
  Description: Route and WP Service - Route - WP Name
*/
export interface PGN_130068 extends PGN {
  startRps: number
  nitems: number
  numberOfWpsInTheRouteWpList: number
  databaseId: number
  routeId: number
  wpId: number
  wpName: string
}

/*
  PGN: 130069
  Description: Route and WP Service - XTE Limit & Navigation Method
*/
export interface PGN_130069 extends PGN {
  startRps: number
  nitems: number
  numberOfWpsWithASpecificXteLimitOrNavMethod: number
  databaseId: number
  routeId: number
  rps: number
  xteLimitInTheLegAfterWp: number
  navMethodInTheLegAfterWp: WpNavigationMethod
  reserved: number
}

/*
  PGN: 130070
  Description: Route and WP Service - WP Comment
*/
export interface PGN_130070 extends PGN {
  startId: number
  nitems: number
  numberOfWpsWithComments: number
  databaseId: number
  routeId: number
  wpIdRps: number
  comment: string
}

/*
  PGN: 130071
  Description: Route and WP Service - Route Comment
*/
export interface PGN_130071 extends PGN {
  startRouteId: number
  nitems: number
  numberOfRoutesWithComments: number
  databaseId: number
  routeId: number
  comment: string
}

/*
  PGN: 130072
  Description: Route and WP Service - Database Comment
*/
export interface PGN_130072 extends PGN {
  startDatabaseId: number
  nitems: number
  numberOfDatabasesWithComments: number
  databaseId: number
  comment: string
}

/*
  PGN: 130073
  Description: Route and WP Service - Radius of Turn
*/
export interface PGN_130073 extends PGN {
  startRps: number
  nitems: number
  numberOfWpsWithASpecificRadiusOfTurn: number
  databaseId: number
  routeId: number
  rps: number
  radiusOfTurn: number
}

/*
  PGN: 130074
  Description: Route and WP Service - WP List - WP Name & Position
*/
export interface PGN_130074 extends PGN {
  startWpId: number
  nitems: number
  numberOfValidWpsInTheWpList: number
  databaseId: number
  reserved: number
  wpId: number
  wpName: string
  wpLatitude: number
  wpLongitude: number
}

/*
  PGN: 130306
  Description: Wind Data
*/
export interface PGN_130306 extends PGN {
  sid: number
  windSpeed: number
  windAngle: number
  reference: WindReference
  reserved: number
}

/*
  PGN: 130310
  Description: Environmental Parameters (obsolete)
  Explanation: This PGN was succeeded by PGN 130310, but it should no longer be generated and separate PGNs in range 130312..130315 should be used
*/
export interface PGN_130310 extends PGN {
  sid: number
  waterTemperature: number
  outsideAmbientAirTemperature: number
  atmosphericPressure: number
  reserved: number
}

/*
  PGN: 130311
  Description: Environmental Parameters
  Explanation: This PGN was introduced as a better version of PGN 130310, but it should no longer be generated and separate PGNs in range 130312..130315 should be used
*/
export interface PGN_130311 extends PGN {
  sid: number
  temperatureSource: TemperatureSource
  humiditySource: HumiditySource
  temperature: number
  humidity: number
  atmosphericPressure: number
}

/*
  PGN: 130312
  Description: Temperature
*/
export interface PGN_130312 extends PGN {
  sid: number
  instance: number
  source: TemperatureSource
  actualTemperature: number
  setTemperature: number
  reserved: number
}

/*
  PGN: 130313
  Description: Humidity
*/
export interface PGN_130313 extends PGN {
  sid: number
  instance: number
  source: HumiditySource
  actualHumidity: number
  setHumidity: number
  reserved: number
}

/*
  PGN: 130314
  Description: Actual Pressure
*/
export interface PGN_130314 extends PGN {
  sid: number
  instance: number
  source: PressureSource
  pressure: number
  reserved: number
}

/*
  PGN: 130315
  Description: Set Pressure
*/
export interface PGN_130315 extends PGN {
  sid: number
  instance: number
  source: PressureSource
  pressure: number
  reserved: number
}

/*
  PGN: 130316
  Description: Temperature Extended Range
*/
export interface PGN_130316 extends PGN {
  sid: number
  instance: number
  source: TemperatureSource
  temperature: number
  setTemperature: number
}

/*
  PGN: 130320
  Description: Tide Station Data
*/
export interface PGN_130320 extends PGN {
  mode: ResidualMode
  tideTendency: Tide
  reserved: number
  measurementDate: string
  measurementTime: string
  stationLatitude: number
  stationLongitude: number
  tideLevel: number
  tideLevelStandardDeviation: number
  stationId: string
  stationName: string
}

/*
  PGN: 130321
  Description: Salinity Station Data
*/
export interface PGN_130321 extends PGN {
  mode: ResidualMode
  reserved: number
  measurementDate: string
  measurementTime: string
  stationLatitude: number
  stationLongitude: number
  salinity: string
  waterTemperature: number
  stationId: string
  stationName: string
}

/*
  PGN: 130322
  Description: Current Station Data
*/
export interface PGN_130322 extends PGN {
  mode: ResidualMode
  state: FloodState
  reserved: number
  measurementDate: string
  measurementTime: string
  stationLatitude: number
  stationLongitude: number
  measurementDepth: number
  currentSpeed: number
  currentFlowDirection: number
  waterTemperature: number
  stationId: string
  stationName: string
}

/*
  PGN: 130323
  Description: Meteorological Station Data
*/
export interface PGN_130323 extends PGN {
  mode: ResidualMode
  reserved: number
  measurementDate: string
  measurementTime: string
  stationLatitude: number
  stationLongitude: number
  windSpeed: number
  windDirection: number
  windReference: WindReference
  reserved10: number
  windGusts: number
  atmosphericPressure: number
  ambientTemperature: number
  stationId: string
  stationName: string
}

/*
  PGN: 130324
  Description: Moored Buoy Station Data
*/
export interface PGN_130324 extends PGN {
  mode: ResidualMode
  reserved: number
  measurementDate: string
  measurementTime: string
  stationLatitude: number
  stationLongitude: number
  windSpeed: number
  windDirection: number
  windReference: WindReference
  reserved10: number
  windGusts: number
  waveHeight: number
  dominantWavePeriod: string
  atmosphericPressure: number
  pressureTendencyRate: number
  airTemperature: number
  waterTemperature: number
  stationId: string
}

/*
  PGN: 130330
  Description: Lighting System Settings
  Explanation: This PGN provides a lighting controller settings and number of supported capabilities.
*/
export interface PGN_130330 extends PGN {
  globalEnable: number
  defaultSettingsCommand: LightingCommand
  reserved: number
  nameOfTheLightingController: string
  maxScenes: number
  maxSceneConfigurationCount: number
  maxZones: number
  maxColorSequences: number
  maxColorSequenceColorCount: number
  numberOfPrograms: number
  controllerCapabilities: number
  identifyDevice: number
}

/*
  PGN: 130560
  Description: Payload Mass
*/
export interface PGN_130560 extends PGN {
  sid: number
  measurementStatus: number
  reserved: number
  measurementId: number
  payloadMass: number
  reserved6: number
}

/*
  PGN: 130561
  Description: Lighting Zone
  Explanation: This PGN is used to report or configure a name for a given zone. A zone is a grouping of devices that are controlled by a Scene. This PGN is only sent upon request.
*/
export interface PGN_130561 extends PGN {
  zoneIndex: number
  zoneName: string
  redComponent: number
  greenComponent: number
  blueComponent: number
  colorTemperature: number
  intensity: number
  programId: number
  programColorSequenceIndex: number
  programIntensity: number
  programRate: number
  programColorSequence: number
  zoneEnabled: OffOn
  reserved: number
}

/*
  PGN: 130562
  Description: Lighting Scene
  Explanation: A Lighting Scene is a sequence of zone program configurations.
*/
export interface PGN_130562 extends PGN {
  sceneIndex: number
  zoneName: string
  control: number
  configurationCount: number
  configurationIndex: number
  zoneIndex: number
  devicesId: number
  programIndex: number
  programColorSequenceIndex: number
  programIntensity: number
  programRate: number
  programColorSequenceRate: number
}

/*
  PGN: 130563
  Description: Lighting Device
  Explanation: This PGN is used to provide status and capabilities of a lighting device. A lighting device may be a virtual device connected to a lighting controller or physical device on the network.
*/
export interface PGN_130563 extends PGN {
  deviceId: number
  deviceCapabilities: number
  colorCapabilities: number
  zoneIndex: number
  nameOfLightingDevice: string
  status: number
  redComponent: number
  greenComponent: number
  blueComponent: number
  colorTemperature: number
  intensity: number
  programId: number
  programColorSequenceIndex: number
  programIntensity: number
  programRate: number
  programColorSequenceRate: number
  enabled: OffOn
  reserved: number
}

/*
  PGN: 130564
  Description: Lighting Device Enumeration
  Explanation: This PGN allows for enumeration of the lighting devices on the controller.
*/
export interface PGN_130564 extends PGN {
  indexOfFirstDevice: number
  totalNumberOfDevices: number
  numberOfDevices: number
  deviceId: number
  status: number
}

/*
  PGN: 130565
  Description: Lighting Color Sequence
  Explanation: Sequences could be 1 to (PGN Lighting - System Configuration) Max Color Sequence Color Count colors.
*/
export interface PGN_130565 extends PGN {
  sequenceIndex: number
  colorCount: number
  colorIndex: number
  redComponent: number
  greenComponent: number
  blueComponent: number
  colorTemperature: number
  intensity: number
}

/*
  PGN: 130566
  Description: Lighting Program
  Explanation: This PGN describes an available program on the controller. Can be a built in required NMEA one or a custom vendor program.
*/
export interface PGN_130566 extends PGN {
  programId: number
  nameOfProgram: string
  description: string
  programCapabilities: number
  reserved: number
}

/*
  PGN: 130567
  Description: Watermaker Input Setting and Status
*/
export interface PGN_130567 extends PGN {
  watermakerOperatingState: WatermakerState
  productionStartStop: boolean
  rinseStartStop: boolean
  lowPressurePumpStatus: boolean
  highPressurePumpStatus: boolean
  emergencyStop: boolean
  productSolenoidValveStatus: OkWarning
  flushModeStatus: boolean
  salinityStatus: OkWarning
  sensorStatus: OkWarning
  oilChangeIndicatorStatus: OkWarning
  filterStatus: OkWarning
  systemStatus: OkWarning
  reserved: number
  salinity: number
  productWaterTemperature: number
  preFilterPressure: number
  postFilterPressure: number
  feedPressure: number
  systemHighPressure: number
  productWaterFlow: number
  brineWaterFlow: number
  runTime: string
}

/*
  PGN: 130569
  Description: Current Status and File
*/
export interface PGN_130569 extends PGN {
  zone: EntertainmentZone
  source: EntertainmentSource
  number: number
  id: number
  playStatus: EntertainmentPlayStatus
  elapsedTrackTime: string
  trackTime: string
  repeatStatus: EntertainmentRepeatStatus
  shuffleStatus: EntertainmentShuffleStatus
  saveFavoriteNumber: number
  playFavoriteNumber: number
  thumbsUpDown: EntertainmentLikeStatus
  signalStrength: number
  radioFrequency: number
  hdFrequencyMulticast: number
  deleteFavoriteNumber: number
  totalNumberOfTracks: number
}

/*
  PGN: 130570
  Description: Library Data File
*/
export interface PGN_130570 extends PGN {
  source: EntertainmentSource
  number: number
  id: number
  type: EntertainmentType
  name: string
  track: number
  station: number
  favorite: number
  radioFrequency: number
  hdFrequency: number
  zone: EntertainmentZone
  inPlayQueue: boolean
  locked: boolean
  reserved: number
  artistName: string
  albumName: string
  stationName: string
}

/*
  PGN: 130571
  Description: Library Data Group
*/
export interface PGN_130571 extends PGN {
  source: EntertainmentSource
  number: number
  type: EntertainmentType
  zone: EntertainmentZone
  groupId: number
  idOffset: number
  idCount: number
  totalIdCount: number
  idType: EntertainmentIdType
  id: number
  name: string
  artist: string
}

/*
  PGN: 130572
  Description: Library Data Search
*/
export interface PGN_130572 extends PGN {
  source: EntertainmentSource
  number: number
  groupId: number
  groupType1: EntertainmentGroup
  groupName1: string
  groupType2: EntertainmentGroup
  groupName2: string
  groupType3: EntertainmentGroup
  groupName3: string
}

/*
  PGN: 130573
  Description: Supported Source Data
*/
export interface PGN_130573 extends PGN {
  idOffset: number
  idCount: number
  totalIdCount: number
  id: number
  source: EntertainmentSource
  number: number
  name: string
  playSupport: EntertainmentPlayStatusBitfield[]
  browseSupport: EntertainmentGroupBitfield[]
  thumbsSupport: boolean
  connected: boolean
  repeatSupport: EntertainmentRepeatBitfield[]
  shuffleSupport: EntertainmentShuffleBitfield[]
}

/*
  PGN: 130574
  Description: Supported Zone Data
*/
export interface PGN_130574 extends PGN {
  firstZoneId: number
  zoneCount: number
  totalZoneCount: number
  zoneId: EntertainmentZone
  name: string
}

/*
  PGN: 130576
  Description: Small Craft Status
*/
export interface PGN_130576 extends PGN {
  portTrimTab: number
  starboardTrimTab: number
  reserved: number
}

/*
  PGN: 130577
  Description: Direction Data
*/
export interface PGN_130577 extends PGN {
  dataMode: ResidualMode
  cogReference: DirectionReference
  reserved: number
  sid: number
  cog: number
  sog: number
  heading: number
  speedThroughWater: number
  set: number
  drift: number
}

/*
  PGN: 130578
  Description: Vessel Speed Components
*/
export interface PGN_130578 extends PGN {
  longitudinalSpeedWaterReferenced: number
  transverseSpeedWaterReferenced: number
  longitudinalSpeedGroundReferenced: number
  transverseSpeedGroundReferenced: number
  sternSpeedWaterReferenced: number
  sternSpeedGroundReferenced: number
}

/*
  PGN: 130579
  Description: System Configuration
*/
export interface PGN_130579 extends PGN {
  power: boolean
  defaultSettings: EntertainmentDefaultSettings
  tunerRegions: EntertainmentRegions
  maxFavorites: number
  videoProtocols: VideoProtocols
  reserved: number
}

/*
  PGN: 130580
  Description: System Configuration (deprecated)
*/
export interface PGN_130580 extends PGN {
  power: boolean
  defaultSettings: EntertainmentDefaultSettings
  tunerRegions: EntertainmentRegions
  maxFavorites: number
}

/*
  PGN: 130581
  Description: Zone Configuration (deprecated)
*/
export interface PGN_130581 extends PGN {
  firstZoneId: number
  zoneCount: number
  totalZoneCount: number
  zoneId: EntertainmentZone
  zoneName: string
}

/*
  PGN: 130582
  Description: Zone Volume
*/
export interface PGN_130582 extends PGN {
  zoneId: EntertainmentZone
  volume: number
  volumeChange: EntertainmentVolumeControl
  mute: boolean
  reserved: number
  channel: EntertainmentChannel
  reserved7: number
}

/*
  PGN: 130583
  Description: Available Audio EQ presets
*/
export interface PGN_130583 extends PGN {
  firstPreset: number
  presetCount: number
  totalPresetCount: number
  presetType: EntertainmentEq
  presetName: string
}

/*
  PGN: 130584
  Description: Available Bluetooth addresses
*/
export interface PGN_130584 extends PGN {
  firstAddress: number
  addressCount: number
  totalAddressCount: number
  bluetoothAddress: number
  status: BluetoothStatus
  deviceName: string
  signalStrength: number
}

/*
  PGN: 130585
  Description: Bluetooth source status
*/
export interface PGN_130585 extends PGN {
  sourceNumber: number
  status: BluetoothSourceStatus
  forgetDevice: boolean
  discovering: boolean
  bluetoothAddress: number
}

/*
  PGN: 130586
  Description: Zone Configuration
*/
export interface PGN_130586 extends PGN {
  zoneId: EntertainmentZone
  volumeLimit: number
  fade: number
  balance: number
  subVolume: number
  eqTreble: number
  eqMidRange: number
  eqBass: number
  presetType: EntertainmentEq
  audioFilter: EntertainmentFilter
  highPassFilterFrequency: number
  lowPassFilterFrequency: number
  channel: EntertainmentChannel
}

/*
  PGN: 130816
  Description: SonicHub: Init #2
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Init #2
*/
export interface PGN_130816_Navico_Init2 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  a: number
  b: number
}

/*
  PGN: 130816
  Description: SonicHub: AM Radio
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == AM Radio
*/
export interface PGN_130816_Navico_AmRadio extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  item: SonichubTuning
  frequency: number
  noiseLevel: number
  signalLevel: number
  reserved11: number
  text: string
}

/*
  PGN: 130816
  Description: SonicHub: Zone info
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Zone Info
*/
export interface PGN_130816_Navico_ZoneInfo extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  zone: number
}

/*
  PGN: 130816
  Description: SonicHub: Source
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Source
*/
export interface PGN_130816_Navico_Source extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  source: SonichubSource
}

/*
  PGN: 130816
  Description: SonicHub: Source List
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Source List
*/
export interface PGN_130816_Navico_SourceList extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  sourceId: number
  a: number
  text: string
}

/*
  PGN: 130816
  Description: SonicHub: Control
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Control
*/
export interface PGN_130816_Navico_Control extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  item: FusionMuteCommand
}

/*
  PGN: 130816
  Description: SonicHub: FM Radio
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == FM Radio
*/
export interface PGN_130816_Navico_FmRadio extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  item: SonichubTuning
  frequency: number
  noiseLevel: number
  signalLevel: number
  reserved11: number
  text: string
}

/*
  PGN: 130816
  Description: SonicHub: Playlist
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Playlist
*/
export interface PGN_130816_Navico_Playlist extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  item: SonichubPlaylist
  a: number
  currentTrack: number
  tracks: number
  length: string
  positionInTrack: string
}

/*
  PGN: 130816
  Description: SonicHub: Track
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Track
*/
export interface PGN_130816_Navico_Track extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  item: number
  text: string
}

/*
  PGN: 130816
  Description: SonicHub: Artist
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Artist
*/
export interface PGN_130816_Navico_Artist extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  item: number
  text: string
}

/*
  PGN: 130816
  Description: SonicHub: Album
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Album
*/
export interface PGN_130816_Navico_Album extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  item: number
  text: string
}

/*
  PGN: 130816
  Description: SonicHub: Menu Item
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Menu Item
*/
export interface PGN_130816_Navico_MenuItem extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  item: number
  c: number
  d: number
  e: number
  text: string
}

/*
  PGN: 130816
  Description: SonicHub: Zones
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Zones
*/
export interface PGN_130816_Navico_Zones extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  zones: number
}

/*
  PGN: 130816
  Description: SonicHub: Max Volume
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Max Volume
*/
export interface PGN_130816_Navico_MaxVolume extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  zone: number
  level: number
}

/*
  PGN: 130816
  Description: SonicHub: Volume
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Volume
*/
export interface PGN_130816_Navico_Volume extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  zone: number
  level: number
}

/*
  PGN: 130816
  Description: SonicHub: Init #1
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Init #1
*/
export interface PGN_130816_Navico_Init1 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
}

/*
  PGN: 130816
  Description: SonicHub: Position
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Position
*/
export interface PGN_130816_Navico_Position extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  position: string
}

/*
  PGN: 130816
  Description: SonicHub: Init #3
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Init #3
*/
export interface PGN_130816_Navico_Init3 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SonichubCommand
  control: SonichubControl
  a: number
  b: number
}

/*
  PGN: 130816
  Description: Simrad: Text Message
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Text
*/
export interface PGN_130816_Simrad_Text extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  proprietaryId: SimnetCommand
  a: number
  b: number
  c: number
  sid: number
  prio: number
  text: string
}

/*
  PGN: 130817
  Description: Navico: Unknown
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
*/
export interface PGN_130817_Navico extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  a: number
  b: number
  c: number
  d: number
  e: number
}

/*
  PGN: 130817
  Description: Lowrance: Product Information
  Match: Manufacturer Code == Lowrance
  Match: Industry Code == Marine Industry
*/
export interface PGN_130817_Lowrance extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  productCode: number
  model: string
  a: number
  b: number
  c: number
  firmwareVersion: string
  firmwareDate: string
  firmwareTime: string
}

/*
  PGN: 130818
  Description: Simnet: Reprogram Data
*/
export interface PGN_130818 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  version: number
  sequence: number
  data: number
}

/*
  PGN: 130819
  Description: Simnet: Request Reprogram
*/
export interface PGN_130819 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130820
  Description: Simnet: Reprogram Status
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130820_Simrad extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  reserved4: number
  status: number
  reserved6: number
}

/*
  PGN: 130820
  Description: Furuno: Unknown 130820
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130820_Furuno extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  a: number
  b: number
  c: number
  d: number
  e: number
}

/*
  PGN: 130820
  Description: Fusion: Versions
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == API Version
*/
export interface PGN_130820_FusionElectronics_ApiVersion extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  hwVersionMajor: number
  hwVersionMinor: number
  swVersionMajor: number
  swVersionMinor: number
  buildNumber: number
}

/*
  PGN: 130820
  Description: Fusion: Source
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Source
*/
export interface PGN_130820_FusionElectronics_Source extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  currentSourceId: number
  sourceType: FusionSourceType
  flags: number
  source: string
}

/*
  PGN: 130820
  Description: Fusion: Source Count
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Source Count
*/
export interface PGN_130820_FusionElectronics_SourceCount extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceCount: number
}

/*
  PGN: 130820
  Description: Fusion: Media
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Track Info
*/
export interface PGN_130820_FusionElectronics_TrackInfo extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  flags: FusionPlayStatus
  track: number
  trackCount: number
  length: string
  positionInTrack: string
}

/*
  PGN: 130820
  Description: Fusion: Track Name
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Track Title
*/
export interface PGN_130820_FusionElectronics_TrackTitle extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  index: number
  track: string
}

/*
  PGN: 130820
  Description: Fusion: Artist Name
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Track Artist
*/
export interface PGN_130820_FusionElectronics_TrackArtist extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  index: number
  artist: string
}

/*
  PGN: 130820
  Description: Fusion: Album Name
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Track Album
*/
export interface PGN_130820_FusionElectronics_TrackAlbum extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  index: number
  album: string
}

/*
  PGN: 130820
  Description: Fusion: Device Name
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Unit Name
*/
export interface PGN_130820_FusionElectronics_UnitName extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  name: string
}

/*
  PGN: 130820
  Description: Fusion: Zone Name
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Zone Name
*/
export interface PGN_130820_FusionElectronics_ZoneName extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  number: number
  name: string
}

/*
  PGN: 130820
  Description: Fusion: Track Position
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Track Progress
*/
export interface PGN_130820_FusionElectronics_TrackProgress extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  progress: string
}

/*
  PGN: 130820
  Description: Fusion: Tuner
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Tuner
*/
export interface PGN_130820_FusionElectronics_Tuner extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: FusionRadioSource
  scanning: number
  frequency: number
  signalStrength: number
  track: string
}

/*
  PGN: 130820
  Description: Fusion: MARINE_TUNER
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Marine Tuner
*/
export interface PGN_130820_FusionElectronics_MarineTuner extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  channel: number
  signalStrength: number
  name: string
}

/*
  PGN: 130820
  Description: Fusion: Marine Squelch
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Marine Squelch
*/
export interface PGN_130820_FusionElectronics_MarineSquelch extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  squelch: number
}

/*
  PGN: 130820
  Description: Fusion: Marine Scan Mode
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Marine Scan Mode
*/
export interface PGN_130820_FusionElectronics_MarineScanMode extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  scan: boolean
}

/*
  PGN: 130820
  Description: Fusion: Menu Item
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Menu Item
*/
export interface PGN_130820_FusionElectronics_MenuItem extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  itemIndex: number
  flags: number
  lockId: number
  text: string
}

/*
  PGN: 130820
  Description: Fusion: Aux Gain
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Aux Gain
*/
export interface PGN_130820_FusionElectronics_AuxGain extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  gain: number
}

/*
  PGN: 130820
  Description: Fusion: USB Repeat Status
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Setting
  Match: ID == USB repeat
*/
export interface PGN_130820_FusionElectronics_Setting_UsbRepeat extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  id: FusionSetting
  status: FusionRepeatStatus
}

/*
  PGN: 130820
  Description: Fusion: Setting
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Setting
*/
export interface PGN_130820_FusionElectronics_Setting extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  id: FusionSetting
  value: number
}

/*
  PGN: 130820
  Description: Fusion: Settings
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Settings
*/
export interface PGN_130820_FusionElectronics_Settings extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  count: number
  id: FusionSetting
  value: number
}

/*
  PGN: 130820
  Description: Fusion: Mute
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Mute
*/
export interface PGN_130820_FusionElectronics_Mute extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  mute: FusionMuteCommand
}

/*
  PGN: 130820
  Description: Fusion: Balance
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Balance
*/
export interface PGN_130820_FusionElectronics_Balance extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  zone: number
  value: number
}

/*
  PGN: 130820
  Description: Fusion: Low Pass Filter
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Low Pass Filter
*/
export interface PGN_130820_FusionElectronics_LowPassFilter extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  zone: number
  filter: number
}

/*
  PGN: 130820
  Description: Fusion: Sublevels
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Sublevels
*/
export interface PGN_130820_FusionElectronics_Sublevels extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  zone1: number
  zone2: number
  zone3: number
  zone4: number
}

/*
  PGN: 130820
  Description: Fusion: EQ
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Tone
*/
export interface PGN_130820_FusionElectronics_Tone extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  zone: number
  bass: number
  mid: number
  treble: number
}

/*
  PGN: 130820
  Description: Fusion: Volume Limits
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Volume Limits
*/
export interface PGN_130820_FusionElectronics_VolumeLimits extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  zone1VolumeLimit: number
  zone2VolumeLimit: number
  zone3VolumeLimit: number
  zone4VolumeLimit: number
}

/*
  PGN: 130820
  Description: Fusion: Volumes
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Volume
*/
export interface PGN_130820_FusionElectronics_Volume extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  zone1: number
  zone2: number
  zone3: number
  zone4: number
}

/*
  PGN: 130820
  Description: Fusion: Capabilities
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Capabilities
*/
export interface PGN_130820_FusionElectronics_Capabilities extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  zone1: number
  zone2: number
  zone3: number
  zone4: number
  global: number
}

/*
  PGN: 130820
  Description: Fusion: Line Level Control
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Line Level Control
*/
export interface PGN_130820_FusionElectronics_LineLevelControl extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  zone: number
  control: number
}

/*
  PGN: 130820
  Description: Fusion: Power State
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Power
*/
export interface PGN_130820_FusionElectronics_Power extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  state: FusionPowerState
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == Sirius
*/
export interface PGN_130820_FusionElectronics_Sirius extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  comState: FusionSiriusComState
  alert: FusionSiriusComState
  advisoryChannel: number
  tuningMode: FusionSiriusTuningMode
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Channel
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Channel
*/
export interface PGN_130820_FusionElectronics_SiriusXmChannel extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  channelNumber: number
  channel: string
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Title
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Title
*/
export interface PGN_130820_FusionElectronics_SiriusXmTitle extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  channel: number
  title: string
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Artist
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Artist
*/
export interface PGN_130820_FusionElectronics_SiriusXmArtist extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  channel: number
  artist: string
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Content Info
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Genre
*/
export interface PGN_130820_FusionElectronics_SiriusXmGenre extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  channel: number
  genre: string
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Category
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Category
*/
export interface PGN_130820_FusionElectronics_SiriusXmCategory extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  channel: number
  name: string
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Signal
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXm Signal
*/
export interface PGN_130820_FusionElectronics_SiriusXmSignal extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  signal: number
}

/*
  PGN: 130820
  Description: Fusion: SiriusXM Presets
  Match: Manufacturer Code == Fusion Electronics
  Match: Industry Code == Marine Industry
  Match: Message ID == SiriusXM Presets
*/
export interface PGN_130820_FusionElectronics_SiriusXmPresets extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: FusionStatusMessageId
  sourceId: number
  count: number
  values: number
}

/*
  PGN: 130821
  Description: Navico: ASCII Data
  Match: Manufacturer Code == Navico
  Match: Industry Code == Marine Industry
*/
export interface PGN_130821_Navico extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  a: number
  message: string
}

/*
  PGN: 130821
  Description: Furuno: Unknown 130821
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130821_Furuno extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  sid: number
  a: number
  b: number
  c: number
  d: number
  e: number
  f: number
  g: number
  h: number
  i: number
}

/*
  PGN: 130822
  Description: Navico: Unknown 1
*/
export interface PGN_130822 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  data: number
}

/*
  PGN: 130823
  Description: Maretron: Proprietary Temperature High Range
*/
export interface PGN_130823 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  sid: number
  instance: number
  source: TemperatureSource
  actualTemperature: number
  setTemperature: number
}

/*
  PGN: 130824
  Description: B&G: key-value data
  Explanation: Contains any number of key/value pairs, sent by various B&G devices such as MFDs and Sailing Processors.
  Match: Manufacturer Code == B & G
  Match: Industry Code == Marine Industry
*/
export interface PGN_130824_BG extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  key: string
  length: string
  value: string
}

/*
  PGN: 130824
  Description: Maretron: Annunciator
  Match: Manufacturer Code == Maretron
  Match: Industry Code == Marine Industry
*/
export interface PGN_130824_Maretron extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  field4: number
  field5: number
  field6: number
  field7: number
  field8: number
}

/*
  PGN: 130825
  Description: Navico: Unknown 2
*/
export interface PGN_130825 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  data: number
}

/*
  PGN: 130827
  Description: Lowrance: unknown
*/
export interface PGN_130827 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  a: number
  b: number
  c: number
  d: number
  e: number
  f: number
}

/*
  PGN: 130828
  Description: Simnet: Set Serial Number
*/
export interface PGN_130828 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130831
  Description: Suzuki: Engine and Storage Device Config
*/
export interface PGN_130831 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130832
  Description: Simnet: Fuel Used - High Resolution
*/
export interface PGN_130832 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130833
  Description: B&G: User and Remote rename
*/
export interface PGN_130833 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  dataType: string
  length: number
  reserved6: number
  decimals: BandgDecimals
  shortName: string
  longName: string
}

/*
  PGN: 130834
  Description: Simnet: Engine and Tank Configuration
*/
export interface PGN_130834 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130835
  Description: Simnet: Set Engine and Tank Configuration
*/
export interface PGN_130835 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130836
  Description: Simnet: Fluid Level Sensor Configuration
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130836_Simrad extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  c: number
  device: number
  instance: number
  f: number
  tankType: TankType
  capacity: number
  g: number
  h: number
  i: number
}

/*
  PGN: 130836
  Description: Maretron: Switch Status Counter
  Match: Manufacturer Code == Maretron
  Match: Industry Code == Marine Industry
*/
export interface PGN_130836_Maretron extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  instance: number
  indicatorNumber: number
  startDate: string
  startTime: string
  offCounter: number
  onCounter: number
  errorCounter: number
  switchStatus: OffOn
  reserved12: number
}

/*
  PGN: 130837
  Description: Simnet: Fuel Flow Turbine Configuration
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130837_Simrad extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130837
  Description: Maretron: Switch Status Timer
  Match: Manufacturer Code == Maretron
  Match: Industry Code == Marine Industry
*/
export interface PGN_130837_Maretron extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  instance: number
  indicatorNumber: number
  startDate: string
  startTime: string
  accumulatedOffPeriod: string
  accumulatedOnPeriod: string
  accumulatedErrorPeriod: string
  switchStatus: OffOn
  reserved12: number
}

/*
  PGN: 130838
  Description: Simnet: Fluid Level Warning
*/
export interface PGN_130838 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130839
  Description: Simnet: Pressure Sensor Configuration
*/
export interface PGN_130839 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130840
  Description: Simnet: Data User Group Configuration
*/
export interface PGN_130840 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130842
  Description: Simnet: AIS Class B static data (msg 24 Part A)
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130842_Simrad extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: number
  repeatIndicator: RepeatIndicator
  d: number
  e: number
  userId: string
  name: string
}

/*
  PGN: 130842
  Description: Furuno: Six Degrees Of Freedom Movement
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130842_Furuno extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  a: number
  b: number
  c: number
  d: number
  e: number
  f: number
  g: number
  h: number
  i: number
}

/*
  PGN: 130842
  Description: Simnet: AIS Class B static data (msg 24 Part B)
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Message ID == Msg 24 Part B
*/
export interface PGN_130842_Simrad_Msg24PartB extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: number
  repeatIndicator: RepeatIndicator
  d: number
  e: number
  userId: string
  typeOfShip: ShipType
  vendorId: string
  callsign: string
  length: number
  beam: number
  positionReferenceFromStarboard: number
  positionReferenceFromBow: number
  mothershipUserId: string
  spare17: string
  reserved18: number
}

/*
  PGN: 130843
  Description: Furuno: Heel Angle, Roll Information
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130843_Furuno extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  a: number
  b: number
  yaw: number
  pitch: number
  roll: number
}

/*
  PGN: 130843
  Description: Simnet: Sonar Status, Frequency and DSP Voltage
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130843_Simrad extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130845
  Description: Furuno: Multi Sats In View Extended
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130845_Furuno extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130845
  Description: Simnet: Key Value
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130845_Simrad extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  address: number
  repeatIndicator: RepeatIndicator
  displayGroup: SimnetDisplayGroup
  reserved7: number
  key: string
  spare9: string
  minlength: number
  value: string
}

/*
  PGN: 130846
  Description: Simnet: Parameter Set
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
*/
export interface PGN_130846_Simrad extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  address: number
  b: number
  displayGroup: SimnetDisplayGroup
  d: number
  key: string
  spare9: string
  length: number
  value: string
}

/*
  PGN: 130846
  Description: Furuno: Motion Sensor Status Extended
  Match: Manufacturer Code == Furuno
  Match: Industry Code == Marine Industry
*/
export interface PGN_130846_Furuno extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
}

/*
  PGN: 130847
  Description: SeaTalk: Node Statistics
*/
export interface PGN_130847 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  productCode: number
  year: number
  month: number
  deviceNumber: number
  nodeVoltage: number
}

/*
  PGN: 130848
  Description: SeaTalk: Waypoint Information
*/
export interface PGN_130848 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  sid: number
  waypointName: string
  waypointSequence: string
  bearingToWaypointTrue: number
  bearingToWaypointMagnetic: number
  distanceToWaypoint: number
}

/*
  PGN: 130850
  Description: Simnet: AP Command
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Autopilot
*/
export interface PGN_130850_Simrad_Autopilot extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  address: number
  reserved5: number
  proprietaryId: SimnetEventCommand
  apStatus: SimnetApStatus
  apCommand: SimnetApEvents
  spare9: string
  direction: SimnetDirection
  angle: number
}

/*
  PGN: 130850
  Description: Simnet: Event Command: AP command
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == AP command
*/
export interface PGN_130850_Simrad_ApCommand extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: SimnetEventCommand
  unusedA: number
  controllingDevice: number
  event: SimnetApEvents
  unusedB: number
  direction: SimnetDirection
  angle: number
  unusedC: number
}

/*
  PGN: 130850
  Description: Simnet: Alarm
  Explanation: There may follow a PGN 130856 'Simnet: Alarm Text' message with a textual explanation of the alarm
  Match: Manufacturer Code == Simrad
  Match: Industry Code == Marine Industry
  Match: Proprietary ID == Alarm
*/
export interface PGN_130850_Simrad_Alarm extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  address: number
  reserved5: number
  proprietaryId: SimnetEventCommand
  reserved7: number
  alarm: SimnetAlarm
  messageId: number
  f: number
  g: number
}

/*
  PGN: 130851
  Description: Simnet: Event Reply: AP command
*/
export interface PGN_130851 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  proprietaryId: SimnetEventCommand
  b: number
  address: number
  event: SimnetApEvents
  c: number
  direction: SimnetDirection
  angle: number
  g: number
}

/*
  PGN: 130856
  Description: Simnet: Alarm Message
  Explanation: Usually accompanied by a PGN 130850 'Simnet: Alarm' message with the same information in binary form.
*/
export interface PGN_130856 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  messageId: number
  b: number
  c: number
  text: string
}

/*
  PGN: 130860
  Description: Simnet: AP Unknown 4
  Explanation: Seen as sent by AC-42 and H5000 AP only so far.
*/
export interface PGN_130860 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  a: number
  b: number
  c: number
  d: number
  e: number
  f: number
}

/*
  PGN: 130880
  Description: Airmar: Additional Weather Data
*/
export interface PGN_130880 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  c: number
  apparentWindchillTemperature: number
  trueWindchillTemperature: number
  dewpoint: number
}

/*
  PGN: 130881
  Description: Airmar: Heater Control
*/
export interface PGN_130881 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  c: number
  plateTemperature: number
  airTemperature: number
  dewpoint: number
}

/*
  PGN: 130918
  Description: SeaTalk: Route Information
*/
export interface PGN_130918 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  currentWaypointSequence: number
  currentWaypointName: string
  nextWaypointSequence: number
  nextWaypointName: string
  unknown: number
  distancePositionToNextWaypoint: number
  bearingPositionToNextWaypointTrue: number
  bearingCurrentWaypointToNextWaypointTrue: number
}

/*
  PGN: 130944
  Description: Airmar: POST
*/
export interface PGN_130944 extends PGN {
  manufacturerCode: ManufacturerCode
  reserved: number
  industryCode: IndustryCode
  control: AirmarPostControl
  reserved5: number
  numberOfIdTestResultPairsToFollow: number
  testId: AirmarPostId
  testResult: number
}

