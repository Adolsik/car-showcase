"use client";
import Button from "./Button";

const ShowMore = (props: { pageNumber: number; isNext: boolean; setLimit: (limit: number) => void }) => {
  const handleNavigation = () => {
    const newLimit = (props.pageNumber + 1) * 10;
    props.setLimit(newLimit);
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
