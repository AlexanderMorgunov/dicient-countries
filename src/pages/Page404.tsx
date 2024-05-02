import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h3">Page not found</Typography>
      <Button variant="outlined" sx={{ mt: "20px" }}>
        <NavLink to="/">Go to main page</NavLink>
      </Button>
    </Box>
  );
};
export { Page404 };
