import React, { useState } from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


const Search = ({ hideButtons = false }) => {
     const [state, dispatch] = useStateValue();

    let navigate = useNavigate();

    const [input, setInput] = useState('');

    const search = e => {
        e.preventDefault();
        console.log("You hit the search button",input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        navigate('/search');
    }
  return (
    <form className='search'>
        <div className='search__input'>
            <SearchIcon className="search__inputIcon" />
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <MicIcon></MicIcon>
        </div>

        {!hideButtons ? (
            <div className='search__buttons'> 
                <Button type="submit" variant="outlined" onClick={search}> Google Search </Button>
                <Button variant="outlined"> I'm Feelling Lucky</Button>
            </div>
        ):(
            <div className='search__buttons'> 
                <Button className='search__buttonsHidden' type="submit" variant="outlined" onClick={search}> Google Search </Button>
                <Button className='search__buttonsHidden' variant="outlined"> I'm Feelling Lucky</Button>
            </div>
        )}
    </form>
  )
}

export default Search
