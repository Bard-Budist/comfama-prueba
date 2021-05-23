import React, { useState } from 'react';
import { IconButton, Snackbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GroupItems from './components/groupItems';
import Carousel from 'react-material-ui-carousel'
import MuiAlert from '@material-ui/lab/Alert';

import axios from 'axios';
import './home.css';

const Home = (props) => {
  const [error, setError] = useState(false)
  const [dataAnime, setDataAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getDataAnime = () => {
    if (search.length < 3) {
      setError(true)
    } else {
      axios.get('http://localhost:3000/api/anime/' + search)
      .then((result) => {
        setDataAnime(result.data);
        }
      )
    }
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const onCloseHandle = () => {
    setError(false);
  }
  return(
    <div className="home">
      <div className="search-div">
        <div className="search">
          <input
            placeholder="Example: Elfen..."
            value={search}
            onChange={
              ({ target: { value } }) => {
                setSearch(value);
              }
            }
          />
          <IconButton style={{color: 'white'}} onClick={getDataAnime}>
            <SearchIcon/>
          </IconButton>
        </div>
      </div>
      <div>
        {dataAnime.length > 0 &&
        <Carousel
        navButtonsAlwaysVisible={true}
        autoPlay={false}
        >
        {
          dataAnime.map( (item, i) => <GroupItems key={i} items={item.data} /> )
        }
        </Carousel>
        }
      
      </div>
      <Snackbar open={error} autoHideDuration={6000} onClose={onCloseHandle}>
        <Alert severity="error">Must be at least 3 characters </Alert>
      </Snackbar>
    </div>
  );
}

export default Home;