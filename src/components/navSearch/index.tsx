import React from "react";
import { BiSearch } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../interfaces/IStates";
import { applyFilter } from "../../store/filter/filterSlice";
import { IUser } from "../../interfaces/IUser";
import { isFiltered } from "../../store/validator/filterValidator";

function SearchBar() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);

  function search(data: FieldValues) {
    console.log(data);
    const result = users.filter((user: IUser) =>
      user.name.toLowerCase().match(data.busca.toLowerCase())
    );
    if (result.length > 0) {
      dispatch(applyFilter(result));
      return dispatch(isFiltered());
    }
    return window.alert("Nenhum usuário encontrado.");
  }

  return (
    <form onSubmit={handleSubmit(search)} className="app__search--bar">
      <label htmlFor="busca"></label>
      <input type="text" id="busca" {...register("busca")} />
      <button>
        <BiSearch size={25} />
      </button>
    </form>
  );
}

export default SearchBar;
