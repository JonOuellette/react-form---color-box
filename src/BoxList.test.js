import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// SmokeTest
it("renders without crashing", function() {
    render(< BoxList />)
} )

//SnapTest
it("matches snapshot", function() {
    const {asFragment} = render (<BoxList/>);
    expect (asFragment()).toMatchSnapshot();
});

//front-end tests

it("can add a box", function () {
    const {getByLabelText, getByText} = render(< BoxList/>);

    //simulating filling out form
    const heightInput = getByLabelText(/box height/i);
    const widthInput = getByLabelText(/box width/i);
    const backgroundColorInput = getByLabelText(/box color/i);

    fireEvent.change(heightInput, { target: { value: '100' } });
    fireEvent.change(widthInput, { target: { value: '100' } });
    fireEvent.change(backgroundColorInput, { target: { value: 'red' } });

    //simulating form submission
    fireEvent.click(getByText('Add Box'));

     // Check if the box is added
    const box = getByText('X').previousSibling;
    expect(box).toHaveStyle('height: 100px');
    expect(box).toHaveStyle('width: 100px');
    expect(box).toHaveStyle('background-color: red');

})

it('can remove a box', function () {
    const { getByLabelText, getByText, queryByText } = render(<BoxList />);

})
  