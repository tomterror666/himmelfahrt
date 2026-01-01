"use client"

import dynamic from "next/dynamic";

const MapPage = () => {
  const UsedMap = dynamic(() => import("./map"), { ssr: false });

  return (
    <div>
      <UsedMap />
    </div>
  );
};

export default MapPage;
