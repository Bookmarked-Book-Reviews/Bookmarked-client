import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import RateReviewIcon from '@material-ui/icons/RateReview';
import './BookCard.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function BookCard() {
  const classes = useStyles();

  

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
          <div className="details">
            <Typography variant="body2" color="textSecondary" component="p">
            NAME : NAME
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
            AUTHOR : AUTHOR
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
            ISBN : ISBN
            </Typography>
          </div>
        <div className="review">
            <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<RateReviewIcon/>}
        >
            Reviews
        </Button>

        <Button
            variant="contained"
            color="default"
            className={classes.button}
            endIcon={<LibraryAddIcon/>}
        >
            Add Review
        </Button>
      </div>
      </CardContent>




      <CardActions disableSpacing>
        
      </CardActions>
      
    </Card>
  );
}