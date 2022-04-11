import React from "react";
import { paginationRange, colors } from "./myVars";

class PaginationGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getArr() {
    let totalPages = this.props.allPages;
    let page = this.props.pageNum;
    let left = 1;
    let right = this.props.allPages;

    for (var i = 1; i <= paginationRange; i++) {
      if (page - i > 0) {
        left = page - i;
      }
      if (page + i <= totalPages) {
        right = page + i;
      }
    }

    var len = right - left + 1;
    var allPages = new Array(len);
    for (let i = 0; i < len; i++) allPages[i] = left + i;
    return (
      <div>
        {allPages.map((aPage, index) => (
          <button
            key={index}
            className={`btn btn-outline-${
              aPage === page ? " disabled" : ""
            } btn-sm`}
            style={{
              borderColor: `${colors.primary}`,
              backgroundColor: `${
                aPage === page ? colors.primary : colors.secondary
              }`,
              color: `${aPage === page ? colors.secondary : colors.primary}`,
            }}
            onClick={() => this.props.btnClicked(aPage)}
          >
            {aPage}
          </button>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className=" centered">
        <div
          className="btn-group "
          role="group"
          aria-label="Basic example"
          // styling to the midHorizontal
          // style={{
          //   left: "50%",
          //   top: "30%",
          //   transform: "translate(-50%, -50%)",
          // }}
          style={{ marginBottom: "5px", marginRight: "5px" }}
        >
          <button
            style={{ backgroundColor: `${colors.primary}` }}
            className="btn btn btn-secondary btn-sm"
            onClick={() => this.props.btnClicked("first")}
          >
            {"<< "}
          </button>
          <button
            style={{ backgroundColor: `${colors.primary}` }}
            className="btn btn btn-secondary btn-sm"
            onClick={() => this.props.btnClicked("previous")}
          >
            {"< "}
          </button>
          {this.getArr()}

          <button
            style={{ backgroundColor: `${colors.primary}` }}
            className="btn btn btn-secondary btn-sm"
            onClick={() => this.props.btnClicked("next")}
          >
            {" >"}
          </button>
          <button
            style={{ backgroundColor: `${colors.primary}` }}
            className="btn btn btn-secondary btn-sm"
            onClick={() => this.props.btnClicked("last")}
          >
            {" >>"}
          </button>
        </div>
      </div>
    );
  }
}

export default PaginationGroup;

// //usage
// <PaginationGroup
//               btnClicked={this.paginationClick}
//               pageNum={this.state.currentPageNum}
//             />
