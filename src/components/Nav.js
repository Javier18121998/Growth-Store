import { Component } from "react";
import './../effects.css'
const styles = {
    form: {
        maxWidth: '36rem',
        minWidth: '10rem',
        display: 'flex'
    },
    div:{
        maxWidth: '36rem',
        minWidth: '10rem'
    },
    nav: {
        maxWidth: '36rem',
        minWidth: '10rem'
    },
    svg:{paddingLeft: '0.3rem'}
}
class Nav extends Component{
    render(){
        return(
            <nav style={styles.nav}>
                <div style={styles.div}>
                    <form role="search"  style={styles.form}>
                        <input 
                            type="Search" 
                            placeholder="Search over here" 
                            aria-label="Search"
                            className="inputNav"
                        />
                        <button 
                            type="submit" 
                            className='searchButton'
                        >
                            Find
                            <svg style={styles.svg} width="18" height="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 19a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"></path>
                                <path d="M13.328 7.172A3.988 3.988 0 0 0 10.5 6a3.988 3.988 0 0 0-2.828 1.172"></path>
                                <path d="m16.61 16.611 4.244 4.243"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </nav>
        )
    }
}
export default Nav