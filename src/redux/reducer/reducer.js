let initialState = {
  count: 0,
  id: "",
  password: "",
};

// action -> dispatch로 던진 액션을 받아옴
function reducer(state = initialState, action) {
  // state는 초기화가 필요
  console.log("Action?", action);
  // reducer = action에 해당하는 return 값을 적용해줌
  // if문을 써도 되고, switch문을 써도 됨
  // if (action.type === "INCREMENT") {
  //     // state에 있는 count 값을 1 더해줌
  //     // ...state: 여러 상태값은 유지를 하되(기존 객체내용을 복사해 신규 객체에 전달), count만 변경
  //     // payload값을 이용해 값을 변경(action.payload.sth)
  //     return {...state, count: state.count + action.payload.num}
  // }

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    case "DECREMENT":
        return {
            ...state,
            count: state.count - action.payload.num
        }
    default:
      return { ...state };
  }

  // store는 무조건 return이 있어야 하기 때문에 기본 리턴 값 설정
  return { ...state };
}

export default reducer;
