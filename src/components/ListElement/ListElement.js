import s from './ListElement.module.css';
import PropTypes from 'prop-types';

const ListElement = ({ elData, deleteBtn }) => {
  const deleteItem = e => {
    // console.log(deleteBtn);
    deleteBtn(elData.id);
  };
  return (
    <li className={s.item}>
      {elData.name}: {elData.number}
      <button type="button" data-id={elData.id} onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
};

ListElement.propTypes = { elData: PropTypes.object, deleteBtn: PropTypes.func };

export default ListElement;
