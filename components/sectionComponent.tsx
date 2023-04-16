interface SectionComponentProps {
  description: string;
  image: string;
}

const SectionComponent = ({ description, image }: SectionComponentProps) => {
  return (
    <div className="w-full  bg-white rounded-3xl pl-2 pr-5 min-h-[120px] shadow-lg flex justify-start items-center">
      <img alt="" src={image} className="mr-3"></img>
      <p className="text-[#472192] text-lg font-bold max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

export default SectionComponent;
