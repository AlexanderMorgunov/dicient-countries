import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Page404 } from "../pages/Page404";
import { Layout } from "../modules/Layout/Layout";
import { lazy } from "react";

const CountriesListPage = lazy(() => import("../pages/CountriesListPage"));
const CountryPage = lazy(() => import("../pages/CountryPage"));

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<CountriesListPage />} />
        <Route path=":name" element={<CountryPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export { AppRouter };
