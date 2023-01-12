import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./Navigation";

test('Navigation contains the link to the search page', () => {
    render(<BrowserRouter>
                <Navigation />
            </BrowserRouter>);
    const firstLink = screen.getByText("Search", {exact:false} ); //this will fail if the element doesn't exist as we have used get
    expect(firstLink).toBeInTheDocument();
    expect(firstLink).toHaveAttribute('href','/find');
});

test('Navigation contains the link to the Open Claims page', () => {
    render(<BrowserRouter>
                <Navigation />
            </BrowserRouter>);
    const firstLink = screen.getByText("Open", {exact:false} ); //this will fail if the element doesn't exist as we have used get
    expect(firstLink).toBeInTheDocument();
    expect(firstLink).toHaveAttribute('href','/openclaims');
});
