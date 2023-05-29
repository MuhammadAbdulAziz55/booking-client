import useFetch from "../../hooks/useFetch";
import Spinner from "../spinners/Spinner";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://hotel-booking-server-rsat.onrender.com/api/hotels/countByCity?cities=Chittagong,Dhaka,Shylet"
  );
  console.log(data);
  return (
    <div className="featured">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-09b-735x490.jpg.webp"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Chittagong</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-01a-735x490.jpg.webp"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Dhaka</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-04-735x490.jpg.webp"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Shylet</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Featured;
