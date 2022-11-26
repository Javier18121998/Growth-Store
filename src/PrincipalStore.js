import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import MenuScroll from './components/MenuScroll'
import Anouncements from './components/Anouncements'
import Carousel1 from './components/Carousel1'
import Gallerie from './components/Gallerie'
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
    backgroundColor: '#f8fcff',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee'
  },
  p1: {
    textAlign: 'center',
    padding: '2.2rem 2.9rem',
    color: '#070a0b',
    fontSize: '0.9rem',
    fontWeight: '700',
    fontFamily: 'monospace',
    backgroundColor: '#f8fcff',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee'
  }
}
class PrincipalStore extends Component{
  render(){
    const {agregarAlCarro, productos3, productos4, productos5, calcularPrecioTotal} = this.props
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
          <h3 style={styles.Titles}>Dairy +More (Go to Dairy Store)</h3>
          <Productos
            agregarAlCarro={agregarAlCarro}
            productos={productos5}
            calcularPrecioTotal={calcularPrecioTotal}
          />
          <p style={styles.p1}>
            Info about:
            <p style={styles.p}>(37%) Off</p> 
            Our dairies going to be your favorite products in your dinners and lunches, try to cooke with this and grow upp a level enjoying in your 
            costumes and your meets with family during that moments live a really pleassure with your childs, parents, grandother, grandfather, all people
            who brougth a confidence relation with your fellings and truthly times in comfort before and afther the moments.  
          </p>
          <Gallerie/>
          <p style={styles.p1}>
            <h3 style={styles.Titles}>But, who we are?:</h3> <br/>
            We are the bigest Company in the world to produce, comerce and evolve delivery up in all products in the market an all groceries and More
            states in the dot com and net world on the world wide web. <br/><br/>
            Mission:<br/><br/> Our mission is being a comparate industrie around the world heaviest production of e-comerce to top the indstries and evolve the 
            families in this planet, to conforms a new deliverie producing tapping of caries people to pleassure people for the next future and the same present
            loving every commit and meetings to degust the taste of our products, no forgoten in the process and enjoyed the steps of our lifes and comerce with 
            no products, but yeth with purposes. 
          </p>
        </Layout>
        <MenuScroll/>
      </div>
    )
  }
}
export default PrincipalStore;
