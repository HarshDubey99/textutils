
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function Index() {
    return (
        <div className="Index">
            <Navbar title="TextUtils" />
            <TextForm />
            <Footer className="fixed-bottom" />
        </div>
    );
}

export default Index;