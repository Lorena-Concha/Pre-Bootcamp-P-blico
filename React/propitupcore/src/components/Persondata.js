import React, { Component} from "react";
import PersonalClassComponent from "./PersonalClass";

class PersonDataComponent extends Component {
    render () {
        return <div>
        <PersonalClassComponent firstName="Doe" lastName="Jane" age={45} hairColor="Black"></PersonalClassComponent>
        <PersonalClassComponent firstName="Smith" lastName="John" age={88} hairColor="Brown"></PersonalClassComponent>
        <PersonalClassComponent firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown"></PersonalClassComponent>
        <PersonalClassComponent firstName="Smith" lastName="María" age={62} hairColor="Brown"></PersonalClassComponent>
        </div>
    }
}
    

export default PersonDataComponent;