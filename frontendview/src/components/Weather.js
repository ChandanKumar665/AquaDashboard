import React,{Component} from 'react'
import axios from 'axios'
//import '../dashboard.css'

class Weather extends Component{
    constructor(props){
        super(props)
//        this.state = {
//        	data:props.location.data
//        }
//        console.log(props)
    }

    
    render(){
        return (
            <div className="card box">
            	<div>
            	You are in {}
            	</div>
            </div>
            
        )
    }
}

export default Weather