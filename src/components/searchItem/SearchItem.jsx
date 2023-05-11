import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="searchImg" />

      <div class="searchDescPart">
        <h1 className="searchTitle">{item.name}</h1>
        <span className="searchDistance">{item.distance}m from center</span>
        <span className="searchTaxiOp">Free airport taxi</span>
        <span className="searchSubtitle">
          Studio Apartment with Air condition
        </span>
        <span className="searchFeatures"> {item.desc}</span>
        <span className="searchCancelOp">Free cancellation</span>
        <span className="searchCancleOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div class="searchDetailsPart">
        {item.rating && (
          <div className="searchRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="searchDetailTexts">
          <span className="searchPrice">${item.cheapestPrice}</span>
          <span className="searchTextOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="searchCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
