import React from 'react';
import './Contact.scss';

import Menu from '../Components/Menu/Menu';
import GroteTitel from '../Components/Titels/GroteTitel';
import KleineTitel from '../Components/Titels/KleineTitel';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <main className='contact'>
          <GroteTitel
            naam='Contact'
          />
          <KleineTitel
            naam='U kunt me altijd bereiken via onderstaande gegevens.'
          />
        </main>
      </div>
    )
  }
}

export default Contact;