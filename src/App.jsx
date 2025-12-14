import "./App.css";
import banner from "./assets/banner.jpg";

function App() {
  return (
    <div className="container">

      {/* Hero */}
      <header className="hero">
        <h1>Cancer Awareness & Support</h1>
        <p>Spreading awareness, strength, and hope together 💗</p>
      </header>

      {/* Content Card */}
      <div className="card">

        <img src={banner} alt="Cancer Awareness" className="banner" />

        <section className="about">
          <h2>Why Awareness Matters</h2>
          <p>
            Early awareness helps in prevention, timely diagnosis,
            and emotional support for patients and families.
            Knowledge can truly save lives.
          </p>
        </section>

        <section className="contact">
          <h2>Get in Touch</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for reaching out 💗");
            }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required />
            <button type="submit">Send Message</button>
          </form>
        </section>

      </div>

      <footer>
        <p>© 2025 Cancer Awareness & Support</p>
      </footer>

    </div>
  );
}

export default App;
