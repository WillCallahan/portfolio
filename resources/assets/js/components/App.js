import React from "react";
import PropTypes from "prop-types";

import Navigation from "../portfolio/Navigation";
import Introduction from "../portfolio/Introduction";
import HeadContact from "../portfolio/HeadContact";
import Profile from "../portfolio/Profile";
import Stats from "../portfolio/Stats";
import Capabilities from "../portfolio/Capabilities";
import Status from "../portfolio/Status";
import Resume from "../portfolio/Resume";
import Slider from "../portfolio/Slider";
import Works from "../portfolio/Works";
import Contact from "../portfolio/Contact";
import Footer from "../portfolio/Footer";
import Loader from "../portfolio/Loader";

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

				<Loader title="William Callahan"/>

				<Navigation name={this.props.name}/>

				<Introduction name={this.props.name}/>

				<HeadContact/>

				<Profile name={this.props.name} socialProfiles={this.props.socialProfiles} image={this.props.profileImage}/>

				<Stats/>

				<Capabilities/>

				<Status descriptionTitle={"Currently Unavailable"} description={<p>I am not currently looking for freelance work or new positions.</p>}/>

				<Resume/>

				<Slider/>

				<Works/>

				<Contact/>

				<Footer description={<span>&copy; 2017 {this.props.name}, All Rights Reserved.</span>} github={this.props.repository}/>

			</div>
		);
	}

}

App.defaultProps = {
	title: "Portfolio",
	name: "William Callahan",
	repository: "https://github.com/WillCallahan/portfolio",
	socialProfiles: {
		github: "https://github.com/WillCallahan",
		linkedin: "https://www.linkedin.com/in/william-callahan-32ba31109/"
	},
	profileImage: "/public/images/theme/Profile.jpg"
};

App.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	repository: PropTypes.string,
	socialProfiles: PropTypes.object
};

export default App;