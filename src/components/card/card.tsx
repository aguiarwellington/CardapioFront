import { Card as MuiCard, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface CardProps {
  price: number;
  title: string;
  image: string;
}

export function Card({ price, title, image }: CardProps) {
  return (
    <MuiCard
      sx={{
        width: 300,
        borderRadius: 4,
        margin: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        boxShadow: 3,
        transition: '0.3s',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Box  flexDirection="row" alignItems="center">
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" fontWeight="bold">
            R$ {price.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
    </MuiCard>
  );
}
