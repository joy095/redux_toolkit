import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const PostAuther = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const auther = users.find((user) => user.id === userId);

  return <span>by {auther ? auther.name : "Unknown auther"}</span>;
};

export default PostAuther;
