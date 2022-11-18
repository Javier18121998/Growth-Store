import { Component } from "react";
import '../effects.css';

const style = {
    menu: {
        backgroundColor: '#fff',
        position: 'fixed',
        marginTop: 11,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.0)',
        borderRadius: '5px',
        width: '170px',
        height: '426px',
        right: 5,
        top: 95,
        overflow: 'auto',
        zIndex: '0',
        border: '1px solid #fff'
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    li: {
        listStyleType: 'none',
        padding: '23px 20px',
        fontWeight: '500',
        height: 'auto',
        fontSize: '0.85rem',
        borderBottom: '1px solid #eee',
        zIndex: '0'
    },
}
class Navigator extends Component{
    render(){
        const Titles = ['Greengrocer’s /Oils', 'Dairy Store', 'Butcher´s (Steaks And Meats)', 'Fishmonger’s', 'Off-Licence (Wine/Liquors)', 
        'Sweet Store', 'Bakery', 'Delicatessen (Deli)']
        return(
            <main 
                style={style.menu}
                className='navigator'
            >
                <ul 
                    style={style.ul}
                    className='uL'
                >
                    <li style={style.li} className='lI'>{Titles[0]}</li>
                    <li style={style.li} className='lI'>{Titles[1]}</li>
                    <li style={style.li} className='lI'>{Titles[2]}</li>
                    <li style={style.li} className='lI'>{Titles[3]}</li>
                    <li style={style.li} className='lI'>{Titles[4]}</li>
                    <li style={style.li} className='lI'>{Titles[5]}</li>
                    <li style={style.li} className='lI'>{Titles[6]}</li>
                    <li style={style.li} className='lI'>{Titles[7]}</li>
                </ul>
            </main>
        )
    }
}
export default Navigator;