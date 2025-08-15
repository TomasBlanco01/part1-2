import { useState } from 'react'

const PersonForm = ({ persons, addPerson }) => {
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

        const existingPerson = persons.find(
            person => person.name.toLowerCase() === newName.toLowerCase()
        )

        if (existingPerson) {
            if (existingPerson.number !== newNumber){
                if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)){
                    updateNumber(existingPerson.id, newNumber)
                }
            } else {
                alert(`${existingPerson.name} is already in the phonebook with the same number`)
            }
            return
        }
        addPerson({ name: newName, number: newNumber })
        setNewName('')
        setNewNumber('')
    }

    const updateNumber = () => {}

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