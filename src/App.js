import "./App.css";
import Toastify from "./components/Toastify/Toastify";
import MyRoutes from "./MyRoutes";
import AuthContextProvider from "./components/context/AuthContextProvider";
import {getNode, updateNode} from "./Firebase";
import {useEffect} from "react";

function App() {
    // let hernya = updateNode(
    //     "/users/",
    //     {
    //         username: "pasha",
    //         password: "123456",
    //         delete_mode: true,
    //     }
    //     // "-N3yjhvtaHu3Gxg4OuJr"
    // ).then((result) => {
    //     console.log(result);
    // });


    // useEffect(() => {
    //     getNode("users").then((result) => {
    //         console.log(result["-N3yjhvtaHu3Gxg4OuJr"]);
    //     });
    // }, [])

    return (
        <div className="App">
            {/* <AuthContextProvider> */}
            <Toastify />
            <MyRoutes />
            {/* </AuthContextProvider> */}
        </div>
    );
}

export default App;
