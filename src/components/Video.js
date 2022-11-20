import React, { Component } from "react";
import ReactPlayer from 'react-player'
const styles = {
    div: {
        width: '180px',
        height: '170px',
        position: 'absolute',
        bottom: 150,
        left: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
}
class AnuncioVideo extends Component{
    render(){
        return(
            <div style={styles.div}>
                <ReactPlayer url='https://www.youtube.com/watch?v=FbXZ3ix9HOg' width={'163.5px'} height={'160px'} playing muted loop/>
            </div>
        )
    }
}
export default AnuncioVideo;