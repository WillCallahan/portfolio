import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import $ from "jquery";

const Navigation = ({ name, tabs }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                // Close menu when switching to desktop view
                setIsMenuOpen(false);
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-custom navbar-fixed-top custom-collapse" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className={`navbar-toggle ${isMenuOpen ? 'collapsed' : ''}`}
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="bs-example-navbar-collapse-1"
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

                <div 
                    className={`collapse navbar-collapse ${isMenuOpen ? 'in' : ''}`} 
                    id="bs-example-navbar-collapse-1" 
                    data-testid="navbar-collapse"
                >
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#home" onClick={closeMenu}>Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={closeMenu}>About</a>
                        </li>
                        <li>
                            <a href="#resume" onClick={closeMenu}>Resume</a>
                        </li>
                        <li>
                            <a href="#works" onClick={closeMenu}>Works</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={closeMenu}>Contact</a>
                        </li>
                        {/* Additional tabs from props */}
                        {Object.keys(tabs).map((tab) => (
                            <li key={tab}>
                                <a href={tabs[tab]} onClick={closeMenu}>{tab}</a>
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
        Certifications: "#certifications",
    },
};

Navigation.propTypes = {
    name: PropTypes.string,
    tabs: PropTypes.object,
};

export default Navigation;
