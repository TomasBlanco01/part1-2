import { useState } from 'react'

const PersonForm = ({ persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handlePersons = (event) => {
        event.preventDefault()
        if (newName.trim() === '' || newNumber.trim() === '') {
            alert('Please fill in both name and number')
            setNewName('')
            setNewNumber('')
            return
        }
        if (persons.some((person) => (person.name.toLowerCase() === newName.toLowerCase()))) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')
            return
        }
        if (persons.some((person) => (person.number === newNumber))) {
            alert(`${newNumber} is already added to phonebook`)
            setNewNumber('')
            return
        }
        setPersons([...persons, { name: newName, number: newNumber }])
        setNewName('')
        setNewNumber('')
    }

    const handleName = (event) => {
        setNewName(event.target.value)
    }

    const handleNumber = (event) => {
        setNewNumber(event.target.value)
    }

    return (
    <form onSubmit={handlePersons}>
        <div>
            name: <input value={newName} onChange={handleName} />
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    )
}

export default PersonForm