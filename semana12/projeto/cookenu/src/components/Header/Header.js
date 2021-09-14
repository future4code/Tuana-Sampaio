import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {StyledToolbar} from "./styled"
import { goToLogin, goToRecipesListPage } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';


const Header = ({rightButtonText, setRightButtonText}) => {
    const history = useHistory()
    const token = localStorage.getItem("token")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonTextAction = () => {
    if(token){
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }

   return (
    
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick = {()=> goToRecipesListPage(history)} color="inherit">Cookenu</Button>                 
          <Button onClick = {rightButtonTextAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
    
  );
}
export default Header