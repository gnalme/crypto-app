export function percentDiference(a, b) {
  return +(100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2)
}

//Делает название крипты с большой буквы
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}