import { Typography, Input, Textarea } from "@material-tailwind/react";
import React from "react";

function BottomPart() {
  return (
    <div className="mb-1 flex flex-col gap-6">
      <Typography
        variant="small"
        color="blue-gray"
        className="-mb-3 font-semibold"
      >
        Musical Instrument (Optional)
      </Typography>
      <Input
        crossOrigin={""}
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      <Typography
        variant="small"
        color="blue-gray"
        className="-mb-3 font-semibold"
      >
        Tags (Fill in the key attribute words of the song for easy search,
        separated by commas)
      </Typography>
      <Input
        crossOrigin={""}
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      <Typography
        variant="small"
        color="blue-gray"
        className="-mb-3 font-semibold"
      >
        Description
      </Typography>
      <Textarea className="w-96 h-56" />
      <Typography
        variant="small"
        color="blue-gray"
        className="-mb-3 font-semibold"
      >
        Software Tool (Optional)
      </Typography>
      <Input
        crossOrigin={""}
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
  );
}

export default BottomPart;
