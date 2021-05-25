import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import BlogsMenu from './components/blogs-template';
import SingleBlogTemplate from './components/single-blog-template';

const routing = (
  <React.StrictMode>
    <BrowserRouter>

          <Route exact path="/" component={App}></Route>
          <Route exact path="/blogs" component={BlogsMenu}></Route>
          <Route path="/blogs/:slug" component={SingleBlogTemplate}></Route>

    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
