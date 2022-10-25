import React from 'react'
import { pricingRules } from './../data_store/data';
import Checkout from "../module/Checkout";

const co = new Checkout(pricingRules);

const CheckoutContext = React.createContext(co);

export default CheckoutContext