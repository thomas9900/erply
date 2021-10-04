import React from 'react'
import './Story.css'
import { useSelector } from 'react-redux'

const Story = () => {
    const story = useSelector(state => state.story)
    
    return (
        <div className='story'>
            <h1>{story.title}</h1>
            <i>{story.author}</i>
            <p>{story.content}</p>
            <img src={story.urlToImage} alt='story-img' />
        </div>
    )
}

export default Story
