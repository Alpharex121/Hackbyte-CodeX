

import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/store";


const App = () => {
  return (
    <>
      <Provider store={appStore}>
        
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

export default App;
