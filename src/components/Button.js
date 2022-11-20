import { Component } from "react"
import '../effects.css'
const styles = {
    button: {
        color: '#fff',
        padding: '13.5px 19px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}
class Button extends Component{
    render(){
        return(
            <button 
                style={styles.button}
                {...this.props} 
                className='buttonHover'
            />
        )
    }
}
export default Button