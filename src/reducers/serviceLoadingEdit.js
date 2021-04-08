// import {
//   EDIT_SERVICE_REQUEST,
//   EDIT_SERVICE_FAILURE,
//   EDIT_SERVICE_SUCCESS,
// } from "../actions/actionTypes";

// const initialState = {
//   loadingEdit: false,
//   errorEdit: null,
// };

// export default function serviceLoadingEdit(state = initialState, action) {
//   switch (action) {
//     case EDIT_SERVICE_REQUEST:
//       return {
//         ...state,
//         loadingEdit: true,
//       };
//     case EDIT_SERVICE_FAILURE:
//       const { error } = action.payload;
//       return {
//         ...state,
//         loadingEdit: false,
//         errorEdit: error,
//       };
//     case EDIT_SERVICE_SUCCESS:
//       return { ...initialState };
//     default:
//       return state;
//   }
// }
