import React from 'react';

// That @types/ prefix means that we also want to get the declaration files for React and React-DOM. 
// Usually when you import a path like "react", it will look inside of the react package itself; 
// however, not all packages include declaration files, so TypeScript also looks in the @types/react package as well.
//  You’ll see that we won’t even have to think about this later on.

interface MyProps { 
    name: string; 
   
}

export class Hey extends React.Component<MyProps, {}>{
    constructor(props){
        super(props)
    }
    sayHello = (a, event)=> {
        console.log(a);
        console.log(event.type)
    }
    render(){
        return (
            <div>
                <p>Hello : {this.props.name}</p>
                <button onClick={(ev) => this.sayHello('hello', ev)}> Click Me</button>
            </div>
        )
    }

}

