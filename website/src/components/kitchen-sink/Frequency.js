import React from "react";
import { Container, Grid } from "basis";
import Layout from "./Layout";
import { Frequency } from "../optionally-controlled";

function KitchenSinkFrequency() {
  return (
    <Layout name="Frequency">
      <Container padding="4" bg="white">
        <Grid rowsGutter="8">
          <Frequency
            label="Grey disabled"
            disabled
            data={{
              value: {
                input: "726",
                frequency: "monthly"
              }
            }}
          />

          <Frequency
            label="Optional with error"
            optional
            data={{
              value: {
                input: "-12.8",
                frequency: "annually"
              },
              errors: ["Please enter a valid amount."]
            }}
          />
        </Grid>
      </Container>

      <Container padding="4" bg="grey.t05">
        <Grid rowsGutter="8">
          <Frequency
            label="White"
            quarterly
            data={{
              value: {
                input: "9822",
                frequency: "weekly"
              }
            }}
          />

          <Frequency
            label="Select with multiple errors"
            mode="select"
            data={{
              value: {
                input: "",
                frequency: ""
              },
              errors: [
                "Please enter a valid amount.",
                "Please select a frequency."
              ]
            }}
          />

          <Frequency
            label="Custom placeholders"
            mode="select"
            inputPlaceholder="Type something"
            selectPlaceholder="Select something"
            data={{
              value: {
                input: "",
                frequency: ""
              }
            }}
          />
        </Grid>
      </Container>
    </Layout>
  );
}

export default KitchenSinkFrequency;
