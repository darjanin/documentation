import React from "react";
import { RedocStandalone } from "redoc";
import Layout from "@theme/Layout";
import Redocusaurus from "../components/Redocusaurus";

function APIDocs() {
  return (
    <Layout
      title={`API Docs`}
      description={`Open API Reference Docs for the API`}
    >
      <Redocusaurus spec="/swagger.yaml" />
    </Layout>
  );
}

export default APIDocs;
