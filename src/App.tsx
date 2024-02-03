import "./App.css";
import Contents from "./layouts/mainContents";
import Header from "./layouts/header";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"1fr 1fr 1fr"}
      gridTemplateColumns={"1fr 3fr"}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <GridItem area={"nav"}>Nav</GridItem>
      <GridItem area={"main"}>
        <Contents />
      </GridItem>
      <GridItem area={"footer"}>Footer</GridItem>
    </Grid>
  );
}

export default App;
