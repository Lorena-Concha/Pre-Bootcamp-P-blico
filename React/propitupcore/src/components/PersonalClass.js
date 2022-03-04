import React, { Component} from "react";

class PersonalClassComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            age: this.props.age
        }
        console.log(this.state);
    }
    
    upYears = () => {
        console.log(this.state);
        this.setState({age: this.state.age + 1});
    }
    render() {
        const { firstName, lastName, hairColor } = this.props;
        return <div>

            <h1>{firstName}, {lastName}</h1>
            <h3>Age : {this.state.age}</h3>
            <h3>Hair Colour : {hairColor}</h3>
            <button onClick={this.upYears} >Birtday Button For {firstName} {lastName}</button>
        </div>
    }
}
export default PersonalClassComponent;