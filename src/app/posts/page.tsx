import { data } from "@/utils/data";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>All posts</h1>
      {data.map((post, index) => (
        // <Link href="/posts" key={index}>
        <Link
        key={index}
        href={`/posts/${post.id}`}
      >
        <div  className="flex justify-between items-center max-w-[1200px] mt-10">
          <div className="flex justify-center items-center gap-2">
            <p>{post.id}</p>
            <h1>{post.postName}</h1>
          </div>
          <p>{post.postDate}</p>
        </div>
        </Link>
      ))}
    </div>
  );
}
