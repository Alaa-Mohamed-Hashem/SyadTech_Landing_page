// Import layout components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Import page components
import HomePage from "./HomePage";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
