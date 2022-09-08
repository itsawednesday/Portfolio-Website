import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    justifyContent: 'center'
  }
};

const AdventureGame = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("../assets/img/mapchatImg.png")}
          title="Notes Preview"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            AdventureGame
          </Typography>
          <Typography component="h2">
          Android Studio
          </Typography>
          <Typography component="p">
            Text-based adventure game relying on CSV file for the data.
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Button size='large' color='primary' href='https://github.com/itsawednesday/adventureGame' target='blank'>
          GitHub
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}

AdventureGame.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdventureGame);