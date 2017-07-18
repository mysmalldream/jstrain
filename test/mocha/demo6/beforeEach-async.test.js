var expect = require('chai').expect;

describe('异步beforeEach示例', function() {
    var foo = false;

    beforeEach(function(done) {
        setTimeout(function () {
            foo=true;
            done();
        },50);
    });

    it('异步修改全局变量应该成功', function() {
        expect(foo).to.be.equal(true);
    });
});