import { Component } from "react";
const style = {
    title: {
        marginBotton: '30px',
    }
}
class Title extends Component{
    render(){
        return(
            <h1 style={style.title}>Grocery shop</h1>
        )
    }
}
export default Title