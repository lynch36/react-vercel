import React, { Component } from 'react';

class Greeting extends Component{
    constructor(){
        super();
        
        this.state = {
            greetingText:""
        }

        this.greetingInputHandler = this.greetingInputHandler.bind(this)
    }

    greetingInputHandler(event){
        let greetingText = event.target.value;

        this.setState({greetingText})
    }

    render(){
        return(
            <>
                {
                    this.state.greetingText || this.state.greetingText
                    !== "" 
                        ? <h1>{this.state.greetingText}</h1>
                        : <h1>Escribe Algo</h1>
                }
                <input type="text" name="greeting" onChange={this.greetingInputHandler} />
            </>
        )
    }
}

export default Greeting