import React, { Component } from "react";
import ReactPlayer from 'react-player'
import '../effects.css'
const styles = {
    div: {
        width: '176px',
        height: '166px',
        position: 'absolute',
        bottom: -2002,
        left: 6.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
}
class AnuncioVideo1 extends Component{
    render(){
        return(
            <div 
                style={styles.div}
                className='video'
                alt= 'anuncioFrutas2'
            >
                <ReactPlayer url='https://www.youtube.com/watch?v=ab4JClXSy-8' width={'163.5px'} height={'160px'} playing muted loop/>
            </div>
        )
    }
}
export default AnuncioVideo1;