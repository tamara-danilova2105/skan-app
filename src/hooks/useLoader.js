import { useState } from "react";
import { Loader } from "../components/Loader";

export const useLoader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const changeOpen = () => {
        setIsOpen(p => !p);
    };

    const showLoader = () => {
        return (
            isOpen && <Loader />
        );
    };

    return [changeOpen, showLoader, isOpen];
};
