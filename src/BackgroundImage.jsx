import React from 'react';
import PropTypes from 'prop-types';
import './BackgroundImage.css';

export default class BackgroundImage extends React.PureComponent {

    backgroundImage = null;
    parentNode = null;

    state = { maxWidth: null };

    static defaultProps = {
        alt: 'BackgroundImage',
    };

    static propTypes = {
        url: PropTypes.string.required,
        alt: PropTypes.string,
    };

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
        const imageHeight = this.backgroundImage.height;
        const imageWidth = this.backgroundImage.width;
        const parentHeight = this.parentNode.clientHeight;
        const parentWidth = this.parentNode.clientWidth;

        if (!(parentWidth <= imageWidth && parentHeight <= imageHeight)) {
            if (parentHeight <= imageHeight) this.setState({maxWidth: true});
            else if (parentWidth <= imageWidth) this.setState({maxWidth: false});
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