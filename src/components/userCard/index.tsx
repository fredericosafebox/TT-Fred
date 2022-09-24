import { StyledCard } from "./styles";
import { IUser } from "../../interfaces/IUser";
import { FaUserCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsGenderAmbiguous, BsPersonFill } from "react-icons/bs";
import { TbActivity } from "react-icons/tb";
import { MdTouchApp } from "react-icons/md";

function UserCard(user: IUser) {
  const { id, name, email, gender, status } = user;

  return (
    <StyledCard id={String(id)}>
      <div className="app__card--info">
        <p>
          <BsPersonFill size={20} />
          Name
        </p>
        <p>
          <MdAlternateEmail size={20} />
          Email
        </p>
        <p>
          <BsGenderAmbiguous size={20} />
          Gender
        </p>
        <p>
          <TbActivity size={20} />
          Status
        </p>
      </div>
      <div className="app__card--data">
        <h5>{name}</h5>
        <h6>{email}</h6>
        <p>{gender}</p>
        <span>{status}</span>
        <p id="touch">
          <MdTouchApp size={20} />
        </p>
        <div id="user">
          <FaUserCircle size={50} />
        </div>
      </div>
    </StyledCard>
  );
}

export default UserCard;
