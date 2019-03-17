import React, { Component } from 'react'

export default class CreateEmployee extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" name="name"/>
        </div>
        <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" name="email"/>
        </div>
        <div className="form-group">
            <input type="date" className="form-control" placeholder="Date of Birth" name="dob"/>
        </div>
        <button className="btn btn-sm btn-primary">Submit</button>
      </div>
    )
  }
}
