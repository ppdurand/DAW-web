import React, { useState } from "react";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Studio } from "./pages/Studio";

export function App() {
    const [registerFlag, setRegisterFlag] = useState(false);

    return (
        <>
            <Studio />
            {/* {registerFlag ? (
                <SignUp setRegisterFlag={setRegisterFlag} />
            ) : (
                <Login setRegisterFlag={setRegisterFlag} />
            )} */}
        </>
    );
}
