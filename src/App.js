import React, {useState, useEffect} from 'react'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Story from './components/Story/Story'

const App = () => {
  const [articles, setArticles] = useState()

  const isLogged = useSelector(state => state.isLogged)
  const apiToken = useSelector(state => state.apiToken)

  useEffect(() => {
    const getArticles = async () => {
      const ArticlesFromServer = await fetchArticles()
      setArticles(ArticlesFromServer.articles)
    }
    getArticles()
  }, [apiToken])

  const fetchArticles = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-09-29&sortBy=popularity&apiKey=${apiToken}`)
    const data = await res.json()
    return data
  }

  return (
    <Router>
      <div>
        <Navbar />
          {isLogged ? <Redirect to='/articles' /> : <Login /> }
          <Route 
            path='/articles' 
            render={() => <Main articles={articles} />} 
          />
          <Route path='/profile' component={Profile} />
          <Route path='/story' component={Story} />
      </div>
    </Router>

  )
}

export default App 
