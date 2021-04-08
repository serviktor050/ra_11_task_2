import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  chooseService,
  changeServiceField,
  editService,
} from "../../actions/actionCreators";

export default function ServiceChoose(props) {
  const id = Number(props.match.params.id);
  const { history } = props;

  const { item, loading, error } = useSelector((state) => state.serviceChoose);

  const loadingEdit = item.loadingEdit;
  const errorEdit = item.errorEdit;
  const editComplete = item.editComplete;

  const dispatch = useDispatch();

  useEffect(() => {
    chooseService(dispatch, id);
  }, [dispatch]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    editService(dispatch, item.id, item.name, item.price, item.content);
  };

  return (
    <div className="service">
      {loading && <div className="loading"></div>}
      {error && <div className="error">Ошибка загрузки данных</div>}
      {!loading && !error && !loadingEdit && !errorEdit && (
        <form className="service-form" onSubmit={handleSubmit}>
          <div className="form-name">
            <label>
              Наименование
              <input name="name" onChange={handleChange} value={item.name} />
            </label>
          </div>
          <div className="form-price">
            <label>
              Стоимость
              <input name="price" onChange={handleChange} value={item.price} />
            </label>
          </div>
          <div className="form-content">
            <label>
              Описание
              <textarea
                name="content"
                onChange={handleChange}
                value={item.content}
              />
            </label>
          </div>
          <div className="form-buttons">
            <button onClick={() => history.goBack}>Отмена</button>
            <button type="submit">Сохранить</button>
          </div>
        </form>
      )}
      {loadingEdit && <div className="loading"></div>}
      {editComplete && <Redirect from="/services/:id" to="/services" />}
      {errorEdit && <div className="error">Данные не обновлены</div>}
    </div>
  );
}
