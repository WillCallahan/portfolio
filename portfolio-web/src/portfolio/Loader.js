import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {

	render() {
		return (
			<div id="preloader">
				<div id="status">
					<div className="status-mes"><h4>{this.props.title}</h4></div>
				</div>
			</div>
		);
	}

}

Loader.defaultProps = {
	title: null
};

Loader.propTypes = {
	title: PropTypes.string.isRequired
};

export default Loader;