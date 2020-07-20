import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
/* import firebase from '../../Services/firebase'; */

class MentorForm extends Component{
    constructor(){
        super();

        this.state = {
            name:"",
            email:"",
            module:""
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(event){
        let value = event.target.value
        let inputName = event.target.name
        this.setState({[inputName]: value})
    }

    onSubmitHandler(){
        let name = this.state.name;
        let email = this.state.email;
        let module = this.state.module;

        let mentorObject = { name, email, module }

        var url = 'https://react-vercel-cfb63.firebaseio.com/mentors.json';
        var data = mentorObject;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .catch(error => console.log("Error: ", error))
            .then(response => console.log("Success: ", response));
    }

    componentDidMount(){
        console.log("Conectado");
    
        fetch('https://react-vercel-cfb63.firebaseio.com/.json').then(
            response => {
                response.json().then(
                    json => {
                        console.log(json);
                    }
                )
            }
        );
    }

    render(){
        return (
            <Container>
                <Row>
                <Col xs="12">
                    <h1>Has Un Registro</h1>
                </Col>
                <Col xs="12">
                    <Form className="bg-dark text-white p-3 mt-3 border rounded">
                    <FormGroup>
                        <Label for="name">Nombre:</Label>
                        <Input type="text" name="name" placeholder="with a placeholder" onChange={this.onChangeHandler}/>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="module">Modulo:</Label>
                        <Input type="text" name="module" placeholder="with a placeholder" onChange={this.onChangeHandler}/>
                    </FormGroup>
        
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" placeholder="with a placeholder" onChange={this.onChangeHandler}/>
                    </FormGroup>
                    
                    <Button onClick={this.onSubmitHandler}>Submit</Button>
                    </Form>
                </Col>
                </Row>
            </Container>  
        );
    }
}

export default MentorForm