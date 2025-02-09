import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Stat from "./Stat";
import $ from "jquery";
import "waypoints/lib/jquery.waypoints.js";

const Stats = ({ title, statistics }) => {
	const [smWidth, setSmWidth] = useState(3);
	const [mdWidth, setMdWidth] = useState(3);

	useEffect(() => {
		const getSmWidth = () => (statistics.length ? 12 / statistics.length - 1 : 1);
		const getMdWidth = () => (statistics.length ? 12 / (statistics.length + 1) : 1);

		setSmWidth(getSmWidth());
		setMdWidth(getMdWidth());

		$("#stats").waypoint(
			function () {
				$(".timer").each(function () {
					let counter = $(this).attr("data-count");
					$(this).delay(6000).countTo({
						from: 0,
						to: counter,
						speed: 800,
						refreshInterval: 30,
					});
				});
				this.destroy();
			},
			{ offset: "70%", triggerOnce: true }
		);
	}, [statistics]);

	return (
		<section id="stats" className="callout">
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-12 hidden-xs wow bounceInLeft">
						<h3>{title}</h3>
					</div>
					{statistics.map((statistic, index) => (
						<div
							key={statistic.props.title || index}
							className={`col-md-${mdWidth} col-sm-${smWidth} wow bounceInDown`}
						>
							{statistic}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

Stats.defaultProps = {
	title: "My Stats",
	statistics: [
		(<Stat key="st-1" title="Cloud Certs" value={7} icon="fa-graduation-cap" />),
		(<Stat key="st-2" title="Languages" value={17} icon="fa-microchip" />),
		(<Stat key="st-3" title="Lines Written" value={1200000} icon="fa-file-text-o" postfix="+" />),
	],
};

Stats.propTypes = {
	title: PropTypes.string,
	statistics: PropTypes.arrayOf(PropTypes.element),
};

export default Stats;
