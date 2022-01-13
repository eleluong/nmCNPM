import { SET_NAME, SET_PHONE, SET_EMAIL, SET_ADDRESS, SET_FORM } from "./constants";

export function setName(payload) {
    return {
        type: SET_NAME,
        payload: payload,
    }
}

export function setPhone(payload) {
    return {
        type: SET_PHONE,
        payload: payload,
    }
}

export function setEmail(payload) {
    return {
        type: SET_EMAIL,
        payload: payload,
    }
}

export function setAddress(payload) {
    return {
        type: SET_ADDRESS,
        payload: payload,
    }
}

export function setForm(payload) {
    return {
        type: SET_FORM,
        payload: payload,
    }
}