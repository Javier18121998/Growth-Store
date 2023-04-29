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
class Navigator extends Component {
    render() {
      const titles = [
        'Principal Store',
        'Greengrocer’s /Oils',
        'Dairy Store',
        'Butcher´s (Steaks And Meats)',
        'Fishmonger’s',
        'Off-Licence (Wine/Liquors)',
        'Sweet Store',
        'Bakery',
        'Delicatessen (Deli)'
      ];
      const listItems = titles.map((title, index) => (
        <li key={index} style={style.li} className='lI'>
          <a>{title}</a>
        </li>
      ));
      return (
        <main style={style.menu} className='navigator'>
          <ul style={style.ul} className='uL'>
            {listItems}
          </ul>
        </main>
      );
    }
}
export default Navigator;