import { Component } from "react";
import Watchword from "./Wathcword";
import Video from './Video'
class Anouncements extends Component{
    render(){
        return(
            <div
                className='Anouncements'
            >
                <Video/>
                <Watchword/>
            </div>
        )
    }
}
export default Anouncements;