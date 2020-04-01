import React from 'react';
const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem
  } = props;
  return (
    <ul className="list-group">
      {items.map(i => (
        <li
          key={i[valueProperty]}
          onClick={() => onItemSelect(i)}
          className={
            i === selectedItem ? 'list-group-item active' : 'list-group-item'
          }
        >
          {i[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

export default ListGroup;
