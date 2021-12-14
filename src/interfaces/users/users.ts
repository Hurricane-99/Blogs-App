export interface IUsersState {
    users: {
        entity: IUser[]
        loaded: boolean
        errors: {
            isError: boolean
            message: string
        }
    }
    user: {
        entity: IUser | undefined
        loaded: boolean
        errors: {
            isError: boolean
            message: string
        }
    }

}

export interface IUser {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": IUserAddress
    "phone": string,
    "website": string,
    "company": IUserCompany
}

interface IUserAddress {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
        "lat": string,
        "lng": string
    }
}

interface IUserCompany {
    "name": string,
    "catchPhrase": string,
    "bs": string
}