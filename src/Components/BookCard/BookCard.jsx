import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import PersonIcon from '@material-ui/icons/Person';
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
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function BookCard() {
  const classes = useStyles();

  

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           <PersonIcon/>
          </Avatar>
        }
        title="FirstName LastName"
      />
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