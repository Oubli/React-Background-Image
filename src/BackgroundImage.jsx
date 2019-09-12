import React from 'react';
import PropTypes from 'prop-types';
import './BackgroundImage.css';

const COVER = 'cover';
const CONTAIN = 'contain';


BackgroundImage.defaultProps = {
    alt: 'BackgroundImage',
    backgroundSize: COVER,
};

BackgroundImage.propTypes = {
    url: PropTypes.string.required,
    alt: PropTypes.string,
    backgroundSize: PropTypes.oneOf([COVER,CONTAIN])
};

export default class BackgroundImage extends React.PureComponent {

    backgroundImage = null;
    parentNode = null;
    state = { maxWidth: null };

    componentDidMount() {
        this.setParentNode();
        this.setParentPosition();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentDidUpdate(prevProps){
        if(prevProps.url !== this.props.url )
            this.updateDimensions()
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    setParentNode = () =>{
        this.parentNode = this.backgroundImage.parentNode.parentNode;
    };

    setParentPosition = () =>{
        if(this.parentNode && window.getComputedStyle(this.parentNode).getPropertyValue('position') === 'static')
            this.parentNode.style.position = 'relative';
    };

    updateDimensions = () => {
        const {backgroundSize} = this.props;
        const imageHeight = this.backgroundImage.height;
        const imageWidth = this.backgroundImage.width;
        const parentHeight = this.parentNode.clientHeight;
        const parentWidth = this.parentNode.clientWidth;

        if (!(parentWidth <= imageWidth && parentHeight <= imageHeight)) {
            if (parentHeight <= imageHeight) this.setState({maxWidth: backgroundSize === COVER});
            else if (parentWidth <= imageWidth) this.setState({maxWidth: backgroundSize !== COVER});
        }
    };

    render(){
        const { maxWidth } = this.state;
        const { url, alt, ...rest } = this.props;
        let { className } = this.props;
        className = className || '';
        return(
            <div {...rest} className={`background-image-wrapper ${className}`} >
                <img
                    className={ `${maxWidth ? 'background-image-max-width' : 'background-image-max-height'}` }
                    ref={ node => this.backgroundImage = node }
                    src={ url }
                    alt={ alt }
                    onLoad={this.updateDimensions}
                />
            </div>
        )
    }
}