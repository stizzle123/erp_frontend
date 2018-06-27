import React from 'react';
import {  Route } from 'react-router-dom';
import  VendorsIndex  from '../components/Vendor/index';
import  VendorsAdd from '../components/Vendor/add';
import  PurchaseRequisitionIndex  from '../components/PurchaseRequisition/index';
import  PurchaseRequisitionsAdd from '../components/PurchaseRequisition/add';
export const routeItems = (
    <div>
        <Route path="/" />
        <Route path="/vendors" exact component={VendorsIndex} />
        <Route path="/vendors/add" exact  component={VendorsAdd} />
	     <Route path="/PurchaseRequisition" exact component={PurchaseRequisitionIndex} />
        <Route path="/PurchaseRequisition/add" exact  component={PurchaseRequisitionsAdd} />

    </div>
);
