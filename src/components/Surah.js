import React from "react";
import Axios from "axios";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Surah = () =>{

    const [verse, setVerse] = useState([]);

    // API Endpoint
    const surah = `https://api.alquran.cloud/v1/surah`;
    
    // API Request
    const fetchIndoPak = async () =>{
        
        var getResult = await Axios.get(surah);
        setVerse(getResult.data.data);
        console.log(getResult); 

    }

    // Component Did Mount
      useEffect(() => {
        fetchIndoPak();
    }, []);
return(
    <>
            <Navbar/>
            { verse.map((value , index) => {
               return(
                <div className="col-md-4 pe-md-0">
                    <Link to={'/single/'+value.number} className="row g-0 border p-3 shadow-sm rounded my-2 text-dark text-decoration-none">
                    <div className="col-6 px-1">
                            <p className="text-end m-0 fs-4 fw-bold lh-base" key = {index.number}>{value.name}</p>
                            <p className="text-end m-0 fs-6 fw-light lh-base" key = {index.number}>{value.numberOfAyahs+'Ayahs'}</p>
                        </div>
                        <div className="col-6 px-1">
                            <p className="text-start m-0 fs-5 fw-bold lh-base" key = {index.number}>{value.englishName}</p>
                            <p className="text-start m-0 fs-6 fw-light pt-1 lh-base" key = {index.number}>{value.englishNameTranslation}</p>                            
                        </div>
                    </Link>

                </div>
               )
                }) 
            }

    </>
);
}
export default Surah;