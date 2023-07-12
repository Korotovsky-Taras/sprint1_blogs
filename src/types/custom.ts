import {NextFunction, Request, Response} from "express";

export enum RouterMethod {
    POST= "post",
    PUT="put",
    DELETE="delete",
    GET="get"
}

export enum Status {
    OK=200,
    CREATED=201,
    NO_CONTENT=204,
    BAD_REQUEST=400,
    UNATHORIZED=401,
    NOT_FOUND=404,
    DB_ERROR=409,
    UNHANDLED=500,
}

export type ParamIdModel = {
    id: string
}

export type WithPaginationQuery = {
    sortBy: string,
    sortDirection: SortingDirection,
    pageNumber: number,
    pageSize: number
};

export type WithPagination<T> = {
    pagesCount: number,
    page: number,
    pageSize: number,
    totalCount: number,
    items: T[];
};

export interface ParsedQs { [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[] }

// Дополнительная проверка на совпадение типов Query моделей
export type QueryGateModel<RegModel, RepoModel extends {[K in keyof RegModel]: any}> = {
    [K in keyof RepoModel]: RepoModel[K]
}

export type SortingDirection = "asc" | "desc";

export interface PaginationQueryModel extends ParsedQs {
    searchNameTerm?: string,
    sortBy?: string,
    sortDirection?: string,
    pageNumber?: string,
    pageSize?: string,
}


export type FieldError = {
    message: string;
    field: string
}

export type ErrorsMessage = {
    errorsMessages: FieldError[]
}

export type RouteMiddleware = (req: Request, res: Response,  next: NextFunction) => void

export interface Route<T> {
    route: string,
    method: RouterMethod;
    controller: T;
    action: keyof T;
    middlewares?: RouteMiddleware[]
}