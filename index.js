

const canboat = require('./canboat.json')

exports.pgns = canboat
exports.getPGNs = () => canboat.PGNs.filter(pgn => pgn.Fallback === undefined || pgn.Fallback === false)
