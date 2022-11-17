import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'
import MenuScroll from './components/MenuScroll'
import Watchword from './components/Wathcword'

class App extends Component{
  state = {
    productos: [
      { name: 'Tomato', price: '30,75 GBP £', pound: '1kg', img: '/productos/tomate.png'},
      { name: 'Pea', price: '20,00 GBP £', pound: '1kg', img: '/productos/arbejas.png'},
      { name: 'Broccoli', price: '22,50 GBP £', pound: '1kg', img: '/productos/brocoli.png'},
      { name: 'Letuce', price: '25,00 GBP £', pound: '1kg', img: '/productos/lechuga.png'},
    ],
    productos1: [
      { name: 'Potato', price: '19,00 GBP £', pound: '1kg', img: '/productos/potato.png'},
      { name: 'Green Tomato', price: '19,00 GBP £', pound: '1kg', img: '/productos/greenTomato.png'},
      { name: 'Carrot', price: '18,50 GBP £', pound: '1kg', img: '/productos/carrot.png'},
      { name: 'Celery', price: '22,75 GBP £', pound: '1kg', img: '/productos/celery.png'},
    ],
    productos2: [
      { name: 'Apple', price: '19,00 GBP £', pound: '1kg', img: '/productos/apple.png'},
      { name: 'Banana', price: '19,00 GBP £', pound: '1kg', img: '/productos/bannan.png'},
      { name: 'Kiwi', price: '18,50 GBP £', pound: '1kg', img: '/productos/kiwi.png'},
      { name: 'Melon', price: '22,75 GBP £', pound: '1kg', img: '/productos/melon.png'},
    ],
    productos3: [
      { name: 'Papaya', price: '19,00 GBP £', pound: '1kg', img: '/productos/papaya.png'},
      { name: 'Avocado', price: '19,00 GBP £', pound: '1kg', img: '/productos/avocado.png'},
      { name: 'Watermelon', price: '18,50 GBP £', pound: '1kg', img: '/productos/watermelon.png'},
      { name: 'Pineapple', price: '22,75 GBP £', pound: '1kg', img: '/productos/pineapple.png'},
    ],
    carro:[],
    precio:[],
    esCarroVisible: false,
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
        console.log('hola de nuevo ' + producto.price);
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto, cantidad: 1,
      })
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
        />
        <Layout idName='Hola wey'>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos2}
          />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos3}
          />
        </Layout>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos1}
          />
        </Layout>
        <MenuScroll/>
        <Watchword/>
      </div>
    )
  }
}
export default App;
