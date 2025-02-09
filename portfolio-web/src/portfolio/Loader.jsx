import PropTypes from 'prop-types';

const Loader = (props) => {
	return (
		<div id="preloader">
			<div id="status">
				<div className="status-mes"><h4>{props.title}</h4></div>
			</div>
		</div>
	);
}

Loader.defaultProps = {
	title: null
};

Loader.propTypes = {
	title: PropTypes.string.isRequired
};

export default Loader;