import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Navigator from './components/Navigator'
import PrincipalStore from './PrincipalStore'
import axios from  'axios'
const styles = {
  main: {
    backgroundColor: 'rgb(246, 246, 246)'
  }
}
class App extends Component{
  productos0 = JSON.parse(JSON.stringify(require("./DataProducts/products.json").vegetables));
  productos1 = JSON.parse(JSON.stringify(require("./DataProducts/products.json").fruits));
  productos2 = JSON.parse(JSON.stringify(require("./DataProducts/products.json").spicesBag));
  productos3 = JSON.parse(JSON.stringify(require("./DataProducts/products.json").offproducts));
  productos4 = JSON.parse(JSON.stringify(require("./DataProducts/products.json").inTable));
  productos5 = JSON.parse(JSON.stringify(require("./DataProducts/products.json").delicatesenIn));
  state = {
    carro:[],
    esCarroVisible: false,
    totalPrice: 0,
    urlInfo: null
  }
  componentDidMount() {
    const url = 'https://localhost:7176/api/Productos'
    axios.get(url).then(response => {
      this.setState({ urlInfo: response.data })
      console.log(this.state.urlInfo)
    }).catch(error =>{console.log(error)})
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
      <div style={styles.main}>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}
          totalPrice={this.state.totalPrice}
        />
        <Navigator/>
        <PrincipalStore
        agregarAlCarro={this.agregarAlCarro}
        productos3={this.productos3}
        productos4={this.productos4}
        productos5={this.productos5}
        calcularPrecioTotal={this.calcularPrecioTotal}
        />
        <Footer/>
      </div>
    )
  }
}
export default App;
