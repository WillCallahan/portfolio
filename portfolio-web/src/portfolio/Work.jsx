import PropTypes from "prop-types";

const Work = (props) => {
    const getType = () => {
        switch (props.type) {
            case "video":
                return "video-pop-up";
            case "image":
                return "pop-up";
            case "iframe":
                return "pop-up-iframe";
            default:
                throw new Error("Popup type " + props.type + " does not exist!");
        }
    }

    return (
        <a href={props.popupLink || props.image} className={getType()} title={props.caption} target="_blank">
            <div className="portfolio-item">
                <div className="portfolio-item-preview">
                    <img src={props.image} alt={props.imageAlt}/>
                </div>
                <div className="portfolio-item-description">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>
    );
}

Work.defaultProps = {
    title: null,
    description: null,
    image: "/images/theme/p1.jpg",
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