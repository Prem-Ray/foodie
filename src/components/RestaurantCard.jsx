import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { IMG_URL } from '../constant';

export default function RestaurantCard({Restaurant}) {
  return (
    <Card
      sx={{
        maxWidth: 330,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        height="170"
        image = {IMG_URL + Restaurant.data.cloudinaryImageId}
        alt="Burger King"
      />

      <CardContent sx={{ pb: 1 }}>
        <Typography variant="h6" fontWeight={600}>
         {Restaurant.data.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {Restaurant.data.cuisines.join(',')}
        </Typography>

        <Typography variant="body2" sx={{ mt: 0.5 }}>
          ⭐ {Restaurant.data.avgRating} stars
        </Typography>

         <Typography variant="body2" sx={{ mt: 0.5 }}>
           {Restaurant.data.slaString}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
