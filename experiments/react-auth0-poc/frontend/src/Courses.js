import React, { Component } from 'react';

class Courses extends Component {
    state= {courses:[],message:""}

    componentDidMount(){
        fetch("/courses",{
            headers:{authorization: `Bearer ${this.props.auth.getAccessToken()}`}
        }).then(response=>{
            if (response.ok) return response.json();
            throw new Error("error al conectar");
        }).then(response=>{
            this.setState({courses:response.courses})
        }).catch(error =>{
            this.setState({message:error.message})
        })
    }

    render() {
        return (
            <ul>
                {this.state.courses.map(course=>{
                    return <li key={course.id}>{course.title}</li>
                })}
            </ul>
        );
    }
}

export default Courses;