import React from 'react';
import Navi from './layout/Navi';
import Content from './layout/Content';

class App extends React.Component {
    render(){

        return (
            <div>
                <Navi />
                <Content />
            </div>
        );
    }
}

export default App;