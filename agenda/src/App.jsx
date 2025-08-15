import { useState, useEffect } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'
import noteService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    noteService.getAll()
    .then(response => setPersons(response.data))
    .catch(error => console.error('Error fetching persons:', error));
}, []);

  const getNextId = (persons) => {
    if (persons.length === 0) return 1; // si no hay nadie todavía
    const ids = persons.map(p => p.id);
    return Math.max(...ids) + 1;
  };

  const addPerson = (newPerson) => {
    const newId = getNextId(persons);
    const personWithId = { ...newPerson, id: newId };

    noteService.create(personWithId)
      .then(response => setPersons(persons.concat(response.data)))
      .catch(error => console.error('Error adding person:', error));
  };

  const deletePerson = (personId, personName) => {
    if (window.confirm(`Delete ${personName} ?`)) {
    noteService.remove(personId)
      .then(response => setPersons(persons.filter(p => p.id !== personId)))
      .catch(error => console.error('Error deleting person:', error));
    }
  };


  const [filter, setFilter] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <h3>Add a new</h3>
      <PersonForm persons={persons} addPerson={addPerson}></PersonForm>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson}></Persons>
    </div>
  )
}

export default App
