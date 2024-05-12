import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
            <div class="carousel-inner">
                <div class="carousel-item active ,customcar">
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1--5090.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item , customcar">
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-12052024-MainBannerDailyChanging-Z1-P5-Superdry-Gap-Upto30.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item , customcar">
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-12052024-MainBannerDailyChanging-Z1-P6-Dennislingo-Dillinger-Min70.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item , customcar">
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-12052024-TopBrandBanner-Z3-P1-Guess-Upto40.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item , customcar">
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-120524-AkshayaTritiya-P5-YellowChimes-Trink-under799.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="container text-center mt-4 mb-4">
            <div class="row row-cols-4">
                <div class="col">
                <div class="border border-0 , customcar">
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-TopBrand-Gap-superdry-min50.jpg" class="card-img" alt="..."/>
                </div>
                </div>
                <div class="col">
                    <div class="border border-0 , customcar">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-TopBrand-dnmxnetplay-under499.jpg" class="card-img" alt="..."/>
                    </div>
                </div>
                <div class="col">
                    <div class="border border-0 , customcar">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-TopBrand-ax-mns-min40.jpg" class="card-img" alt="..."/>
                    </div>
                </div>
                <div class="col">
                    <div class="border border-0 , customcar">
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-TopBrand-gulmoharjaipur-avaasa-min60.jpg" class="card-img" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-black text-light">
            <h2 style={{marginLeft:"45%"}}>Categorys</h2>
        </div>
        <div className='categorylayer'>
            <div className='categorycomponents , customcar'>
               <Link to={`/Homecard/${"men's clothing"}`} style={{color:"black", textDecoration:"none"}}>MENS</Link> 
            </div>
            <div className='categorycomponents , customcar'>
            <Link to={`/Homecard/${"women's clothing"}`} style={{color:"black", textDecoration:"none"}}>WOMEN</Link> 
            </div>
            <div className='categorycomponents , customcar'>
            <Link to={`/Homecard/${"electronics"}`} style={{color:"black", textDecoration:"none"}}>ELECTRONICS</Link> 
            </div>
            <div className='categorycomponents , customcar'>
            <Link to={`/Homecard/${"jewelery"}`} style={{color:"black", textDecoration:"none"}}>JEWELERY</Link> 
            </div>
            <div className='categorycomponents , customcar'>
            <Link to={`/product`} style={{color:"black", textDecoration:"none"}}>SHOW ALL</Link> 
            </div>
        </div>
        <div className='p-3 mb-5 , layer4'>
        <div class="border border-0 p-2 , customcar">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Ethnicwear-Seedesigns-Jompers-Min65.jpg" class="card-img" alt="..."/>
        </div>
        <div class="border border-0 p-2 , customcar">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Ethnicwear-Siyahi-Svrnaa-Starting349.jpg" class="card-img" alt="..."/>
        </div>
        <div class="border border-0 p-2 , customcar">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Ethnicwear-Giva-Iskiuski-Min50.jpg" class="card-img" alt="..."/>
        </div>
        <div class="border border-0 p-2 , customcar">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01052024-Ethnicwear-Linoperros-Caprese-5080.jpg" class="card-img" alt="..."/>
        </div>
        </div>
        <div class="border border-0 p-2 ms-4">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/01052024-D-DiscoverOnlineStores.jpg" alt="..."/>
        </div>
        <div class="border border-0 p-2 ms-4">
            <img src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip11.jpg" alt="..."/>
        </div>
        <div class="card text-center border border-0 bg-secondary">
            <div class="card-header">
                A J I O
            </div>
            <div class="card-body text-light">
                <h5 class="card-title ">APPLICABILITY OF POLICY</h5>
                <p class="card-text-sm">1.1 By agreeing to use the Platforms and/or initiating a request for purchase of Product(s) on any of the Platforms, you agree to be bound by the terms contained in this Policy without modification. If you do not agree to the terms contained in this Policy, you are advised not to transact on the Platforms and forthwith leave and stop using the Platforms..</p>
            </div>
            <div class="card-footer text-body-secondary">
                2 days ago
            </div>
        </div>
    </div>
  )
}

export default Home