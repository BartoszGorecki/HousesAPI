import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./homePage.css";

import {textContent} from '../../constans';

class HomePage extends Component {

    renderTextContent = data => {
        const {text, text2, title, title2} = data
        return (
            <section className='contentWrapper'>
                <div className='headerWrapper'>
                    <h2 className='mainHeader'>{title}</h2>
                    <span className='secondaryHeader'>{title2}</span>
                </div>
                <div>
                    <span className='textWrapper'>{text}</span>
                    <span className='textWrapper'>{text2}</span>
                </div>
                <button className='btn'>
                    <Link to='/houses'>Zobacz wiecej</Link>
                </button>
                
            </section>
        )
    }
  
  render() {
    
    return (
      <div className='homePageWrapper'>
          {this.renderTextContent(textContent[0])}
          <div>
            dsdsds
          </div>
          <div>
            dsdsd
          </div>
          {this.renderTextContent(textContent[1])}
      </div>
    );
  }
}
export default HomePage;