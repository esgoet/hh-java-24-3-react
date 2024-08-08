import {PostComment} from "../../types/types.ts";

export default function Comment(props : PostComment) {
    return (
        <article>
            <p>{props.user}</p>
            <p>{props.content}</p>
        </article>
    )
}