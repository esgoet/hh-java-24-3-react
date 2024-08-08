import {PostProps} from "../../types/types.ts";
import "./Post.css";

export default function Post(props : PostProps) {
    return (
        <article id={props.id}>
            <header>
                <h3>{props.title}</h3>
                <img src={props.imgUrl} alt={props.imgDesc}/>
            </header>
            <p>{props.content}</p>
        </article>
    )
}