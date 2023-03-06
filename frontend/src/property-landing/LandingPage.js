import SearchContainer from "./SearchContainer";
import ApartmentContainer from "./apartment-container/ApartmentContainer";
import RoomDetails from "./RoomDetails";
import { MantineProvider} from "@mantine/core";
import { CustomFonts } from "./customFonts";

function LandingPage() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Poppins",
        globalStyles: (theme) => ({
          body: {
            backgroundColor: '#fbfbfb'
          },
          '*, *::before, *::after': {
            boxSizing: 'border-box'
          }
        }),

        colors: {
          //Burnt Orange[0], Beige[1], Tan[2], Black[3], Grey[4], Skyblue[5], White[6], Background White[7], ... 
          //(Remaining colors are free)
          custom: [
            "#FB8B24",
            "#FB8B24",
            "#F6E7D7",
            "#2C2B3C",
            "#565E74",
            "#D2E1F8",
            "#FFFFFF",
            "#FBFBFB",
            "",
            "",
          ],
        },
      }}
    >
      <CustomFonts />
      <SearchContainer />
      <ApartmentContainer />
      <RoomDetails />
    </MantineProvider>
  );
}

export default LandingPage;