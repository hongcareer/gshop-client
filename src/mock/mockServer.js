import data from './data.json';
import Mock from 'mockjs';
//拦截ajax请求，返回生成的随机数据
Mock.mock('/goods',{code:0,data:data.goods})
Mock.mock('/ratings',{code:0,data:data.ratings})
Mock.mock('/info',{code:0,data:data.info})
