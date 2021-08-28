import React, { Component } from 'react';
import { v4 as uuidv4, v4 } from 'uuid';
import './App.css';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    searchRes: [],
  };

  handleFormSubmit = data => {
    const isDouble = this.checkForDouble(data.name);
    if (isDouble) return;
    this.setState({
      contacts: [...this.state.contacts, { name: data.name, number: data.number, id: uuidv4() }],
    });
  };

  searchContacts = query => {
    const searchQuery = query.trim().toLowerCase();
    const list = this.state.contacts;
    const result = list.filter(el => el.name.toLowerCase().indexOf(searchQuery) > -1);

    return result;
  };

  handleQuery = data => {
    if (data.trim() === '') {
      this.updateStateEl('filter', '');
      this.updateStateEl('searchRes', []);
      return;
    }
    this.setState({ filter: data });
    const res = this.searchContacts(data);
    this.setState({ searchRes: res });
  };

  updateStateEl = (type, value) => {
    this.setState({ [type]: value });
  };

  checkForDouble = newName => {
    const isDouble = this.state.contacts.find(contact => contact.name === newName);
    if (isDouble) alert(`${newName} is already in contacts`);
    return isDouble;
  };

  onDeleteBtn = dataId => {
    const contacts = this.state.contacts;
    const updatedList = contacts.filter(el => el.id !== dataId);
    this.updateStateEl('contacts', updatedList);
  };

  render() {
    const { contacts, searchRes } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleFormSubmit} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleQuery} />
        <Contacts searchRes={searchRes} contactsList={contacts} btnDelete={this.onDeleteBtn} />
      </div>
    );
  }
}

export default App;
