const emailReducer = (state = '', action) => {
    switch (action.type) {
        case 'EMAIL':
            return state = action.payload
        default: {
            return state
        }
    }
}

export default emailReducer