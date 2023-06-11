const increament = () => {
    return (dispatch) => {
        dispatch({
            type: "increament"
        })
    }
}
const decreament = () => {
    return (dispatch) => {
        dispatch({
            type: "decreament"
        })
    }
}

export { increament,decreament }