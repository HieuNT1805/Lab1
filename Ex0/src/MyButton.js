import * as React from 'react';

class MyBotton extends React.Component{
    render(){
        return <button>{this.props.children}</button>;
    }
}

export default MyBotton;