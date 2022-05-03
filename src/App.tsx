import Box from "@mui/material/Box";
import "./App.css";
import Home from "./pages/Home";

function App() {
    return (
        <Box
            sx={{
                border: "1px solid grey",
                marginTop: "2rem",
                marginLeft: "1rem",
                marginRight: "1rem",
            }}
        >
            <Home />
        </Box>
    );
}

export default App;
