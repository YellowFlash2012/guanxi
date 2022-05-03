import TextField from "@mui/material/TextField";

import "./MessageSent.css"

const MessageSent = () => {
    return (
        <div style={{marginBottom:"2rem"}}>
            <h4>Message Sent:</h4>

            <div className="input-group d-flex justify-content-between">
                <TextField
                    id="outlined-size-small"
                    label="Min"
                    size="small"
                    sx={{
                        width: 500,
                        maxWidth: "40%",
                    }}
                    style={{ backgroundColor: "#eeeeee" }}
                />
                <TextField
                    id="outlined-size-small"
                    label="Max"
                    size="small"
                    sx={{
                        width: 500,
                        maxWidth: "40%",
                    }}
                    style={{ backgroundColor: "#eeeeee" }}
                />
            </div>
        </div>
    );
};
export default MessageSent;
