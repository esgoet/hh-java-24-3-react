import {posts} from "../../posts.ts";
import Post from "./post/Post.tsx";
import "./Blog.css";

export default function Blog() {

    return (
        <>
            <section id="blog">
                <h2>Posts</h2>
                {posts.map((post) => {
                        return <Post key={post.id} {...post}/>
                    }
                )}
            </section>
        </>
    )
}