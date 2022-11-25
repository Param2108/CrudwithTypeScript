import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import uuid from "react-uuid";
import { useForm } from "react-hook-form";
// import Buttons from "../../components/Buttons";
import Textfield from "../../components/Textfield";
import { addUsers } from "./userSlice";
import Error from "../../components/Error";
interface forHokks {
  value: string;
}

interface UserModel {
  name: string;
  lastname: string;
}
const AddUsers = () => {
  const [value, setValue] = useState({
    name: "",
    lastname: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserModel>();

  const handleAddUser = (data: { name: string; lastname: string }) => {
    setValue({ name: "", lastname: "" });
    navigate("/");
    dispatch(
      addUsers({
        id: uuid(),
        name: data.name,
        lastname: data.lastname,
      })
    );
  };
  const handlechangename = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, name: e.target.value });
  };
  const handlechangelast = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, lastname: e.target.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleAddUser)}>
        <Textfield
          label="name"
          value={value.name}
          onChange={handlechangename}
          inputProps={{ type: "text", placeholder: "First Name" }}
          register={register}
        />
        <Error errors={errors} fieldName={"name"} />
        <Textfield
          label="lastname"
          register={register}
          inputProps={{ type: "text", placeholder: "Last Name" }}
          onChange={handlechangelast}
          value={value.lastname}
        />
        <Error errors={errors} fieldName={"lastname"} />
        <button type="submit">Submit now</button>
      </form>
    </>
  );
};
export default AddUsers;
