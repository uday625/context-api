import React, { Component,createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {

    state ={
        loggedIn :false
    }

    toggleLogin =()=>{
        this.setState({loggedIn:!this.state.loggedIn})
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state,toggleLogin:this.toggleLogin}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;