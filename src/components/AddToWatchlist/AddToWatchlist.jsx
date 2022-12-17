import {Box, Checkbox, FormControlLabel} from "@mui/material";
import {Bookmark, BookmarkBorder} from "@mui/icons-material";
import {useEffect, useState} from "react";
import "./AddToWatchlist.css";
import {addToWatchlist} from "../../API";

export default function AddToWatchlist(props) {

    const [product, setProduct] = useState(props.product);
    const [checked, setChecked] = useState(false);
    const uid = localStorage.getItem("userId");

    useEffect(()=>{
        // implementare verificare daca este deja adaugat pe watchlist-ul userului
    })

    const handleAddToWatchlist = (value) => {
        if(uid){
            addToWatchlist(uid, product);
        }
    }

    return (
        <div className={"WL-Rounded"}>
            <FormControlLabel
                control={
                    <Checkbox
                        icon={<BookmarkBorder/>}
                        checkedIcon={<Bookmark/>}
                        checked={checked}
                        onChange={(event)=>{
                                setChecked(event.target.checked);
                                handleAddToWatchlist(event.target.checked);
                            }
                        }
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                    />
                }
                label={
                    <Box component="div" fontSize={15}>
                        Add to watchlist
                    </Box>
                }
                className={"ProductFavoriteLabel"}
                labelPlacement={"start"}
                sx={{fontSize: 10}}
            />
        </div>
    )
}