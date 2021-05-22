import React from "react";
import "./Add-new-plant.css";

async function AddNewItem(plant) {
  return fetch("http://localhost/2020566/blog/public/plants", {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    AddNewItem(this.state).then(() => {});
  }

  render() {
    return (
      <div className="d-block">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="card">
              <div className="card-body">
                <h2>Add New Plant Details</h2>
                <div className="d-block mt-3">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="nursery-title">Title</label>
                      <input
                        value={this.state.title}
                        onChange={(e) =>
                          this.setState({ title: e.target.value })
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
                          this.setState({ description: e.target.value })
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
                          this.setState({ price: e.target.value })
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
                          this.setState({ about: e.target.value })
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
                          this.setState({ rating: e.target.value })
                        }
                        placeholder="Rating"
                        id="rating"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="img">Image URL</label>
                      <input
                        type="url"
                        value={this.state.img}
                        onChange={(e) => this.setState({ img: e.target.value })}
                        placeholder="Image URL"
                        id="img"
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label>Special Features</label>
                      <textarea
                        className="form-control"
                        value={this.state.special_feature}
                        onChange={(e) =>
                          this.setState({ special_feature: e.target.value })
                        }
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
