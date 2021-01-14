import React from 'react';
import './OverMij.scss';

import Menu from '../Components/Menu/Menu';
import GroteTitel from '../Components/Titels/GroteTitel';

class OverMij extends React.Component {
  render() {
    return (
      <div>
        <Menu />
          <main className='xxx'>
            <GroteTitel 
              naam='Over mij'
            />
          </main>
      </div>
    )
  }
}

export default OverMij;