import {combineReducers} from 'redux'
import readEvent from './events'
import {reducer as form} from'redux-form'
console.log(readEvent)

export default combineReducers({readEvent,form})
// export default combineReducers({ foo, bar, baz})