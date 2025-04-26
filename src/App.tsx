import './App.css';
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { useState } from 'react';
import { CreateModal } from './components/create-modal/create-modal';
import { Container, Typography, Grid, Button } from '@mui/material';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Cardápio
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {data?.map((food) => (
          <Grid key={food.id} xs={12} sm={6} md={4} lg={3} component="div">
            <Card
              price={food.price}
              title={food.title}
              image={food.image}
            />
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" onClick={handleOpenModal} sx={{ mt: 4, display: 'block', mx: 'auto' }}>
        Novo
      </Button>

      <CreateModal open={isModalOpen} handleClose={handleCloseModal} />
    </Container>
  );
}

export default App;
