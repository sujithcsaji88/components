import React, { useState } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import { ItemTypes } from "./ItemTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import ColumnItem from "./columnItem";

const ColumnsList = (props) => {
	const columnsArray = props.list.map((item) => {
		return {
			id: item,
			text: (
				<div className='column__reorder' key={item}>
					<div className=''>
						<FontAwesomeIcon icon={faAlignJustify}></FontAwesomeIcon>
					</div>
					<div className=''>{item}</div>
					<div className='column__wrap'>
						<div className='column__checkbox'>
							<input
								type='checkbox'
								checked={props.leftPinnedColumList.includes(item)}
								disabled={
									props.maxLeftPinnedColumn - props.leftPinnedColumList.length <= 0
										? props.leftPinnedColumList.includes(item)
											? false
											: true
										: false
								}
								onChange={() => props.reArrangeLeftPinnedColumn(item)}
							></input>
						</div>
						<div className='column__txt'>Pin Left</div>
					</div>
				</div>
			),
		};
	});
	const [columns, setColumns] = useState([...columnsArray]);

	debugger;
	const moveColumn = (id, atIndex) => {
		const { column, index } = findColumn(id);
		setColumns(
			update(columns, {
				$splice: [
					[index, 1],
					[atIndex, 0, column],
				],
			})
		);
	};

	const findColumn = (id) => {
		const column = columns.filter((c) => `${c.id}` === id)[0];
		return {
			column,
			index: columns.indexOf(column),
		};
	};

	const [, drop] = useDrop({ accept: ItemTypes.COLUMN });

	return (
		<React.Fragment>
			<div ref={drop} style={{ display: "flex", flexWrap: "wrap" }}>
				{columns.map((column) => (
					<ColumnItem
						key={column.id}
						id={`${column.id}`}
						text={column.text}
						moveColumn={moveColumn}
						findColumn={findColumn}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

export default ColumnsList;
