import React, { useEffect, useState } from "react";
import { Card, CardBody, Avatar, Typography } from "@material-tailwind/react";
import {
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import ReactionBox from "../reaction/reaction-box";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
  musicAssets,
  musicPlayerDialog,
} from "@/redux/features/offer/offerSlice";
interface CategoryCardProps {
  id: number;
  imgSong: string;
  singerName: string;
  songName: string;
  imgComposer: string;
  composerName?: string;
  withName?: boolean;
  withBottom?: boolean;
  isMusicAsset?: boolean;
  haveAction?: boolean;
}

function MusicianBox({
  id,
  imgSong,
  singerName,
  songName,
  imgComposer,
  composerName,
  withName = true,
  withBottom = true,
  isMusicAsset = false,
  haveAction = false,
}: CategoryCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [removeClass, setRemoveClass] = useState(false);
  return (
    <>
      <div className="">
        <Card
          className={`relative grid min-h-[5rem] cursor-pointer w-[19.4rem] overflow-hidden hover:shadow-xl shadow-md border-2 rounded-md`}
          onMouseEnter={() => (haveAction ? setRemoveClass(true) : "")}
          onMouseLeave={() => (haveAction ? setRemoveClass(false) : "")}
          onClick={() => {
            dispatch(musicPlayerDialog());
            if (isMusicAsset) {
              dispatch(musicAssets(true));
            }
          }}
        >
          <CardBody className={`relative flex flex-col justify-center p-3`}>
            <div className={``}>
              <div className={`flex flex-col gap-2`}>
                {/* <div className="flex justify-center items-center gap-2">
              </div> */}
                <div className="flex justify-center items-center flex-row gap-2">
                  <Avatar
                    src={imgSong}
                    size="md"
                    alt="avatar"
                    variant="rounded"
                  />
                  <div className="w-[12rem] max-w-[12rem]">
                    <Typography
                      variant="small"
                      color="black"
                      className="font-bold text-[0.9rem]"
                    >
                      {songName}
                    </Typography>
                    <div className="flex flex-row justify-between gap-[0.2rem]">
                      <div className="flex flex-row gap-[0.2rem]">
                        <Typography
                          variant="small"
                          color="black"
                          className="font-bold text-xs"
                        >
                          {singerName}
                        </Typography>
                        <p className="text-[0.6rem] pt-1 font-semibold text-black">
                          Singer
                        </p>
                      </div>
                    </div>
                  </div>
                  <PlayIcon
                    className="h-9 w-9 mr-5 cursor-pointer hover:scale-125"
                    color="black"
                  />
                </div>
                <div
                  className={`${
                    removeClass ? "" : "invisible"
                  } group absolute top-1 right-1 cursor-pointer`}
                >
                  <EllipsisVerticalIcon className="menu-hover h-[1.6rem] cursor-pointer hover:bg-gray-200 group-hover:bg-gray-200 group-hover:rounded-full hover:rounded-full text-black" />
                  <div className="invisible z-50 absolute group-hover:visible bg-white divide-gray-100 rounded-lg shadow w-[6rem] top-5 right-0 dark:bg-gray-700">
                    <a className="block px-2 py-2 hover:bg-gray-100 text-xs font-semibold tracking-wider">
                      Edit
                    </a>
                    <a className="block px-2 py-2 hover:bg-gray-100 text-red-500 text-xs font-semibold tracking-wider">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
          <div className="flex flex-col border-t-2 mx-3 h-[3rem] max-h-[3rem] justify-center gap-1">
            <div className="flex flex-row gap-20">
              <p className="text-[0.6rem] font-bold text-black">Music Style:</p>
              {/* <p className="text-[0.6rem] font-bold text-black">
                Culture Area:
              </p> */}
            </div>
            {/* <div className="flex flex-row justify-between">
              <p className="text-[0.6rem] font-bold text-black">label:</p>
            </div> */}
          </div>
        </Card>
        {withBottom ? (
          <div className="flex flex-row gap-1 h-[3rem] max-h-[3rem] py-2 pl-1 justify-between items-center">
            {withName ? (
              <>
                <div className="flex flex-row gap-2 items-center">
                  <Avatar
                    src={imgSong}
                    size="xs"
                    alt="avatar"
                    variant="circular"
                  />
                  <div className="flex flex-col max-h-[3rem] max-w-[12rem] pt-1">
                    <p className="text-xs text-black font-bold">Jack Core</p>
                    <div className="flex flex-row gap-[0.2rem] max-h-[3rem] max-w-[12rem]">
                      <p className="text-[0.5rem] text-black font-bold">
                        Composer, Lyricist, Arranger
                      </p>
                      <p className="text-[0.4rem] pt-1 text-black font-bold">
                        For the Music
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-row justify-center items-center gap-[0.2rem] max-h-[3rem] max-w-[12rem]">
                  <p className="text-[0.5rem] text-black font-bold">
                    Composer, Lyricist, Arranger
                  </p>
                  <p className="text-[0.4rem] pt-2 text-black font-bold">
                    For the Music
                  </p>
                </div>
              </>
            )}
            <ReactionBox withSale={true} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default MusicianBox;
