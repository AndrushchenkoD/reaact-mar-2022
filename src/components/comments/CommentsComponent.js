import React, {useEffect, useState} from "react";
import {getComments} from "../../services";
import CommentComponent from "./CommentComponent";
function CommentsComponent() {
    const [comment,setComment]=useState([]);
    useEffect(() => {
    getComments().then(value => setComment([...value]));
    },[])

    return (
        <div>
            {
                comment.map(value => <CommentComponent item={value} key={value.id}/>)
            }
        </div>
    );
}

export default CommentsComponent;