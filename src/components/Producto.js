import { Component } from "react";
import Button from './Button'
const styles = {
    producto: {
        border: 'solid 1px rgb(228, 228, 228)',
        boxShadow: '0 5px 5px rgb(0,0,0, 0.1)',
        backgroundColor: '#fff',
        width: '20%',
        height: '19rem',
        padding: '10px 15px',
        borderRadius: '3px'
    },
    img: {
        width: '100%',
        height: '54%',
        border: 'solid 1px rgb(248, 246, 244)',
        backgroundColor: '#fff'
    }
}
class Producto extends Component{
    render(){
        const { producto, agregarAlCarro, calcularPrecioTotal } = this.props
        return(
            <div style={styles.producto}>
                <img
                    alt={producto.name}
                    src={producto.img}
                    style={styles.img}
                />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => {
                    calcularPrecioTotal(producto)
                    agregarAlCarro(producto)
                }}>
                    Add to AstonZ Cart
                </Button>
            </div>
        )
    }
}
export default Producto