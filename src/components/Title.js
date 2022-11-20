import { Component } from "react";
const style = {
    title: {
        marginBotton: '30px',
        fontSize: '1.6rem'
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