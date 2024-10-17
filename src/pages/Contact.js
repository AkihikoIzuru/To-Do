import "./css/Contact.css";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgoovgy");
  if (state.succeeded) {
    return <p className="contact-completed">Thanks for joining!</p>;
  }
  return (
    <div className="contact-container">
      <h2 className="h2-contact">Contact Me!</h2>
      <p className="p-contact">
        Silahkan Isi formulir di bawah ini jika anda ingin menghubungi kami
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nama: </label>
          <input
            className="input-contact"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            className="input-contact"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message: </label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit" className="submit-button">
          Kirim pesan
        </button>
      </form>
    </div>
  );
};


export default Contact;
