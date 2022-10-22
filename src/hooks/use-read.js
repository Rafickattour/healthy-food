import { useState } from "react";

const useRead = () => {
    const [growth, setGrowth] = useState(false);

    const readMoreHandler = () => {
        setGrowth(shown => !shown);
    };

    return {
        growth,
        readMoreHandler
    };
};

export default useRead;