import * as api from '../api'

//Action creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    }
    catch (error) {
        //TODO: client error handling
        console.log(error.message);
    }
}