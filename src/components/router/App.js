import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../js/Layout.js';
import Badges from '../../pages/Badges.js';
import BadgeNew from '../../pages/BadgeNew.js';
import NotFound from '../../pages/NotFound.js';
import BadgeEdit from '../../pages/BadgeEdit.js';
import Home from '../../pages/Home.js';
import BadgeDetails from '../../pages/BadgeDetails.js';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={BadgeNew} />
                    <Route exact path="/badges/new" component={Badges} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;