import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'
class App extends Component{
  state = {
    productos: [
      { name: 'Tomato', price: '30,75 GBP £', pound: '1kg', img: '/productos/tomate.png'},
      { name: 'Pea', price: '20,00 GBP £', pound: '1kg', img: '/productos/arbejas.png'},
      { name: 'Broccoli', price: '22,50 GBP £', pound: '1kg', img: '/productos/brocoli.png'},
      { name: 'Letuce', price: '25,00 GBP £', pound: '1kg', img: '/productos/lechuga.png'},
    ],
    carro:[],
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
    console.log(this.state.carro)
    return(
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}
export default App;
