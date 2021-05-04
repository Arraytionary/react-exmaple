import React, {useEffect, useState} from "react";
import {fetchPost, clearPost, usePostContext} from "./contexts/postContext";
import {clearAlbum, fetchAlbum, useAlbumContext} from "./contexts/albumContext";
import UserApi from "./apis/UserApi";


export function Post() {
    const { postItems, postDispatch } = usePostContext();
    const { albumItems, albumDispatch } = useAlbumContext();
    const initUser = []
    const [ user, setUser ] = useState(initUser);

    const getUser = async () => {
        // replace old value in the state
        setUser(await UserApi.getUser());
    }

    const appendUser = async () =>{
        const userList = await UserApi.getUser()
        // prevState refer to previous state
        setUser(prevState => [...prevState, ...userList]);
    }

    useEffect(() => {
        postDispatch(fetchPost());
    }, [])
    return (
        <div>
            <button onClick={() => postDispatch(clearPost())}> clear post </button>
            <button onClick={() => postDispatch(fetchPost())}> fetch post </button>
            <button onClick={() => albumDispatch(clearAlbum())}> clear album </button>
            <button onClick={() => albumDispatch(fetchAlbum())}> fetch album </button>
            <button onClick={getUser}> get user </button>
            <button onClick={appendUser}> append user </button>
            {postItems.map((item, idx) => (
                <div key={idx}> {item.body} </div>
            ))}
            {albumItems.map((item, idx) => (
                <div key={idx}> {item.title} </div>
            ))}

            {user.map((u, idx) => (
                <div key={idx}> {u.name} </div>
            ))}
        </div>
    )
}
