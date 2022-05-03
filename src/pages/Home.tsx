import SortIcon from "@mui/icons-material/Sort";
import ExcludeTags from "../components/ExcludeTags";
import IncludeTags from "../components/IncludeTags";
import MessageReceived from "../components/MessageReceived";
import MessageSent from "../components/MessageSent";

import Button from "@mui/material/Button";
import AllContacts from "../components/AllContacts";

const Home = () => {
    return (
        <div className="row w-100">
            <div className="filters col-4">
                <header className="d-flex justify-content-between">
                    <div className="title d-flex">
                        <SortIcon />
                        <h4>Audience</h4>
                    </div>
                    <p>100 contacts</p>
                </header>

                <IncludeTags />

                <ExcludeTags />

                <MessageSent />

                <MessageReceived />

                <Button
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: "#1b5e20", color: "#fff", marginTop:"10rem",marginBottom:"1rem", width:"100%" }}
                >
                    Save Filters
                </Button>
            </div>

            <div className="contacts col-8">
                <AllContacts />
            </div>
        </div>
    );
};
export default Home;
