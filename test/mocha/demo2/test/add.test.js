var add = require('../src/add.js');

//引入断言库,expect风格
var expect=require('chai').expect;

//测试套件
describe('加法函数测试',function(){
    //测试用例,测试最小单位
    it('1+1应该等于2',function(){
        //断言:判断源码的实际执行结果与预期结果是否一致
        expect(add(1,1)).to.be.equal(2);
    });
});