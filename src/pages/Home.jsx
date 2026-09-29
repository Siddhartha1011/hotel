import { lazy, Suspense } from "react";

import Navbar from "../components/Navbar.jsx";
import HomeVid from "../components/HomeVid";
import AboutUs from "../components/AboutUs";
import Menu from "../components/Menu";
import Rooms from "../components/Rooms.jsx";
import Footer from "../components/Footer.jsx";

const Sidebar = lazy(() => import("../components/Sidebar.jsx"));

function Home({ isOpen, setIsOpen }) {
  return (
    <>
      <Navbar setIsOpen={setIsOpen} />

      <Suspense fallback={null}>
        {isOpen && (
          <Sidebar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </Suspense>

      <HomeVid />
      <AboutUs />
      <Menu />
      <Rooms />
      <Footer />
    </>
  );
}

export default Home;