//数据层，Store 保存整个应用的状态。它的角色有点像 MVC 架构之中的Model。
var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');

var ListStore=assign({},EventEmitter.prototype,{
    items:[],

    getAll:function () {
        return this.items;
    },

    addNewItemHandler:function (text) {
        this.items.push(text);
    },

    emitChange:function () {
        this.emit('change');
    },
    
    addChangeListener:function (callback) {
        this.on('change',callback);
    },

    removeChangeListener:function (callback) {
        this.removeListener('change',callback);
    }
});

module.exports=ListStore;