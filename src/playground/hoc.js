// Higher order COmponent (HOC) - A component that renders another component
// Reuse code
// Render Hijacking
//  Prop manipulation
// Abstract State

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1> Info</h1>
        <p> The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )

}

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAuthenticated ? 
            (<WrappedComponent {...props}/>) : 
            (<p>You must login to proceed</p>)}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are the deets'/>, document.getElementById('app'))