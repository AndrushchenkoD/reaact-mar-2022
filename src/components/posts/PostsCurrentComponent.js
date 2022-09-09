import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getPostCurrentComponent} from "../../services";
import PostComponent from "./PostComponent";

function PostsCurrentComponent() {
    const {postId}=useParams();
    const [posts,setPosts] = useState([]);
    useEffect(() => {
    getPostCurrentComponent(postId).then(value => setPosts([{...value}]))
    },[postId])

    return (
        <div>
            {
                posts.map(value => <PostComponent item={value} key={value.id} />)
            }
        </div>
    );
}

export default PostsCurrentComponent;