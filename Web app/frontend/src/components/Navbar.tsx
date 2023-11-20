"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session }: any = useSession();
  console.log("navbar session ",session);
  return (
    <div className=' w-full h-full'>
      <ul className="flex justify-between m-3 item-center  ">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="h-[1rem]">
          <Link href="/">
            <Image src='https://github.com/PushkarWaykole/TIAA_Hackathon/blob/main/Web%20app/frontend/src/components/logo.jpg?raw=true' width={100} height={130} alt="logo" />
          </Link>
        </div>
        <div className="flex gap-10">
          
          {!session ? (
            <>
              <Link href="/login">
                <li>Login</li>
              </Link>
              <Link href="/register">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
