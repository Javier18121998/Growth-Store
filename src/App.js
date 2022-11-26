import { Component } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navigator from './components/Navigator'
import GreengrocerHalf from './GreengrocerHalf'
import PrincipalStore from './PrincipalStore'
class App extends Component{
  state = {
    productos: [
      { name: 'Tomato', price: '30.75 GBP £', pound: '1kg', img: '/productos/tomate.png'},
      { name: 'Pea', price: '20.00 GBP £', pound: '1kg', img: '/productos/arbejas.png'},
      { name: 'Broccoli', price: '22.50 GBP £', pound: '1kg', img: '/productos/brocoli.png'},
      { name: 'Letuce', price: '25.00 GBP £', pound: '1kg', img: '/productos/lechuga.png'},
      { name: 'Potato', price: '19,00 GBP £', pound: '1kg', img: '/productos/potato.png'},
      { name: 'Green Tomato', price: '19,00 GBP £', pound: '1kg', img: '/productos/greenTomato.png'},
      { name: 'Carrot', price: '18.50 GBP £', pound: '1kg', img: '/productos/carrot.png'},
      { name: 'Celery', price: '22.75 GBP £', pound: '1kg', img: '/productos/celery.png'},
    ],
    productos1: [
      { name: 'Apple', price: '19.00 GBP £', pound: '1kg', img: '/productos/apple.png'},
      { name: 'Banana', price: '19.00 GBP £', pound: '1kg', img: '/productos/bannan.png'},
      { name: 'Kiwi', price: '18.50 GBP £', pound: '1kg', img: '/productos/kiwi.png'},
      { name: 'Melon', price: '22.75 GBP £', pound: '1kg', img: '/productos/melon.png'},
      { name: 'Papaya', price: '19.00 GBP £', pound: '1kg', img: '/productos/papaya.png'},
      { name: 'Avocado', price: '19.00 GBP £', pound: '1kg', img: '/productos/avocado.png'},
      { name: 'Watermelon', price: '18.50 GBP £', pound: '1kg', img: '/productos/watermelon.png'},
      { name: 'Pineapple', price: '22.75 GBP £', pound: '1kg', img: '/productos/pineapple.png'},
    ],
    productos2: [
      { name: 'Garlic', price: '8.25 GBP £', pound: '1kg', img: '/productos/garlic.png'},
      { name: 'Onion', price: '6.75 GBP £', pound: '1kg', img: '/productos/onion.png'},
      { name: 'Ginger', price: '7.50 GBP £', pound: '1kg', img: '/productos/ginger.png'},
      { name: 'Pepper(Black)', price: '9.25 GBP £', pound: '1kg', img: '/productos/pepperOne.png'},
      { name: 'Pepper(White)', price: '9.25 GBP £', pound: '1kg', img: '/productos/pepperTwo.jpg'},
      { name: 'Cinnamon', price: '10.25 GBP £', pound: '1kg', img: '/productos/cinnamon.png'},
      { name: 'Cumin', price: '12.25 GBP £', pound: '1kg', img: '/productos/cumin.jpg'},
      { name: 'Cayenne', price: '9.50 GBP £', pound: '1kg', img: '/productos/cayenne.png'},
    ],
    productos3:[
      { name: 'Melon', price: '22.75 GBP £', pound: '1kg', img: '/productos/melon.png'},
      { name: 'Tomato', price: '30.75 GBP £', pound: '1kg', img: '/productos/tomate.png'},
      { name: 'Green Tomato', price: '19,00 GBP £', pound: '1kg', img: '/productos/greenTomato.png'},
      { name: 'Kiwi', price: '18.50 GBP £', pound: '1kg', img: '/productos/kiwi.png'},
      { name: 'Ginger', price: '7.50 GBP £', pound: '1kg', img: '/productos/ginger.png'},
      { name: 'Papaya', price: '19.00 GBP £', pound: '1kg', img: '/productos/papaya.png'},
      { name: 'Onion', price: '6.75 GBP £', pound: '1kg', img: '/productos/onion.png'},
      { name: 'Cumin', price: '12.25 GBP £', pound: '1kg', img: '/productos/cumin.jpg'},
    ],
    productos4:[
      { name: 'Vodka', price: '22.75 GBP £', pound: '1kg', img: '/productos/vodka1.png'},
      { name: 'Whiskey', price: '22.75 GBP £', pound: '1kg', img: '/productos/whiskey.png'},
      { name: 'Pork Cut', price: '22.75 GBP £', pound: '1kg', img: '/productos/pork.png'},
      { name: 'Lamb Cut', price: '22.75 GBP £', pound: '1kg', img: '/productos/lamb.png'},
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
        <Navigator/>
        <PrincipalStore
        agregarAlCarro={this.agregarAlCarro}
        productos3={this.state.productos3}
        productos4={this.state.productos4}
        calcularPrecioTotal={this.calcularPrecioTotal}
        />
        <Footer/>
      </div>
    )
  }
}
export default App;
