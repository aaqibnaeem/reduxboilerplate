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

const addProduct = (data) => {
    return (dispatch) => {
        dispatch({
            type: "addProduct",
            payload: data
        })
    }
}
const edit = (data) => {
    return (dispatch) => {
        dispatch({
            type: "edit",
            payload: data
        })
    }
}
const updateProduct = (data) => {
    return (dispatch) => {
        dispatch({
            type: "updateProduct",
            payload: data
        })
    }
}
const deleteProduct = (data) => {
    return (dispatch) => {
        dispatch({
            type: "deleteProduct",
            payload: data
        })
    }
}
export { increament, decreament, addProduct, edit, updateProduct, deleteProduct }