import React, { useState } from "react";
import { useStore } from "../store/store";

const Form: React.FC = () => {
  const { submitForm } = useStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFormData = {
      id: Date.now(),
      name,
      email,
      age,
    };

    submitForm(newFormData);
    setName("");
    setEmail("");
    setAge("");
  };

  const isFormEmpty = !name || !email || !age;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto border rounded-md p-3"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className=" block mb-2 text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full text-black p-1 bg-gray-600"
          placeholder="Name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full text-black p-1 bg-gray-600"
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="age"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full text-black p-1 bg-gray-600"
          placeholder="Age"
        />
      </div>
      <button
        type="submit"
        className={`inline-block text-sm font-light p-3 rounded-md text-white border  ${
          isFormEmpty ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-950"
        } `}
        disabled={isFormEmpty}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
