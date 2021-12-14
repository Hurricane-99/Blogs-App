import {Action, createSlice, PayloadAction, ThunkAction} from "@reduxjs/toolkit"
import {IUser, IUsersState} from '../../interfaces/users/users'
import {getUser, getUsers} from "../../api/users/users";


// Initial State
const initialState: IUsersState = {
    users: {
        loaded: false,
        entity: [],
        errors: {
            isError: false,
            message: ''
        }
    },
    user: {
        loaded: false,
        entity: undefined,
        errors: {
            isError: false,
            message: ''
        }
    }
}

// Selector
export const usersSelector = (state: { users: IUsersState }) => state.users

// Slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsersAction: (state, action: PayloadAction<IUser[]>) => {
            state.users.entity = action.payload
            state.users.loaded = true
            state.users.errors.isError = false
        },
        setUserAction: (state, action: PayloadAction<IUser>) => {
            state.user.entity = action.payload
            state.user.loaded = true
            state.user.errors.isError = false
        },
        userError: (state, action: PayloadAction<string>) => {
            state.user.loaded = true
            state.user.errors.isError = true
            state.user.errors.message = action.payload
        },
        usersError: (state, action: PayloadAction<string>) => {
            state.users.loaded = true
            state.users.errors.isError = true
            state.users.errors.message = action.payload
        }
    }
})

//Actions
export const {setUsersAction, usersError, setUserAction, userError} = usersSlice.actions

// Async Thunk
export const getUsersThunk = (): ThunkAction<void, IUsersState, unknown, Action<string>> => {
    return async dispatch => {
        try {
            const users: IUser[] = await getUsers()
            dispatch(setUsersAction(users))
        } catch (e: any) {
            dispatch(usersError(e.message))
        }
    }
}

export const getUserThunk = (id: string): ThunkAction<void, IUsersState, unknown, Action<string>> => {
    return async dispatch => {
        try {
            const user: IUser = await getUser(id)
            dispatch(setUserAction(user))
        } catch (e: any) {
            dispatch(userError(e.message))
        }
    }
}

// Export reducer
export default usersSlice.reducer