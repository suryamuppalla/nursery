import {act, fireEvent, render} from "@testing-library/react";
import UpdatePlant from "./Update-plant";

describe("Update Plant render Page", () => {
    it('renders the Update Plant page', () => {
        const {getByText} = render(<UpdatePlant/>);
        expect(getByText(/Update Plant Details/i)).toBeInTheDocument();
    });

    it('render Title', () => {
        const {getByLabelText} = render(<UpdatePlant/>);
        expect(getByLabelText(/Title/i)).toBeInTheDocument();
    });

    it('render Description', () => {
        const {getByLabelText} = render(<UpdatePlant/>);
        expect(getByLabelText(/Description/i)).toBeInTheDocument();
    });

    it('render Price', () => {
        const {getByLabelText} = render(<UpdatePlant/>);
        expect(getByLabelText(/Price/i)).toBeInTheDocument();
    });

    it('render About', () => {
        const {getByLabelText} = render(<UpdatePlant/>);
        expect(getByLabelText(/About/i)).toBeInTheDocument();
    });

    it('render Rating', () => {
        const {getByLabelText} = render(<UpdatePlant/>);
        expect(getByLabelText(/Rating/i)).toBeInTheDocument();
    });

    it('render Image', () => {
        const {getByLabelText} = render(<UpdatePlant/>);
        expect(getByLabelText(/Image/i)).toBeInTheDocument();
    });

    it('render Special Features', () => {
        const {getByLabelText} = render(<UpdatePlant/>);
        expect(getByLabelText(/Special Features/i)).toBeInTheDocument();
    });

    it('renders a submit button', () => {
        const {getByText} = render(<UpdatePlant/>);
        expect(getByText("Submit")).toBeInTheDocument();
    });
});


describe("Form behaviour", () => {
    it('validate user inputs, and provides error messages', async () => {
        const {getByTestId, getByText} = render(<UpdatePlant/>)

        await act(async () => {
            const input = getByTestId('input-title');
            fireEvent.change(input, {
                target: {value: ''},
            });

            const Description = getByTestId('input-description');
            fireEvent.change(Description, {
                target: {value: ''},
            })
        });

        await act(async () => {
            fireEvent.submit(getByTestId('form'))
        });

        expect(getByText("Title is required")).toBeInTheDocument();
        expect(getByText("Description is required")).toBeInTheDocument();
    });

    it('should submit when form inputs contain text', async () => {
        const {getByTestId, queryByText} = render(<UpdatePlant/>)

        await act(async () => {
            fireEvent.submit(getByTestId('form'))
        });

        expect(queryByText("Hello this is Sample Title")).not.toBeInTheDocument();
        expect(queryByText("Hello this is Sample Description")).not.toBeInTheDocument();
    });
});
