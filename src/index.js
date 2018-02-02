import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router'

import './css/style.css';
import App from './components/App';
import NotFound from './components/NotFound'


import StorePicker from './components/StorePicker';

const repo = `/${window.location.pathname.split('/')[1]}`;



const Root = () => {
    return (
        <BrowserRouter basename={repo}>
            <div>
            <Match exactly pattern ="/" component={StorePicker}/>
            <Match pattern ="/store/:storeId" component={App}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>

    )
};

render(<Root/>, document.querySelector('#main'));