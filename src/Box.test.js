import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./Box";

// SmokeTest
it("renders without crashing", function() {
    render(< Box />)
} )

//SnapTest
it("matches snapshot", function() {
    const {asFragment} = render (<Box/>);
    expect (asFragment()).toMatchSnapshot();
});