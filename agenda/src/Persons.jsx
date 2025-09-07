import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button, Container, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Persons = ({ persons, filter, deletePerson }) => {
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 1 }}
        >
          Agenda
        </Typography>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <strong>Nombre</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Número</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Acciones</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
              .map((person) => (
                <TableRow
                  key={person.id}
                  sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}
                >
                  <TableCell align="center">{person.name}</TableCell>
                  <TableCell align="center">{person.number}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => deletePerson(person.id, person.name)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Persons;