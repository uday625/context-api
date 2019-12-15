import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext'

class Navbar extends Component {
    static contextType = ThemeContext
    render() {

        console.log(this.context)

        const {isLightTheme,lightTheme,darkTheme} = this.context
        const theme=isLightTheme?lightTheme:darkTheme

        return (
            <div style={{background:theme.bg,color:theme.color}}>
                <h2>Context Api</h2>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Context</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
