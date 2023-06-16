const mem = {
    count: 0,
    user: "demouser@example.com",
    pw: "user1",
    products: []
}

export default (state = mem, action) => {
    switch (action.type) {
        case "increament":
            return { ...state, count: state.count + 2 }
        case "decreament":
            return { ...state, count: state.count - 2 }
        case "addProduct":
            return { ...state, products: [...state.products, action.payload] }
        case "edit":
            const index = action.payload;
            return {
                ...state,
                products: state.products.map((product, i) => {
                    if (i === index) {
                        return { ...product, e: 1 };
                    } else {
                        return { ...product, e: 0 };
                    }
                }),
            };
        case 'updateProduct':
            let { ind, ...updatedProductData } = action.payload;
            return {
                ...state,
                products: state.products.map((product, i) => {
                    if (i === ind) {
                        return { ...product, ...updatedProductData };
                    }
                    return product;
                }),
            };
        case 'deleteProduct':
            const { i } = action.payload;
            const updatedObjects = [...state.products]; // Create a copy of the objects array
            updatedObjects.splice(i, 1); // Remove the object at the specified i
            return {
                ...state,
                products: updatedObjects
            };
            return
        default:
            return state
    }
}