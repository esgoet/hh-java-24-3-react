import Blog from "./components/blog/Blog.tsx";
import Header from "./components/header/Header.tsx";
import "./App.css";
import Navigation from "./components/nav/Navigation.tsx";
import Submission from "./components/contact/Submission.tsx";
import About from "./components/about/About.tsx";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <About />
                <Navigation/>
                <Blog />
                <Submission />
            </main>
        </>
    )
}