import React from 'react';
import ReactDOM from 'react-dom';


function Imtest( props ) {
    return <div>{ props.pr }</div>
}

function Example() {
    return (
        <div className="container">
            <Imtest pr={"test test"}/>
        </div>
    );
}

export default Example;
const $node = document.getElementById('main');
if ( $node ) {
    ReactDOM.render( <Example />, $node );
}
