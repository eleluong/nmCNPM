import {SET_NAME, SET_PHONE, SET_EMAIL, SET_ADDRESS, SET_FORM} from "./constants"


export const initState = {
    id: '',
    name: '',
    phone: '',
    address: '',
    email: '',
}

export default function reducer(state, action) {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload,
            }
        case SET_PHONE:
            return {
                ...state,
                phone: action.payload,
            }
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload,
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            }
        case SET_FORM:
            return action.payload
    }
}
