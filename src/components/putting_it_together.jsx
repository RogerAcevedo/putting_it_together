// IMPORT DEPENDENCIES
import React, {Component} from "react";

// DEFINE CLASS
class PersonCard extends Component{
    // SET INITIAL STATE
    constructor(props) {
        super(props);
        // INHERITED FROM OUR CLASS COMPONENT ABOVE
        this.state = {
            // 2 properties with key value pairs
            age:this.props.age,
            show: true
            
        }
    }
    
    // HANDLER FUNCTION
    // FUNCTION TO INCREMENT ON CLICK BY ADDING 1
    IncrementItem = (e) => {
        this.setState({ age: this.state.age +1 });
        e.preventDefault()
    }

    // FUNCTION TO DECREASE ON CLICK BY REMOVING 1
    DecreaseItem = () => {
        this.setState({ age: this.state.age -1 }) ;
    }


    // FUNCTION TO VIEW COUNT - FLIP STATE SHOW FOR OPPOSITE EVERY TIME WE CLICK
    ToggleClick = () => {
        this.setState({ show: !this.state.show}) ;
    }

    // 

    // RENDER METHOD
    render(){

        // DESTRUCTURING OBJECT THIS.PROPS
        // CALLING FROM OUR KEY VALUE PAIRS IN OUR PersonCard class in APP.JSX
        const {firstName, lastName, age, hairColor} = this.props

        return(
            <>
                <h1> Full Name: {firstName}  {lastName} </h1> 
                <h2>Age:{ this.state.show ? <p>{ this.state.age }</p> : '' }</h2>
                <h3>Hair Color: {hairColor}</h3>


                {/* PASSING METHODS */}
                <button onClick={this.IncrementItem}>HAPPY BDAY</button>
                <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
                <button onClick={this.ToggleClick}>
                    { this.state.show ? 'HIDE IT, BRO' : 'f*ck it, IM OLD' }
                </button>
                
            </>
        );
    }
}

export default PersonCard;