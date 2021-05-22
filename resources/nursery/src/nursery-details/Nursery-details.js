import React from "react";
import "./Nursery-details.css";

class NurseryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { details: null };
  }
  componentDidMount() {
    fetch(
      "http://localhost/2020566/blog/public/plants/" + this.props.id,
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
          this.setState({ details: json[0] });
        }
        return json;
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-3">
          <div className="card p-0">
            <div className="card-body img-block p-0">
              <img src={this.state.details?.img} alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <h2 className="mb-2">{this.state.details?.title}</h2>
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
