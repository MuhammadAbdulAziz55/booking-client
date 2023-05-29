import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../components/spinners/Spinner";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `https://hotel-booking-server-rsat.onrender.com/api/hotels?city=${destination}&min=${
      min || 1
    }&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="liTitle">Search</h1>
            <div className="liItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="liItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )}to ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>

              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="liItem">
              <label for="">Options</label>
              <div className="liOptions">
                <div className="liOptionItem">
                  <span className="liOptionsText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="liOptionInput"
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>
                <div className="liOptionItem">
                  <span className="liOptionsText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="liOptionInput"
                  />
                </div>
                <div className="liOptionItem">
                  <span className="liOptionsText">Adult</span>
                  <input
                    type="number"
                    className="liOptionInput"
                    min={1}
                    placeholder={options.adult}
                  />
                </div>
                <div className="liOptionItem">
                  <span className="liOptionsText">Children</span>
                  <input
                    type="number"
                    className="liOptionInput"
                    min={0}
                    placeholder={options.children}
                  />
                </div>
                <div className="liOptionItem">
                  <span className="liOptionsText">Room</span>
                  <input
                    type="number"
                    className="liOptionInput"
                    min={1}
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              <Spinner />
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem key={item._id} item={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
