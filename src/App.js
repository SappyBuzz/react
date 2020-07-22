import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TodoList from './TodoList';
import CounterTest from './CounterTest';
import NavigationList from './NavigationList';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Quizlist from './QuizList'
 
library.add(faTrash)


function App() {
  return (
    <Router>
    <div>
      <NavigationList />
      <div className="container">
      <div className="content">
      <Switch>
        <Route path="/todo-list" component={TodoList} ></Route>
        <Route path="/counter" component={CounterTest} ></Route>
        <Route path="/quiz" component={Quizlist} ></Route>
      </Switch>
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;