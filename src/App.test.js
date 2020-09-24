import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App, { ColorList, colorsArray } from "./App";

/**************************************************************************************************
 * Volunteers: add your tests here. They should be failing, but the students should be able to make
 * them pass by editing the other files.
 **************************************************************************************************/


describe("when rendering the App component", () => {
  test("ColorList can render all the colors from a colors prop",()=>{
    const { getByText } = render(<ColorList colors={colorsArray} />);
    const textElement1 = getByText('Red');
    const textElement2 = getByText('Orange');
    const textElement3 = getByText('Yellow');
    const textElement4 = getByText('Green');
    const textElement5 = getByText('Blue');
    const textElement6 = getByText('Indigo');
    const textElement7 = getByText('Violet');
    expect(textElement1).toBeInTheDocument();
    expect(textElement2).toBeInTheDocument();
    expect(textElement3).toBeInTheDocument();
    expect(textElement4).toBeInTheDocument();
    expect(textElement5).toBeInTheDocument();
    expect(textElement6).toBeInTheDocument();
    expect(textElement7).toBeInTheDocument();
  });
});

