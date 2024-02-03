import React, { Component } from "react";

export class Sidebar extends Component {
  constructor(){
    super();
    this.state={
      selectedCategory: "Top Stories"
    }
  }

  
  handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    this.setState({ selectedCategory });
    this.props.onCategoryChange(selectedCategory);
  };

  render() {
    return (
      <div className="Side-menu">
        <div>
          <div className="sidebar">
            <input className="searchbar"
              type="search"
              id="search-input"
              placeholder="Search docs..."
              aria-label="Search docs for..."
              autoComplete="off"
            />

            <br />
            <ul className="list-items">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Subscriptions</li>
            </ul>

          
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
