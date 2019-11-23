import PropTypes from "prop-types";
import React from "react";

class Work extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getType() {
        switch(this.props.type) {
            case "video":
                return "video-pop-up";
            case "image":
                return "pop-up";
            case "iframe":
                return "iframe-pop-up";
            default:
                throw new Error("Popup type " +  this.props.type + " does not exist!");
        }
    }

    render() {
        return (
            <a href={this.props.popupLink || this.props.image} className={this.getType()} title={this.props.caption}>
                <div className="portfolio-item">
                    <div className="portfolio-item-preview">
                        <img src={this.props.image} alt={this.props.imageAlt}/>
                    </div>
                    <div className="portfolio-item-description">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </a>
        );
    }

}

Work.defaultProps = {
    title: null,
    description: null,
	image: "/public/images/theme/p1.jpg",
	popupLink: null,
    imageAlt: null,
    caption: null,
    type: "image"
};

Work.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
	image: PropTypes.string,
	popupLink: PropTypes.string,
    imageAlt: PropTypes.string,
    caption: PropTypes.string,
	/**
     * Type of popup to show (image, video, iframe)
	 */
	type: PropTypes.string,
};

export default Work;