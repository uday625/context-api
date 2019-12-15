import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext';

class Navbar extends Component {
    render() {
        return (
                <AuthContext.Consumer>{(authContext)=>(
                    <ThemeContext.Consumer>{(themeContext)=>{
                        //console.log(themeContext)
                        const {loggedIn,toggleLogin} =authContext
                        const loginDisplay = loggedIn?'LoggedIn':'Logged Out'
                        const {isLightTheme,lightTheme,darkTheme} = themeContext
                        const theme=isLightTheme?lightTheme:darkTheme
                        return(
                            <div style={{background:theme.bg,color:theme.color}}>
                                <h2>Context Api</h2>
                                <h4 onClick={toggleLogin}>{loginDisplay}</h4>
                                <nav>
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Context</li>
                                    </ul>
                                </nav>
                            </div>
                        )
                    }}                                
                    </ThemeContext.Consumer>   
                )}                
                </AuthContext.Consumer>
             
        );
    }
}

export default Navbar;
