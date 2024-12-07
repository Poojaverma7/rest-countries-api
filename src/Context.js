import React, {useState , useEffect} from "react";

//create context
const Context = React.createContext();

function ContextProvider({children}){
    const [allCountries, setAllCountries] = useState([]);
    const [query, setQuery] = useState("");
    const [filterData, setFilterData] = useState("All");
    const [darkMode, setDarkMode] = useState(false);

    const urlAllCountries = 'https://restcountries.com/v2/all';

    //get all countries from the API

    useEffect(()=>{
        const fetchAllCountriesData = async()=>{
            try{
                const res = await fetch(urlAllCountries);
                const allCountries = await res.json();
                setAllCountries(allCountries);
            }catch(err){
                alert('Problem getting countries');
            }
        }
        fetchAllCountriesData();
    },[])
return(
    <Context.Provider value={{allCountries,filterData,setFilterData,query,setQuery,darkMode,setDarkMode}}>
        {children}
    </Context.Provider>
)

}

export {ContextProvider,Context}