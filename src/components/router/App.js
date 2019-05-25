import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../js/Layout';
import Badges from '../../pages/Badges';
import BadgeNew from '../../pages/BadgeNew';
import NotFound from '../../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={BadgeNew} />
                    <Route exact path="/badges/new" component={Badges} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;