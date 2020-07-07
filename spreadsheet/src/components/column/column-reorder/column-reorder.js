import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "../column-reorder/column-reorder.scss";

class ColumnReordering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnReorderEntityList: [],
      isAllSelected: false,
    };
  }

  resetColumnReorderList = () => {
    this.setState({
      columnReorderEntityList: [],
      isAllSelected: false,
    });
  };

  selectAllToColumnReOrderList = () => {
    this.resetColumnReorderList();
    this.setState({
      columnReorderEntityList: this.props.headerKeys,
      isAllSelected: true,
    });
  };

  addToColumnReorderEntityList = (typeToBeAdded) => {
    var existingColumnReorderEntityList = this.state.columnReorderEntityList;
    if (!existingColumnReorderEntityList.includes(typeToBeAdded)) {
      existingColumnReorderEntityList.push(typeToBeAdded);
    } else {
      existingColumnReorderEntityList = existingColumnReorderEntityList.filter(
        (item) => {
          if (item !== typeToBeAdded) return item;
        }
      );
    }
    this.setState({
      columnReorderEntityList: existingColumnReorderEntityList,
      isAllSelected: false,
    });
  };
  render() {
    return (
      <div className="columns--grid">
        <div className="column__grid">
          <div className="column__chooser">
            <div className="column__header">
              <div className="">
                <strong>Column Chooser</strong>
              </div>
            </div>
            <div className="column__body">
              <div>
                <input
                  type="text"
                  placeholder="Search column"
                  className="custom__ctrl"
                ></input>
              </div>
              <div className="column__selectAll">
                <a
                  className="column__selectTxt"
                  type="button"
                  onClick={() => this.selectAllToColumnReOrderList()}
                >
                  Select All
                </a>
              </div>
              {this.props.headerKeys.map((item) => {
                return (
                  <div className="column__wrap" key={item}>
                    <div className="column__checkbox">
                      <input
                        type="checkbox"
                        checked={this.state.columnReorderEntityList.includes(
                          item
                        )}
                        onChange={() => this.addToColumnReorderEntityList(item)}
                      ></input>
                    </div>
                    <div className="column__txt">{item}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="column__settings">
            <div className="column__header">
              <div className="column__headerTxt">
                <strong>Column Setting</strong>
              </div>
              <div className="column__close">
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
              </div>
            </div>
            <div className="column__headerTxt">
              <strong>
               &nbsp; &nbsp; Selected Column Count :{" "}
                {this.state.columnReorderEntityList.length}
              </strong>
            </div>
            <div className="column__body">
              {this.state.columnReorderEntityList.map((item) => {
                return (
                  <div className="column__reorder" key={item}>
                    <div className="">
                      <FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
                    </div>
                    <div className="">{item}</div>
                    <div className="column__wrap">
                      <div className="column__checkbox">
                        <input type="checkbox"></input>
                      </div>
                      <div className="column__txt">Pin Left</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="column__footer">
              <div className="column__btns">
                <button
                  className="btns"
                  onClick={() => this.resetColumnReorderList()}
                >
                  Reset
                </button>
                <button
                  className="btns"
                  onClick={() => this.props.closeColumnReOrdering()}
                >
                  Cancel
                </button>
                <button className="btns btns__save">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColumnReordering;
