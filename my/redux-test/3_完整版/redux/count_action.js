import { INC, DEC } from './constant'
export const createIncAction = data => ({ type: INC, data })
export const createDecAction = data => ({ type: DEC, data })
