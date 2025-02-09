import PropTypes from "prop-types";
import Work from "./Work";
import ArrayUtility from "./utility/ArrayUtility";

const Works = ({ title, description, works, worksPerRow }) => {

    const getAnimation = (index) => {
        switch (index) {
            case 0:
                return "bounceInLeft";
            case 2:
                return "bounceInRight";
            default:
                return "bounceInUp";
        }
    };

    const getDelay = (index) => {
        return index < 3 ? "" : `${0.2 * (index - 2)}s`;
    };

    const getWorks = () => {
        const groupedArray = ArrayUtility.getInGroupsOf(works, worksPerRow);
        return groupedArray.map((worksGroup, i) => {
            const worksElements = worksGroup.map((work, o) => (
                <div
                    key={`work${work.title}`}
                    className={`col-md-4 col-sm-6 wow ${getAnimation(i * worksPerRow + o)}`}
                    data-wow-delay={getDelay(i * worksPerRow + o)}
                >
                    <Work {...work} key={`work${i}`} />
                </div>
            ));
            return (
                <div data-aos="slide-up" key={`worksRow${i}`} className="row">
                    {worksElements}
                </div>
            );
        });
    };

    return (
        <section id="portfolio" className="callout">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 headline wow bounceInDown">
                        <h2>{title}</h2>
                        {description && <p>{description}</p>}
                    </div>
                </div>
                {getWorks()}
            </div>
        </section>
    );
};

Works.defaultProps = {
    title: "Samples",
    description: null,
    works: [
        {
            title: "Disney Scrapper",
            description: "Price Change Identifier",
            type: "iframe",
            popupLink: "https://github.com/WillCallahan/disney-scrapper",
            image: "/images/portfolio/DisneyScrapper.png",
        },
        {
            title: "Color-blind Pal",
            description: "Colorblindness Accessibility App",
            type: "iframe",
            popupLink: "https://github.com/tecconn/colorblind-pal",
            image: "/images/portfolio/Ishihara-Protanopia.jpg",
        },
        {
            title: "Battleship",
            description: "Battleship Game",
            popupLink: "https://github.com/WillCallahan/wcsu-cs-360-01",
            image: "/images/portfolio/BattleshipCrop.jpg",
        },
        {
            title: "MSL Compiler",
            description: "Custom Language Compiler",
            popupLink: "https://github.com/WillCallahan/wcsu-cs-299-01",
            image: "/images/portfolio/MSLCompiler.jpg",
        },
        {
            title: "Typing Test",
            description: "Demonstration of HTML5 Canvas",
            popupLink: "https://github.com/tecconn/TypingTest",
            image: "/images/portfolio/TypingTest.jpg",
        },
        {
            title: "Contact Manager",
            description: "Demonstration of AWS Lambda",
            popupLink: "https://github.com/WillCallahan/contact-manager",
            image: "/images/portfolio/ContactManagerColor.jpg",
        },
    ],
    worksPerRow: 3,
};

Works.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    works: PropTypes.array,
    worksPerRow: PropTypes.number,
};

export default Works;