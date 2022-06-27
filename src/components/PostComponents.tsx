import Image from "next/image";

export const img = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);
export const h1 = (props: any) => (
  <h1 className="text-2xl font-bold mt-4">{props.children}</h1>
);
export const h2 = (props: any) => (
  <h2 className="text-xl font-bold mt-4">{props.children}</h2>
);
export const p = (props: any) => (
  <p className="text-sm mt-1">{props.children}</p>
);
export const pre = (props: any) => (
  <pre className="text-sm mt-1">{props.children}</pre>
);
export const code = (props: any) => (
  <code className="text-sm mt-1">{props.children}</code>
);
