import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPoundSign} from "@fortawesome/free-solid-svg-icons";

const Price = ({currency, price}) => {
    return (
        <>
            <p><FontAwesomeIcon icon={faPoundSign}/> {price}</p>
        </>
    );
}
export default Price;