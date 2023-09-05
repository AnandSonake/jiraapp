//import react, { component } from 'react';
//import { route, routes } from 'react-router-dom';
//import approutes from './approutes';
//import { layout } from './components/layout';
//import './custom.css';

//export default class app extends component {
//    static displayname = app.name;


//  render() {
//    return (
//      <layout>
//        <routes>
//          {approutes.map((route, index) => {
//            const { element, ...rest } = route;
//            return <route key={index} {...rest} element={element} />;
//          })}
//        </routes>
//      </layout>
//    );
//  }
//}

import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';
import './custom.css';

class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })}
                </Routes>
            </Layout>
        );
    }
}

export default App;