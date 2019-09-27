import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./homePage.css";
import ImageContainer from '../ImageContainer';

import {images, textContent} from '../../constans';

class HomePage extends Component {

  renderImages = () => {
    return images.map(({number, overlay, text}) => {
      return (
        <ImageContainer key={number} url={number} text={text} textSize='medium' overlay={overlay} />
      );
    })
  }

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
          <div className='imagesWrapper'>
            {this.renderImages()}
          </div>
          <div>
            <ImageContainer url='picture5' overlay text='is simply dummy text of the printing and typesetting. It has survived not only five centuries, but also the leap into'/>
          </div>
          {this.renderTextContent(textContent[1])}
      </div>
    );
  }
}
export default HomePage;