import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import counter from './reducer'
import Counter from './component'
import increaseAction from './action'

const store =createStore(counter)

function mapStateToProps(state) {
    return {
        value:state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick:()=> dispatch(increaseAction)
    }
}

const App =connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
