import Image from "next/image";

export const img = (props: any) => (
  <Image
    height={220}
    width={768}
    alt={props.alt}
    layout="responsive"
    src={props.src}
  />
);

export const h1 = (props: any) => (
  <h1 className="text-4xl md:text-6xl font-bold py-2">{props.children}</h1>
);

export const h2 = (props: any) => (
  <h2
    id={props?.children?.toLowerCase?.()?.replaceAll?.(" ", "-")}
    className="text-3xl md:text-5xl font-bold py-2"
  >
    {props.children}
  </h2>
);

export const p = (props: any) => (
  <p className="my-2 leading-relaxed text-lg">{props.children}</p>
);

export const pre = (props: any) => (
  <pre className="my-2 leading-relaxed text-lg">{props.children}</pre>
);

export const code = (props: any) => (
  <code className="my-2 leading-relaxed text-lg">{props.children}</code>
);
