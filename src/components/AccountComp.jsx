import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ProfileImg from "./ProfileImg";
import SetBtnComp from "./SetBtnComp";
import SettInput from "./SettInput";
import api from "../api";
import { jsonParse } from "../helpers";
import React from "react";
import queryClient from "../queryClient";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;

const AccountCompForm = ({ userData, updateMutation }) => {
  const [formData, setFormData] = useState({
    name: userData?.name,
    email: userData?.email,
    phone: userData?.phone
  });

  const isDirty = formData.name !== userData.name || formData.email !== userData.email || formData.phone !== userData.phone;
  const isValid = formData.name && formData.email && formData.phone && emailRegex.test(formData.email) && phoneRegex.test(formData.phone);

  const handleInputChange = (e, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };

  const message = !isDirty && (updateMutation?.isSuccess || updateMutation?.isError) ? {
    type: updateMutation.isSuccess ? "success" : "error",
    text: updateMutation.isSuccess ? updateMutation.data?.message : updateMutation.error?.message || "Error updating profile"
  } : null;

  return (
    <>
      <div className="py-[10px]">
        {/*Photo section*/}
        <div className="flex flex-col md:flex-row items-center justify-center sm:justify-start gap-4">
          <ProfileImg size={"60px"} id={userData.id} />
          {/*btns section*/}
          <div>
            <SetBtnComp />
          </div>
        </div>

        {/*form*/}
        <form onSubmit={handleSubmit}>
          <div>
            <div className="flex flex-col my-4">
              <div className="flex flex-col w-full">
                <SettInput 
                  title={"Name"} 
                  value={formData.name}
                  onChange={(e) => handleInputChange(e, "name")}
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <SettInput 
                title={"Email Address"} 
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e, "email")}
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col mt-[12px]">
              <SettInput 
                title={"Phone Number"} 
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange(e, "phone")}
                placeholder="Enter your phone number"
              />
            </div>

            {message?.text && (
              <div className={`mt-4 p-3 rounded ${
                message?.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                {message?.text}
              </div>
            )}

            <div className="text-center md:text-left mt-4">
              <button 
                type="submit"
                disabled={updateMutation?.isPending || !isDirty || !isValid}
                className={`bg-black text-white text-[14px] p-[8px_20px] rounded-[6px] 
                  ${(updateMutation?.isPending || !isDirty || !isValid) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
              >
                {(updateMutation?.isPending) ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const AccountComp = () => {
  const user = jsonParse(localStorage.getItem("user"));

  const { data: userData, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.get(`/users/${user.id}`),
  });

  const updateMutation = useMutation({
    mutationFn: async (data) => {
      return await api.put(`/users/${user.id}`, data);
    },
    onSuccess: (response) => {
      const updatedUser = { ...user, ...response.data };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },

  });

  if (isPending) {
    return <div className="loader"/>
  }

  return (
    <AccountCompForm userData={userData} updateMutation={updateMutation} />
  );
};

export default AccountComp;
