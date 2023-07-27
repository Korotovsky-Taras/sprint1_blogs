export type AuthLoginModel = {
    loginOrEmail: string,
    password: string,
}

export type AuthTokenPass = {
    userId: string
}

export type AuthToken = {
    token: string
}

export type AuthMeViewModel = {
    email: string,
    login: string,
    userId: string
}