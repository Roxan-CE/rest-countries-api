import React from "react";
import SearchIcon from '@mui/icons-material/Search';


function Searchbar() {
    return <div className="searchBar shadow-sm">    
            <div className="form-group has-search">
                <span className="form-control-feedback"><SearchIcon sx={{ fontSize: 42 }} /></span>
                 <input type="text" className="form-control" placeholder="Search for a country... " />
            </div>
           </div>
}

export default Searchbar;