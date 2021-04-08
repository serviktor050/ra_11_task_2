import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  REMOVE_SERVICE,
  SERVICE_CHOOSE_REQUEST,
  SERVICE_CHOOSE_FAILURE,
  SERVICE_CHOOSE_SUCCESS,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_FAILURE,
  EDIT_SERVICE_SUCCESS,
} from "./actionTypes";

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = (error) => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = (items) => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const addServiceRequest = (name, price) => ({
  type: ADD_SERVICE_REQUEST,
  payload: {
    name,
    price,
  },
});

export const addServiceFailure = (error) => ({
  type: ADD_SERVICE_FAILURE,
  payload: {
    error,
  },
});

export const addServiceSuccess = () => ({
  type: ADD_SERVICE_SUCCESS,
});

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
});

export const removeService = (id) => ({
  type: REMOVE_SERVICE,
  payload: {
    id,
  },
});

export const serviceChooseRequest = () => ({
  type: SERVICE_CHOOSE_REQUEST,
});

export const serviceChooseFailure = (error) => ({
  type: SERVICE_CHOOSE_FAILURE,
  payload: {
    error,
  },
});

export const serviceChooseSuccess = (item) => ({
  type: SERVICE_CHOOSE_SUCCESS,
  payload: {
    item,
  },
});

export const editServiceRequest = (name, price, content) => ({
  type: EDIT_SERVICE_REQUEST,
  payload: {
    name,
    price,
    content,
  },
});

export const editServiceFailure = (error) => ({
  type: EDIT_SERVICE_FAILURE,
  payload: {
    error,
  },
});

export const editServiceSuccess = () => ({
  type: EDIT_SERVICE_SUCCESS,
});

export const fetchServices = async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(
      "https://ra-11-task-1-server.herokuapp.com/api/services"
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    dispatch(fetchServicesSuccess(data));
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
};

export const addService = async (dispatch, name, price) => {
  dispatch(addServiceRequest());
  try {
    const response = await fetch(
      "https://ra-11-task-1-server.herokuapp.com/api/services",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price }),
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(addServiceSuccess());
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }
  fetchServices(dispatch);
};

export const chooseService = async (dispatch, id) => {
  dispatch(serviceChooseRequest());
  try {
    const response = await fetch(
      `https://ra-11-task-1-server.herokuapp.com/api/services/${id}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    dispatch(serviceChooseSuccess(data));
  } catch (e) {
    dispatch(serviceChooseFailure(e.message));
  }
};

export const editService = async (dispatch, id, name, price, content) => {
  dispatch(editServiceRequest());
  try {
    const response = await fetch(
      "https://ra-11-task-1-server.herokuapp.com/api/services/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, price, content }),
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(editServiceSuccess());
  } catch (e) {
    dispatch(editServiceFailure(e.message));
  }

  fetchServices(dispatch);
};
