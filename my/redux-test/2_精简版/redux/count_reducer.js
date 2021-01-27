const initSta = 0
import { INC, DEC } from '../../3_完整版/redux/constant'
export default function countReducer(preSta = initSta, action) {
  const { type, data } = action
  console.log(preSta);

  switch (type) {
    case INC:
      return preSta + data
    case DEC:
      return preSta - data
    case 'incIfOdd':
      return preSta - data
    case 'incAsc':
      return preSta - data
    default:
      return preSta
  }
}