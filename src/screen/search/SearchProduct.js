import React from "react";
import "./SearchProduct.css";

export default class SearchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchProduct(this.state.title);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          className="form__input"
          type="text"
          name="productName"
          onChange={this.handleChange}
        />
        <button className="form__button">Search</button>
      </form>
    );
  }
}
