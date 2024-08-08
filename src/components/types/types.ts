export type PostProps = {
    id: string,
    title : string,
    imgUrl: string,
    imgDesc: string,
    content :string
    // comments: PostComment[]
}

export type PostComment = {
    id: string,
    user: string,
    content: string
}