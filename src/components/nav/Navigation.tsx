import {posts} from "../../posts.ts";
import "./Navigation.css";

export default function Navigation() {
    return (
        <>
            <nav>
                <h2>The latest mysteries</h2>
                <ul>
                        {posts.map(post => {
                                return (
                                    <li>
                                        <a href={`/#${post.id}`}>{post.title}</a>
                                    </li>)
                            }
                        )}
                </ul>
            </nav>
        </>
    )
}