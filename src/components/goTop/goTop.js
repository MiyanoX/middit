import { useSelector } from "react-redux";
import Top from "../../img/Top.svg";
import { selectScreenHeight } from "../searchBar/searchSlice";

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function GoTop() {
    const screenHeight = useSelector(selectScreenHeight);

    return (
        <div className="GoTop" style={{top: screenHeight - 120}}>
            <img src={Top} alt="top" onClick={scrollToTop} ></img>
        </div>
    );
}

export default GoTop;