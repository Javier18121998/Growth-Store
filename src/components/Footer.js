import { Component } from "react";
const styles = {
    footer: {
        height: '180px',
        width: '100%',
        display: 'felx',
        flexDirection: 'column',
        marginTop: '23px'
    },
    main0: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '18%',
        alignItems: 'center',
        backgroundColor: 'rgb(240, 136, 4)',
        cursor: 'pointer'
    },
    h60: {
        padding: '0.5rem 2rem',
        cursor: 'pointer',
        color: '#FFF',
        fontSize: '0.8rem',
        textShadow: '-1px 2px 0 black'
    },
    main1: {
        height: '23%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(27, 35, 46)'
    },
    h5:{
        color: '#FFF',
        cursor: 'default'
    },
    main2:{
        width: '100%',
        height: '28%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(27 35 46)'
    },
    p:{
        color: '#FFF',
        padding: '1rem 1rem',
        cursor: 'pointer',
        fontSize: '0.9rem',
        marginLeft: '0.8rem',
        marginRight: '0.8rem' 
    },
    main3:{
        width: '100%',
        height: '33%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgb(19, 25, 33)'
    },
    nav3:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    h6:{
        color: '#FFF',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        cursor: 'pointer'
    },
    logo:{
        fontWeight: '500',
        fontSize: '0.8rem',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        height: '100%',
        cursor: 'pointer'
    },
    picLogo:{
        color: '#FBFBFB',
        paddingRight: '0.25rem'
    },
    p1:{
        color: '#f08804',
        paddingLeft: '0.8rem',
        fontSize: '1.4rem',
    }
}
class Footer extends Component{
    render(){
        return(
            <footer style={styles.footer}>
                <main style={styles.main0} onClick={()=>{window.scrollTo(0,0)}}>
                    <h6 
                        style={styles.h60}
                    >
                        Scroll Upp
                    </h6>
                </main>
                <main style={styles.main1}>
                    <h5 style={styles.h5}>All of our products was being export with both things of astonishing: Quality, Freshness and Oganicness</h5>
                </main>
                <main style={styles.main2}>
                    <p style={styles.p}>Your Account</p>
                    <p style={styles.p}>Policy and Privacy</p>
                    <p style={styles.p}>Methood Payments</p>
                    <p style={styles.p}>Conditions of Use</p>
                    <p style={styles.p}>Help</p>
                    <p style={styles.p}>Delivery</p>
                </main>
                <main style={styles.main3}>
                    <nav style={styles.nav3}>
                        <h6 style={styles.h6}>About</h6>
                        <h6 style={styles.h6}>More of Us</h6>
                        <h6 style={styles.h6}>Thinking Love</h6>
                    </nav>
                    <div style={styles.logo}>
                        <svg width="37" height="37" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={styles.picLogo}>
                            <path fill-rule="evenodd" style={styles.picLogo} d="M12 2.4a4.8 4.8 0 0 0-4.8 4.8v1.2H6a1.2 1.2 0 0 0-1.193 1.068l-1.2 10.8A1.2 1.2 0 0 0 4.8 21.6h14.4a1.2 1.2 0 0 0 1.193-1.332l-1.2-10.8A1.2 1.2 0 0 0 18 8.4h-1.2V7.2A4.8 4.8 0 0 0 12 2.4Zm2.4 6V7.2a2.4 2.4 0 1 0-4.8 0v1.2h4.8ZM7.2 12a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Zm8.4-1.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" clip-rule="evenodd"></path>
                        </svg>
                        AstonZtore
                        <p style={styles.p1}>!</p>
                    </div>
                </main>
            </footer>
        )
    }
}
export default Footer;