import {
  CHGINPUT,
  TODOADD,
  SHORTCART,
  ADDCART
} from './actionTypes';

export const chgInput=(value)=>{
  return{
    type:CHGINPUT,
    value
  }
}
export const todoAdd=()=>{
  return{
    type:TODOADD
  }
}
export const shortCart=(good)=>{
  return{
    type:SHORTCART,
    good
  }
}
export const addCart=(good)=>{
 // console.log(good)
  return{
    type:ADDCART,
    good
  }
}