import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
const themes = {
    dark: {
        background: '#555',
        color: '#FFF'
    },
    light: {
        background: '#FFF',
        color: '#555'
    }
};
//
// const ThemeContext = React.createContext(themes.dark);
//
// class ThemedButton extends React.Component {
//     render () {
//         console.log(this.context);
//         const {props} = this;
//         const theme = this.context;
//         // console.log(theme);
//         return <button {...props} style={{background: theme.background, color: theme.color}}>This is button</button>
//     }
// }
//
// ThemedButton.contextType = ThemeContext;
//
// class ThemeContainer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             theme: themes.light
//         };
//         this.toggleTheme = () => {
//             this.setState(state => ({
//                 theme: state.theme === themes.dark ? themes.light : themes.dark
//             }))
//         }
//     }
//     render () {
//         return <ThemeContext.Provider value={this.state.theme}><ThemedButton onClick={this.toggleTheme}/></ThemeContext.Provider>
//     }
// }
//
// const App = () => (
//     <div>
//         <ThemeContainer/>
//     </div>
// )
//
// export default App;

const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {}
});


const ThemeTogglerButton = () => {
    return (
        <ThemeContext.Consumer>
            {
                ({theme, toggleTheme}) => {
                    return <button onClick={toggleTheme} style={{background: theme.background, color: theme.color}}>Toggle</button>
                }
            }
        </ThemeContext.Consumer>
    )
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }))
        };
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        }
    }

    render () {
        return <ThemeContext.Provider value={this.state}><Content/></ThemeContext.Provider>
    }
}

function Content () {
    return <div><ThemeTogglerButton/></div>
}

export default App;