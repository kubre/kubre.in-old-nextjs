import Image from "next/image";

const Vaibhav = () => {
  return (
    <section className="px-8 text-center">
      <div className="h-48 w-48 md:h-64 md:w-64 mx-auto">
        <Image
          width={200}
          height={200}
          layout="responsive"
          className="rounded-full invert"
          src="/images/me.jpg"
          alt="My avatar picture"
        />
      </div>
      <h1 className="text-2xl font-bold mt-4">Vaibhav Kubre</h1>
      <h2>(Fullstack Engineer)</h2>
    </section>
  );
};

export default Vaibhav;
