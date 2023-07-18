import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment } from "@/store/slices/counterSlice";
import { Button } from "@mui/material";
import React from "react";

const ReduxConcepts = () => {
  const count = useAppSelector((state) => state.couterTest.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <Button variant="contained" onClick={() => dispatch(increment())}>
        +
      </Button>
      <Button variant="contained" onClick={() => dispatch(decrement())}>
        -
      </Button>
    </div>
  );
};

export default ReduxConcepts;
