import { Component } from "react";
const styles ={
    div: {
        padding: '0px 3px',
        border: '1px solid #eee',
        boxShadow: '0px 3px 5px rgb(0,0,0,0.2)',
        borderRadius: '5px',
        position: 'absolute',
        bottom: 3.25,
        left: 6.5,
        width: '170px',
        display: 'block',
        zIndex: '0',
        backgroundColor: '#FFF'
    },
    h5:{
        fontSize: '0.78rem',
        fontWeight: '700',
        color: '#fff',
        borderBottom: '1px solid rgb(118 135 148)',
        padding: '6px 25px',
        margin: '0',
        textAlign: 'center',
        backgroundColor: 'rgb(19, 25, 33)',
        zIndex: '0'
    },
    p:{
        fontWeight: '700',
        fontSize: '0.6rem',
        color: 'rgb(22, 22, 22)',
        padding: '2px 17px',
        textAlign: 'center',
        zIndex: '0'
    }
}
class Watchword extends Component{
    render(){
        return(
            <div 
                style={styles.div}
                className='watchword'
            >
                <h5 style={styles.h5}>OUR PRIORITY IS HEALTHY FOOD.</h5>
                <p style={styles.p}>A HEALTHY EATER ALWAYS ENJOYS</p>
                <p style={styles.p}>A healthy person can enjoy a healthy life forever</p>
            </div>
        )
    }
}
export default Watchword;