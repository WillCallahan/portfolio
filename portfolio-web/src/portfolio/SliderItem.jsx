import PropTypes from "prop-types";
import React from "react";

class SliderItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getImg() {
        let imgTag = <img src={this.props.image} alt={this.props.imageAlt || this.props.title} />;
        if (this.props.imageLink)
            return <a href={this.props.imageLink}>{imgTag}</a>;
        return imgTag;
    }

    render() {
        return (
            <div className="text-center">
				<img className="inline-block" src={this.props.image} alt={this.props.imageAlt || this.props.title} />
                <h4>{this.props.title}</h4>
            </div>
        );
    }

}

SliderItem.defaultProps = {
    title: "William Callahan",
    image: "/images/theme/logo/client160-1.png",
    imageAlt: null,
    imageLink: null,
};

SliderItem.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    imageLink: PropTypes.string,
};

export default SliderItem;