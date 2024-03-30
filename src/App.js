import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Box from './component/Box'

function App() {
  // const [count, setCount] = useState(0)
  // useSelector로 상태값 가져오기
  // state가 매개변수(store의 initialState에서 정의)로 가져와지고, 그 중에서 count를 가져옴
  let count = useSelector(state => state.count)
  let id = useSelector(state => state.id)
  let password = useSelector(state => state.password)
  // useDispatch 세팅
  const dispatch = useDispatch()

  const increase = () => {
    // action(오브젝트)을 던져야함
    // type: 액션의 이름
    // payload(optional): 함수의 매개변수같은 역할
    dispatch({type: "INCREMENT", payload: {num: 5}})
    // setCount(number + 1)
    // console.log(number)
  }

  const decrease = () => {
    dispatch({type: "DECREMENT", payload: {num: 1}})
  }

  const login = () => {
    dispatch({type: "LOGIN", payload: {id:"noona", password: "123"}})
  }
  return (
    <div>
      <h1>{id}, {password}</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Click!</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>Decrease</button>
      <Box />
    </div>
  );
}

export default App;
