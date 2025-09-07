import { useState } from 'react'
import { Paper, Button, TextField, Container, Box, Typography } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";

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
      if (existingPerson.number !== newNumber) {
        if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
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

  const updateNumber = () => { }

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 2 }}
        >
          Agregar Contacto
        </Typography>
        <Box
          component="form"
          onSubmit={handlePersons}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TextField
            label="Nombre"
            variant="outlined"
            size="small"
            value={newName}
            onChange={handleName}
          />
          <TextField
            label="Número"
            variant="outlined"
            size="small"
            value={newNumber}
            onChange={handleNumber}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            ADD
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default PersonForm