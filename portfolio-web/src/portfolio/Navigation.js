import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * Gets all the main navigation tabs
     *
     * @return {any[]} All main navigation tabs
     */
    getTabs() {
        return Object.keys(this.props.tabs).map(tab => {
            return (<li key={tab}><a href={this.props.tabs[tab]}>{tab}</a></li>)
        });
    }

    componentDidMount() {
		let navbar = $('.navbar');
		let navHeight = navbar.height();

		$(window).scroll(function () {
			if ($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});

		if ($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		}

		$(window).resize(function () {
			if ($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
			}
			else {
				navbar.removeClass('custom-collapse');
			}
		});
    }

    render() {
        return (
            <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="#">{this.props.name}</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            {this.getTabs()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

Navigation.defaultProps = {
    name: "William Callahan",
    tabs: {
        "Home": "#intro",
        "Profile": "#profile",
        "Services": "#services",
        "Resume": "#resume",
        "Contact": "#contact",
    }
};

Navigation.propTypes = {
    name: PropTypes.string,
    tabs: PropTypes.object
};

export default Navigation;
