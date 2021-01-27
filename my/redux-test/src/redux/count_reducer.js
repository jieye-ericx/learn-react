import { INC, DEC } from './constant'
const initSta = 0

export default function countReducer(preSta = initSta, action) {
  const { type, data } = action
  switch (type) {
    case INC:
      return preSta + data
    case DEC:
      return preSta - data
    default:
      return preSta
  }
}