import {GET_CLASSAFIY, GET_CLASSAFIYBRAND, GET_HOMEDATA} from "./mutation-types";

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
}
