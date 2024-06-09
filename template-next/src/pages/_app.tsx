import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import RootLayout from "./layout";
import "@/styles/global.css"; // Ensure this path is correct

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}

export default App;
