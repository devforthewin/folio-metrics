type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div
      className="
        lg:bg-[#FBE1D0]
        w-full
        lg:flex-[0_0_30%]
        flex
        items-start
        justify-end
        pt-[1.75rem]
        px-[1.75rem]
        lg:pt-[4.375rem]
        lg:pb-[1.6625rem]
        md:pt-[3.15rem]
        md:px-[3.5rem]
        md:pb-[0]
      "
    >
      {/* Titles Block */}
      <div
        className="
          flex flex-col
          lg:items-end lg:justify-end lg:text-right
          sm:w-full text-center
        "
      >
        <h2
          className="
            w-full h-[38px]
            text-md font-bold tracking-wider uppercase text-[#FFFFFF] text-center
            py-2
            bg-[#F67769]
          "
        >
          {title}
        </h2>
        <blockquote className="text-sm text-gray-600 mt-3 sm:mt-4 font-normal italic">
          [ {subtitle} ]
        </blockquote>
      </div>
    </div>
  )
}

export default SectionHeader