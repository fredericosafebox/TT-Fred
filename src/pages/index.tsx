import type { NextPage } from "next";
import Header from "../components/header";
import UserCard from "../components/userCard";
import { IUser } from "../interfaces/IUser";
import { api } from "../services/api";
import UserList from "../components/userList";
import { load } from "../store/users/usersSlice";
import { RootState } from "../interfaces/IStates";
import { useDispatch, useSelector } from "react-redux";
import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { finish } from "../store/loader/loaderSlice";

export async function getStaticProps() {
  const res: AxiosResponse = await api.get("users");
  const { data } = res;
  return {
    props: {
      data: data,
    },
  };
}

const Home: NextPage = (props: any) => {
  useEffect(() => {
    dispatch(finish());
  });
  const dispatch = useDispatch();
  const validator = useSelector((state: RootState) => state.validator);
  const { data } = props;
  if (!validator) {
    dispatch(load(data));
  }
  const users = useSelector((state: RootState) => state.users);

  return (
    <>
      <Header />
      <UserList>
        {!validator
          ? users.users.map((obj: IUser) => {
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
            })
          : data.map((obj: IUser) => {
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
