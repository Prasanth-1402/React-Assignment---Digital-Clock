import React, {Component, useState} from "react";
import '../styles/App.css';

 class App extends Component {
    constructor(props){
        super(props);
        this.state = {
             time : new Date()
        };
        this.intervalID = null;
    }
    render() {

        return(
            <>
               <div className = 'Clock'>
                <h3 id = 'time'>
                    {this.getTimeString()}
                </h3>
               </div>
            </>
        );
    }
    componentDidMount(){
        this.intervalID = setInterval(() => {
            this.setState ({
                time : new Date()
            })
        }, 1 * 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    getTimeString(){
        const currTime = this.state.time;
        const [hours, minutes, seconds] = [
            currTime.getHours(),
            currTime.getMinutes(),
            currTime.getSeconds(),
        ];
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        const tweleveHrTime = hours > 12 ? hours - 12 : hours;
        const hourString = this.padNumbers(tweleveHrTime);
        const minString = this.padNumbers(minutes);
        const secString = this.padNumbers(seconds);

        const result = `${hourString}:${minString}:${secString} ${amOrPm}`
        return result;
    }

    padNumbers(num){
        return `${(num > 10) ? '' : '0'}${num}`;
    }

}


export default App;
