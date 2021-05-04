import React, { createContext, useContext } from "react";
import useThunkReducer from "react-hook-thunk-reducer";
import AlbumApi from "../apis/AlbumApi";

export const AlbumContext = createContext();

const initialAlbum = [];

export const FETCH_ALBUM = "FETCH_ALBUM"
export const CLEAR_ALL = "CLEAR_ALL"

export let fetchAlbum = () => async (dispatch) => {
    const data = await AlbumApi.getAlbum()
    dispatch({type: FETCH_ALBUM, data})
}

export function clearAlbum() {
    return {type: CLEAR_ALL}
}

export function albumReducer(state, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_ALBUM:
            return [...state, ...action.data]
        case CLEAR_ALL:
            return [];
        default:
            return state
    }
}

function AlbumProvider(props) {
    const [items, dispatch] = useThunkReducer(albumReducer, initialAlbum);

    const postData = { albumItems: items, albumDispatch: dispatch };

    return <AlbumContext.Provider value={postData} {...props} />
}

function useAlbumContext() {
    return useContext(AlbumContext);
}

export { AlbumProvider, useAlbumContext}
