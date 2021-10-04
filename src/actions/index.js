export const createEmail = (get) => {
    return {
        type: 'EMAIL',
        payload: get
    }
}

export const createName = (get) => {
    return {
        type: 'NAME',
        payload: get
    }
}

export const createApiToken = (get) => {
    return {
        type: 'APITOKEN',
        payload: get
    }
}

export const isLogged = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const createStory = (get) => {
    return {
        type: 'STORY',
        payload: get
    }
}