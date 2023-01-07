import { createContext, useState } from "react";

export const ClickContext = createContext({});

// export function ClickContextProvider({ children }) {
//   const [isHtml, setIsHtml] = useState(true);
//   const [isCss, setIsCss] = useState(false);
//   const [isJs, setIsJs] = useState(false);

//   return (
//     <ClickContext.Provider
//       value={{ isHtml, setIsHtml, isCss, setIsCss, isJs, setIsJs }}
//     >
//       {children}
//     </ClickContext.Provider>
//   );
// }

// export default ClickContext;
