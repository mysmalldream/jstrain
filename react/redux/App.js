//容器组件
import {connect} from 'react-redux';
import UIComponent from './uiComponent';

function mapStateToProps(state) {
    return {
        text:state.text,
        name:state.name
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChange:(e)=>dispatch({
            type:'change',
            payload:e.target.value
        })
    };
}

const App=connect(
    mapStateToProps,
    mapDispatchToProps
)(UIComponent);

export default App;