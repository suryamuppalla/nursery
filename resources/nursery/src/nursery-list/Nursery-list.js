import React from "react";
import { Link } from "react-router-dom";

class NurseryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { plants: [] };
  }
  componentDidMount() {
    this.getData("");
  }

  getData(searchText) {
    let __url = "http://localhost/2020566/blog/public/plants";
    if (searchText) {
      __url = __url + `?searchText=${searchText}`;
    }
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
        console.log(json);
        this.setState({ plants: json });
        return json;
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <div className="d-block">
        <div className="row">
          <div className="col-lg-4">
            <div className="form-group">
              <input
                onChange={(e) => this.getData(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        <div className="row">
          {this.state.plants.map(function (plant, i) {
            return (
              <div className="col-lg-4" key={i}>
                <div className="card mb-3">
                  <div className="card-body img-block">
                    <img src={plant.img} alt="Plant logo" />

                    <h3 className="mt-3 mb-3">{plant.title}</h3>
                    <p className="">{plant.description}</p>

                    <div className="d-block mt-3">
                      <Link
                        className="btn btn-primary"
                        to={"nursery-details/" + plant.id}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NurseryList;
