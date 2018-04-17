import {GET_HOMEDATA} from "./mutation-types";

export default {
  [GET_HOMEDATA](state,{homeDatas}){
   state.homeDatas=homeDatas
  }
}
