import "./Submission.css";

export default function Submission() {
    function openForm() {
        alert("Sending your mystery!")
    }
    return (
        <>
            <section id="submissions">
                <h2>Do you have any mysteries untold?</h2>
                <p>Send in your mystery, and if it is mysterious enough, we will post it in out blog! But be aware: a
                    mystery will be a mystery no longer.</p>
                <blockquote>"Before posting about the glittery poop of my cat, my mind was fully occupied by that
                    mystery. Now I can finally sleep again, knowing that the community of 'Cats and Other Mysteries'
                    will not stand still, until an answer is found."
                </blockquote>
                <button onClick={openForm}>Send In Mysteries</button>
            </section>
        </>
    )
}