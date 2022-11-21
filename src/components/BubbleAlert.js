import { Component } from "react";
const styles = {
    bubbleAlert: {
        backgroundColor: '#f08804',
        borderRadius: '33%',
        color: '#fff',
        padding: '2px 9px',
        fontSize: '0.8rem',
        width: 'auto'
    }
}
class BubbleAlert extends Component{
    getNumber(n){
        if (!n) { return ' ' }
        return n > 9 ? '9+' : n
    }
    render(){
        const {value} = this.props
        return(
            <span style={styles.bubbleAlert} >
                {this.getNumber(value)}
            </span>
        )
    }
}
export default BubbleAlert