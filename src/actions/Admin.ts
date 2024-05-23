"use server";
import { currentUser } from "@clerk/nextjs/server";

export const getAdmin = async () => {
  const user = await currentUser();
  const adminUserEmail = "gochazautashvili2017@gmail.com";
  const admin = user?.emailAddresses[0].emailAddress !== adminUserEmail;

  if (admin) {
    return true;
  } else {
    return false;
  }
};
