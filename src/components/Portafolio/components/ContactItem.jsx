export const ContactItem = ({ titulo, ico, adress }) => (
  <div className="d-flex gap-2">
    <span>
      <i className={`fas ${ico} text-warning display-5`} />
    </span>
    <div className="d-flex mx-2 flex-column justify-content-start ">
      <h5>{titulo}</h5>
      <p className="h6">{adress}</p>
    </div>
  </div>
);
