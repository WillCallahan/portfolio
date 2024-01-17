import React from 'react';
import PropTypes from "prop-types";

class Profile extends React.Component {

	/**
	 * Gets rating bars that describe the proficiency of a particular skill
	 *
	 * @param rate {number} Rating
	 * @param maxRating {number} Max Rating (< {@code rate})
	 * @return {Array} Array of elements describing the rating of each skill
	 */
	static getSkillRate(rate, maxRating = 5) {
		let skillRates = [];
		for (let i = 0; i < maxRating; i++) {
			if (i < rate)
				skillRates.push(<div key={i} className="skill-rate-on"/>);
			else
				skillRates.push(<div key={i} className="skill-rate-off"/>);
		}
		return skillRates;
	}

	/**
	 * Gets all the skills that the user has
	 *
	 * @return {any[]} All the skills of the user
	 */
	getSkillSet() {
		return Object.keys(this.props.skillSet).map((skill) => {
			return (
				<div key={skill}>
					<h5>{skill}</h5>
					<div className="skill-bar">
						{Profile.getSkillRate(this.props.skillSet[skill])}
					</div>
				</div>
			);
		});
	}

	/**
	 * Gets all the available social profiles
	 *
	 * @return {Array} All the social profiles of the user
	 */
	getSocialProfiles() {
		let socialProfiles = [];
		for (let socialProfile in this.props.socialProfiles) {
			if (this.props.socialProfiles.hasOwnProperty(socialProfile) && this.props.socialProfiles[socialProfile])
				socialProfiles.push(<li key={socialProfile}>
					<a href={this.props.socialProfiles[socialProfile]} target="_blank"><i className={"fa fa-" + socialProfile + " fa-fw"}/></a>
				</li>);
		}
		return socialProfiles;
	}

	render() {
		return (
			<section id="profile" className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 headline wow bounceInDown">
							<h2>{this.props.name}</h2>
							<p>{this.props.overallSkills}</p>
						</div>
						<div className="col-md-3 col-sm-6 hidden-xs wow bounceInLeft">
							<img className="img-rounded" src={this.props.image} alt=""/>
						</div>
						<div className="col-md-3 col-sm-6 wow bounceInUp">
							<div className="profile-widget">
								<h3>Skillset</h3>
								{this.getSkillSet()}
							</div>

							<div className="profile-widget">
								<h3>Social Profiles</h3>
								<ul className="widget-social">
									{this.getSocialProfiles()}
								</ul>
							</div>
						</div>
						<div className="col-md-6 col-sm-12 wow bounceInRight">
							<h3>{this.props.descriptionTitle}</h3>
							{this.props.description}
							<h3>Military Veteran</h3>
							<p>9-years of service in the US Army</p>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

Profile.defaultProps = {
	name: "William Callahan",
	overallSkills: "Full Stack Development. AWS Configuration. Framework Experience.",
	skillSet: {
		"C#": 5,
		"Python": 4,
		"HTML/CSS/JavaScript": 4,
		"Java": 4,
	},
	socialProfiles: {
		"facebook": null,
		"linkedin": null,
		"github": null,
		"google-plus": null,
		"dribbble": null
	},
	image: "/public/images/theme/photo.jpg",
	descriptionTitle: "Professional Profile",
	description: <p>Motivated and experienced AWS Cloud Engineer. Strong competencies in application development, infrastructure, and large-scale applications.</p>
};

Profile.propTypes = {
	name: PropTypes.string,
	overallSkills: PropTypes.string,
	skillSet: PropTypes.object,
	socialProfiles: PropTypes.object,
	image: PropTypes.string,
	descriptionTitle: PropTypes.string,
	description: PropTypes.element,
};

export default Profile;