export interface loginModel {
    username: string,
    password: string,
}

export interface loginResponseModel {
    token: string,
    user: {
        id: number,
        mobile: string,
        username: string,
        last_name: string
        first_name: string
        avatar: string
    }
}

export interface tokenVerifyModel {
    token: string
}
