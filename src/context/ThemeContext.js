import React, { Component,createContext } from 'react';

export const ThemeContext = createContext(); 


class ThemeContextProvider extends Component {
    state ={
        isLightTheme:true,
        lightTheme:{bg:'#fbfbfe',color:'#555',ui:'#ddd'},
        darkTheme:{bg:'#555',color:'#ddd',ui:'#333'},
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;