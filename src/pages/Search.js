import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import requests from "../Requests";
import useDebounce from "../hooks/useDebounce";
import SearchMovie from "../components/SearchMovie";
import { ReactComponent as NetflixIcon } from '../assets/logo/Netflix-Logo.wine.svg'
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import Avatar from '../assets/icons/default-red.png';
import NavAccMenu from '../components/NavbarAccount/NavAccMenu';


const Search = () => {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 1000);
    const [showAcc, setShowAcc] = useState(false);

    const toggleShowAcc = useCallback(() => {
        setShowAcc((current) => !current);
    }, []);

    useEffect(() => {
        axios.get(requests.requestRow).then((response) => {
            setMovies(response.data);
        });
    }, [debouncedSearch]);

    return (
        <>
            <div className='flex items-center p-6 transition duration-500 '>
                <Link to='/account'>
                    <NetflixIcon className='h-10' />
                </Link>
                <div className='flex flex-row items-center ml-auto'>
                    <div onClick={toggleShowAcc} className='relative flex flex-row items-center gap-2 cursor-pointer'>
                        <div className='overflow-hidden rounded-md w-8 h-8'>
                            <img src={Avatar} alt="" />
                        </div>
                        <BsChevronDown className={`text-white transition ${showAcc ? 'rotate-180' : 'rotate-0'}`} />
                        <NavAccMenu visible={showAcc} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col mx-auto pl-8 mt-[60px]">
                <div className="mt-6 flex items-center">
                    <input
                        type="text"
                        placeholder="Enter your keyword..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-[50%] h-[40px] border rounded text-slate-700 p-3 mb-5" />
                </div>
                <div className="w-[95%] mt-6 h-full grid gap-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
                    {movies.filter((item) => {
                        return search.toLowerCase() === ""
                            ? item
                            : item?.title.toLowerCase().includes(search.toLowerCase())
                    })
                        .map((item, id) => (
                            <SearchMovie key={id} item={item} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Search;