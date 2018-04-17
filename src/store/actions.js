import {GET_HOMEDATA} from "./mutation-types";
import {reqHomeData} from "../api";

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
}
