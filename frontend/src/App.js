import React, { useState } from "react";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export function App() {
    const [registerFlag, setRegisterFlag] = useState(false);

    return (
        <>
            {registerFlag ? (
                <SignUp setRegisterFlag={setRegisterFlag} />
            ) : (
                <Login setRegisterFlag={setRegisterFlag} />
            )}
        </>
    );
}
