//动作层
var AppDispatcher=require('../dispactcher/AppDispatcher');

var ButtonActions={
    addNewItem:function (text) {
        AppDispatcher.dispatch({
            actionType:'ADD_NEW_ITEM',
            text:text
        });
    },
};

module.exports = ButtonActions;