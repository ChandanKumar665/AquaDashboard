import React,{Component} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import '../dashboard.css'
import Fishlist from './Fishlist'
import Fishfeed from './Fishfeed'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            data:[],
            city:'',
            state:'',
            country:''
        }
    }
    
//    making api get request using axios
    componentDidMount(){
        return axios.get('http://localhost:8000/api/dashboard')
        .then((response)=>{
            this.setState({
                data:response.data,
                city:response.data['data'][0]['city'],
                state:response.data['data'][0]['state'],
                country:response.data['data'][0]['country'],
                temp:response.data['data'][1]['main']['temp'],
            	min_temp:response.data['data'][1]['main']['temp_min'],
                max_temp:response.data['data'][1]['main']['temp_max'],
            	pressure:response.data['data'][1]['main']['pressure'],
            	humidity:response.data['data'][1]['main']['humidity'],
            	wind_speed:response.data['data'][1]['wind']['speed'],
            	weather:response.data['data'][1]['weather'][0]['main'],
            	icon:response.data['data'][1]['weather'][0]['icon']
            })
            console.log(this.state.data['data'])
        }).catch(err => {
            console.log(err)
            this.setState({
                err:'error while fetching the data.'
            })
        })
    }

    render(){
    	let flag = this.state.country.toLowerCase()
    	let temp = this.state.temp
    	let min_temp = this.state.min_temp
    	let max_temp = this.state.max_temp
    	let pressure = this.state.pressure
    	let humidity = this.state.humidity
    	let wind_speed = this.state.wind_speed
    	let weather = this.state.weather
    	let icon = this.state.icon
        return (
            <div className="container">
            	<Navbar/>
                <h2 className="tc mt2"><span className="text-primary">Aqua</span> Dashboard</h2>
                <div className="card box grow pa2 white shadow-3 desc dib mt3">
                	<div className="dib">
                		{this.state.city},{this.state.country}
                		<img className="pa1" src={`http://openweathermap.org/images/flags/${flag}.png`} />
                	</div>
            		<div>
            			<img className="weather" src={`http://openweathermap.org/img/w/${icon}.png`} />
            			<span className="temp">{temp}<sup>o</sup>C</span>
            		</div>
            		<div className="">
            			Min temp: {min_temp}<sup>o</sup>C
            		</div>
            		<div>
            			Max temp: {max_temp}<sup>o</sup>C
            		</div>
            		<div>
            			Pressure(hpa): {pressure}
            		</div>
            		<div>
            			Humidity: {humidity}
            		</div>
            		<div>
        				Wind speed(m/s): {wind_speed}
            		</div>
            		<div>
    					Weather: {weather}
    				</div>
            	</div>
            	<div className="dib pa4 mt3"></div>
          
            	<Fishlist/>
            	
            	<div className=" pa4"></div>
            	
            	<Fishfeed/>
            </div>
            
        )
    }
}

export default Dashboard