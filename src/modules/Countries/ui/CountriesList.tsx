import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/reduxHooks";
import { getCountries } from "../../../shared/store/Reducers/CountriesSlice";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { CountriesItem } from "./CountriesItem";

const CountriesList = () => {
  const dispatch = useAppDispatch();
  const {
    countries: countries,
    status,
    error,
  } = useAppSelector((state) => state.countries);

  useEffect(() => {
    countries.length === 0 && dispatch(getCountries());
  }, []);

  const content =
    status === "loading" ? (
      <CircularProgress color="primary" />
    ) : status === "failed" ? (
      <div>{error}</div>
    ) : (
      <Table sx={{ mt: "20px" }}>
        <TableHead>
          <TableRow>
            {["Название страны", "Столица", "Флаг"].map((item) => (
              <TableCell
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
                key={item}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((item, i) => (
            <CountriesItem key={item.name.common} item={item} index={i} />
          ))}
        </TableBody>
      </Table>
    );

  return <div>{content}</div>;
};

export { CountriesList };
