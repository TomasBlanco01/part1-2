import { useState, useEffect } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'
import axios from 'axios';


const App = () => {

  const [persons, setPersons] = useState([])

  /*useEffect(() => {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText)
        setPersons(data.persons) // Guardar lo que trae en el estado
      }
    }
    xhttp.open('GET', '/persons.json', true)
    xhttp.send()
  }, [])*/

  useEffect(() => {
  axios.get('http://localhost:3001/persons')
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

    axios.post('http://localhost:3001/persons', personWithId)
      .then(response => setPersons(persons.concat(response.data)))
      .catch(error => console.error('Error adding person:', error));
  };


  const [filter, setFilter] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <h3>Add a new</h3>
      <PersonForm persons={persons} addPerson={addPerson}></PersonForm>
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter}></Persons>
    </div>
  )
}

export default App
