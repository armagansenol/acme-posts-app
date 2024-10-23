import React, { useState } from "react"

import { all } from "@/api/services/posts"
import { useAuth } from "@/hooks/useAuth"
import { Post } from "@/types"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const Posts: React.FC = () => {
  const { isAuthenticated } = useAuth()
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = async () => {
    const posts = await all()
    setPosts(posts)
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="w-screen min-h-screen flex flex-col items-stretch py-20 px-32 space-y-11">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Acme Posts App</h2>
          <p className="text-muted-foreground">Press button to fetch posts</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button onClick={fetchPosts} disabled={posts.length > 0}>
            Fetch Posts
          </Button>
        </div>
      </div>
      <div className="flex-1 flex">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">Post Id</TableHead>
              <TableHead className="w-[100px] text-center">User Id</TableHead>
              <TableHead className="text-center">Title</TableHead>
              <TableHead className="text-center">Content</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-hidden h-[500px] max-h-[500px]">
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium text-center">{post.id}</TableCell>
                <TableCell className="text-center">{post.userId}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">
                {posts.length} {posts.length === 1 ? "post" : "posts"}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}

export default Posts
