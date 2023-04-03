import { createContext, useEffect, useState } from "react";
export const Context  = createContext({});
function getScreenWidth() {
    const { innerWidth: width } = window;
    return width;
}
export function ContextProvider({children}){
    const [component, setComponent] = useState("");
    const [screenWidth, setScreenWidth] = useState(getScreenWidth());
    useEffect(() => {
      function handleResize() {
        setScreenWidth(getScreenWidth());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
        <Context.Provider value={{component, setComponent, screenWidth, setScreenWidth}}>
            {children}
        </Context.Provider>
    )
}