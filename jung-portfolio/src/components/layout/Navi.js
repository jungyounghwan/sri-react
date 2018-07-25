import React from 'react';

class Navi extends React.Component {
    render(){
        return (
            React.createElement('a', {href: 'http://naver.com', target: '_blank'}, 'naver')
        );
    }
}

export default Navi;