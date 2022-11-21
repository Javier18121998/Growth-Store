import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'
import Comprar from './Comprar';
const styles = {
    carro: {
        backgroundColor: '#0076A4',
        color: '#fff',
        border: 'none',
        padding: '11px 13px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '0.85rem',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center'
    },
    bubble: {
        position: 'relative',
        left: 24,
        top: '-4px',
    },
    icon:{
        color: '#fff'
    },
    general: {
        display: 'flex',
        alignItems: 'self-start',
        flexDirection: 'row'
    }
}
class Carro extends Component{
    render(){
        const {carro, esCarroVisible, mostrarCarro, totalPrice} = this.props
        const cantidad = carro.reduce((acc, el) =>acc + el.cantidad, 0)
        return(
            <div style={styles.general}>
                <span style={styles.bubble}>
                    {cantidad !==0
                    ?<BubbleAlert value = {cantidad}/>
                    : null}
                </span>
                <button 
                    onClick={mostrarCarro} 
                    style={styles.carro}
                >
                    Cart
                    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={styles.icon}>
                        <path d="M8.25 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" style={styles.icon}></path>
                        <path d="M18.75 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" style={styles.icon}></path>
                        <path d="M21.413 5.662a1.121 1.121 0 0 0-.87-.412H6.276L5.99 3.62A.75.75 0 0 0 5.25 3h-3a.75.75 0 0 0 0 1.5h2.37l2.141 12.13a.75.75 0 0 0 .739.62h12a.75.75 0 1 0 0-1.5H8.13l-.265-1.5h11.328a1.128 1.128 0 0 0 1.104-.904l1.35-6.75a1.124 1.124 0 0 0-.234-.934Z" style={styles.icon}></path>
                    </svg>
                </button>
                {esCarroVisible ? <DetallesCarro carro={carro}/> : null}
                {esCarroVisible? <Comprar totalPrice={totalPrice}/> : null}
            </div>
        )
    }
} 
export default Carro;