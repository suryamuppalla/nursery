import {render, act, fireEvent} from "@testing-library/react";
import AddNewPlant from "./Add-new-plant";


describe("AddNewPlant render Page", () => {
    it('renders the Add New Plant page', () => {
        const {getByText} = render(<AddNewPlant/>);
        expect(getByText(/Add New Plant Details/i)).toBeInTheDocument();
    });

    it('render Title', () => {
        const {getByLabelText} = render(<AddNewPlant/>);
        expect(getByLabelText(/Title/i)).toBeInTheDocument();
    });

    it('render Description', () => {
        const {getByLabelText} = render(<AddNewPlant/>);
        expect(getByLabelText(/Description/i)).toBeInTheDocument();
    });

    it('render Price', () => {
        const {getByLabelText} = render(<AddNewPlant/>);
        expect(getByLabelText(/Price/i)).toBeInTheDocument();
    });

    it('render About', () => {
        const {getByLabelText} = render(<AddNewPlant/>);
        expect(getByLabelText(/About/i)).toBeInTheDocument();
    });

    it('render Rating', () => {
        const {getByLabelText} = render(<AddNewPlant/>);
        expect(getByLabelText(/Rating/i)).toBeInTheDocument();
    });

    it('render Image', () => {
        const {getByLabelText} = render(<AddNewPlant/>);
        expect(getByLabelText(/Image/i)).toBeInTheDocument();
    });

    it('render Special Features', () => {
        const {getByLabelText} = render(<AddNewPlant/>);
        expect(getByLabelText(/Special Features/i)).toBeInTheDocument();
    });

    it('renders a submit button', () => {
        const {getByText} = render(<AddNewPlant/>);
        expect(getByText("Submit")).toBeInTheDocument();
    });
});


describe("Form behaviour", () => {
    it('validate user inputs, and provides error messages', async () => {
        const {getByTestId, getByText} = render(<AddNewPlant/>)

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
        const {getByTestId, getByLabelText, queryByText} = render(<AddNewPlant/>)

        await act(async () => {
            fireEvent.change(getByLabelText(/Title/i), {
                target: {value: 'Hello this is title'},
            });

            fireEvent.change(getByLabelText(/Description/i), {
                target: {value: 'Hello this is Description'},
            })
        });

        await act(async () => {
            fireEvent.submit(getByTestId('form'))
        });

        expect(queryByText("User Name is required")).not.toBeInTheDocument();
        expect(queryByText("Password is required")).not.toBeInTheDocument();
    });
});
