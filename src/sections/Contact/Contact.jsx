import React from "react";
import styles from './ContactStyles.module.css';


function ContactTest() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "48b4916b-cd3b-4ebc-8ef7-0c5f22d83d7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Hello, I'll try to respond and reach you as fast as I can, Thanks for your message! 😁");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
<section id="contact" className={styles.container}>
<h1 className="sectionTitle">Contact me 👋🏽</h1>
      <form onSubmit={onSubmit}><div className="formGroup">
      <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
      </div>
       
      <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>

        <input className="hover btn" type="submit" value="Submit" />

      </form>
      
      <p className={styles.result}>{result}</p>
    </section>
  );
}

export default ContactTest;