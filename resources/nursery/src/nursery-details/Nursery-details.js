import React from "react";
import './Nursery-details.css'

class NurseryDetails extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3">
                    <div className="card p-0">
                        <div className="card-body img-block p-0">
                            <img
                                src="https://i.picsum.photos/id/784/536/354.jpg?hmac=3bwfPXSJzZB8mNGtUHfgE6DVYZBaLuICXe0diTSRWKI"
                                alt=""/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-9">
                    <h2 className="mb-2">Nursery Title</h2>
                    <p>Category: Bonsai</p>

                    <div className="mt-3">
                        <label>Description:</label>
                        <p className="">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                            sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                            Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                            popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                            amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="d-block mt-3">
                        <label htmlFor="additional">Additional Details</label>
                        <p className="">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                            sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                            Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                            popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                            amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NurseryDetails;
