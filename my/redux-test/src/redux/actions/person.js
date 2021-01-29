import { ADD_PERSON } from '../constant'

export const createAddPersonAction = (pobj) => ({
  type: ADD_PERSON, data: pobj
})