import React from "react";
import {Link} from "react-router-dom";

class NurseryList extends React.Component {
    render() {
        return (
            <div className="d-block">

                <div className="row">
                    <div className="col-lg-4">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search..."/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {[1,2,3,4,5,6,7].map(function (object, i) {
                        return (
                            <div className="col-lg-4" key={i}>
                                <div className="card">
                                    <div className="card-body img-block">
                                        <img
                                            src="https://i.picsum.photos/id/784/536/354.jpg?hmac=3bwfPXSJzZB8mNGtUHfgE6DVYZBaLuICXe0diTSRWKI"
                                            alt=""/>

                                        <h3 className="mt-3 mb-3">Nursery Title</h3>
                                        <p className="">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                            in a
                                            piece
                                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                            McClintock,
                                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                                            more
                                            obscure
                                        </p>

                                        <div className="d-block mt-3">
                                            <Link className="btn btn-primary" to="/nursery-details/sss">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default NurseryList;
