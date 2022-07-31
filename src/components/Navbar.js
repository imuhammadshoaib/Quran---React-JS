import React  from "react";

const Navbar = () =>{
    return(
        <>
           <div dir="ltr" className="collapse" id="navbar">
                <div className="bg-white p-4">
                        {/* <Route exact path="/" element={<Surah />} ></Route>  */}
                      </div>
            </div>
            <nav dir="ltr" className="navbar navbar-white bg-white position-absolute top-0 start-0">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;