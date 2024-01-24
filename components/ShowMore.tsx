"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { updateSearchParams } from "@/utils";

const ShowMore = (props: { pageNumber: number; isNext: boolean }) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = ((props.pageNumber+1)*10)
    const newPathName = updateSearchParams("limit",`${newLimit}`)
    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!props.isNext && (
        <Button
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
