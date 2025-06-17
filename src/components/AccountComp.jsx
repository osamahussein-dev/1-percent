import ProfileImg from "./ProfileImg";
import SetBtnComp from "./SetBtnComp";
import SettInput from "./SettInput";

const AccountComp = () => {
  return (
    <>
      <div className="py-[10px]">
        {/*Photo section*/}

        <div className="flex flex-col md:flex-row items-center justify-center sm:justify-start gap-4">
          <ProfileImg size={"60px"} />
          {/*btns section*/}

          <div>
            <SetBtnComp />
          </div>
        </div>
        {/*form*/}
        <div>
          <div className="flex flex-col gap-6 md:flex-row my-4">
            <div className="flex flex-col md:w-1/2">
              <SettInput title={"First Name"} />
            </div>

            <div className="flex flex-col md:w-1/2">
              <SettInput title={"Last Name"} />
            </div>
          </div>

          <div className="flex flex-col">
            <SettInput title={"Email Address"} />
          </div>

          <div className="flex flex-col mt-[12px]">
            <SettInput title={"Phone Number"} />
          </div>

          {/*bio*/}

          <div className="py-[20px] border-b-1 border-t-1 border-gray-400 my-4">
            <div>
              <h2>BIO</h2>
            </div>
            <div className="flex flex-col">
              <SettInput title={"Choose Your BIO"} />
            </div>
          </div>

          <div className="text-center md:text-left">
            <button className="bg-black text-white text-[14px] p-[8px_20px] rounded-[6px]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountComp;
