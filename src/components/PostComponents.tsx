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

export const h2 = (props: any) => {
  const anchor = getAnchor(props.children);
  const link = `#${anchor}`;

  return (
    <h2
      id={anchor}
      className="text-3xl font-bold linked-heading mt-7 mb-4"
      {...props}
    >
      <a href={link}>
        <span>{props.children}</span>
        <span className="ml-1 text-2xl linked-heading-icon">🔗</span>
      </a>
    </h2>
  );
};

export const p = (props: any) => (
  <p className="mb-7 leading-relaxed text-lg font-serif">{props.children}</p>
);

export const pre = (props: any) => (
  <pre className="mb-7 leading-relaxed text-lg rounded-lg border border-zinc-500 bg-zinc-900 p-8 font-normal">
    {props.children}
  </pre>
);

export const code = (props: any) => (
  <code className="my-2 leading-relaxed text-lg">{props.children}</code>
);

function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-");
}
