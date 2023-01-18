import "./CartProduct.css";
import DeleteIcon from '@mui/icons-material/Delete';

export const CartProduct = ({id, name, price, image, onDelete}) => {

    const deleteItem = () => {
        onDelete(id);
    }

    return (
        <div className="CartProduct">
            <span className="CartProduct-image-box">
                <img src="images/apple.png" style={{height: "120px"}} />
            </span>
            <span className="CartProduct-about">
                <h1 className="CartProduct-title">{name}</h1>
            </span>
            <span className="CartProduct-counter"></span>
            <span className="CartProduct-prices">{price} RON</span>
            <span>
                <DeleteIcon
                    className={"CartProduct-Delete"}
                    onClick={deleteItem}
                />
            </span>
        </div>
    );
}