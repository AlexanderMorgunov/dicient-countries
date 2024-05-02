import { FC } from "react";
import { iCountriesResponse } from "../../../shared/types/ICountriesResponse";
import { TableRow, TableCell, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

interface ICountriesItem {
  item: iCountriesResponse;
  index: number;
}

const CountriesItem: FC<ICountriesItem> = ({ item, index }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`/${item.name.common}`, {
      state: { currentPath: location.pathname },
      replace: true,
    });
  };
  return (
    <TableRow
      key={item.name.common}
      sx={{
        cursor: "pointer",
        ...(index % 2 === 0 ? {} : { backgroundColor: "#f5f5f5" }),
        "&:hover": { backgroundColor: "#f6ed9e" },
        transition: "background-color 0.3s ease",
      }}
      onClick={handleClick}
    >
      <TableCell sx={{ textAlign: "center", fontSize: "16px" }}>
        <Box>{item.name.official}</Box>
        <Box>{item.translations.rus.official}</Box>
      </TableCell>
      <TableCell sx={{ textAlign: "center", fontSize: "16px" }}>
        {item.capital}
      </TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        <img src={item.flags.png} alt="flag" />
      </TableCell>
    </TableRow>
  );
};

export { CountriesItem };
