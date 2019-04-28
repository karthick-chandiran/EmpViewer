import React, { Component } from 'react'

export default class CreateEmployee extends Component {

  constructor(){
    super();
    this.state = {

    }
  }

  imagesUpload(e){
    console.log("hello");
    const images = e.target.files;
    console.log(images);
  }

  render() {
    return (
      <div className="col-lg-4">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Title" name="title" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Place" name="place" />
        </div>
        <div className="">
          <label>Images</label>
          <input type="file" name="images" multiple onChange={this.imagesUpload}/>
        </div>
        <div className="form-group">
          <input type="date" className="form-control" placeholder="Date" name="dot" />
        </div>
        <div className="form-group">
          <textarea className="form-control" placeholder="About Trip" name="tripdetails" />
        </div>
        <button className="btn btn-sm btn-primary">Submit</button>
      </div>
    )
  }
}
