import React from 'react'
import PropTypes from 'prop-types';
import './imageContainer.css';

class ImageContainer extends React.Component {

    static defaultProps = {
        overlay: false,
        text: '',
        textSize: 'large'
    }
    
    render() {
        const {overlay, text, textSize, url} = this.props;
        return (
            <div className='imageWrapper' style={{background: `url(images/${url}.jpg)`}}>
                {overlay ? <div className='overlay'>
                    {text.length > 0 && <span className='imageText' style={{fontSize: textSize === 'large' ? '25px' : '15px'}}>{text}</span>}
                </div> : 
                ( text.length > 0 ? <span className='imageText' style={{fontSize: textSize === 'large' ? '25px' : '15px'}}>{text}</span> : null )
                }
            </div>
        )
    }
}

ImageContainer.propTypes = {
    overlay: PropTypes.bool,
    textSize: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string.isRequired
}

export default ImageContainer