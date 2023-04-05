"use client";

import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      src={src || "/images/placeholder.png"}
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
    />
  );
};

export default Avatar;
