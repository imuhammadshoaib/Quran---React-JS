import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect , useState } from "react";
const Single = () => {
    let {surahid} = useParams();
    const [ayah, setAyah] = useState([]);
    const [surahName, setSurahName] = useState("");
    const [surahNameEng, setSurahNameEng] = useState("");

    // API Endpoint
    const getSingleAyah = `https://api.alquran.cloud/v1/surah/${surahid}`;
    
    // API Request
    const fetchAyah = async () =>{
        
        var getResult = await Axios.get(getSingleAyah);
        setAyah(getResult.data.data.ayahs);
        setSurahName(getResult.data.data.name);
        setSurahNameEng(getResult.data.data.englishNameTranslation);
        
        console.log(getResult); 

    }

    // Component Did Mount
      useEffect(() => {
        fetchAyah();
    }, []);
    return(
        <>
        <div className="container mb-5">
            <div className="row justify-content-center g-0">
                <div className="col-md-10  border border-dark rounded shadow-lg">
                    <div className="row g-0 border-bottom border-dark shadow-sm">
                    <div className="col-md-3"></div>
                    <div className="col-6 ">
                        <p className="fs-1 fw-bold text-center lh-base text-end mt-3 mb-0">{surahName}</p>
                        {/* <p className="fs-3 fw-normal text-center lh-base text-end ">{surahNameEng}</p> */}
                    </div>
                    <div className="col-md-3"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10 p-4">
                            <p className="fs-3 fw-bold lh-base text-end">
                                { ayah.map((value , index) => {
                                    var arabic = value.numberInSurah.toLocaleString('ar-EG');
                                    if(value.sajda == true){
                                        var sajda = 'سجدة';
                                    }
                                    return(
                                        <>
                                        <p className="fs-1 fw-normal lh-base text-end mb-5" key = {index.text}>{value.text}
                                            <span className="fs-2 fw-normal  m-3 text-center text-primary text-danger cstm-num"> {arabic}</span>
                                            <span className="fs-3 fw-light text-primary">{sajda}</span>
                                        </p>  
            
                                        </>              
                                    )
                                    })
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        </>
    )
 }

 export default Single;