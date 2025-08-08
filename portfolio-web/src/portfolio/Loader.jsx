import PropTypes from 'prop-types';

const Loader = (props) => {
	return (
		<div id="preloader" data-testid="loader" className="loader" role="status" aria-label="Loading">
			<div id="status">
				<div className="status-mes">
					<h4>{props.title || 'Loading...'}</h4>
					{/* Add spinner elements for animation */}
					<div data-testid="spinner-1" className="spinner-element"></div>
					<div data-testid="spinner-2" className="spinner-element"></div>
					<div data-testid="spinner-3" className="spinner-element"></div>
				</div>
			</div>
		</div>
	);
}

Loader.defaultProps = {
	title: 'Loading...'
};

Loader.propTypes = {
	title: PropTypes.string
};

export default Loader;