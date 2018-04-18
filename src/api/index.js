import ajax from './ajax'
//1.根据首页
export const reqHomeData=()=>ajax('/homepage')
export const reqClassafiySort=()=>ajax('/classafiy/sort')
export const reqClassafiyBrand=()=>ajax('/classafiy/brand')

