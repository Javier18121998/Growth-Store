import { Component } from "react";
import Watchword from "./Wathcword";
import Video from './Video'
import Video1 from './video1'
class Anouncements extends Component{
    render(){
        return(
            <div
                className='Anouncements'
            >
                <Video/>
                <Watchword/>
                <Video1/>
            </div>
        )
    }
}
export default Anouncements;