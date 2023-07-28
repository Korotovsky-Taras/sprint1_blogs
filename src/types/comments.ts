import {WithId} from "mongodb";
import {PaginationQueryModel, Status, WithPagination, WithPaginationQuery} from "./custom";

export type Comment =  {
    content: string,
    commentatorInfo: CommentCommentatorInfo,
    createdAt: string
}

export type CommentCommentatorInfo =  {
    userId: string,
    userLogin: string
}

export type CommentMongoModel = WithId<Comment>;

export type CommentCreateModel = Pick<Comment, 'content'> & Pick<CommentCommentatorInfo, "userId" | "userLogin">;

export type CommentUpdateModel = Pick<Comment, 'content'>;

export type CommentViewModel = Pick<Comment, 'content' | 'commentatorInfo' | 'createdAt'> & {id: string};

export type CommentListMongoModel = WithPagination<CommentMongoModel>;

export type CommentListViewModel = WithPagination<CommentViewModel>;

export type CommentPaginationQueryModel = PaginationQueryModel<Comment>;

export type CommentPaginationRepositoryModel = WithPaginationQuery<Comment>;

export type CommentActionUpdatePayload = {
    status: Status
}
