import React from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import ColumnsList from "./columnsList";

class ColumnReordering extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			columnReorderEntityList: this.props.headerKeys,
			columnSelectList: this.props.headerKeys,
			leftPinnedColumList: [],
			isAllSelected: false,
			maxLeftPinnedColumn: this.props.maxLeftPinnedColumn,
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
		var existingLeftPinnedList = this.state.leftPinnedColumList;
		if (!existingColumnReorderEntityList.includes(typeToBeAdded)) {
			existingColumnReorderEntityList.push(typeToBeAdded);
		} else {
			existingColumnReorderEntityList = existingColumnReorderEntityList.filter((item) => {
				if (item !== typeToBeAdded) return item;
			});
			if (existingLeftPinnedList.includes(typeToBeAdded)) {
				existingLeftPinnedList = existingLeftPinnedList.filter((item) => item !== typeToBeAdded);
			}
		}
		this.setState({
			columnReorderEntityList: existingColumnReorderEntityList,
			isAllSelected: false,
			leftPinnedColumList: existingLeftPinnedList,
		});
	};

	filterColumnReorderList = (e) => {
		var searchKey = String(e.target.value).toLowerCase();
		var existingList = this.state.columnSelectList;
		let filtererdColumnReorderList = [];
		if (searchKey.length > 0) {
			if (existingList.length === 0) {
				existingList = this.props.headerKeys;
			}
			filtererdColumnReorderList = existingList.filter((item) => {
				return item.toLowerCase().includes(searchKey);
			});
		} else {
			filtererdColumnReorderList = this.props.headerKeys;
		}
		this.setState({
			columnSelectList: filtererdColumnReorderList,
		});
	};

	reArrangeLeftPinnedColumn = (columHeaderName) => {
		var existingLeftPinnedList = this.state.leftPinnedColumList;
		var existingColumnReorderEntityList = this.state.columnReorderEntityList;
		if (!existingLeftPinnedList.includes(columHeaderName)) {
			existingLeftPinnedList.unshift(columHeaderName);
		} else {
			existingLeftPinnedList = existingLeftPinnedList.filter((item) => item !== columHeaderName);
		}
		this.setState({
			leftPinnedColumList: existingLeftPinnedList,
		});

		existingLeftPinnedList.map((item) => {
			existingColumnReorderEntityList = existingColumnReorderEntityList.filter((subItem) => subItem !== item);
			existingColumnReorderEntityList.unshift(item);
		});

		this.setState({
			columnReorderEntityList: existingColumnReorderEntityList,
		});
	};

	render() {
		return (
			<div className='columns--grid'>
				<div className='column__grid'>
					<div className='column__chooser'>
						<div className='column__header'>
							<div className=''>
								<strong>Column Chooser</strong>
							</div>
						</div>
						<div className='column__body'>
							<div>
								<input
									type='text'
									placeholder='Search column'
									className='custom__ctrl'
									onChange={this.filterColumnReorderList}
								></input>
							</div>
							<div className='column__selectAll'>
								<a
									className='column__selectTxt'
									type='button'
									onClick={() => this.selectAllToColumnReOrderList()}
								>
									Select All
								</a>
							</div>
							{this.state.columnSelectList.map((item) => {
								return (
									<div className='column__wrap' key={item}>
										<div className='column__checkbox'>
											<input
												type='checkbox'
												checked={this.state.columnReorderEntityList.includes(item)}
												onChange={() => this.addToColumnReorderEntityList(item)}
											></input>
										</div>
										<div className='column__txt'>{item}</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className='column__settings'>
						<div className='column__header'>
							<div className='column__headerTxt'>
								<strong>Column Setting</strong>
							</div>
							<div className='column__close'>
								<FontAwesomeIcon
									type='button'
									icon={faTimes}
									onClick={() => this.props.closeColumnReOrdering()}
								></FontAwesomeIcon>
							</div>
						</div>
						<div className='column__headerTxt'>
							<strong>&nbsp; &nbsp; Selected Column Count : {this.state.columnReorderEntityList.length}</strong>
						</div>
						<div className='column__headerTxt'>
							{this.state.maxLeftPinnedColumn - this.state.leftPinnedColumList.length > 0 ? (
								<strong>
									&nbsp; &nbsp; Left Pinned Column Count Remaining :{" "}
									{this.state.maxLeftPinnedColumn - this.state.leftPinnedColumList.length}
								</strong>
							) : (
								<strong style={{ color: "red" }}>&nbsp; &nbsp; Maximum Count Of Left Pin Columns REACHED</strong>
							)}
						</div>
						<div className='column__body'>
							<DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
								<ColumnsList
									list={this.state.columnReorderEntityList}
									leftPinnedColumList={this.state.leftPinnedColumList}
									maxLeftPinnedColumn={this.state.maxLeftPinnedColumn}
									reArrangeLeftPinnedColumn={this.reArrangeLeftPinnedColumn}
								/>
							</DndProvider>
						</div>
						<div className='column__footer'>
							<div className='column__btns'>
								<button className='btns' onClick={() => this.resetColumnReorderList()}>
									Reset
								</button>
								<button className='btns' onClick={() => this.props.closeColumnReOrdering()}>
									Cancel
								</button>
								<button
									className='btns btns__save'
									onClick={() =>
										this.props.updateTableAsPerRowChooser(
											this.state.columnReorderEntityList,
											this.state.leftPinnedColumList
										)
									}
								>
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ColumnReordering;
