import React, { Component } from 'react';
import CountDown from 'reactjs-countdown';
 
class TimeCountDown extends Component {

    render() {
        return(
            <div>
                <CountDown
                    deadline="may 26, 2022"
                />
            </div>
            
        );
    }
}
 
export default TimeCountDown;