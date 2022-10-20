import * as React from 'react';

class MySelection extends React.Component{
    render(){
        return (
            <section>
                <h2>My Selection</h2>
                {this.props.children}
            </section>
        )
    }
}

export default MySelection;