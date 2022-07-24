import Image from "next/image";

const Vaibhav = () => {
  return (
    <div className="px-8 text-center">
      <div className="h-48 w-48 md:h-64 md:w-64 mx-auto">
        <Image
          width={200}
          height={200}
          layout="responsive"
          className="rounded-full invert"
          src="/images/me.jpg"
          alt="My avatar picture"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Vaibhav;
