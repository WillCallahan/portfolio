import PropTypes from "prop-types";

import Navigation from "../portfolio/Navigation";
import Introduction from "../portfolio/Introduction";
import HeadContact from "../portfolio/HeadContact";
import Profile from "../portfolio/Profile";
import Stats from "../portfolio/Stats";
import Capabilities from "../portfolio/Capabilities";
// import Status from "../portfolio/Status";
import Resume from "../portfolio/Resume";
import Works from "../portfolio/Works";
import Contact from "../portfolio/Contact";
import Footer from "../portfolio/Footer";
import Loader from "../portfolio/Loader";
import Slider from "../portfolio/Slider";
import Certifications from "../portfolio/Certifications";

const App = ({ name, repository, socialProfiles, profileImage }) => {
	return (
		<div className="wrapper">
			<Loader title="William Callahan" />

			<Navigation name={name} />

			<Introduction name={name} />

			<HeadContact />

			<Profile name={name} socialProfiles={socialProfiles} image={profileImage} />

			<Certifications />

			<Capabilities />

			<Stats />

			{/*<Status*/}
			{/*	descriptionTitle="Currently Unavailable"*/}
			{/*	description={<p>I am not currently looking for freelance work or new positions.</p>}*/}
			{/*/>*/}

			<Resume />

			<Slider />

			<Works />

			<Contact />

			<Footer description={<span>&copy; 2025 {name}, All Rights Reserved.</span>} github={repository} />
		</div>
	);
};

App.defaultProps = {
	title: "Portfolio",
	name: "William Callahan",
	repository: "https://github.com/WillCallahan/portfolio",
	socialProfiles: {
		github: "https://github.com/WillCallahan",
		linkedin: "https://www.linkedin.com/in/william-callahan-32ba31109/",
	},
	profileImage: "/images/theme/Profile3.png",
};

App.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	repository: PropTypes.string,
	socialProfiles: PropTypes.object,
	profileImage: PropTypes.string,
};

export default App;
