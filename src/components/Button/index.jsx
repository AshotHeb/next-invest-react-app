import "./style.scss";
export const Button = ({ children, size, uniquename }) => {
  return (
    <button  className="button"size={size} uniquename={uniquename}>
      {children}
    </button>
  );
};
