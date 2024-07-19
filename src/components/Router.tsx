
import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from "../pages/home";
import PostList from "../pages/posts";
import PostDetail from "../pages/posts/detail";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import Profile from "../pages/Profile";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";

interface RouterProps {
    isAuthenticated: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {    
    return (
        <>
            <Routes>
                {isAuthenticated ? (
                    <>
                        <Route path="/" element={<HomePage />} />
                        <Route path="posts" element={<PostList />} />
                        <Route path="posts/:id" element={<PostDetail />} />
                        <Route path="posts/new" element={<PostNew />} />
                        <Route path="posts/edit/:id" element={<PostEdit />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="*" element={<LoginPage />} />
                    </>
                )
                }
            </Routes>
        </>
    );
}