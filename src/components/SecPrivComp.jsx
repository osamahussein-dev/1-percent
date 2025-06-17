import SettInput from "./SettInput";

const SecPrivComp = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Change Password</h2>

      <div className="space-y-4">
        <SettInput 
          title="Current Password" 
          type="password"
          placeholder="Enter your current password"
        />

        <SettInput 
          title="New Password" 
          type="password"
          placeholder="Enter your new password"
        />

        <SettInput 
          title="Confirm New Password" 
          type="password"
          placeholder="Confirm your new password"
        />
      </div>

      <div className="mt-8">
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default SecPrivComp;
