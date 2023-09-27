import {Link, Route, Routes, useParams} from "react-router-dom";
import Home from "./components/home/Home";
import React from "react";
import {InfoPost} from "./components/infoPost/InfoPost";

function App() {

    return (<Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"post/:id"} element={<InfoPost/>}/>
        </Routes>

    );
}

export default App;


