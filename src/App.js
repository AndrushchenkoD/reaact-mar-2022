import Users from "./component/Users/Users";
import {useEffect, useState} from "react";
import {getPosts} from "./services/index"
import Post from "./component/Post/Post"
function App() {
    let[posts,setPosts]=useState([]);
const elevate=(id) => {
getPosts(id).then(({data})=>{
    setPosts([...data]);
    })
}
  return (
    <div>
        <div><Users elevate={elevate}/></div>
        <div><Post posts={posts}/></div>
    </div>
  );
}

export default App;
