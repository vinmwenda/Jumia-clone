import { configureStore } from "@reduxjs/toolkit";
import reducer from "./productsReducer";
import api from "./apiMiddleware";

export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: [api],
  });
}
