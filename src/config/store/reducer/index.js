const mem = {
    count: 0,
    user: "demouser@example.com",
    pw: "user1"
}

export default (state = mem, action) => {
    switch (action.type) {
        case "increament":
            return { ...state, count: state.count + 2 }
        case "decreament":
            return { ...state, count: state.count - 2 }
        default:
            return state
    }
}