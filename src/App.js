import React from 'react';

function App() {
    const profiles = [
        {
            name:"Taro", age:10
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

export default App;
