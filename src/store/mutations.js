import {GET_CLASSAFIY, GET_CLASSAFIYBRAND, GET_HOMEDATA, GET_USERINFO} from "./mutation-types";

export default {
  [GET_HOMEDATA](state,{homeDatas}){
   state.homeDatas=homeDatas
  },
  [GET_CLASSAFIY](state,{classafiySort}){
   state.classafiySort=classafiySort
  },
  [GET_CLASSAFIYBRAND](state,{classafiyBrand}){
   state.classafiyBrand=classafiyBrand
  },
  [GET_USERINFO](state,{userinfo}){
   state.userinfo=userinfo
  },
}
