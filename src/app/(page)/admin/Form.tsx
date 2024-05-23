"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "@/schema";
import { z } from "zod";
import { useState, useTransition } from "react";
import { UploadButton } from "@/utils/uploadthing";
import { UploadProduct } from "@/actions/UploadProduct";

const Form = () => {
  const [error, setError] = useState<string | null>("");
  const [success, setSuccess] = useState<string | null>("");
  const [isPending, startTransition] = useTransition();
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
  });

  const onSubmit = (data: z.infer<typeof ProductSchema>) => {
    startTransition(() => {
      UploadProduct(data).then((res) => {
        if (res.error) setError(res.error);

        if (res.success) setSuccess(res.success);
        reset();

        setTimeout(() => {
          setError(null);
          setSuccess(null);
        }, 3000);
      });
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[1200px] mx-auto px-4 py-[100px] flex flex-col gap-4"
    >
      {success && (
        <p className="text-green-500 px-5 py-3 rounded shadow-md text-center  font-semibold text-base border border-green-500">
          {success}
        </p>
      )}
      {error && (
        <p className="text-red-500 px-5 py-3 rounded shadow-md text-center font-semibold text-base border border-red-500">
          {error}
        </p>
      )}
      <Input
        className="border-2 border-black h-12 text-base"
        placeholder="Enter Title"
        {...register("title")}
      />
      {errors?.title && <p className="text-red-500">{errors?.title.message}</p>}
      <Input
        className="border-2 border-black h-12 text-base"
        placeholder="Enter Description"
        {...register("description")}
      />
      {errors?.description && (
        <p className="text-red-500">{errors?.description.message}</p>
      )}
      <Input
        className="border-2 border-black h-12 text-base"
        placeholder="Enter Prise $ 9.99"
        {...register("price")}
      />
      {errors?.price && <p className="text-red-500">{errors?.price.message}</p>}
      <Input
        className="border-2 border-black h-12 text-base"
        placeholder="Enter Information"
        {...register("information")}
      />
      {errors?.information && (
        <p className="text-red-500">{errors?.information.message}</p>
      )}
      <Input
        className="border-2 border-black h-12 text-base"
        placeholder="Enter Reviews"
        {...register("reviews")}
      />
      {errors?.reviews && (
        <p className="text-red-500">{errors?.reviews.message}</p>
      )}
      <Input
        className="border-2 border-black h-12 text-base"
        placeholder="Enter Type"
        {...register("type")}
      />
      {errors?.type && <p className="text-red-500">{errors?.type.message}</p>}
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setError(null);
          setSuccess("image uploaded");
          setValue("image", res[0].url);
        }}
        onUploadError={(error: Error) => {
          setSuccess(null);
          setError(error?.message);
        }}
      />
      {errors?.image && <p className="text-red-500">{errors?.image.message}</p>}
      <Button
        className="h-14 text-xl font-bold"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Loading..." : "Submit"}
      </Button>
    </form>
  );
};

export default Form;
