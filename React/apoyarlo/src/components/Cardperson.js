import React, { Component} from "react";

class PersonalClassComponent extends Component {
    render () {
        const { firstName, lastName, age, hairColor } = this.props;
        return <div>

            <h1>{firstName}, {lastName}</h1>
            <h3>Age : {age}</h3>
            <h3>Hair Colour : {hairColor}</h3>
        </div>
    }
}
    

export default PersonalClassComponent;
