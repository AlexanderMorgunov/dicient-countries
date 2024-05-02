import { Suspense } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        height: "100%",
        width: "100%",
      }}
    >
      <CssBaseline />
      <Header />
      <Box
        component="main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { md: "center" },
          minHeight: { md: "calc(100vh - 110px)" },
          overflow: "auto",
          mt: "60px",
        }}
      >
        <Suspense fallback={<CircularProgress color="primary" />}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export { Layout };
