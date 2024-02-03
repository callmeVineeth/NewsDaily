import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    const cardBodyStyle = {
      height: "500px",
      overflow: "hidden",
      position: "relative",
    };

    const buttonStyle = {
      position: "absolute",
      bottom: "10px", // Adjust the position as needed
      left: "10px", // Adjust the position as needed
    };

    return (
      <div
        className="newscards"
        style={{
          display: "flex",
          flexWrap: "column",
          justifyContents: "space-between",
          gap: "19px",
        }}
      >
        <div className="my-3">
          <div
            className="card"
            style={{
              width: "17rem",
              height: "500px",
              margin: "10px",
              boxShadow:
                "2px 3px 6px 0px rgba(0, 0, 0, 0.2),backgrouNamendColor: rgb(248, 243, 243)",
            }}
          >
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
            <span className="visually-hidden">Page Source</span>
            <img
              src={imageUrl}
              className="card-img-top"
              alt="News"
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
            />
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text" style={{ fontSize: "14px" }}>
                {description}...
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Last updated by {author} on {date}
                </small>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-primary"
                style={buttonStyle}
              >
                Read More...
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
