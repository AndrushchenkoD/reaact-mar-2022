import React from "react";
import {Routes, Route} from "react-router-dom";

import {MainLayout} from './layouts/MainLayout'
import TodosPage from "./pages/TodosPage"
import AlbumsPage from "./pages/AlbumsPage"
import CommentsPage from "./pages/CommentsPage"
import PostsCurrentComponent from "./components/posts/PostsCurrentComponent"

export default function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostsCurrentComponent/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}


