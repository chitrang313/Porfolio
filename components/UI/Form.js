function Form(params) {
  return (
    <div>
      <form action="#" method="POST">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" autocomplete="name" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" autocomplete="email" required />

        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" autocomplete="name" required />

        <label htmlFor="message">Message</label>
        <input id="message" type="textarea" autocomplete="name" required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Form;
