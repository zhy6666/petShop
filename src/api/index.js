import ajax from './ajax'
const BASE_URL = 'http://localhost:3000'
//1.根据首页
export const reqHomeData=()=>ajax('/homepage')
export const reqClassafiySort=()=>ajax('/classafiy/sort')
export const reqClassafiyBrand=()=>ajax('/classafiy/brand')
export const reqLogin=({name,pwd})=>ajax(BASE_URL+'/login_pwd',{name,pwd},'POST')
