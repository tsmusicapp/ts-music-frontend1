import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Avatar, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "@/context/LocalStorageContext";
import { getValueByKey } from "@/utils/utils";
import { defaultStateUser, IUserProfile } from "@/types/UserSpace";
import { Toast } from "primereact/toast";

function UserInfo() {
  const { getItem, setItem } = useLocalStorage();
  const [auth, setAuth] = useState<any>(getItem("auth", null)); // Load initial user from local storage
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState<IUserProfile>(defaultStateUser);
  const toast = useRef<Toast>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/v1/user-space", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.tokens.access.token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setImageUrl(
          `http://localhost:3002/uploads/${data.createdBy}/${data.profilePicture}`
        );
        setFormData(data); // Set formData with the response object
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: "Failed to fetch data.",
          life: 5000,
        });
      }
    };
    fetchData();
  }, [toast]);

  return (
    <div className="absolute max-w-[22rem] top-[10rem] left-[2rem] z-30 border-2 border-black/10 rounded-lg">
      <div className="bg-white shadow rounded-lg p-6 z-50">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center gap-1 py-6">
            <Avatar
              variant="circular"
              alt="user 1"
              size="xxl"
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <Typography variant="h5" color="blue-gray" className="font-bold">
              {formData.firstName && formData.lastName
                ? formData.firstName + " " + formData.lastName
                : "-"}
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-1">
              <img
                src={"/icons/location.png"}
                style={{ height: 24, width: 24 }}
              />
              <p className="text-black font-bold text-sm">Pune, India</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <img
                src={"/icons/profession.png"}
                style={{ height: 24, width: 24 }}
              />
              <p className="text-black font-bold text-sm capitalize">
                {formData.occupation ? formData.occupation.join(", ") : "-"}
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <img src={"/icons/time.png"} style={{ height: 24, width: 24 }} />
              <p className="text-black font-bold text-sm">
                {formData.hiring
                  ? "Available to Work"
                  : `Work at ${formData.companyOrStudio}`}
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <img
                src={"/icons/studio.png"}
                style={{ height: 24, width: 24 }}
              />
              <p className="text-black font-bold text-sm">
                {formData.companyOrStudio ? formData.companyOrStudio : ""}
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <img
                src={"/icons/website.png"}
                style={{ height: 24, width: 24 }}
              />
              <Link href={""} target="_blank">
                <p className="text-black font-bold text-sm cursor-pointer hover:text-blue-600">
                  https://staging-music-app.vercel.app
                </p>
              </Link>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-2 w-full justify-center">
            <Link href={"/edit-user-space"} className="">
              <Button
                variant="gradient"
                color="blue"
                className="normal-case w-full font-semibold"
              >
                Edit Your Profile
              </Button>
            </Link>
            <Link href={"/member-management"}>
              <Button
                variant="gradient"
                color="blue-gray"
                className="normal-case w-full font-semibold"
              >
                Go Pro
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 my-4">
          <div className="flex flex-row justify-between gap-1">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold text-xs font-notoSemibold"
            >
              Appreciations
            </Typography>
            <p className="text-xs text-black font-bold font-notoRegular">
              60,216
            </p>
          </div>
          <div className="flex flex-row justify-between gap-1 mb-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold text-xs font-notoSemibold"
            >
              Followers
            </Typography>
            <p className="text-xs text-black font-bold font-notoRegular">
              16,069
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-between gap-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold text-xs font-notoSemibold"
              >
                Collaboration lyrics Language
              </Typography>
              <p className="text-xs text-black font-notoRegular capitalize">
                {formData.collaborationLyricsLangs
                  ? formData.collaborationLyricsLangs.join(", ")
                  : "-"}
              </p>
            </div>
            <div className="flex flex-col justify-between gap-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold text-xs font-notoSemibold"
              >
                Proficient in musical style
              </Typography>
              <p className="text-xs text-black font-notoRegular capitalize">
                {formData.proficientMusicStyles
                  ? formData.proficientMusicStyles.join(", ")
                  : "-"}
              </p>
            </div>
            <div className="flex flex-col justify-between gap-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold text-xs font-notoSemibold"
              >
                Skilled Instrument
              </Typography>
              <p className="text-xs text-black font-notoRegular capitalize">
                {formData.skilledInstruments
                  ? formData.skilledInstruments.join(", ")
                  : "-"}
              </p>
            </div>
            <div className="flex flex-col justify-between gap-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold text-xs font-notoSemibold"
              >
                Collaborated Singers
              </Typography>
              <p className="text-xs text-black font-notoRegular capitalize">
                {formData.collaboratedSingers
                  ? formData.collaboratedSingers
                  : "-"}
              </p>
            </div>
            <div className="flex flex-col justify-between gap-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold text-xs font-notoSemibold"
              >
                Collaborated Publishers
              </Typography>
              <p className="text-xs text-black font-notoRegular capitalize">
                {formData.collaboratedPublisher
                  ? formData.collaboratedPublisher
                  : "-"}
              </p>
            </div>
            <div className="flex flex-col justify-between gap-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold text-xs font-notoSemibold"
              >
                Company or Studio
              </Typography>
              <p className="text-xs text-black font-notoRegular capitalize">
                {formData.companyOrStudio ? formData.companyOrStudio : "-"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-8">
          <div className="flex flex-row gap-1 justify-between border-2 border-black p-2">
            <p className="text-xs text-black font-notoRegular font-bold">
              LinkedIn
            </p>
            <Link href={"https://www.linkedin.com/"} target="_blank">
              <ArrowTopRightOnSquareIcon className="h-4 w-4 hover:text-blue-700" />
              {/* <p className="text-xs text-blue-700 font-bold underline cursor-pointer">
                https://www.linkedin.com/
              </p> */}
            </Link>
          </div>
          <div className="flex flex-row gap-1 justify-between border-l-2 border-r-2 border-black p-2">
            <p className="text-xs text-black font-notoRegular font-bold">X</p>
            <Link href={"https://x.com/?lang=en"} target="_blank">
              <ArrowTopRightOnSquareIcon className="h-4 w-4 hover:text-blue-700" />
              {/* <p className="text-xs text-blue-700 font-bold underline cursor-pointer">
                https://x.com/?lang=en
              </p> */}
            </Link>
          </div>
          <div className="flex flex-row gap-1 justify-between border-2 border-black p-2">
            <p className="text-xs text-black font-notoRegular font-bold">
              Facebook
            </p>
            <Link href={"https://www.facebook.com/"} target="_blank">
              <ArrowTopRightOnSquareIcon className="h-4 w-4 hover:text-blue-700" />
              {/* <p className="text-xs text-blue-700 font-bold underline cursor-pointer">
                https://www.facebook.com/
              </p> */}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 my-8">
          <div className="mb-2">
            <Typography variant="small" color="blue-gray" className="font-bold">
              About
            </Typography>
          </div>
          <p className="text-xs text-black font-notoRegular font-bold text-justify">
            {formData.aboutMe ? formData.aboutMe : "-"}
          </p>
        </div>
        <div className="flex flex-col gap-1 my-8">
          <div className="mb-2">
            <Typography variant="small" color="blue-gray" className="font-bold">
              Software Tools
            </Typography>
          </div>
          <p className="text-xs text-black capitalize font-notoRegular font-bold">
            {formData.softwareTool ? formData.softwareTool : "-"}
          </p>
          <p className="text-xs text-black font-notoRegular font-bold">
            ArchiCAD
          </p>
          <p className="text-xs text-black font-notoRegular font-bold">
            Autodesk Revit
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
