import {Post, PostViewModel} from "../types";

export const PostsDto = {
    allPosts(blogs: Post[]): PostViewModel[] {
        return blogs.map(this.post)
    },
    post({id, title, shortDescription, content, blogId, blogName}: Post): PostViewModel {
        return {
            id,
            title,
            shortDescription,
            content,
            blogId,
            blogName
        }
    }
}
