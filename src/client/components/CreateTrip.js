import React, { Component } from 'react'

export default class CreateTrip extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
    this.postData = this.postData.bind(this)
    this.appendPhotos = this.appendPhotos.bind(this);
  }


  appendPhotos(e) {
    let formData = new FormData();
    console.log(e.target.name);
    console.log(e.target.files);
    for (const file of e.target.files) {
      formData.append('photos', file)
    };
    this.setState({ formData });
  }

  postData() {
    fetch('/uploadFormData', {
      method: 'POST',
      body: this.state.formData,
    });
  }
  render() {
    return (
      <div className="col-lg-4">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Place" name="place" />
        </div>
        <div className="form-group">
          <input type="file" className="form-control" multiple name="photos" onChange={this.appendPhotos} />
        </div>
        <button className="btn btn-sm btn-primary" onClick={this.postData}>Submit</button>

      </div>
    )
  }
}
