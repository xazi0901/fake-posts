import { Outlet, useNavigation } from "react-router-dom";
import NavTop from "../Components/NavTop/NavTop";
import Footer from "../Components/Footer/Footer"

function RootLayout() {
  return (
    <>
      <header>
        <NavTop />
      </header>
      <main>
        {/*navigation.state === "loading" && <p>Loading...</p> */}
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default RootLayout;