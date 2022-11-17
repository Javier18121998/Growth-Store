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
        height: '82.5px',
        boxShadow: '0 2px 5px rgb(0,0,0,0.5)',
        zIndex: '1'
    }
}
class Navbar extends Component{
    render(){
        const { carro, esCarroVisible, mostrarCarro } = this.props
        return(
            <nav style={styles.navbar}>
                <Logo/>
                <Carro 
                    carro={carro} 
                    esCarroVisible={esCarroVisible} 
                    mostrarCarro={mostrarCarro}
                />
            </nav>
        )
    }
}
export default Navbar;