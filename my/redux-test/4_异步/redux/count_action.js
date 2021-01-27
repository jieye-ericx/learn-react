import { INC, DEC } from './constant'

import store from './store'
export const createIncAction = data => {
  return { type: INC, data }
}
export const createDecAction = data => ({ type: DEC, data })
export const createAscAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncAction(data))
    }, time);
  }
}
