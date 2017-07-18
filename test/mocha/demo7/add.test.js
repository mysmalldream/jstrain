var add=require('./add');

var expect=require('chai').expect;

describe('加法函数测试',function(){
    it.only('1+1应该等于2',function(){
        expect(add(1,1)).to.be.equal(2);
    });

    it.skip('任何数+0应该等于自身',function () {
        expect(add(1,0)).to.be.equal(1);
    });
});