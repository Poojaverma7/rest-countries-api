import React, { useContext, useState } from "react";
import { Context } from "../Context";
import Card from '../Components/Card'
import SearchFilterCountry from '../Components/SearchFilterCountry'

const Countries = () => {
    const { allCountries , query , filterData , darkMode} = useContext(Context);
    const searchField = ["name"];
    
    const [visibleCards, setVisibleCards] = useState(49);
    
    const showMoreCountries = () => {
        setVisibleCards (prevVisibleCards => prevVisibleCards + 49);
    };

    const handleScroll = () => {
        window.scrollTo({behavior: 'smooth', top: 0 });
    };

    const countries = allCountries.filter((item) => {
      if (filterData === "All" || item.region === filterData) {
         return searchField.some((newItem) => {
            return (item[newItem].toString().toLowerCase().indexOf(query)) > -1;
         });
     }
     return false
   }).slice(0, visibleCards).map((country) => (
    <Card key={country.alpha2Code} country= {country} />
 ));

  return (
    <>
    <main className="main-content">
             <SearchFilterCountry />
             <section className="cards-container">
                {countries}
            </section>
            
            <div className="place-load-more-btn">
            
                <button className= {`
                                    ${countries.length !== allCountries.length  ? "load-more-btn" : "hide"}
                                    ${darkMode ? "load-more-btn-dark" : "load-more-btn"}
                                   `}
                        onClick={showMoreCountries}
                >
                Load More
               </button> 
           </div>
        </main>
        <div onClick={handleScroll}
             className="top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
            <footer>
              <span  className="screen-reader-text">Back to top</span>
            </footer>
        </div>
    </>
  )
}

export default Countries