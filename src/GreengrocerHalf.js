import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import MenuScroll from './components/MenuScroll'
import Anouncements from './components/Anouncements'
import Carousel from './components/Carousel'
const styles = {
  carousel: {
    zIndex: '0'
  }
}
class GreengrocerHalf extends Component{
  render(){
    const {agregarAlCarro, productos, productos1, productos2, productos3, productos4, productos5, calcularPrecioTotal} = this.props
    return(
      <div>
        <Layout>
          <Carousel style={styles.carousel} className='prueba12345'></Carousel>
        </Layout>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={agregarAlCarro}
            productos={productos2}
            calcularPrecioTotal={calcularPrecioTotal}
          />
          <Productos
            agregarAlCarro={agregarAlCarro}
            productos={productos3}
            calcularPrecioTotal={calcularPrecioTotal}
          />
        </Layout>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={agregarAlCarro}
            productos={productos}
            calcularPrecioTotal={calcularPrecioTotal}
          />
          <Productos
            agregarAlCarro={agregarAlCarro}
            productos={productos1}
            calcularPrecioTotal={calcularPrecioTotal}
          />
        </Layout>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={agregarAlCarro}
            productos={productos4}
            calcularPrecioTotal={calcularPrecioTotal}
          />
          <Productos
            agregarAlCarro={agregarAlCarro}
            productos={productos5}
            calcularPrecioTotal={calcularPrecioTotal}
          />
        </Layout>
        <MenuScroll/>
        <Anouncements/>
      </div>
    )
  }
}
export default GreengrocerHalf;
