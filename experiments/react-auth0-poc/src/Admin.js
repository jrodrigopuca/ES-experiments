import React, { Component } from 'react';

class Admin extends Component {
    state= {message:""}

    componentDidMount(){
        fetch("/admin",{
            headers:{authorization: `Bearer ${this.props.auth.getAccessToken()}`}
        }).then(response=>{
            if (response.ok) return response.json();
            throw new Error("error al conectar");
        }).then(response=>{
            this.setState({message:response.message})
        }).catch(error =>{
            this.setState({message:error.message})
        })
    }

    render() {
        return (
            <div>
                {this.state.message}
            </div>
        );
    }
}

export default Admin;