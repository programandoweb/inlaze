"use client";

import { redirect } from "next/navigation";
import { useAuthContext } from "../../contexts/authContext";

export default function RootLayout({ children }) {

    const { isLoggedIn }    =   useAuthContext();

    if (isLoggedIn) {
        //redirect("/dashboard");
    }
    
    return (
                <>
                  {children}          
                </>
    )
}
