import { Component } from "react";
import '../effects.css';

const style = {
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
        zIndex: '0',
        textAlign: 'center'
    },
}
class Navigator extends Component{
    render(){
        const Titles = ['Principal Store', 'Greengrocer’s /Oils', 'Dairy Store', 'Butcher´s (Steaks And Meats)', 'Fishmonger’s', 'Off-Licence (Wine/Liquors)', 
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
                    <li style={style.li} className='lI'>{Titles[8]}</li>
                </ul>
            </main>
        )
    }
}
export default Navigator;