import { Component } from "react";
import Producto from './Producto'
import Navigator from './Navigator'

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0 0 25px 0'
    }
}
class Productos extends Component{
    render(){
        const {productos, agregarAlCarro} = this.props
        return(
            <div 
                style={styles.productos}
            >
                {productos.map(producto =>
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />
                )}
                <Navigator/>
            </div>
            
        )
    }
}
export default Productos;