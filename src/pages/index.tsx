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
import { v4 as uuidv4 } from "uuid";

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
    return () => {
      dispatch(finish());
    };
  }, []);
  const dispatch = useDispatch();
  const validator = useSelector((state: RootState) => state.validator);
  const { data } = props;
  if (validator.validate === false) {
    dispatch(load(data));
  }
  const users = useSelector((state: RootState) => state.users);

  return (
    <div id="app__home--wrapper">
      <Header />

      <UserList>
        {validator.validate
          ? users.users.map((obj: IUser) => {
              const { id, name, email, gender, status } = obj;
              return (
                <UserCard
                  key={uuidv4()}
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
                  key={uuidv4()}
                  id={id}
                  email={email}
                  name={name}
                  gender={gender}
                  status={status}
                />
              );
            })}
      </UserList>
    </div>
  );
};

export default Home;
