import { Component } from "react";
import Button from './Button'
const styles = {
    producto: {
        border: 'solid 1px rgb(228, 228, 228)',
        boxShadow: '0 5px 5px rgb(0,0,0, 0.2)',
        backgroundColor: '#fff',
        width: '18%',
        height: '17.75rem',
        padding: '10px 15px',
        borderRadius: '3px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    img: {
        width: '97%',
        height: '49.5%',
        border: 'solid 1px rgb(250, 246, 244)',
        backgroundColor: '#FFF'
    },
    price:{
        marginTop: 0
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
                <p style={styles.price}>{producto.price}</p>
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