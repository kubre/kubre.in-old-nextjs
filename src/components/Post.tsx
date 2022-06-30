import Image from "next/image";
import Link from "next/link";

export interface PostProps {
  title: string;
  image: string;
  slug: string;
}

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className="py-8 flex flex-col gap-y-8 px-0 md:px-4 cursor-pointer border-4 border-transparent border-dashed hover:border-slate-100 transition-colors rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            width={768}
            height={200}
            layout="responsive"
          />
          <h1 className="text-2xl font-bold capitalize">{post.title}</h1>
        </div>
      </a>
    </Link>
  );
};

export default Post;
