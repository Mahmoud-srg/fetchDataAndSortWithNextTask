import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { orderBy: string };
}
const PostsPage = async ({ searchParams: { orderBy } }: Props) => {
  return (
    <>
      <div>
        <h4>
          Posts Page <span className="text-danger">{orderBy}</span>
        </h4>
        <UserTable orderBy={orderBy}></UserTable>
      </div>
    </>
  );
};

export default PostsPage;
