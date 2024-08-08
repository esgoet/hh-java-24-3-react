import "./About.css";

export default function About() {
    return (
        <>
            <section id={"about"}>
                <h2>About</h2>
                <img className={"roundPic"} src={"/cat.jpg"} alt={"A friendly looking cat"}/>
                <p>Hello, I'm <span className={"fancy"}>Louise</span>, your friendly neighbourhood cat here to solve
                    your mysteries. <span className={"fancy"}>Meow!</span></p>
            </section>
        </>
    )
}