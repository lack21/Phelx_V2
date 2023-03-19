function ContactSection() {
  return (
    <section id="contact">
      <h2 className="sub-heading">
        Contact <span>Us</span>
      </h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

      <form className="form">
        <input type="text" name="name" placeholder="Enter Name.." required />
        <input type="email" name="email" placeholder="Enter Email.." required />
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject.."
          required
        />
        <textarea
          name="textarea"
          rows="8"
          placeholder="Message.."
          required
        ></textarea>
        <button type="button">Submit!</button>
      </form>
    </section>
  );
}

export default ContactSection;
