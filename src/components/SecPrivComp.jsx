import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import SettInput from "./SettInput";
import api from "../api";
import { jsonParse } from "../helpers";

const SecPrivComp = () => {
  const user = jsonParse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  const updatePasswordMutation = useMutation({
    mutationFn: async (data) => {
      return await api.post(`/users/${user.id}/change-password`, {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword
      });
    },
    onSuccess: (response) => {
      setMessage({ text: response.message, type: "success" });
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    },
    onError: (error) => {
      setMessage({ 
        text: error.response?.data?.message || "Error updating password", 
        type: "error" 
      });
    }
  });

  const handleInputChange = (e, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    setMessage({ text: "", type: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      setMessage({ text: "All fields are required", type: "error" });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({ text: "New passwords don't match", type: "error" });
      return;
    }

    updatePasswordMutation.mutate(formData);
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Change Password</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <SettInput 
          title="Current Password" 
          type="password"
          value={formData.currentPassword}
          onChange={(e) => handleInputChange(e, "currentPassword")}
          placeholder="Enter your current password"
        />

        <SettInput 
          title="New Password" 
          type="password"
          value={formData.newPassword}
          onChange={(e) => handleInputChange(e, "newPassword")}
          placeholder="Enter your new password"
        />

        <SettInput 
          title="Confirm New Password" 
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange(e, "confirmPassword")}
          placeholder="Confirm your new password"
        />

        {message.text && (
          <div className={`p-3 rounded ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {message.text}
          </div>
        )}

        <div className="mt-8">
          <button 
            type="submit"
            disabled={updatePasswordMutation.isLoading}
            className={`bg-gray-800 hover:bg-gray-700 text-white px-6 py-2.5 rounded-lg font-medium 
              transition-colors duration-200 
              ${updatePasswordMutation.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {updatePasswordMutation.isLoading ? "Updating..." : "Update Password"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecPrivComp;
