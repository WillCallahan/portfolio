import React from "react";
import PropTypes from "prop-types";

import Navigation from "../theme/Navigation";
import Introduction from "../theme/Introduction";
import HeadContact from "../theme/HeadContact";
import Profile from "../theme/Profile";

class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="wrapper">
                <div id="preloader">
                    <div id="status">
                        <div className="status-mes"><h4>Mark Stone</h4></div>
                    </div>
                </div>

                <Navigation name={this.props.name}/>

                <Introduction name={this.props.name}/>

                <HeadContact/>

                <Profile name={this.props.name}/>

                <section id="stats" className="callout">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-3 col-sm-12 hidden-xs wow bounceInLeft">
                                <h3>My Stats</h3>
                            </div>

                            <div className="col-md-3 col-sm-4 wow bounceInDown">
                                <div className="stat">
                                    <div className="stat-icon">
                                        <h2><i className="fa fa-coffee hidden-xs"></i><span className="timer" data-to="32"></span></h2>
                                    </div>
                                    <h3>Cup of coffee</h3>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-4 wow bounceInUp">
                                <div className="stat">
                                    <div className="stat-icon">
                                        <h2><i className="fa fa-code hidden-xs"></i><span className="timer" data-to="999"></span></h2>
                                    </div>
                                    <h3>Line of code</h3>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-4 wow bounceInRight">
                                <div className="stat">
                                    <div className="stat-icon">
                                        <h2><i className="fa fa-child hidden-xs"></i><span className="timer" data-to="300"></span>+</h2>
                                    </div>
                                    <h3>Happy customers</h3>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

                <section id="services" className="section">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-12 headline wow bounceInDown">
                                <h2>What i can do</h2>
                                <p>My Services.</p>
                            </div>

                            <div className="col-md-12">

                                <div className="row">

                                    <div className="col-sm-4 wow bounceInLeft">
                                        <div className="service">
                                            <div className="icon">
                                                <i className="fa fa-pencil"></i>
                                            </div>
                                            <h4>Text rotator</h4>
                                            <div className="text">
                                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 wow bounceInUp">
                                        <div className="service">
                                            <div className="icon">
                                                <i className="fa fa-image"></i>
                                            </div>
                                            <h4>Slideshow</h4>
                                            <div className="text">
                                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 wow bounceInRight">
                                        <div className="service">
                                            <div className="icon">
                                                <i className="fa fa-cog"></i>
                                            </div>
                                            <h4>Easy configure</h4>
                                            <div className="text">
                                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-sm-4 wow bounceInUp" data-wow-delay=".2s">
                                        <div className="service">
                                            <div className="icon">
                                                <i className="fa fa-code"></i>
                                            </div>
                                            <h4>Clear code</h4>
                                            <div className="text">
                                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 wow bounceInUp" data-wow-delay=".4s">
                                        <div className="service">
                                            <div className="icon">
                                                <i className="fa fa-desktop"></i>
                                            </div>
                                            <h4>Responsive design</h4>
                                            <div className="text">
                                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 wow bounceInUp" data-wow-delay=".6s">
                                        <div className="service">
                                            <div className="icon">
                                                <i className="fa fa-life-ring"></i>
                                            </div>
                                            <h4>Support</h4>
                                            <div className="text">
                                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="callout">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-3 hidden-xs wow bounceInLeft">
                                <h3>My status</h3>
                            </div>

                            <div className="col-md-9 headline nomargin wow bounceInDown">
                                <h3>I'm currently available for freelance work.</h3>
                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
                                <a href="#contact" className="btn btn-default btn-custom-2 callout-btn"><i className="fa fa-paper-plane-o icon-before"></i> Contact me</a>
                            </div>

                        </div>

                    </div>

                </section>

                <section id="resume" className="section">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-12 headline wow bounceInDown">
                                <h2>Resume</h2>
                                <p>My education and experience.</p>
                            </div>

                        </div>

                        <div className="row resume-items">

                            <div className="col-md-3 wow bounceInLeft">
                                <h3>Education</h3>
                            </div>

                            <div className="col-md-6 col-sm-8 resume-item wow bounceInUp">
                                <h4>Computer science</h4>
                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
                                <hr className="hidden-xs"/>
                            </div>

                            <div className="col-md-3 col-sm-4 resume-place wow bounceInRight">
                                <h4><i className="fa fa-suitcase"></i> Stanford University</h4>
                                <i className="fa fa-calendar"></i> 2013 - 2014
                                <hr className="visible-xs"/>
                            </div>

                            <div className="col-md-6 col-md-offset-3 col-sm-8 resume-item wow bounceInUp">
                                <h4>Visual designer</h4>
                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
                                <hr className="hidden-xs"/>
                            </div>

                            <div className="col-md-3 col-sm-4 resume-place wow bounceInRight">
                                <h4><i className="fa fa-suitcase"></i> St. Patrick University</h4>
                                <i className="fa fa-calendar"></i> 2013 - 2014
                                <hr className="visible-xs"/>
                            </div>

                        </div>

                        <div className="row resume-items">

                            <div className="col-md-3 wow bounceInLeft">
                                <h3>Experience</h3>
                            </div>

                            <div className="col-md-6 col-sm-8 resume-item wow bounceInUp">
                                <h4>Front-end developer / php programmer</h4>
                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
                                <hr className="hidden-xs"/>
                            </div>

                            <div className="col-md-3 col-sm-4 resume-place wow bounceInRight">
                                <h4><i className="fa fa-suitcase"></i> Google</h4>
                                <i className="fa fa-calendar"></i> 2013 - 2014
                                <hr className="visible-xs"/>
                            </div>

                            <div className="col-md-6 col-md-offset-3 col-sm-8 resume-item wow bounceInUp">
                                <h4>C# programmer</h4>
                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>
                                <hr className="hidden-xs"/>
                            </div>

                            <div className="col-md-3 col-sm-4 resume-place wow bounceInRight">
                                <h4><i className="fa fa-suitcase"></i> Microsoft</h4>
                                <i className="fa fa-calendar"></i> 2013 - 2014
                                <hr className="visible-xs"/>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6 col-md-offset-3 wow bounceInUp">
                                <a href="#" className="btn btn-default btn-custom-2"><i className="fa fa-cloud-download icon-before"></i> Download CV</a>
                            </div>

                        </div>

                    </div>

                </section>

                <section id="clients" className="callout">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-3 hidden-xs wow bounceInLeft">
                                <h3>Customers</h3>
                            </div>

                            <div className="col-md-9 wow bounceInRight">

                                <div id="owl-clients" className="owl-carousel">

                                    <div className="owl-item">
                                        <img src="/public/images/theme/logo/client160-3.png" alt=""/>
                                            <h4>Client 1</h4>
                                    </div>

                                    <div className="owl-item">
                                        <img src="/public/images/theme/logo/client160-1.png" alt=""/>
                                            <h4>Client 2</h4>
                                    </div>

                                    <div className="owl-item">
                                        <img src="/public/images/theme/logo/client160-3.png" alt=""/>
                                            <h4>Client 3</h4>
                                    </div>

                                    <div className="owl-item">
                                        <img src="/public/images/theme/logo/client160-1.png" alt=""/>
                                            <h4>Client 4</h4>
                                    </div>

                                    <div className="owl-item">
                                        <img src="/public/images/theme/logo/client160-3.png" alt=""/>
                                            <h4>Client 5</h4>
                                    </div>

                                    <div className="owl-item">
                                        <img src="/public/images/theme/logo/client160-1.png" alt=""/>
                                            <h4>Client 6</h4>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <section id="portfolio" className="section">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-12 headline wow bounceInDown">
                                <h2>Portfolio</h2>
                                <p>My best works.</p>
                            </div>

                            <div className="col-md-4 col-sm-6 wow bounceInLeft">
                                <a href="/public/images/theme/p1.jpg" className="pop-up" title="Caption 1">
                                    <div className="portfolio-item">
                                        <div className="portfolio-item-preview">
                                            <img src="/public/images/theme/p1.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-item-description">
                                            <h3>Some work</h3>
                                            <p>Category</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 wow bounceInUp">
                                <a href="https://vimeo.com/45830194" className="video-pop-up" title="Caption 2">
                                    <div className="portfolio-item">
                                        <div className="portfolio-item-preview">
                                            <img src="/public/images/theme/p2.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-item-description">
                                            <h3>Some work</h3>
                                            <p>Category</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 wow bounceInRight">
                                <a href="/public/images/theme/p3.jpg" className="pop-up" title="Caption 3">
                                    <div className="portfolio-item">
                                        <div className="portfolio-item-preview">
                                            <img src="/public/images/theme/p3.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-item-description">
                                            <h3>Some work</h3>
                                            <p>Category</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 wow bounceInUp" data-wow-delay=".2s">
                                <a href="/public/images/theme/p5.jpg" className="pop-up" title="Caption 4">
                                    <div className="portfolio-item">
                                        <div className="portfolio-item-preview">
                                            <img src="/public/images/theme/p5.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-item-description">
                                            <h3>Some work</h3>
                                            <p>Category</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 wow bounceInUp" data-wow-delay=".4s">
                                <a href="/public/images/theme/p8.jpg" className="pop-up" title="Caption 5">
                                    <div className="portfolio-item">
                                        <div className="portfolio-item-preview">
                                            <img src="/public/images/theme/p8.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-item-description">
                                            <h3>Some work</h3>
                                            <p>Category</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 wow bounceInUp" data-wow-delay=".6s">
                                <a href="/public/images/theme/p6.jpg" className="pop-up" title="Caption 6">
                                    <div className="portfolio-item">
                                        <div className="portfolio-item-preview">
                                            <img src="/public/images/theme/p6.jpg" alt=""/>
                                        </div>
                                        <div className="portfolio-item-description">
                                            <h3>Some work</h3>
                                            <p>Category</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </section>


                <section id="contact" className="section">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-12 headline wow bounceInLeft">
                                <h2>Contact Us</h2>
                                <p>Drop us a line or give us a ring. We love to hear you.</p>
                            </div>

                            <div className="col-md-6 wow bounceInUp">

                                <p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend.</p>

                                <ul className="icon-list">
                                    <li><i className="fa fa-fw fa-map-marker"></i>001 Some Street, Some City, US</li>
                                    <li><i className="fa fa-fw fa-phone"></i>123 4567 8910</li>
                                    <li><i className="fa fa-fw fa-envelope-o"></i><a href="mailto:">support@site.com</a></li>
                                    <li><i className="fa fa-fw fa-globe"></i><a href="">http://www.site.com</a></li>
                                </ul>

                            </div>

                            <div className="col-md-6 wow bounceInRight">

                                <form id="contact-form" role="form" noValidate>

                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="name">Name</label>
                                        <input type="text" id="name" className="form-control" name="name" placeholder="Name" required=""/>
                                            <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="email">Email address</label>
                                        <input type="email" id="email" className="form-control" name="email" placeholder="E-mail" required=""/>
                                            <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="form-group">
                                        <textarea className="form-control" id="message" name="message" rows="7" placeholder="Your message" required=""></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <button type="submit" className="btn btn-custom-1">
                                        <i className="fa fa-bullhorn icon-before"></i> Send it
                                    </button>

                                </form>

                                <div id="contact-response"></div>

                            </div>

                        </div>

                    </div>

                </section>

                <footer id="footer">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-12">
                                <p className="copy">
                                    © 2014 Mark Stone, All Rights Reserved.
                                </p>
                            </div>

                        </div>

                    </div>

                </footer>

            </div>
        );
    }

}

App.defaultProps = {
    title: "Portfolio",
    name: "William Callahan"
};

App.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string
};

export default App;