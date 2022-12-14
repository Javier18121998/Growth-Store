import { Component } from "react";
import Producto from './Producto'

const styles = {
    productos: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridRowGap: '25px',
        margin: '0 0 25px 0'
    }
}
class Productos extends Component{
    render(){
        const {productos, agregarAlCarro, calcularPrecioTotal} = this.props
        return(
            <div 
                style={styles.productos}
            >
                {productos.map(producto =>
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        calcularPrecioTotal={calcularPrecioTotal}
                        key={producto.name}
                        producto={producto}
                    />
                )}
            </div>
            
        )
    }
}
export default Productos;