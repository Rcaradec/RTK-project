import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { Box, Button, Typography } from "@mui/material";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../state/counter/CounterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Typography variant="h4" color="info">
        Counter:{" "}
        <Box component="span" sx={{ color: "error.main" }}>
          {count}
        </Box>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "16px 0",
        }}
      >
        <Button variant="outlined" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button variant="outlined" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment by 10
        </Button>
        <Button variant="outlined" onClick={() => dispatch(incrementAsync(6))}>
          Async Increment By 6
        </Button>
      </Box>
    </>
  );
};

export default Counter;
