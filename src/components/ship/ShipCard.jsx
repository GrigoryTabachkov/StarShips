import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from './shipCardStyles';

export default function ShipCard() {
  const classes = useStyles();

  const [state, setState] = useState({
    loading: true,
    compLoading: true,
  });

  const [leftShip, setLeftShip] = useState({
    cost_in_credits: undefined,
    hyperdrive_rating: undefined,
  });
  const [rightShip, setRightShip] = useState({
    cost_in_credits: undefined,
    hyperdrive_rating: undefined,
  });

  useEffect(() => {
    setTimeout(() => {
      setState({
        ...state,
        loading: false,
      });
    }, 3000);
  }, []);

  useEffect(() => {
    let randomShip;
    let nextRandomShip;

    (function nextRandom() {
      const episodeFiveShips = [3, 10, 11, 12, 15, 17, 21, 22, 23];
      randomShip = episodeFiveShips[Math.floor(Math.random() * episodeFiveShips.length)];
      nextRandomShip = episodeFiveShips[Math.floor(Math.random() * episodeFiveShips.length)];
      return (randomShip === nextRandomShip) ? nextRandom() : randomShip;
    }());

    async function fetchLeftShip() {
      let response = await fetch(`${randomShip}`);
      response = await response.json();
      await setLeftShip(response);
    }
    async function fetchRightShip() {
      let response = await fetch(`${nextRandomShip}`);
      response = await response.json();
      await setRightShip(response);
    }

    fetchLeftShip().catch((error) => Error(error));
    fetchRightShip().catch((error) => Error(error));
  }, []);

  const compareHandler = (e) => {
    e.preventDefault();
    return setState({
      ...state, compLoading: false,
    });
  };

  const { loading, compLoading } = state;

  return (
    <div className={classes.shipContainer}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.typography} gutterBottom variant="h4">
          {loading ? <Skeleton animation="wave" className={classes.loading} /> : leftShip.name }
        </Typography>
        <Typography className={classes.typography} gutterBottom variant="h6">
          {loading ? <Skeleton animation="wave" className={classes.loading} /> : leftShip.model }
        </Typography>
        {loading ? <Skeleton animation="wave" className={classes.loading} />
          : <Typography gutterBottom variant="body1">cost: {leftShip.cost_in_credits}</Typography> }
      </Paper>

      <Paper elevation={3} className={classes.comparisonPaper}>
        {
          (compLoading)
            ? (<Skeleton animation="pulse" className={classes.compLoad} />)
            : (Number(leftShip.cost_in_credits) < Number(rightShip.cost_in_credits)
            || (leftShip.cost_in_credits === 'unknown'
            && rightShip.cost_in_credits !== 'unknown'))
              ? <Typography gutterBottom variant="body1">{rightShip.name} cost is higher</Typography>
              : <Typography gutterBottom variant="body1">{leftShip.name} cost is higher</Typography>
        }
      <Button
              variant="outlined"
              color="primary"
              className={classes.btn}
              onClick={(e) => compareHandler(e)}>compare</Button>
      </Paper>

      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.typography} gutterBottom variant="h4">
          {loading ? <Skeleton animation="wave" className={classes.loading} /> : rightShip.name }
        </Typography>
        <Typography className={classes.typography} gutterBottom variant="h6">
          {loading ? <Skeleton animation="wave" className={classes.loading} /> : rightShip.model }
        </Typography>
        {loading ? <Skeleton animation="wave" className={classes.loading} />
          : <Typography gutterBottom variant="body1">cost: {rightShip.cost_in_credits}</Typography> }
      </Paper>
    </div>
  );
}
