import { Component } from "react";
const styles ={
    div: {
        padding: '0px 3px',
        border: '1px solid #eee',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.1)',
        borderRadius: '5px',
        position: 'fixed',
        bottom: 10,
        left: 5,
        width: '170px',
        display: 'block'
    },
    h5:{
        fontSize: '0.78rem',
        fontWeight: '900',
        color: 'rgb(10, 40, 62)',
        borderBottom: '1px solid rgb(75, 102, 122)',
        padding: '6px 25px',
        margin: '0'
    },
    p:{
        fontWeight: '700',
        fontSize: '0.6rem',
        color: 'rgb(22, 22, 22)',
        padding: '2px 17px',
    }
}
class Watchword extends Component{
    render(){
        return(
            <div style={styles.div}>
                <h5 style={styles.h5}>OUR PRIORITY IS HEALTHY FOOD.</h5>
                <p style={styles.p}>A HEALTHY EATER ALWAYS ENJOYS</p>
                <p style={styles.p}>A healthy person can enjoy a healthy life forever</p>
            </div>
        )
    }
}
export default Watchword;