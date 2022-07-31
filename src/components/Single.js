import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";

const Single = () => {
    let { surahid } = useParams();
    var ayahnos = "";
    const [ayah, setAyah] = useState([]);
    const [engAyah, setEngAyah] = useState([]);
    const [surahName, setSurahName] = useState("");
    const [surahNameEng, setSurahNameEng] = useState("");
    const [ayahNo, setAyahNo] = useState("");
    const [revelationType, setRevelationType] = useState("");
    const [surahNo, setSurahNo] = useState("");
    const multipleArr = (a1, a2) => a1.map((x, i) => [x, a2[i]]);

    // API Endpoint
    const getSingleAyah = `https://api.alquran.cloud/v1/surah/${surahid}/ar.ahmedali`;
    const getSingleTranslation = `http://api.alquran.cloud/v1/surah/${surahid}/en.ahmedali`

    // API Request
    const fetchAyah = async () => {


        // Arabic Ayah
        var getResult = await Axios.get(getSingleAyah);
        setAyah(getResult.data.data.ayahs);

        //Meta
        setSurahName(getResult.data.data.name);
        setSurahNameEng(getResult.data.data.englishNameTranslation);
        setAyahNo(getResult.data.data.numberOfAyahs);
        setRevelationType(getResult.data.data.revelationType);
        setRevelationType(getResult.data.data.revelationType);
        setSurahNo(getResult.data.data.number);
        
        //English Ayah
        var getEngResult = await Axios.get(getSingleTranslation);
        setEngAyah(getEngResult.data.data.ayahs);

        // console.log(getResult.data.data);

    }

    // Component Did Mount
    useEffect(() => {
        fetchAyah();
    }, []);

    return (
        <>
            <div className="container mb-5">
                <div className="row justify-content-center g-0">
                    <div className="col-md-10  border border-dark rounded shadow-lg">
                        {/* Desktop */}
                        <div className=" d-none d-md-block">
                        <div className="row g-0 border-bottom border-dark shadow-sm">
                            <div className="col-md-3"><p className="fs-5 fw-normal text-end lh-base mt-4 mb-0 px-3">{revelationType}</p> <span className="fs-5 fw-bold tex-end lh-base mt-3 mb-0 px-3">{revelationType === "Meccan"? "مکہ" : "مدینہ"}</span></div>
                            <div className="col-md-6 ">
                                <p className="fs-1 fw-bold text-center lh-base text-end mt-3 mb-0">{surahName}</p>
                                <p dir="ltr" className="fs-5 fw-normal text-center lh-base text-end ">{surahNo} - {surahNameEng}</p>
                            </div>
                            <div className="col-md-3"><p dir="ltr" className="fs-5 fw-normal text-start lh-base mt-4 mb-0 px-3">{ayahNo} - Ayah <br></br><span className="fs-5 fw-bold tex-end lh-base mt-3 mb-0 px-3">{ ayahnos = ayahNo.toLocaleString('ar-EG')} - آية</span></p></div>
                        </div>
                        </div>
                        {/* Mobile */}
                        <div className="g-0 border-bottom border-dark shadow-sm d-block d-md-none row ">
                            <div className="col"><p dir="ltr" className="cstm-g fs-5 fw-normal text-start lh-base mt-4 mb-0 px-3">{ayahNo} - Ayah <br></br><span className="fs-5 fw-bold tex-end lh-base mt-3 mb-0 px-3">{ ayahnos = ayahNo.toLocaleString('ar-EG')} - آية</span></p><p className="fs-5 fw-normal text-end lh-base mt-4 mb-0 px-3 cstm-g">{revelationType}</p> <span className="fs-5 fw-bold tex-end lh-base mt-3 mb-0 px-3">{revelationType === "Meccan"? "مکہ" : "مدینہ"}</span></div>
                            <div className="col">
                                <p className="fs-1 fw-bold text-center lh-base text-end mt-3 mb-0">{surahName}</p>
                                <p dir="ltr" className="fs-5 fw-normal text-center lh-base text-end ">{surahNo} - {surahNameEng}</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10 p-4">
                                <p className="fs-3 fw-bold lh-base text-end">
                                    {
                                        Object.values(multipleArr(ayah, engAyah)).map(function (gotPairEnAr) {
                                            var val = gotPairEnAr.filter(function (item) {
                                                return item !== undefined;
                                            });

                                            if (val.length === 2) {
                                                return (
                                                    <div className="wraps" key={val}>
                                                        {
                                                            val.map((value, indexs) => {
                                                                var arabic = value.numberInSurah.toLocaleString('ar-EG');
                                                                if (value.sajda === true) {
                                                                    var sajda = 'سجدة';
                                                                }

                                                                return (
                                                                    <>
                                                                        <p className="fs-1 fw-normal lh-base text-end mb-5" key={indexs.number}>{value.text}
                                                                            <span className="fs-4 fw-normal  m-3 text-center text-primary text-white cstm-num badge bg-dark"> {arabic}</span>
                                                                            <span className="fs-4 fw-light text-dark badge bg-info">{sajda}</span>
                                                                        </p>

                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )
                                            }
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