import { Component } from "react";
const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
        display: 'flex',
        alignItems: 'center'
    },
    picLogo: {
        color : '#0A283E',
    }
}
class Logo extends Component{
    render(){
        return(
            <div style={styles.logo}>
                <svg width="54" height="54" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" style={styles.picLogo} d="M12 2.4a4.8 4.8 0 0 0-4.8 4.8v1.2H6a1.2 1.2 0 0 0-1.193 1.068l-1.2 10.8A1.2 1.2 0 0 0 4.8 21.6h14.4a1.2 1.2 0 0 0 1.193-1.332l-1.2-10.8A1.2 1.2 0 0 0 18 8.4h-1.2V7.2A4.8 4.8 0 0 0 12 2.4Zm2.4 6V7.2a2.4 2.4 0 1 0-4.8 0v1.2h4.8ZM7.2 12a1.2 1.2 0 1 1 2.4 0 1.2 1.2 0 0 1-2.4 0Zm8.4-1.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" clip-rule="evenodd"></path>
                </svg>
                Growth Store
            </div>
        )
    }
}
export default Logo;