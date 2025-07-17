import Heading from "./Heading";
function Container({ children }) {
  return (
    <div className="container">
      <div className="todoBox">
        <Heading />
        {children}
      </div>
    </div>
  );
}

export default Container;
