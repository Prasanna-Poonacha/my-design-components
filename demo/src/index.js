import React, {Component} from 'react'
import {render} from 'react-dom'

import Button from '../../src/components/Button'

class Demo extends Component {
  render() {
    return <div>
      <h1>my-design-components Demo</h1>
      <Button color="pink">Pink</Button>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
