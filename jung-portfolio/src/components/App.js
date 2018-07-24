import React from 'react';
import Header from './layout/Header';
import Content from './layout/Content';

class App extends React.Component {
    render(){

        return (
            <div>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle } body={ this.props.contentBody }/>
            </div>
        );
    }
}
 App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
 }
export default App;