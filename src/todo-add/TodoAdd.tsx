import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import './TodoAdd.css';

const useStyles = makeStyles(() => ({
  button: {
    marginLeft: '20px',
  },
}));

function TodoAdd({ valueChange }: { valueChange: Function }) {
  let value: string = '';
  const classes = useStyles();
  const handleChange = (event: any) => {
    value = event.target.value;
  };

  const emitValue = () => {
    valueChange(value);
  };

  return (
    <div className="TodoAdd">
      <TextField label="Add TODO" onChange={handleChange} />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={emitValue}
      >
        Add
      </Button>
    </div>
  );
}

export default TodoAdd;
