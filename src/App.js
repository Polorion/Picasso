import {Route, Routes} from "react-router-dom";
import {Home} from "./components/home/Home";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Home/>}>
                <Route path={"/port"} element={<h1></h1>} />
            </Route>
        </Routes>

    );
}

export default App;
