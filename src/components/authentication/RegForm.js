import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Tabs from './Tabs';
import AuthService from './services/auth.service';


const FormContainer = styled.div`
    margin: 0;
    width: auto;
    height: 100%;
`;

const TextAuth0js = styled.div`
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    text-align: center; 
    border-bottom: 1px solid #000; 
    border-color: 	#C0C0C0;
    line-height: 0.1em;
    margin: 1em 0 2em 4.1em;
    padding: 0 5em;
        span { 
            background:#fff; 
            padding:0 10px; 
        };
`;

const RegForms = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
          setCurrentUser(user);
        }
      }, []);
    
    return (
        <React.Fragment>
            <Tabs />
            <Switch>
            <FormContainer>          
                <Route exact path={"/signup"} component={SignUp}/>
                <Route exact path="/" component={SignUp}>
                    <Redirect to="/signup"/>
                </Route>
                <Route exact path="/login" component={Login}  />
            </FormContainer>
            </Switch>
        </React.Fragment>
    );
};

export default RegForms;