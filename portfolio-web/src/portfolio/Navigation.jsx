import { useEffect } from "react";
import PropTypes from "prop-types";
import $ from "jquery";

const Navigation = ({ name, tabs }) => {
    useEffect(() => {
        let navbar = $(".navbar");
        let navHeight = navbar.height();

        const handleScroll = () => {
            if ($(window).scrollTop() >= navHeight) {
                navbar.addClass("navbar-color");
            } else {
                navbar.removeClass("navbar-color");
            }
        };

        const handleResize = () => {
            if ($(window).width() <= 767) {
                navbar.addClass("custom-collapse");
            } else {
                navbar.removeClass("custom-collapse");
            }
        };

        $(window).on("scroll", handleScroll);
        $(window).on("resize", handleResize);

        // Initial check for mobile view
        handleResize();

        return () => {
            $(window).off("scroll", handleScroll);
            $(window).off("resize", handleResize);
        };
    }, []);

    return (
        <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#intro">
                        {name}
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        {Object.keys(tabs).map((tab) => (
                            <li key={tab}>
                                <a href={tabs[tab]}>{tab}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Navigation.defaultProps = {
    name: "William Callahan",
    tabs: {
        Profile: "#profile",
        Certifications: "#certifications",
        Resume: "#resume",
        Contact: "#contact",
    },
};

Navigation.propTypes = {
    name: PropTypes.string,
    tabs: PropTypes.object,
};

export default Navigation;
