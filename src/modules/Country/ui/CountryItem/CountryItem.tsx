import { FC } from "react";
import { ICountryResponse } from "../../../../shared/types/ICountryResponse";
import { Box, Typography } from "@mui/material";
import styles from "./CountryItem.module.scss";

interface ICountryItem {
  item: ICountryResponse;
}

const CountryItem: FC<ICountryItem> = ({ item }) => {
  return (
    <Box sx={{ display: "flex", gap: "20px" }}>
      <img src={item.flags.svg} alt="flag" className={styles.flag_img} />
      <Box>
        <Typography variant="h3">{item.name.official}</Typography>
        <Typography variant="h6">Capital: {item.capital}</Typography>
        <Typography variant="h6">Region: {item.region}</Typography>
        <Typography variant="h6">Subregion: {item.subregion}</Typography>
        <Typography variant="h6">
          Population:{" "}
          {`${item.population}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        </Typography>
        <Typography variant="h6">Continent: {item.continents[0]}</Typography>
        <Typography variant="h6">
          Timezone: {item.timezones.map((item) => item).join(", ")}
        </Typography>
      </Box>
    </Box>
  );
};

export { CountryItem };
