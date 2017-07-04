var add=require('./add');

//引入断言库,expect风格
var expect=require('chai').expect;

//测试套件
describe('加法函数测试',function(){
    //测试用例,测试最小单位
    it('1+1应该等于2',function(){
        //断言
        expect(add(1,1)).to.be.equal(2);
    });
});