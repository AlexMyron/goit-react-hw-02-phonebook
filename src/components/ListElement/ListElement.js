import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';

import s from './ListElement.module.css';

const ListElement = ({ elData, deleteBtn }) => {
  const deleteItem = e => {
    // console.log(deleteBtn);
    deleteBtn(elData.id);
  };
  return (
    <li className={s.item}>
      <FaUser className={s.icon} />
      {elData.name}: {elData.number}
      <button type="button" data-id={elData.id} onClick={deleteItem}>
        <RiDeleteBin5Fill />
      </button>
    </li>
  );
};

ListElement.propTypes = { elData: PropTypes.object, deleteBtn: PropTypes.func };

export default ListElement;
