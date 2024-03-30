import { createStore } from 'redux'
import reducer from './reducer/reducer'

// reducer = store를 바꿔주는 함수
let store = createStore(reducer)

export default store