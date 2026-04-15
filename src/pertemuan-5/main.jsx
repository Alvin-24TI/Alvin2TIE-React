import { createRoot } from "react-dom/client";
import FrameworkList from "./FrameworkList";
import FrameworkSearchFilter from "./FrameworkSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";

import "./tailwind.css";

createRoot(document.getElementById("root")).render(
    <div>
        {/* <FrameworkList /> */}
        {/* <FrameworkSearchFilter /> */}
        <ResponsiveDesign />
    </div>,
);


