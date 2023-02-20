import SearchContainer from "./SearchContainer";
import { MantineProvider } from "@mantine/core";
import './LandingPage.css';
function LandingPage() {
  return (
    <MantineProvider
        theme={{
          fontFamily: "Poppins"
          ,
          colors: {
            //Burnt Orange, Beige, Tan, Black, Grey, Skyblue
            custom: ["#FB8B24", "#FB8B24", "#F6E7D7", "#2C2B3C", "#565E74", "#D2E1F8", "", "", "", ""],
          },
        }}
      >
      <SearchContainer />
    </MantineProvider>
  );
}

export default LandingPage;