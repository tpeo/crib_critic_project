import SearchContainer from "./SearchContainer";
import { MantineProvider } from "@mantine/core";
import './LandingPage.css';
import AptInfo from "./AptInfo";
function LandingPage() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Poppins",
        colors: {
          //Burnt Orange, Beige, Tan, Black, Grey, Skyblue
          custom: [
            "#FB8B24",
            "#F1B279",
            "#F6E7D7",
            "#2C2B3C",
            "#565E74",
            "#D2E1F8",
            "",
            "",
            "",
            "",
          ],
        },
      }}
    >
      <SearchContainer />
      <AptInfo />
    </MantineProvider>
  );
}

export default LandingPage;