import PropTypes from "prop-types";

const Profile = ({ name, overallSkills, skillSet, socialProfiles, image, descriptionTitle, description }) => {

	/**
	 * Gets rating bars that describe the proficiency of a particular skill
	 *
	 * @param {number} rate - Rating
	 * @param {number} maxRating - Max Rating (default 5)
	 * @return {Array} Array of elements describing the rating of each skill
	 */
	const getSkillRate = (rate, maxRating = 5) => {
		return Array.from({ length: maxRating }, (_, i) => (
			<div key={i} className={i < rate ? "skill-rate-on" : "skill-rate-off"} />
		));
	};

	/**
	 * Gets all the skills that the user has
	 *
	 * @return {JSX.Element[]} All the skills of the user
	 */
	const getSkillSet = () => {
		return Object.entries(skillSet).map(([skill, rating]) => (
			<div key={skill}>
				<h5>{skill}</h5>
				<div className="skill-bar">{getSkillRate(rating)}</div>
			</div>
		));
	};

	/**
	 * Gets all the available social profiles
	 *
	 * @return {JSX.Element[]} All the social profiles of the user
	 */
	const getSocialProfiles = () => {
		return Object.entries(socialProfiles)
			.filter(([_, url]) => url)
			.map(([platform, url]) => (
				<li key={platform}>
					<a href={url} target="_blank" rel="noopener noreferrer">
						<i className={`fa fa-${platform} fa-fw`} />
					</a>
				</li>
			));
	};

	return (
		<section id="profile" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12 headline wow bounceInDown">
						<h2>{name}</h2>
						<p>{overallSkills}</p>
					</div>
					<div className="col-md-3 col-sm-6 hidden-xs" data-aos="fade-right">
						<img className="img-rounded" src={image} alt="Profile" />
					</div>
					<div className="col-md-3 col-sm-6" data-aos="fade-up">
						<div className="profile-widget">
							<h3>Skillset</h3>
							{getSkillSet()}
						</div>
						<div className="profile-widget">
							<h3>Social Profiles</h3>
							<ul className="widget-social">{getSocialProfiles()}</ul>
						</div>
					</div>
					<div className="col-md-6 col-sm-12" data-aos="fade-left">
						<h3>{descriptionTitle}</h3>
						{description}
						<h3>Military Veteran</h3>
						<p>Nine years of service in the US Army</p>
					</div>
				</div>
			</div>
		</section>
	);
};

Profile.defaultProps = {
	name: "William Callahan",
	overallSkills: "Senior Cloud Engineer. Multi-Cloud Experience. High-throughput API Designer.",
	skillSet: {
		"C#": 5,
		"Python": 5,
		"HTML/CSS/JavaScript": 5,
		"Java": 4,
	},
	socialProfiles: {
		facebook: null,
		linkedin: null,
		github: null,
		"google-plus": null,
		dribbble: null,
	},
	image: "/images/theme/photo.jpg",
	descriptionTitle: "Professional Profile",
	description: (
		<p>
			Cloud Software Engineer with eight years of experience designing and implementing scalable, high-performance
			multi-cloud architectures. Proven ability to lead cross-functional teams to deliver mission-critical solutions
			of complex applications while improving security and reducing costs.
		</p>
	),
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
