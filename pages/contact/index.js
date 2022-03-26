// import Form from "../../components/UI/Form";
import ContactIcons from "../../components/UI/ContactIcons";
function contact(params) {
  return (
    <div>
      <h1>Contact me</h1>
      <p>
        I'm interested in freelance opportunities - especially ambitious or
        large projects. However, if you have other request or question, don't
        hesitate to use the form.
      </p>
      <ContactIcons
        link="https://www.linkedin.com/in/chitrang313/"
        src="#"
        alt="image.png"
      />

      <ContactIcons
        link="https://www.instagram.com/___chitrang___/"
        src="#"
        alt="image.png"
      />
      <h5>Email: chitrang313@gmail.com</h5>
      <a href="tel:+918007796351">
        <u>Contact: +91-8007796351</u>
      </a>
      {/* <Form /> */}
    </div>
  );
}
export default contact;
