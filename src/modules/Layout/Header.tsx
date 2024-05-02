import { AppBar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      sx={{ height: "60px", justifyContent: "center", alignItems: "center" }}
    >
      <Typography variant="h5">Countries application</Typography>
    </AppBar>
  );
};

export { Header };
