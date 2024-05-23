import { getAdmin } from "@/actions/Admin";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("./Form"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[550px] bg-gray-400 animate-pulse rounded-sm max-w-[1200px] mx-auto my-[100px] flex justify-center items-center">
      <h1 className="text-3xl text-white font-bold">Loading...</h1>
    </div>
  ),
});

const Admin = async () => {
  const admin = await getAdmin();

  // if (!admin) {
  //   redirect("/");
  // }

  return (
    <main>
      <Form />
    </main>
  );
};

export default Admin;
