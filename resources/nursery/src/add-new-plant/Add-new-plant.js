import React from "react";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Add-new-plant.css";
import {ApiUrl} from "../Constant";

async function UploadImageFile(formData) {
    return fetch(`${ApiUrl}/plants/upload`, {
        method: `POST`,
        body: formData
    }).then(response => {
        return response.json();
    }).then(json => json.data).catch(error => {
        console.log(error);
        return error;
    });
}

async function AddNewItem(plant) {
    return fetch(`${ApiUrl}/plants`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
    })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            return json;
        })
        .catch((error) => {
            console.log("error", error);
        });
}

class AddNewPlant extends React.Component {
    constructor(props) {
        super(props);
        // ['title', 'description', 'price', 'about', 'rating', 'img', 'special_feature']
        this.state = {
            title: "",
            description: "",
            price: "",
            about: "",
            rating: "",
            img: "",
            special_feature: "",
        };
        this.onFileChange = this.onFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    onFileChange(e) {
        console.log(e);
        console.log(typeof e.target.files[0]);
        this.setState({img: e.target.files[0]});
    }

    async handleSubmit(event) {
        event.preventDefault();

        if (typeof this.state.img === 'object') {
            let formData = new FormData();
            formData.append('file', this.state.img);
            const imgUrl = await UploadImageFile(formData);
            this.setState({img: imgUrl});
            const data = await AddNewItem(this.state);
            toast.success('New Plant Added Successfully');
            this.props.history.push('/nursery-list');
            console.log(data);
        }
    }

    render() {
        return (
            <div className="d-block">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="text-primary">Add New Plant Details</h3>
                                <div className="d-block mt-3">
                                    <form onSubmit={this.handleSubmit} data-testid="form">
                                        <div className="form-group">
                                            <label data-testid="title-label" htmlFor="nursery-title">Title</label>
                                            <input data-testid="input-title" id="nursery-title"
                                                value={this.state.title}
                                                onChange={(e) =>
                                                    this.setState({title: e.target.value})
                                                }
                                                type="text"
                                                placeholder="Title"
                                                className="form-control"
                                            />
                                            <span className="d-none">Title is required</span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <textarea data-testid="input-description"
                                                name="description"
                                                id="description"
                                                value={this.state.description}
                                                onChange={(e) =>
                                                    this.setState({description: e.target.value})
                                                }
                                                className="form-control"
                                                placeholder="Description"
                                            />
                                            <span className="d-none">Description is required</span>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="Price">Price</label>
                                            <input
                                                type="number"
                                                value={this.state.price}
                                                onChange={(e) =>
                                                    this.setState({price: e.target.value})
                                                }
                                                placeholder="Price"
                                                id="Price"
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="about">About</label>
                                            <textarea
                                                className="form-control"
                                                value={this.state.about}
                                                onChange={(e) =>
                                                    this.setState({about: e.target.value})
                                                }
                                                id="about"
                                                placeholder="About"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="rating">Rating</label>
                                            <input
                                                type="number"
                                                value={this.state.rating}
                                                onChange={(e) =>
                                                    this.setState({rating: e.target.value})
                                                }
                                                placeholder="Rating"
                                                id="rating"
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="img">Image</label>
                                            <input
                                                type="file"
                                                onChange={this.onFileChange}
                                                placeholder="Image"
                                                id="img" className="form-control"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="special">Special Features</label>
                                            <textarea
                                                className="form-control"
                                                value={this.state.special_feature}
                                                onChange={(e) =>
                                                    this.setState({special_feature: e.target.value})
                                                }
                                                id="special"
                                                placeholder="Special Features"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNewPlant;
