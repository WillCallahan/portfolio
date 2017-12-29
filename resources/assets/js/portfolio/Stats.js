import React from 'react';
import PropTypes from 'prop-types';
import Stat from "./Stat";

class Stats extends React.Component {

    constructor() {
        super();
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
		React.createElement(Stat, {title: "Languages Learned", value: 12, icon: "fa-graduation-cap"}),
		React.createElement(Stat, {title: "Programs Written", value: 20, icon: "fa-microchip"}),
        React.createElement(Stat, {title: "Lines Written", value: 400000, icon: "fa-file-text-o", postfix: "+"}),
    ]
};

Stats.propTypes = {
    title: PropTypes.string,
    statistics: PropTypes.array
};

export default Stats;