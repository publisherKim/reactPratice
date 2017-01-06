import React from 'react';

class App extends React.Component {
    sayHey(){
        alert('hey');
    }
    render(){
        let text = "Dev-Server";
        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };
        return (
            <div>
                <h1>Hello React</h1>
                <h2>Welcome to {text}</h2>
                {/* method를 생성하고 사용하는 방법 */} 
                <button onClick={this.sayHey}>Click Me</button>
                {/*if else 대신 삼항식*/}
                <p style={pStyle}>{1 == 2 ? 'True' : 'False'}</p>
            </div>
        );
    }
}

export default App;