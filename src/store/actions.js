import {GET_CLASSAFIY, GET_CLASSAFIYBRAND, GET_HOMEDATA, GET_USERINFO} from "./mutation-types";
import {reqClassafiyBrand, reqClassafiySort, reqHomeData, reqLogin} from "../api";

export default {
  async getHomeData({commit},callback){
    const result = await reqHomeData()
    if(result.code==0){

      const homeDatas =result.data
      console.log(homeDatas)
      commit(GET_HOMEDATA,{homeDatas})
      callback && callback()
    }
  },
  async getClassafiySort({commit},callback){
    const result = await reqClassafiySort()
    if(result.code==0){
      const classafiySort =result.data
      commit(GET_CLASSAFIY,{classafiySort})
      callback && callback()
    }
  },
  async getClassafiyBrand({commit},callback){
    const result = await reqClassafiyBrand()
    if(result.code==0){
      const classafiyBrand =result.data
      commit(GET_CLASSAFIYBRAND,{classafiyBrand})
      callback && callback()
    }
  },
  async recordLogin({commit},userinfo){

    const result = await reqLogin(userinfo)
    console.log(result);
    if(result.code==0){
      const userinfo =result.data
      commit(GET_USERINFO,{userinfo})
    }
  },
}
