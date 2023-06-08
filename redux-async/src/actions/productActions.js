import axios from 'axios';

const fetchProducts = () => {
    return async (dispatch) => {

        dispatch({ type: "REQUEST" });
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            dispatch({ type: "SUCCESS", payload: response.data })
        } catch (error) {
            dispatch({ type: "ERROR", payload: error.message })
        }
    }
}



export { fetchProducts }