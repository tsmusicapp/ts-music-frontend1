import { CATEGORIES } from "@/dummy/example";
import React from "react";
import BoxWithInfo from "../../components/music-box/box-with-info";

function Works() {
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {CATEGORIES.map((props, key) => (
          <BoxWithInfo key={key} withName={false} {...props} withSale={false} />
        ))}
      </div>
      <div className="flex justify-start items-start gap-2">
        <div className="w-full flex flex-col justify-start items-start font-semibold text-sm py-8">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-[35.9rem] h-[10rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Share Your Work</span>
                {/* or drag
                    and drop */}
              </p>
              {/* <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p> */}
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
    </>
  );
}

export default Works;
