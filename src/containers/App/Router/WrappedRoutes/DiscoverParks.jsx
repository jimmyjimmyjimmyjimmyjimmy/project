import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ParkPage from '../../../DiscoverParks/ParkPage/index';

export default () => (
    <Switch>
        <Route path="/discover_park/detail" component={ProductPage} />
    </Switch>
);