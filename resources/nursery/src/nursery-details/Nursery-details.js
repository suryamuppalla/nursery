import React from "react";
import "./Nursery-details.css";
import {ApiUrl} from "../Constant";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

class NurseryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {details: null};

        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        fetch(
            `${ApiUrl}/plants/` + this.props.id,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                if (json && json.length) {
                    this.setState({details: json[0]});
                }
                return json;
            })
            .catch((error) => {
                console.log("error", error);
            });
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

    render() {
        return (
            <div className="row">
                <div className="col-lg-3">
                    <div className="card p-0 border-0">
                        <div className="card-body border-0 img-block p-0">
                            <img src={ApiUrl + '/' + this.state.details?.img} alt=""/>

                            <div className="d-block text-center mt-4 mb-4">
                                <Link to={'/update-details/' + this.props.id} className="btn btn-primary">
                                    Update Plant Details
                                </Link>

                                <button className="btn btn-danger mt-3" onClick={this.delete}>
                                    Delete Plant
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-9">
                    <h2 className="mb-2 text-capitalize">{this.state.details?.title}</h2>
                    <p>Category: {this.state.details?.category}</p>

                    <p>Price: {this.state?.details?.price}</p>
                    <p>Rating: {this.state?.details?.rating}</p>

                    <div className="mt-3">
                        <label>Description:</label>
                        <p className="">
                            {this.state.details?.description}
                        </p>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="d-block mt-3">
                        <label htmlFor="additional">Additional Details</label>
                        <p className="">
                            {this.state?.details?.special_feature}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NurseryDetails;
