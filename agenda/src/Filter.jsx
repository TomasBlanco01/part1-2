import { Paper, TextField, Container, Typography, Box } from "@mui/material";

const Filter = ({ filter, setFilter }) => {
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Paper sx={{ p: 3, textAlign: "center" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Agenda Telefónica
        </Typography>

        <Typography variant="h6" align="center" sx={{ mb: 1 }}>
          Filtrar Contactos
        </Typography>

        <Box display="flex" justifyContent="center">
          <TextField
            label="Nombre"
            variant="outlined"
            size="small"
            value={filter}
            onChange={handleFilter}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default Filter;
