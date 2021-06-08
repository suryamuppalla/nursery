import {render, screen} from "@testing-library/react";
import {Router} from "react-router-dom";
import {createBrowserHistory, createMemoryHistory} from "history";
import {MemoryRouter} from 'react-router-dom'
import NurseryList from "./Nursery-list";
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme'

configure({adapter: new Adapter()});
describe("Nursery List render Page", () => {
    it("should display Login", () => {
        const history = createBrowserHistory();
        render(
            <Router history={history}>
                <NurseryList/>
            </Router>
        );
        const linkElement = screen.getByText(/Nursery Items/i);
        expect(linkElement).toBeInTheDocument();
    });
    it('renders without crashing', () => {
        shallow(<NurseryList/>);
    });
});

test('rendering a component that uses useLocation', () => {
    const history = createMemoryHistory()
    const route = '/some-route'
    history.push(route)
    render(
        <Router history={history}>
            <NurseryList/>
        </Router>
    )

    expect(screen.getByTestId('main')).toBeDefined();
})

test('full app rendering/navigating', () => {
    render(<NurseryList/>, {wrapper: MemoryRouter})

    // verify page content for expected route
    expect(screen.getByText(/Nursery Items/i)).toBeInTheDocument()
})
