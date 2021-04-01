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
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={Login}  />
            </FormContainer>
            </Switch>
        </React.Fragment>
    );
};

export default RegForms;