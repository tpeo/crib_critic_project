import './App.css';
import FrontPage from './front-page/FrontPage';
import {MantineProvider} from '@mantine/core';
function App() {
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
      <div className="App">
        <FrontPage />
      </div>
    </MantineProvider>
  );
}

export default App;
