import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore , combineReducers } from "redux";
import { numberReducer } from "./DemoRedux/redux/reducer";
import { userReducer} from "./DemoRedux/redux/userReducer"
import { movieReducer } from "./Booking/redux/movieReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
// tạo store

const reducers =combineReducers({
  numberReducer ,
  userReducer,
  movieReducer
})

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
