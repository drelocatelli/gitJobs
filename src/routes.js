import React from 'react';

import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './Pages/home';

export default() => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
    
}