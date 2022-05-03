import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import Button from "@mui/material/Button";
import AdjustIcon from "@mui/icons-material/Adjust";
import axios from "axios";


import { useEffect, useState } from "react";

import "./AllContacts.css";


import InfiniteScroll from "react-infinite-scroll-component";

const access_token =
    "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6IjEwMTExMTEwMDAwMDAwMDExMTExMTExMTEwMTAwMTExMDAwMDAwMDExMDAwMDAwMDAwMDAxMDAxMTExMTExMTExMSIsImlhdCI6MTY1MTM4NjU5MCwiZXhwIjoxNjUxMzkwMTkwLCJ1c2VyIjp7ImlkIjoiYWI4OWUyNWUtNWEyYy00NTU1LThjYjUtNTcxMTYwNmM2ZWQxIiwiZnVsbE5hbWUiOiJ6b29tZGVtbzIiLCJwaG9uZU51bWJlciI6Ijg1MjY1ODc4NTQ0IiwiZW1haWxBZGRyZXNzIjoibGlta2FtaG9AZ21haWwuY29tIiwidGVhbUlkIjoiYTAwMTk5NGItOTE4Yi00OTM5LTg1MTgtMzM3NzczMmU0ZTg4In19.YNXKvhfQ0bS4veKUliXDsL0ilFu1lwOo8ZixfbBpg6hrL25g1xACuo9aEpQxTJPHihK25_KmdvIlgVrFNu_Lqw";


const AllContacts = () => {
    const [contacts, setContacts] = useState<any[]>([]);
    const [contactImg, setContactImg] = useState("");
    const [keyword, setKeyword] = useState<any>("");
    console.log(keyword);
    

    const { accountId }:any = "acc_a001994b-918b-4939-85_1a37";
    const { id }:any = "19944402849@s.whatsapp.net";

    const options = {
        method: "GET",
        url: "https://api-im.chatdaddy.tech/contacts",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
        },
    };

    const optionsImg = {
        method: "GET",
        url: `https://api-im.chatdaddy.tech/contacts/${accountId}/${id}/image`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
            
        },
    };

    useEffect(() => {
        axios
            .request(optionsImg)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    },[])

    

    useEffect(() => {
        axios
            .request(options)
            .then((res) => setContacts(res.data.contacts))
            .catch((error) => console.error(error));
    },[]);

    // search bar functionality
    const filteredData = contacts.filter((el) => {
        if (!keyword) {
            return el;
        } else {
            return el.text.toLowerscase().includes(keyword);
        }
    })

    return (
        <div>
            <section className="header d-flex justify-content-between">
                <h4>All Contacts ({contacts.length})</h4>

                <AddCircleRoundedIcon
                    color="success"
                    style={{ cursor: "pointer" }}
                />
            </section>

            <section className="search-bar mt-3 mb-3">
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Search contacts"
                    style={{
                        width: "100%",
                        borderRadius: "50px",
                        backgroundColor: "#eeeeee",
                    }}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </section>

            <section className="filters d-flex justify-content-between mb-4">
                <div className="d-flex">
                    <CheckCircleRoundedIcon
                        className="me-3"
                        color="disabled"
                        style={{ cursor: "pointer" }}
                        sx={{ fontSize: 30 }}
                    />
                    <p>Select All</p>
                </div>

                <Button
                    variant="contained"
                    size="small"
                    style={{
                        backgroundColor: "#1b5e20",
                        color: "#fff",
                        textTransform: "capitalize",
                    }}
                >
                    Export All
                </Button>
            </section>

            <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                // below props only if you need pull down functionality
                refreshFunction={this.refresh}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>
                        &#8595; Pull down to refresh
                    </h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>
                        &#8593; Release to refresh
                    </h3>
                }
            >
                <section className="contact-list">
                    {filteredData.map((contact) => (
                        <div
                            key={contact.id}
                            className="d-flex justify-content-between"
                        >
                            <div className="contacts d-flex">
                                <CheckCircleRoundedIcon
                                    className="me-3"
                                    color="disabled"
                                    style={{
                                        marginTop: "1.2rem",
                                        cursor: "pointer",
                                    }}
                                    sx={{ fontSize: 30 }}
                                />

                                <div className="contact-info d-flex">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/45.jpg"
                                        alt=""
                                        className="contact-img"
                                    />

                                    <div className="details">
                                        <p className="name">{contact.name}</p>
                                        <p className="tel">
                                            {contact.phoneNumber}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-filters d-flex">
                                <div className="tags d-flex">
                                    <p className="me-2">Tags</p>
                                    <AdjustIcon />
                                </div>
                                <AddCircleRoundedIcon
                                    sx={{ fontSize: 30 }}
                                    color="success"
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                        </div>
                    ))}
                </section>
            </InfiniteScroll>
        </div>
    );
};
export default AllContacts;
