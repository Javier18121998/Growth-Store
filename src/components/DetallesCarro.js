import { Component } from "react";
import '../effects.css';
const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: '60px',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '280px',
        right: 20,
        overflow: 'auto',
    },
    ul: {
        margin: 0,
        padding: 0,
        maxHeight: '249px',
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 18.5px',
        borderBottom: 'solid 1px #CBB5B5',
        color: 'rgb(10, 40, 62)',
        fontWeight: '600',
        fontSize: '0.85rem',
        height: 'auto'
    },
    quantity: {
        color: 'black',
        fontWeight: '700'
    }
}
class DetallesCarro extends Component{
    render(){
        const {carro} = this.props
        return(
            <div 
                style={styles.detallesCarro}
                className='detallesCarro'
            >
                <ul 
                    style={styles.ul}
                    className='Ul'
                >
                    {carro.map(x => 
                    <li style={styles.producto} key={x.name} className='Ul'>
                        <img alt={x.name+'producto'} src={x.img} width='50' height='42'/>
                        {x.name+' per/pound'} <span style={styles.quantity}>{x.cantidad}</span>
                    </li>)}
                </ul>
            </div>
        )    
    }
}
export default DetallesCarro;