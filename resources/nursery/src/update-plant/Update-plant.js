import React from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Update-plant.css";
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

async function UpdateItem(plant) {
    return fetch(`${ApiUrl}/plants/${plant.id}`, {
        method: "PUT",
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

class UpdatePlant extends React.Component {
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
        this.delete = this.delete.bind(this);
    }

    async componentDidMount() {
        await this.getData();
    }

    async delete() {
        const _url = `${ApiUrl}/plants/` + this.props.id;
        const _data = await fetch(_url, {method: 'DELETE'});
        toast.success('Plant has been deleted successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.props.history.push('/nursery-list');
        console.log(_data);
    }

    async onFileChange(e) {
        let formData = new FormData();
        formData.append('file', e.target.files[0]);
        const imgUrl = await UploadImageFile(formData);
        this.setState({img: imgUrl});
    }

    async handleSubmit(event) {
        event.preventDefault();
        await UpdateItem(this.state);
        toast.success('Plant has been updated successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.props.history.push('/nursery-details/' + this.state.id);
    }

    async getData(searchText) {
        let __url = `${ApiUrl}/plants/` + this.props.id;
        fetch(__url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                if (json && json.length) {
                    this.setState(json[0]);
                    return json[0];
                }
            }).catch((error) => {
            console.log("error", error);
        });
    }

    render() {
        return (
            <div className="d-block">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="text-primary">Update Plant Details</h3>
                                <div className="d-block mt-3">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="nursery-title">Title</label>
                                            <input
                                                value={this.state.title}
                                                onChange={(e) =>
                                                    this.setState({title: e.target.value})
                                                }
                                                type="text"
                                                placeholder="Title"
                                                className="form-control"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <textarea
                                                name="description"
                                                id="description"
                                                value={this.state.description}
                                                onChange={(e) =>
                                                    this.setState({description: e.target.value})
                                                }
                                                className="form-control"
                                                placeholder="Description"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="price">Price</label>
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
                                            <label>About</label>
                                            <textarea
                                                className="form-control"
                                                value={this.state.about}
                                                onChange={(e) =>
                                                    this.setState({about: e.target.value})
                                                }
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

                                            <div className="mt-3">
                                                <img src={ApiUrl + '/' + this.state.img} alt="" width="150"
                                                     height="150"/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Special Features</label>
                                            <textarea
                                                className="form-control"
                                                value={this.state.special_feature}
                                                onChange={(e) =>
                                                    this.setState({special_feature: e.target.value})
                                                }
                                                placeholder="Special Features"
                                            />
                                        </div>

                                        <div className="d-flex justify-content-center align-content-center">
                                            <button type="submit" className="btn btn-primary mr-3">
                                                Submit
                                            </button>

                                            <button onClick={this.delete} type="button"
                                                    className="btn btn-danger">Delete
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

export default UpdatePlant;
