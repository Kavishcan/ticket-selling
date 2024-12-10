interface Props {
  buttonNames: string[];
  buttonColor: string[];
}

function ButtonList({ buttonNames , buttonColor}: Props) {
  return (
    <div>
      {buttonNames.map((name, index) => (
        <button key={index} className="btn btn-primary me-2 mt-3">
          {name}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
