import Reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const globalStore = createStore(Reducer, applyMiddleware(thunk))
export default globalStore