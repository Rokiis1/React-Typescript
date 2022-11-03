import { User } from "../interfaces/User";

const PostCard = ({ avatar, email, first_name, last_name }: User) => {
  return (
    <div>
      <img src={avatar} alt={avatar} />
      <p>{email}</p>
      <p>{first_name}</p>
      <p>{last_name}</p>
    </div>
  );
};

export default PostCard;
