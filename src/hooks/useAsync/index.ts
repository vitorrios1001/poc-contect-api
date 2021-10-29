import { DependencyList, useRef, useCallback } from 'react'
import { AsyncState } from '../../models/AsyncState'

type DefaultAsyncState<R = null, E = null> = AsyncState<R, E>

export type AsyncFn<Result, Error = null> = (
  ...args: any[]
) => Promise<DefaultAsyncState<Result, Error>>

export type AsyncStateInitialFn<Result, Error> = (state: DefaultAsyncState<Result, Error>) => void

export type AsyncStateErrorFn<Result, Error> = (state: DefaultAsyncState<Result, Error>) => void

export function useAsyncFn<
  Result,
  Error = null,
  Fn extends AsyncFn<Result, Error> = AsyncFn<Result, Error>
>(
  fn: Fn,
  initialFn: AsyncStateInitialFn<Result, Error>,
  successFn: AsyncStateInitialFn<Result, Error> | null = initialFn,
  errorFn: AsyncStateErrorFn<Result, Error> | null = null,
  deps: DependencyList = [],
) {
  const lastCallId = useRef(0)

  const callback = useCallback<
    (...args: Parameters<Fn>) => Promise<DefaultAsyncState<Result, Error>>
  >((...args) => {
    const callId = ++lastCallId.current
    initialFn({ loading: true, errors: null, data: {} as Result })

    return fn(...args).then(
      (value) => {
        if (callId === lastCallId.current && successFn) {
          successFn({ data: null, errors: null, loading: false, ...value })
        }

        return value
      },
      (error) => {
        if (callId === lastCallId.current && errorFn) {
          const { response = {} } = error
          const { status = null, data = null } = response

          errorFn({
            data: null,
            loading: false,
            status: status || 500,
            errors: data?.errors || [],
          })
        }

        return error
      },
    )
  }, deps)

  return callback
}
