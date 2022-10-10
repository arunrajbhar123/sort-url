import "./App.css";
import MainRoute from "./page/Main.Route";
import { Box, Image } from "@chakra-ui/react";
import bgwave from "./svg/bg.svg";

function App() {
  return (
    <Box className="App" bg="#111" h="100vh">
      <Box p="8">
        <MainRoute />
      </Box>
      <Image src={bgwave} position="fixed" bottom="0" />
    </Box>
  );
}

export default App;
