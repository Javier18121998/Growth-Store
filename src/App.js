import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'
import MenuScroll from './components/MenuScroll'
import Anouncements from './components/Anouncements'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
const styles = {
  carousel: {
    zIndex: '0'
  }
}
class App extends Component{
  state = {
    productos: [
      { name: 'Tomato', price: '30.75 GBP £', pound: '1kg', img: '/productos/tomate.png'},
      { name: 'Pea', price: '20.00 GBP £', pound: '1kg', img: '/productos/arbejas.png'},
      { name: 'Broccoli', price: '22.50 GBP £', pound: '1kg', img: '/productos/brocoli.png'},
      { name: 'Letuce', price: '25.00 GBP £', pound: '1kg', img: '/productos/lechuga.png'},
    ],
    productos1: [
      { name: 'Potato', price: '19,00 GBP £', pound: '1kg', img: '/productos/potato.png'},
      { name: 'Green Tomato', price: '19,00 GBP £', pound: '1kg', img: '/productos/greenTomato.png'},
      { name: 'Carrot', price: '18.50 GBP £', pound: '1kg', img: '/productos/carrot.png'},
      { name: 'Celery', price: '22.75 GBP £', pound: '1kg', img: '/productos/celery.png'},
    ],
    productos2: [
      { name: 'Apple', price: '19.00 GBP £', pound: '1kg', img: '/productos/apple.png'},
      { name: 'Banana', price: '19.00 GBP £', pound: '1kg', img: '/productos/bannan.png'},
      { name: 'Kiwi', price: '18.50 GBP £', pound: '1kg', img: '/productos/kiwi.png'},
      { name: 'Melon', price: '22.75 GBP £', pound: '1kg', img: '/productos/melon.png'},
    ],
    productos3: [
      { name: 'Papaya', price: '19.00 GBP £', pound: '1kg', img: '/productos/papaya.png'},
      { name: 'Avocado', price: '19.00 GBP £', pound: '1kg', img: '/productos/avocado.png'},
      { name: 'Watermelon', price: '18.50 GBP £', pound: '1kg', img: '/productos/watermelon.png'},
      { name: 'Pineapple', price: '22.75 GBP £', pound: '1kg', img: '/productos/pineapple.png'},
    ],
    productos4: [
      { name: 'Garlic', price: '8.25 GBP £', pound: '1kg', img: '/productos/garlic.png'},
      { name: 'Onion', price: '6.75 GBP £', pound: '1kg', img: '/productos/onion.png'},
      { name: 'Ginger', price: '7.50 GBP £', pound: '1kg', img: '/productos/ginger.png'},
      { name: 'Pepper(Black)', price: '9.25 GBP £', pound: '1kg', img: '/productos/pepperOne.png'},
    ],
    productos5:[
      { name: 'Pepper(White)', price: '9.25 GBP £', pound: '1kg', img: '/productos/pepperTwo.jpg'},
      { name: 'Cinnamon', price: '10.25 GBP £', pound: '1kg', img: '/productos/cinnamon.png'},
      { name: 'Cumin', price: '12.25 GBP £', pound: '1kg', img: '/productos/cumin.jpg'},
      { name: 'Cayenne', price: '9.50 GBP £', pound: '1kg', img: '/productos/cayenne.png'},
    ],
    carro:[],
    esCarroVisible: false,
    totalPrice: 0
  }
  agregarAlCarro = (producto) =>{
    const {carro} = this.state
    if (carro.find(proth => proth.name === producto.name)) {
      const newCarro = carro.map(proth => proth.name === producto.name
      ?({
        ...proth, 
        cantidad: proth.cantidad + 1
      })
      : proth)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto, cantidad: 1,
      })
    })
  }
  calcularPrecioTotal = (producto) =>{
    let {totalPrice} = this.state
    let price = parseFloat(producto.price)
    if (totalPrice !== 0) {
      let total = totalPrice + price
      return this.setState({totalPrice: total})
    }
    return this.setState({
      totalPrice: price
    })
  }
  mostrarCarro = () =>{
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }
  render(){
    const {esCarroVisible} = this.state
    return(
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}
          totalPrice={this.state.totalPrice}
        />
        <Layout>
          <Carousel style={styles.carousel} className='prueba12345'></Carousel>
        </Layout>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos2}
            calcularPrecioTotal={this.calcularPrecioTotal}
            />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos3}
            calcularPrecioTotal={this.calcularPrecioTotal}
          />
        </Layout>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
            calcularPrecioTotal={this.calcularPrecioTotal}
          />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos1}
            calcularPrecioTotal={this.calcularPrecioTotal}
          />
        </Layout>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos4}
            calcularPrecioTotal={this.calcularPrecioTotal}
          />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos5}
            calcularPrecioTotal={this.calcularPrecioTotal}
          />
        </Layout>
        <MenuScroll/>
        <Anouncements/>
        <Footer/>
      </div>
    )
  }
}
export default App;
