import { MdPrivacyTip } from "react-icons/md";
import ListItemsselect from "../components/ListItemsselect";
import SideBar from "../components/Sidebar";
import { BiSolidUser } from "react-icons/bi";
import { HiPaintBrush } from "react-icons/hi2";
import SettCover from "../components/SettCover";
import { useState } from "react";
import AccountComp from "../components/AccountComp";
import SecPrivComp from "../components/SecPrivComp";
import ThemeComp from "../components/ThemeComp";

export const Settings = () => {
  const [pageSelected, setPageSelected] = useState("acc");

  return (
    <div className="settings py-[2%]">
      <div className="container container-settings gap-4 flex flex-col lg:flex-row">
        <SideBar>
          <div className=" select-none">
            <ul className="flex flex-col gap-5 items-center lg:items-start">
              <ListItemsselect
                Icon={BiSolidUser}
                setState={setPageSelected}
                value={"acc"}
                selected={pageSelected}
              >
                <p className="font-bold">Account</p>
              </ListItemsselect>

              <ListItemsselect
                Icon={MdPrivacyTip}
                setState={setPageSelected}
                value={"secpriv"}
                selected={pageSelected}
              >
                <p className="font-bold">Security & Privacy</p>
              </ListItemsselect>

              <ListItemsselect
                Icon={HiPaintBrush}
                setState={setPageSelected}
                value={"theme"}
                selected={pageSelected}
              >
                <p className="font-bold">Theme</p>
              </ListItemsselect>
            </ul>
          </div>
        </SideBar>

        <div className="w-full flex justify-center">
          {pageSelected == "acc" && (
            <SettCover headingTitle={"Account Settings"}>
              <AccountComp />
            </SettCover>
          )}

          {pageSelected == "secpriv" && (
            <SettCover headingTitle={"Security & Privacy"}>
              <SecPrivComp />
            </SettCover>
          )}

          {pageSelected == "theme" && (
            <SettCover headingTitle={"Theme"}>
              <ThemeComp />
            </SettCover>
          )}
        </div>
      </div>
    </div>
  );
};
