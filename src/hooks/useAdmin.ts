import { useUserContext } from "@clerk/shared/react/index";

const useAdmin = () => {
  const user = useUserContext();
  const adminUserEmail = "gochazautashvili2017@gmail.com";
  const admin = user?.emailAddresses[0].emailAddress === adminUserEmail;

  return admin;
};

export default useAdmin;
