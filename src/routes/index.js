import React from 'react';
import {  Route } from 'react-router-dom';
import  VendorsIndex  from '../components/Vendor/index';
import  VendorsAdd from '../components/Vendor/add';
export const routeItems = (
    <div>
        <Route path="/" />
        <Route path="/vendors" exact component={VendorsIndex} />
        <Route path="/vendors/add" exact  component={VendorsAdd} />
    </div>
);