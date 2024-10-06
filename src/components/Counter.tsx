import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Box, Button, Typography } from "@mui/material";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../state/counter/CounterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const testAmount: number = 10;

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
          onClick={() => dispatch(incrementByAmount(testAmount))}
        >
          Increment by {testAmount}
        </Button>
      </Box>
    </>
  );
};

export default Counter;
