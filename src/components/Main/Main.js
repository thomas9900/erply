import React, {useState, useEffect} from 'react'
import './Main.css'
import { useDispatch } from 'react-redux'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import {createStory} from '../../actions'


const Main = ({articles}) => {
    const [searchValue, setSearchValue] = useState()
    const [searchedResult, setSearchedResult] = useState(articles)
    const [clickedArticle, setClickedArticle] = useState()

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {

        if (clickedArticle) {
            history.push("/story")
            dispatch(createStory(clickedArticle))
        }
    },[clickedArticle])


    useEffect(() => {
        setSearchedResult(articles)
    }, [articles])

    const handleSubmit = (e) => {
        e.preventDefault()
        filterSearched()
    }

    const filterSearched = () => {
        if (articles) {
          const filteredData = articles.filter((article) => {
            if (article.content.toLowerCase().includes(searchValue)) {
              return article
            }
          })
          setSearchedResult(filteredData)
        }
      }

    return (
        <div className='main'>
            <Paper
                onSubmit={handleSubmit}
                component="form"
                sx={{ p: '2px 4px', m: '20px auto', display: 'flex', alignItems: 'center', width: 250 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search articles"
                    onInput={(e) => setSearchValue(e.target.value)}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <h1>Articles</h1>
            {searchedResult ? searchedResult.map((article) => (
                    <div onClick={() => setClickedArticle(article)} className='main__article' key={article.url}>
                        <div>
                        <h2>{article.title}</h2>
                        <i>{article.author}</i>
                        <p>{article.description}</p>
                        </div>
                    </div>
                )) : ''}
        </div>
    )
}

export default Main
