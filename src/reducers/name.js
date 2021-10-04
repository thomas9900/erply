const nameReducer = (state = '', action) => {
    switch (action.type) {
        case 'NAME':
            return state = action.payload
        default: {
            return state
        }
    }
}

export default nameReducer