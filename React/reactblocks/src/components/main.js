import React, { Component } from 'react';
import Adver from './advertisenment';
import SubConten from './subconten';
    
    
class Main extends Component {
    render() {
        return <div className='main'>
        <h1></h1>
          <div className='row'>
              <SubConten></SubConten>
              <SubConten></SubConten>
              <SubConten></SubConten>
            </div>
            <Adver></Adver>
        </div>
    }
}

export default Main;




