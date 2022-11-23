import { Component } from "react";
import Logo from './Logo'
import Carro from './Carro'
import Nav from "./Nav";
import 'react-bootstrap'
import '../effects.css';

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        backgroundColor: '#131921',
        padding: '0 50px',
        height: '76px',
        boxShadow: '0 2px 5px #0A283E',
        zIndex: '2'
    },
    SignIn:{
        color: '#FFFFFF',
        padding: '0.8rem 0.85rem',
        borderRadius: '5%',
        border: '1px solid rgb(240, 136, 4)',
        cursor: 'pointer',
        fontWeight: '700',
        letterSpacing: '0.15vh',
    }
}
class Navbar extends Component{
    render(){
        const { carro, esCarroVisible, mostrarCarro, totalPrice} = this.props
        return(
            <nav style={styles.navbar}>
                <Logo/>
                <Nav/>
                <h5 style={styles.SignIn} className='SignIn'>Sign In/Up</h5>
                <Carro 
                    carro={carro} 
                    esCarroVisible={esCarroVisible} 
                    mostrarCarro={mostrarCarro}
                    totalPrice={totalPrice}
                />
            </nav>
        )
    }
}
export default Navbar;