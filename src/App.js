import React from 'react';
import PropTypes from "prop-types";

function App() {
    const profiles = [
        {
            name:"mike", age:10
        },
        {
            name:"Hanako", age:5
        },
        {
            name:"Noage"
        },
    ]
  return (
    <div>
        {
            profiles.map((profile,index) =><User name={profile.name} age={profile.age} key={index}/>)
        }
    </div>
  );
}

const User = props => <h1>Hi, I am {props.name}, and I'm {props.age} years old.</h1>

User.defaultProps = {
    age:1,
}

User.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number
}

export default App;
