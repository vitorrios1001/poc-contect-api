export type AsyncState<R = null, E = null> = {
  data: R | null
  status?: number | string
  errors?: E | null
  loading?: boolean
}
