import { Component } from "react";
const styles = {
    layout: {
        backgroundColor: 'rgb(246,246,246)',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        backgroundColor: '#FFFFFF',
        maxWidth: '870px',
        minWidth: '500px',        
        padding: '0 2rem',
        borderLeft: '1px solid rgb(240 240 240)',
        borderRight: '1px solid rgb(240 240 240)',
    }
}
class Layout extends Component{
    render(){
        return(
            <div 
                style={styles.layout}
            >
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Layout