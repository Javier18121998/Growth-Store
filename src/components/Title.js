import { Component } from "react";
const style = {
    title: {
        marginBottom: '1rem',
        marginTop: '1rem',
        fontSize: '1.1rem',
        display: 'flex',
        justifyContent: 'center',
        fontWeight: '700',
        color: 'rgb(10, 40, 62)',
        textTransform: 'uppercase'
    }
}
class Title extends Component{
    render(){
        return(
            <h1 style={style.title}>Country Vegetables</h1>
        )
    }
}
export default Title