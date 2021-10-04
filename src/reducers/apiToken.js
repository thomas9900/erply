const apiTokenReducer = (state = '', action) => {
    switch (action.type) {
        case 'APITOKEN':
            return state = action.payload
        default: {
            return state
        }
    }
}

export default apiTokenReducer