import axios from 'axios';
import React , {useState} from 'react';
import {Route, Redirect} from "react-router-dom"
import { isAuthenticated, signin } from '.';
import { API } from '../../Helpers/environment/backend';





const PrivateRoutes = ({component: Component, ...rest}) => {




    return (
        <Route
          {...rest}
          render={(props) =>
            isAuthenticated() 
            ? (
              <Component {...props}/>
            ) 
            : (
              <Redirect
                to={{
                  pathname: "/supplier/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
        
      );
}



export default PrivateRoutes;