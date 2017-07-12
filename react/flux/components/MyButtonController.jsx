//与数据状态层关联，发出动作，接收状态
//React 的 controller view 模式。"controller view"组件只用来保存状态，然后将其转发给子组件。
var React = require('react');
var ButtonActions = require('../actions/ButtonActions');
var ListStore = require('../stores/ListStore');
var MyButton = require('./MyButton');

var MyButtonController = React.createClass({
    getInitialState:function () {
        return {
            items:ListStore.getAll()
        };
    },

    componentDidMount:function () {
        ListStore.addChangeListener(this._onChange);
    },

    componentWillUnmount:function () {
        ListStore.removeChangeListener(this._onChange);
    },

    _onChange:function () {
        this.setState({
            items:ListStore.getAll()
        });
    },

    createNewItem: function (event) {
        ButtonActions.addNewItem('new item');
    },

    render: function() {
        return <MyButton onClick={this.createNewItem} />;
    }
});

module.exports = MyButtonController;