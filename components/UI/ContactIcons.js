function ContactIcons(params) {
  return (
    <div>
      <a href={params.link} target="_blank">
        <img src={params.src} alt={params.alt}></img>
      </a>
    </div>
  );
}
export default ContactIcons;
