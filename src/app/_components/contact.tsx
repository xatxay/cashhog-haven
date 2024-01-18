"use client";
import PigStare from "./pigStare";
import {
  FaTwitterSquare,
  FaYoutube,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/home-image.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex h-screen w-full items-center justify-center"
    >
      <div className="flex h-4/5 w-4/5 items-center justify-center rounded-3xl bg-pink-300">
        <div className="flex h-full w-full flex-1 items-center justify-center ">
          <div className="flex h-4/5 w-4/5 flex-col items-center justify-center rounded-3xl border-2 border-black">
            <div className="flex h-full w-full flex-1 flex-col items-center justify-end rounded-t-3xl border-2 border-b-black bg-sky-200">
              <div className="w-64">
                <PigStare />
              </div>
            </div>
            <div className="box-border flex h-full w-full flex-1 flex-col items-center justify-center rounded-b-3xl bg-gray-200 px-8 py-2">
              <span className="m-2 text-3xl font-extrabold">
                Cashhog Huddle
              </span>
              <span className="text-lg text-gray-700">
                Inspire, Participate, and Create With Your Fellow Cashhogs.
              </span>
              <button className="m-3 box-border w-4/5 rounded-2xl bg-pink-300 p-4">
                Mint
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center">
          <div className="flex h-4/5 w-4/5 flex-col items-center justify-center rounded-3xl">
            <div className="flex h-full w-full flex-1 flex-col items-center justify-end rounded-3xl bg-gray-300">
              <input
                className="box-border h-1/2 w-full rounded-t-3xl bg-gray-300 p-6 text-3xl focus:outline-none"
                placeholder="Enter your email"
              />
              <div className="box-border flex h-1/2 w-full items-center justify-between p-6">
                <span>Signup for newsletter:</span>
                <button className="box-border rounded-3xl bg-pink-300 p-5">
                  Signup
                </button>
              </div>
            </div>
            <div className="box-border flex h-full w-full flex-1 flex-col items-center justify-center rounded-b-3xl px-8">
              <span className="m-2 p-6 text-3xl font-extrabold">Follow Us</span>
              <div className="flex w-full flex-row items-center justify-between">
                <FaTwitterSquare size={60} />
                <FaYoutube size={60} />
                <FaInstagram size={60} />
                <FaDiscord size={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
