import { useState, useEffect } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'
import noteService from './services/persons'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    noteService.getAll()
    .then(response => setPersons(response.data))
    .catch(error => console.error('Error fetching persons:', error));
}, []);

  const getNextId = (persons) => {
    if (persons.length === 0) return 1;
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
      .then(() => setPersons(persons.filter(p => p.id !== personId)))
      .catch(error => console.error('Error deleting person:', error));
    }
  };

  const updateNumber = (personId, newNumber) => {
    const person = persons.find(p => p.id === personId)
    const updatedPerson = { ...person, number: newNumber }

    noteService.update(personId, newNumber)
      .then((response) => setPersons(persons.map(p => p.id !== personId ? p : response.data)))
      .catch(error => console.error('Error updating person:', error));
  };

  const [filter, setFilter] = useState('')

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <PersonForm persons={persons} addPerson={addPerson} updateNumber={updateNumber}></PersonForm>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson}></Persons>
    </div>
  )
}

export default App
