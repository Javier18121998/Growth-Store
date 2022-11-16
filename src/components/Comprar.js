import { Component } from "react";
const style = {
    tarjetacomprar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: '3%',
        alignItems: 'center',
        width: '262px',
        height: '60px',
        position: 'fixed',
        bottom: 0,
        right: 40,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        border: 'solid 1px #eee',
        padding: '0 0.8rem'
    },
    total: {
        color: 'rgb(10, 40, 62)',
        borderRight: '1px solid #062E71',
        padding: '5px 10px',
        backgroundColor: '#eee'
    },
    button:{
        border: '1px solid #3CA8C8',
        backgroundColor: '#3CA8C8',
        padding: '8px 11px',
        color: '#fff',
        borderRadius: '13%',
        cursor: 'pointer'
    }
}
class Comprar extends Component{
    render(){
        return(
            <p style={style.tarjetacomprar}>
                <h3 style={style.total}>Total</h3>
                <button
                    style={style.button}
                >
                    BUY
                </button>
            </p>
        )
    }
}
export default Comprar;