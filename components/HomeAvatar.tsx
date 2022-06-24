import Image from "next/image";

const HomeAvatar = () => {
  return (
    <section className="flex flex-col px-16 text-center">
      <div className="h-64 w-64 md:h-72 md:w-72 mx-auto">
        <Image
          width={200}
          height={200}
          layout="responsive"
          className="rounded-full"
          src="/images/me.jpg"
          alt="My avatar picture"
        />
      </div>
      <h1 className="text-2xl font-bold mt-4">Vaibhav Kubre</h1>
      <h2>(Fullstack Engineer)</h2>
      <p className="text-slate-300 mt-4 w-80 mx-auto">
        Worked as Freelancer from 2017 till end of 2021, Now working as
        Fullstack Engineer.
      </p>
    </section>
  );
};

export default HomeAvatar;
