import { useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box
} from "@mui/material";

interface CreateModalProps {
  open: boolean;
  handleClose: () => void;
}

export function CreateModal({ open, handleClose }: CreateModalProps) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const { mutate } = useFoodDataMutate();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { title, price, image };

    mutate(data, {
      onSuccess: () => {
        setTitle('');
        setPrice(0);
        setImage('');
        handleClose(); // Fecha o modal após cadastro
      }
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Cadastre um novo item do cardápio</DialogTitle>
      <form onSubmit={submit}>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <TextField
              label="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
            <TextField
              label="Preço"
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              fullWidth
            />
            <TextField
              label="Imagem (URL)"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancelar
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Criar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
