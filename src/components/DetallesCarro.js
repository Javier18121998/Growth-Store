import { Component } from "react";
import Producto from "./Producto";
const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 11,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '290px',
        right: 40
    },
    ul: {
        margin: 0,
        padding: 0
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa',
        color: 'rgb(10, 40, 62)',
        fontWeight: '600'
    },
    quantity: {
        color: 'black'
    }
}
class DetallesCarro extends Component{
    render(){
        const {carro} = this.props
        console.log(carro)
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x => 
                    <li style={styles.producto} key={x.name}>
                        <img alt={x.name+'producto'} src={x.img} width='50' height='42'/>
                        {x.name+' per/pound'} <span style={styles.quantity}>{x.cantidad}</span>
                    </li>)}
                </ul>
            </div>
        )    
    }
}
export default DetallesCarro;