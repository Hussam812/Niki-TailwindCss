const ShoeCard = ({ imgURl, changeBigShoeImage, bigShoeImg }) => {
  const handelClick = () => {
    if (bigShoeImg !== imgURl.bigShoe) {
      changeBigShoeImage(imgURl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handelClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 ">
        <img
          src={imgURl.thumbnail}
          alt="shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
