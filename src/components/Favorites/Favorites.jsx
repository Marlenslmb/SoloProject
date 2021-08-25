import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { dotaContext } from '../DotaContext/DotaContext';


const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
    paper: {
      maxWidth: 1000,
      margin: '50px auto',
      backgroundColor: 'rgb(245, 199, 131)'

    }
  });

const Favorites = () => {
    const classes = useStyles()
    const { cart, getCart } = useContext(dotaContext)
    useEffect(() => {
        getCart()
        console.log(cart)
    }, [])
    return (
        <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell style={{fontSize: '24px'}}>Картинка</TableCell>
              <TableCell align="right" style={{fontSize: '24px'}}>Название</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {cart.heroes ? (
                  <>
                      {cart.heroes.map((elem) => (
                      <TableRow key={elem.item.id}>
                          <TableCell><img style={{width: "200px"}} src={elem.item.image}/></TableCell>
                          <TableCell align="right" style={{fontSize: '20px'}}>{elem.item.name}</TableCell>
                      </TableRow>
                      ))}
                  </>
              ) : (<h1>Loading...</h1> )}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default Favorites;