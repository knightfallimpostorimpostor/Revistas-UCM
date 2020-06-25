import React, { Component } from "react";
import UserareaDataService from "../services/userarea.service";

export default class AddUserarea extends Component {
  constructor(props) {
    super(props);
    this.onChangeId_user = this.onChangeId_user.bind(this);
    this.onChangeId_area = this.onChangeId_area.bind(this);
    this.saveUserarea = this.saveUserarea.bind(this);
    this.newUserarea = this.newUserarea.bind(this);

    this.state = {
      id: null,
      id_user: "null",
      id_area: "null",

      submitted: false
    };
  }

  onChangeId_user(e) {
    this.setState({
      id_user: e.target.value
    });
  }

  onChangeId_area(e) {
    this.setState({
      id_area: e.target.value
    });
  }

  saveUserarea() {
    var data = {
        id_user: this.state.id_user,
        id_area: this.state.id_area
    };

    UserareaDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          id_user: response.data.id_user,
          id_area: response.data.id_area,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUserarea() {
    this.setState({
      id: null,
      id_user: "null",
      id_area: "null",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="id_user">Id_user</label>
              <input
                type="text"
                className="form-control"
                id="id_user"
                required
                value={this.state.id_user}
                onChange={this.onChangeId_user}
                name="id_user"
              />
            </div>

            <div className="form-group">
              <label htmlFor="id_area">Id_area</label>
              <input
                type="text"
                className="form-control"
                id="id_area"
                required
                value={this.state.id_area}
                onChange={this.onChangeId_area}
                name="id_area"
              />
            </div>

            <button onClick={this.saveUserarea} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}