import { Route } from "react-router";

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<login/>}/>
        </Routes>
    )

}

export default AppRouter;