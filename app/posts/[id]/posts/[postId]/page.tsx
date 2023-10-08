import React from 'react'
interface Props{
    params:{id:number,postId:number}
}

const UserPost = ({params}:Props) => {
  return (
    <div>UserPost user Id :{params.id}, Post Id: {params.postId}</div>
  )
}

export default UserPost