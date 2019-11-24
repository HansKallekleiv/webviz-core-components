import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../private-components/uplot/uPlot.css";
import { uPlot } from "../private-components/uplot/uPlot.iife.min.js";

export default class UPlot extends Component {
    componentDidMount() {
        const elementSelector = `#${this.props.id}`;
        const el = document.querySelector(elementSelector);
        console.log('mount',this.props.data, this.props.series)
        if ((this.props.data !== 'undefined') && (this.props.series !== 'undefined')) {
            el.appendChild(this.updatePlot());
        }
    }
    componentDidUpdate() {
        const elementSelector = `#${this.props.id}`;
        const el = document.querySelector(elementSelector);
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        console.log('update',this.props.data, this.props.series)
        if ((this.props.data !== 'undefined') && (this.props.series !== 'undefined')) {
            el.appendChild(this.updatePlot());
        }
    }
    render() {
        return <div id={this.props.id} />;
    }
    updatePlot() {
        const opts = {
            width: this.props.width,
            height: this.props.height,
            series: {
                y: this.props.series,
            },
            legend: this.props.legend,
        };
        let uplot = new uPlot.Line(opts, this.props.data);
        return uplot.root;
    }
}

UPlot.defaultProps = {
    height: 800,
    width: 800,
    legend: { show: false },
};

UPlot.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string.isRequired,
    data: PropTypes.array,
    series: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
    legend: PropTypes.object,
    // setProps: PropTypes.func,
};
