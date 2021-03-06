import React from 'react'

import Logo from './Logo'

class Loader extends React.Component {
  render () {
    return (
      <div className='c-Loader'>
        <div className='c-Loader__content'>
          <Logo animate width={80} />
        </div>
      </div>
    )
  }
}

export default Loader
