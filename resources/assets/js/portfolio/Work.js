import PropTypes from "prop-types";
import React from "react";

class Work extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <a href={this.props.image} className={this.props.video ? "video-pop-up" : "pop-up"} title={this.props.caption}>
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
    title: "Some Work",
    description: "Category",
    image: "/public/images/theme/p1.jpg",
    imageAlt: null,
    caption: null,
    video: false,
};

Work.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    caption: PropTypes.string,
    video: PropTypes.bool,
};

export default Work;