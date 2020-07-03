import { AsyncState } from "../AsyncState";

export interface Post {
  id: number
  userId: number
  title: string
  body: string
}

export type PostsResumeState = AsyncState<Post[], string[]>
export type PostDetailsResumeState = AsyncState<Post, string[]>