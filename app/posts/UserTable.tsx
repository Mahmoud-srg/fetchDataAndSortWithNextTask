import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  orderBy: string;
}

const UserTable = async ({ orderBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const sortedPosts = sort(posts).asc(
    orderBy === "title" ? (post) => post.title : (post) => post.body
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>
              <Link href="/posts?orderBy=title">Title</Link>
            </h2>
          </div>
          <div className="col-6">
            <h2>
              <Link href="/posts?orderBy=body">Body</Link>
            </h2>
          </div>
        </div>
      </div>

      <div className="container text-center d-flex">
          <div className="">
            {sortedPosts.map((post) => (
              <span key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </span>
            ))}
          </div>
        </div>
    </>
  );
};

export default UserTable;
