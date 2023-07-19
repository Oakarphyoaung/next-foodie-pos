import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  decrement,
  fetchContent,
  increment,
} from "@/store/slices/counterSlice";
import { Button } from "@mui/material";
import React from "react";

const ReduxConcepts = () => {
  const count = useAppSelector((state) => state.couterTest.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <Button variant="contained" onClick={() => dispatch(increment(10))}>
        +
      </Button>
      <Button variant="contained" onClick={() => dispatch(decrement())}>
        -
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch(fetchContent())}
        sx={{ width: "fit-content" }}
      >
        FetchData
      </Button>
    </div>
  );
};

export default ReduxConcepts;
