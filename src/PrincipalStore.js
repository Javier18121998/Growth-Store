import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import MenuScroll from './components/MenuScroll'
import Anouncements from './components/Anouncements'
import Carousel1 from './components/Carousel1'
const styles = {
  carousel: {
    zIndex: '0'
  },
  Titles: {
    marginBottom: '1rem',
    marginTop: '1rem',
    fontSize: '1.1rem',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '700',
    color: 'rgb(10, 40, 62)',
    textTransform: 'uppercase'
  },
  p:{
    textAlign: 'center',
    padding: '1.25rem 2.9rem',
    color: '#070a0b',
    fontSize: '1.1rem',
    fontWeight: '500',
    fontFamily: 'monospace',
    backgroundColor: '#f8fcff'
  },
  p1: {
    textAlign: 'center',
    padding: '2.2rem 2.9rem',
    color: '#070a0b',
    fontSize: '0.9rem',
    fontWeight: '700',
    fontFamily: 'monospace',
    backgroundColor: '#f8fcff'
  }
}
class PrincipalStore extends Component{
  render(){
    const {agregarAlCarro, productos3, productos4, calcularPrecioTotal} = this.props
    return(
      <div>
        <Layout>
          <Carousel1 style={styles.carousel} className='prueba12345'></Carousel1>
        </Layout>
        <Layout>
          <h3 style={styles.Titles}>Top in the South of Asutralia</h3>
          <p style={styles.p}>
            Taking this products in (40%) off, bring home?, take care on in health?, choose us to your cooking and take off by lead your pleassures.
          </p>
          <Productos
            agregarAlCarro={agregarAlCarro}
            productos={productos3}
            calcularPrecioTotal={calcularPrecioTotal}
          />
          <p
            style={styles.p}
          >
            We have the Best products in the Internet world
            for this we reach you out between this page to 
            rest you and give you quality and Freshness loyalty
            this web, this sapce is just for people who taste 
            every organicness pleassure to relax, comfort of yours 
            health and home.
          </p>
          <h3 style={styles.Titles}>Liquors, Steaks, +More</h3>
          <Productos
            agregarAlCarro={agregarAlCarro}
            productos={productos4}
            calcularPrecioTotal={calcularPrecioTotal}
          />
          <p style={styles.p1}>
            About our liquors and gettings, only for 18+ (Adult) for case. If you recive this at home pleasse show ID card and get it ass you order this<br/>
            This is about our delivery conditions by the real forth Australia politicians rules and our conditions behindeds. ART #4 SRMTH 376: 12-31. 
          </p>
        </Layout>
        <MenuScroll/>
      </div>
    )
  }
}
export default PrincipalStore;
