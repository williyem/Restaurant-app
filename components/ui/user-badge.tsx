import { getFirstLetters } from "@/utils/easy";
import React from "react";

const ProfileBadge = ({ username }: { username: string }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden shadow-md shadow-indigo-300 bg-indigo-500 rounded-full ">
      <span className="font-medium text-gray-100 uppercase">
        {getFirstLetters(username)}
      </span>
    </div>
  );
};

export default ProfileBadge;
