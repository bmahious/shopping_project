import { CARD_ACTION_TYPES } from "./CardTypes";
export const CARD_INITIAL_STATE = {
    isOpenCard : false,
    cardItems : [],
  }
  
  
   export const cardReducer = (state = CARD_INITIAL_STATE, action = {}) => {
    const { type, payload } = action
    switch(type) {
      case CARD_ACTION_TYPES.SET_CARD_ITEM :
      return {
        ...state,
        cardItems : payload
      }
      case CARD_ACTION_TYPES.IS_OPEN_CARD :
        return {
            ...state,
            isOpenCard : payload
        }
      default :
        return state
    }
   }