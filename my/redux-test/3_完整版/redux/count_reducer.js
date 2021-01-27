const initSta = 0

export default function countReducer(preSta = initSta, action) {
  const { type, data } = action
  console.log(preSta);

  switch (type) {
    case 'inc':
      return preSta + data
    case 'dec':
      return preSta - data
    case 'incIfOdd':
      return preSta - data
    case 'incAsc':
      return preSta - data
    default:
      return preSta
  }
}