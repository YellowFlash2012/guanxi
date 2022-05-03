import DeleteIcon from "@mui/icons-material/Delete";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const ExcludeTags = () => {
    return (
        <div>
            <h4>Include Tags:</h4>

            <div className="tag-details d-flex justify-content-between">
                <p>Greetings</p>
                <div className="icons-group">
                    <DeleteIcon color="error" style={{ cursor: "pointer" }} />
                    <CheckCircleRoundedIcon
                        color="success"
                        style={{ cursor: "pointer", marginLeft:"1rem" }}
                    />
                </div>
            </div>
        </div>
    );
};
export default ExcludeTags;
