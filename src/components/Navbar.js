import { Component } from "react";
import Logo from './Logo'
import Carro from './Carro'
import 'react-bootstrap'

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
        height: '81.5px',
        boxShadow: '0 2px 5px #0A283E',
        zIndex: '2'
    }
}
class Navbar extends Component{
    render(){
        const { carro, esCarroVisible, mostrarCarro, totalPrice} = this.props
        return(
            <nav style={styles.navbar}>
                <Logo/>
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