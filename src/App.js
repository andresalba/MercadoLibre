import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './pages/Main/Main'
import Detail from './pages/Detail/Detail'
import Layout from './components/layout/Layout'
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

function App() {
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch({type:'whatever'})
  // },[])
  // const state = useSelector(state=>state)
  // console.log(state)

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/main" component={Main} />
          <Route path="/product/:id" component={Detail} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
