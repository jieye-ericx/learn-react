import { ADD_PERSON } from "../constant"

const initSta = [{ id: '001', name: 'tom', age: 18 }]
export default function personReducer(preSta = initSta, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preSta]
    default:
      return preSta

  }
}