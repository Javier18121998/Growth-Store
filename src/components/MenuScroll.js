import { Component } from "react";
import '../effects.css';
const style = {
    menu: {
        backgroundColor: '#fff',
        position: 'fixed',
        boxShadow: '1px 5px 5px rgb(0,0,0,0)',
        borderRadius: '5px',
        width: '170px',
        left: 10,
        top: 90,
        border: '1px solid #fff'
    },
    ul: {
        margin: 0,
        padding: 0,
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
        borderBottom: '1px solid #eee'
    },
}
const Titles = ['Fruit Land', 'Country Vegetables', 'Species Bag']
class MenuScroll extends Component{
    render(){
        return(
            <main 
                style={style.menu}
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