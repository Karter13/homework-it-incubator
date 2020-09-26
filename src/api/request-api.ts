import axios from 'axios'

type DataType<T> = {
    errorText: string
    info: string
    yourBody: T
    yourQuery: {}
}

export const requestAPI = {
    createStatus(success: boolean) {
        return axios.post<DataType<{success: boolean}>>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
    }
};
