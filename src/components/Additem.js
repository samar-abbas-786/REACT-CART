import React, { Component } from "react";

class Additem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Price: "",
    };
  }

  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.additem(this.state.Name, (this.state.Price)*1);
        }}
      >
        <div className="mb-3 col-6">
          <label htmlFor="inputName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            aria-describedby="Name"
            name="Name"
            onChange={(e) => {
              this.setState({ Name: e.currentTarget.value });
            }}
            value={this.state.Name}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="Price"
            name="Price"
            onChange={(e) => {
              this.setState({ Price: (e.currentTarget.value)*1 });
            }}
            value={this.state.Price * 1}
          />
        </div>

        <button type="submit" className="btn btn-success col-2">
          Add
        </button>
      </form>
    );
  }
}

export default Additem;
