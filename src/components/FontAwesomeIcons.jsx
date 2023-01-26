import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faAirFreshener } from '@fortawesome/free-solid-svg-icons'

class FontAwesomeIcons extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <FontAwesomeIcon icon={faSchool} color="blue" /> Font Awesome School
        </h3>
        <h3>
          <FontAwesomeIcon icon={faAirFreshener} color="red" /> Font Awesome Solid Icon
        </h3>
      </div>
    )
  }
}

export default FontAwesomeIcons
