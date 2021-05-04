import React, { createContext, useContext } from "react";
import useThunkReducer from "react-hook-thunk-reducer";
import PostApi from "../apis/PostApi";

export const PostContext = createContext();

const initialPost = [];

export const FETCH_POST = "FETCH_POST"
export const CLEAR_ALL = "CLEAR_ALL"

export let fetchPost = () => async (dispatch) => {
    const data = await PostApi.getPost();
    dispatch({type: FETCH_POST, data});
}

export function clearPost() {
    return {type: CLEAR_ALL}
}

export function postReducer(state, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_POST:
            console.log(action.data);
            return [...state, ...action.data]
        case CLEAR_ALL:
            return [];
        default:
            return state
    }
}

function PostProvider(props) {
    const [items, dispatch] = useThunkReducer(postReducer, initialPost);

    const postData = { postItems: items, postDispatch: dispatch };

    return <PostContext.Provider value={postData} {...props} />
}

function usePostContext() {
    return useContext(PostContext);
}

export { PostProvider, usePostContext}
