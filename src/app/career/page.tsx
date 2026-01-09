import CommonBannerComponent from "@/components/ui-section/CommonBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <CommonBannerComponent title="Careers" />

      <div className="my-20 max-w-7xl mx-auto px-5">
        <div className="border rounded">
          <div className="p-5">Currently There is No Openings.</div>
        </div>
      </div>
    </div>
  );
};

export default page;
