import { Component } from "react";
import '../effects.css';
const style = {
    ul: {
        margin: 0,
        padding: 0,
        maxHeight: '195px',
        zIndex: '1'
    },
    li: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '23px 20px',
        fontWeight: '500',
        height: 'auto',
        fontSize: '0.85rem',
        borderBottom: '1px solid #eee',
        textAlign: 'center',
        zIndex: '1'
    },
}
const Titles = ['Fruit Land', 'Country Vegetables', 'Spices Bag']
class MenuScroll extends Component{
    render(){
        return(
            <main 
                style={style.menu}
                className='navigator1'
            >
                <ul style={style.ul}>
                    <li style={style.li} className='lI'>{Titles[0]}</li>
                    <li style={style.li} className='lI'>{Titles[1]}</li>
                    <li style={style.li} className='lI'>{Titles[2]}</li>
                </ul>
            </main>
        )
    }
}
export default MenuScroll;