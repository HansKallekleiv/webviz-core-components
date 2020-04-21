/* eslint no-magic-numbers: 0 */
import React, { Component } from "react";

import { UPlot } from "../lib";

const data = require("./example-data/uplot.json");
var series = [];

for (let i = 1; i < data.length; i++) {
    series.push({
        label: i,
        width: 1,
        color: "#243746",
    });
}
class App extends Component {
    constructor() {
        super();

        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {

        return <UPlot id={"test"} data={data} series={series} />;
    }
}

export default App;
