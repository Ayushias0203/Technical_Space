import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Margin } from '@mui/icons-material';



export default function ActionCard({ profile }) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea style = {{MarginLeft: 40}}>
        <CardMedia
          component="img"
          height="250"
          image={profile.image}
          alt={profile.username}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {profile.username}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {profile.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}