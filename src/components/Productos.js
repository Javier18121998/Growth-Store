import { Component } from "react";
import Producto from './Producto'
const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}
class Productos extends Component{
    render(){
        const {productos, agregarAlCarro} = this.props
        return(
            <div 
                style={styles.productos}
                className='row row-cols-2 row-cols-lg-4 '
            >
                {productos.map(producto =>
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />
                )}
            </div>
        )
    }
}
export default Productos;