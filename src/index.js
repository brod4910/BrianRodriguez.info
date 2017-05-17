const css = require('./index.css');

import React from 'react';
import ReactDOM from 'react-dom';


// const backgroundStyle =
//     {
//         width: '100%',
//         height: '100%',
//         backgroundImage: url(${ BackgroundImage })
//     }

class Main extends React.Component {
    render() {
        return (
            <div>
                <Background/>
            </div>
        );
    }
}


class Background extends React.Component {
    render() {
        return(
            <div>
                <TopLeftButtons/>
                <CenterButtons/>
            </div>
        )
    }
}

class CenterButtons extends React.Component {
    render() {
        return(
            <div id="buttonwrappercenter">
                <button className="button"> Contact </button>
                <button className="button"> Resumé </button>
            </div>
        )
    }
}

class TopLeftButtons extends React.Component {
    render() {
        return(
            <div id="buttonwrappertopleft">
                <button className="button"> About Me </button>
                <button className="button"> Portfolio </button>
                <button className="button"> Resumé </button>
                <button className="button"> Contact </button>
            </div>
        )
    }
}


ReactDOM.render(<Main />, document.getElementById('root'));