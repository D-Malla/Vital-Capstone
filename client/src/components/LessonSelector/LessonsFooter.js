import React from 'react'
import '../../styles/Lessons.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default props => {
  return (
    <footer id='lessonsFooterContainer'>
      <div className='footerLogoDiv'>
        <h1>Vital</h1>
      </div>
      <div className='footerInfoDiv'>
        <p>© Vital 2019</p>
        <a href='#'><p>Privacy Policy</p></a>
        <a href='#'><p>Terms of Use</p></a>
      </div>
      <div className='footerSocialDiv'>
      <a href='#'><FontAwesomeIcon icon={faInstagram}/></a>
      <a href='#'><FontAwesomeIcon icon={faFacebook}/></a>
      <a href='#'><FontAwesomeIcon icon={faLinkedin}/></a>
      <a href='#'><FontAwesomeIcon icon={faTwitter}/></a>
      </div>
    </footer>
  )
}