import { Component } from "react";
import '../effects.css'
const style = {
    tarjetacomprar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: '3%',
        alignItems: 'center',
        width: '255.7px',
        height: '60px',
        position: 'fixed',
        bottom: '-9px',
        right: 20,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        border: 'solid 1px #eee',
        padding: '0 0.7rem'
    },
    total: {
        color: 'rgb(10, 40, 62)',
        borderRight: '1px solid #062E71',
        padding: '5px 10px',
        backgroundColor: '#eee',
        cursor: 'pointer'
    },
    button:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '8px 11px',
        color: '#fff',
        borderRadius: '11%',
        cursor: 'pointer',
        fontSize: '0.8rem'
    },
    h5: {
        fontSize: '0.8rem'
    }
}
class Comprar extends Component{
    render(){
        let {totalPrice} = this.props
        return(
            <p style={style.tarjetacomprar}>
                <h3 style={style.total}>Total</h3>
                <p>{totalPrice+' GBP £'}</p>
                <button
                    style={style.button}
                    className='buttonBuy'
                >
                    <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.4 6.597a1.8 1.8 0 0 1 1.8-1.8H15a1.8 1.8 0 0 1 1.8 1.8v1.8h1.224a1.8 1.8 0 0 1 1.404.675l1.777 2.22a1.8 1.8 0 0 1 .395 1.126v2.579a1.8 1.8 0 0 1-1.8 1.8h-.6a2.4 2.4 0 0 1-4.8 0h-6a2.4 2.4 0 1 1-4.797-.102A1.8 1.8 0 0 1 2.4 14.997v-8.4Zm1.553 8.947a2.399 2.399 0 0 1 4.126.053h6.643c.211-.365.514-.667.878-.878V6.597a.6.6 0 0 0-.6-.6H4.2a.6.6 0 0 0-.6.6v8.4a.6.6 0 0 0 .353.547ZM16.8 14.397a2.4 2.4 0 0 1 2.079 1.2h.921a.6.6 0 0 0 .6-.6v-2.58a.6.6 0 0 0-.132-.374l-1.776-2.22a.6.6 0 0 0-.468-.226H16.8v4.8ZM6 15.597a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm10.8 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"></path>
                    </svg>
                    BUY
                </button>
            </p>
        )
    }
}
export default Comprar;