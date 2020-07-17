import { useState } from 'react'
import constate from 'constate'

interface GlobalState {
  [key: string]: object
}

const useGlobal = ({ data }: { data: GlobalState }) => {
  const [state, setState] = useState<GlobalState>(data)

  function setStateGlobal<T extends object = object>(key: string, value: T): void {
    setState(state => ({ ...state, [key]: value }))
  }

  function getGlobalState<T extends object = object>(key: string): T {
    return state[key] as T
  }

  return {
    state,
    effects: {
      setStateGlobal,
      getGlobalState,
    }
  }
}

export const [GlobalDataProvider, useStateGlobalData, useEffectsGlobalData] = constate(
  useGlobal,
  value => ({ ...value.state }),
  value => ({ ...value.effects }),
)