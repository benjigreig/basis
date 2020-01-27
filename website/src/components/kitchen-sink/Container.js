import React from "react";
import { Container, Text } from "basis";
import Layout from "./Layout";

function KitchenSinkContainer() {
  return (
    <Layout name="Container">
      <Container padding="6 0">
        <Container margin="4 8" bg="secondary.lightBlue.t30" textAlign="left">
          <Text>Left aligned</Text>
        </Container>

        <Container
          margin-xs="4 8"
          padding-lg="6"
          bg="grey.t05"
          textAlign="center"
          width="20"
          height="17"
        >
          <Text>Center aligned</Text>
        </Container>

        <Container
          margin-lg="4 8"
          bg="grey.t03"
          textAlign="right"
          width-md="19"
          height-sm="14"
        >
          <Text>Right aligned</Text>
        </Container>

        <Container hasBreakpointWidth={true} bg="primary.blue.t100">
          <Text>Has breakpoint width</Text>
        </Container>

        {Container.BOX_SHADOWS.map(boxShadow => (
          <Container
            boxShadow={boxShadow}
            bg="white"
            width="20"
            height="10"
            margin="8 0 0 8"
            key={boxShadow}
          >
            Box shadow: {boxShadow}
          </Container>
        ))}
      </Container>
    </Layout>
  );
}

export default KitchenSinkContainer;