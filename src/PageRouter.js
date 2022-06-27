import React from 'react';
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import AboutUsDetails from './components/AboutusDetails';
import BusinessPartner from './components/BusinessPartner';
import FeatureDetails from './components/FeatureDetails';
import Footer from './components/Footer';
import Home from './components/Home';
import Provider from './components/Provider';
import Service from './components/Service';

function PageRouter() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/provider" element={<Provider />} />
                <Route path="/patients" element={<Service />} />
                <Route path="/about-details" element={<AboutUsDetails />} />
                <Route path="/feature-details" element={<FeatureDetails />} />
                <Route path="/business-partners" element={<BusinessPartner />} />
               

            </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
        </>
    );
}

export default PageRouter;
