import { Axios } from "axios";
import type { NextPage } from "next";
import Header from "../components/header";
import UserCard from "../components/userCard";
import { IUser } from "../interfaces/IUser";
import { api } from "../services/api";
import UserList from "../components/userList";

export async function getStaticProps() {
  try {
    const res = api.get("users");
    const { data } = await res;

    return {
      props: {
        data,
      },
    };
  } catch {
    return "error";
  }
}

const Home: NextPage = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <Header />
      <UserList>
        {data &&
          data.map((obj: IUser) => {
            const { id, name, email, gender, status } = obj;
            return (
              <UserCard
                key={id}
                id={id}
                email={email}
                name={name}
                gender={gender}
                status={status}
              />
            );
          })}
      </UserList>
    </>
  );
};

export default Home;
