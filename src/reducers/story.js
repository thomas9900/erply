const storyReducer = (state = {}, action) => {
    switch (action.type) {
        case 'STORY':
            return state = action.payload
        default: {
            return state
        }
    }
}

export default storyReducer