// Style
import "./user.scss";

// Data
import { singleUser } from "../../data";

// Components
import { Single } from "../../components";

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
