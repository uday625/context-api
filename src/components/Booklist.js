import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class Booklist extends Component {
    static contextType =ThemeContext
    render() {
        const {isLightTheme,lightTheme,darkTheme} = this.context
        const theme=isLightTheme?lightTheme:darkTheme  
        return (
            <div className="book-list" style={{background:theme.bg,color:theme.color}}>
                <ul>
                    <li style={{ background: theme.ui }}>Two State</li>
                    <li style={{ background: theme.ui }}>Broken But Beautiful</li>
                    <li style={{ background: theme.ui }}>Five point someone</li>
                </ul>
            </div>
        );
    }
}

export default Booklist;