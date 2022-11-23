import { Component } from "react";
const style = {
    title: {
        marginBotton: '30px',
        fontSize: '1.2rem',
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