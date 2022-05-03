import TextField from "@mui/material/TextField";

const MessageReceived = () => {
    return (
        <div>
            <h4>Message Received:</h4>

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
export default MessageReceived;
