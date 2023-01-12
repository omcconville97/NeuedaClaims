import {render, screen} from "@testing-library/react";
import Search from "./Search";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";


test("check searchbox has no class initially applied to it", () => {
    render(
        <BrowserRouter>
        <Search />
        </BrowserRouter>
    );
    const input = screen.getByLabelText("Policy Number or Surname:");
    expect(input).not.toHaveClass("searchBoxError")
})

test('searchTerm stateful variable is updated as user types in value', () => {
    render(
        <BrowserRouter>
        <Search />
        </BrowserRouter>
    );
    const input = screen.getByLabelText("Policy Number or Surname:");
    userEvent.type(input, 'hello');
    expect(input).toHaveValue('hello');
});

test('Invalid entry in input results in a search error', () => {
    render(
        <BrowserRouter>
        <Search />
        </BrowserRouter>
    );
    const input = screen.getByLabelText("Policy Number or Surname:");
    userEvent.type(input, '  ');
    expect(input).toHaveClass('searchBoxError');
})