import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeService, fetchServices } from "../actions/actionCreators";
import { Link } from "react-router-dom";

function ServiceList(props) {
  const { items, loading, error } = useSelector((state) => state.serviceList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  return (
    <>
      {loading && <div className="loading"></div>}
      {error && <div className="error">Ошибка загрузки данных</div>}
      {!loading && !error && (
        <>
          {items.map((o) => (
            <div className="service-item" key={o.id}>
              <div className="service-name-and-price">
                {o.name} {o.price}
              </div>
              <div className="service-buttons">
                <Link to={`/services/${o.id}`}>
                  <button>✎</button>
                </Link>
                <button onClick={() => handleRemove(o.id)}>✕</button>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default ServiceList;
