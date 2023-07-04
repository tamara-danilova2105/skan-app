import { useSelector } from "react-redux";
import { getDataResult } from "../SearchPage/services/slice";

export const ResultPage = () => {

    const dataResult = useSelector(getDataResult);
    console.log(dataResult);
    
    return (
        <div>
            Result Page
        </div>
    );
};