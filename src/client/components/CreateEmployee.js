import React, { Component } from 'react'

export default class CreateEmployee extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
            <input type="text" class="form-control" placeholder="Name" name="name"/>
        </div>
        <div className="form-group">
            <input type="email" class="form-control" placeholder="Email" name="email"/>
        </div>
        <div className="form-group">
            <input type="date" class="form-control" placeholder="Date of Birth" name="dob"/>
        </div>
      </div>
    )
  }
}
