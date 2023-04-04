import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      src="/images/placeholder.png"
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
    />
  );
};

export default Avatar;
