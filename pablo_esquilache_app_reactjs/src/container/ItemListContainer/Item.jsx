import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ info }) => {
  return (
    <div key={info.index} className="item-container">
      <Link to={`/item/${info.id}`}>
        <div className="item-card">
          <div className="item-card-img">
            <img src={info.imagen} alt="" />
          </div>
          <div className="item-card-msj">
            <h4>{info.marca}</h4>
            <h6>{info.modelo}</h6>
            <h4>${info.precio}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
