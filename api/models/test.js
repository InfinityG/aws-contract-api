var seq = 99;

module.exports.run = function() {
  return {
    test: seq++
  }
}
