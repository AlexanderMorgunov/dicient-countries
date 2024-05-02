import { FC, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/reduxHooks";
import { getCountry } from "../../../shared/store/Reducers/CountrySlice";
import { Box, Button, CircularProgress } from "@mui/material";
import { CountryItem } from "./CountryItem/CountryItem";

const Country: FC = () => {
  const dispatch = useAppDispatch();
  const { country, status, error } = useAppSelector((state) => state.country);
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      dispatch(getCountry(name));
    }
  }, []);

  const content =
    status === "loading" ? (
      <CircularProgress color="primary" />
    ) : status === "failed" ? (
      <Box>{error}</Box>
    ) : status === "success" && country ? (
      <>
        <Button variant="outlined" sx={{ mb: "20px" }}>
          <NavLink to="/">Back</NavLink>
        </Button>
        <CountryItem item={country} />
      </>
    ) : null;
  return <div>{content}</div>;
};

export { Country };
