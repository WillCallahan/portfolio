import React from 'react';
import PropTypes from 'prop-types';
import Stat from "./Stat";
import $ from 'jquery';
import 'waypoints/lib/jquery.waypoints.js'

class Stats extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			smWidth: 3,
			mdWidth: 3,
		};
	}

	/**
	 * Gets the size of the stats for small screens, based on the bootstrap grid layout system
	 *
	 * @return {number} Size of each statistic
	 */
	getSmWidth() {
		return this.props.statistics.length ? (12 / this.props.statistics.length) - 1 : 1;
	}

	/**
	 * Gets the size of the stats for medium size screens, based on the bootstrap grid layout system
	 *
	 * @return {number} Size of the statistic
	 */
	getMdWidth() {
		return 12 / (this.props.statistics.length ? this.props.statistics.length + 1 : 1);
	}

	/**
	 * Gets all the statistics to show
	 *
	 * @return {any} React Statistic Elements
	 */
	getStats() {
		let _this = this;
		return this.props.statistics.map(function (statistic) {
			return (
				<div key={statistic.props.title} className={"col-md-" + _this.state.mdWidth + " col-sm-" + _this.state.smWidth + " wow bounceInDown"}>
					{statistic}
				</div>
			);
		});
	}

	componentDidMount() {
		this.setState({
			smWidth: this.getSmWidth(),
			mdWidth: this.getMdWidth()
		});
		$('#stats').waypoint(function () {
			$('.timer').each(function () {
				let counter = $(this).attr('data-count');
				$(this).delay(6000).countTo({
					from: 0,
					to: counter,
					speed: 3000,// Stats Counter Speed
					refreshInterval: 50,
				});
			});
		}, {offset: '70%', triggerOnce: true});
	}

	render() {
		return (
			<section id="stats" className="callout">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-12 hidden-xs wow bounceInLeft">
							<h3>{this.props.title}</h3>
						</div>
						{this.getStats()}
					</div>
				</div>
			</section>
		);
	}

}

Stats.defaultProps = {
	title: "My Stats",
	statistics: [
		React.createElement(Stat, {title: "Languages Learned", value: 17, icon: "fa-graduation-cap"}),
		React.createElement(Stat, {title: "Programs Written", value: 25, icon: "fa-microchip"}),
		React.createElement(Stat, {title: "Lines Written", value: 1200000, icon: "fa-file-text-o", postfix: "+"}),
	]
};

Stats.propTypes = {
	title: PropTypes.string,
	statistics: PropTypes.array
};

export default Stats;