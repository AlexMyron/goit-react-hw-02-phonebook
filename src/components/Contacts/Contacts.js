import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import ListElement from '../ListElement';

const Contacts = ({ contactsList, searchRes, btnDelete }) => {
  const isListEmpty = contactsList.length === 0;
  const isSearchResEmpty = searchRes.length === 0;
  return (
    <div>
      {isListEmpty && <p className="message">Your contacts List is still empty.</p>}
      <ul className={s.list}>
        {isSearchResEmpty
          ? contactsList.map(contact => (
              <ListElement elData={contact} deleteBtn={btnDelete} key={contact.id} />
            ))
          : searchRes.map(contact => <ListElement elData={contact} key={contact.id} />)}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

Contacts.propTypes = {
  contactsList: PropTypes.arrayOf(PropTypes.object),
  searchRes: PropTypes.array.isRequired,
  btnDelete: PropTypes.func,
};

export default Contacts;
