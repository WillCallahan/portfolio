import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";
import $ from "jquery";

const Introduction = ({ name, images, link }) => {
    const introRef = useRef(null);

    useEffect(() => {
        $(introRef.current).backstretch(images, { duration: 3000, fade: 750 });
    }, [images]);

    return (
        <section ref={introRef} id="intro" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hello" data-aos="fade-up">
                            <h1>Hi, I&#39;m {name}</h1>
                            <h3>
                                <span>Senior Cloud Engineer</span>
                            </h3>
                        </div>
                        <a href={link}>
                            <div className="mouse-icon">
                                <div className="wheel" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

Introduction.defaultProps = {
    name: "William Callahan",
    images: ["/images/theme/backstretch/Screens.jpg"],
    link: "#profile",
};

Introduction.propTypes = {
    name: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string,
};

export default Introduction;
