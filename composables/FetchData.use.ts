import { Ref, shallowRef } from 'vue'

export enum FetchDataStateType {
  loading = 'loading',
  loaded = 'loaded',
  error = 'error',
}

interface LoadingState {
  type: FetchDataStateType.loading
}
const loadingState = (): LoadingState => {
  return {
    type: FetchDataStateType.loading,
  }
}

interface LoadedState<T> {
  type: FetchDataStateType.loaded
  data: T
}
const loadedState = <T>(data: T): LoadedState<T> => {
  return {
    type: FetchDataStateType.loaded,
    data,
  }
}

interface ErrorState {
  type: FetchDataStateType.error
  error: Error
}
const errorState = (error: Error): ErrorState => {
  return {
    type: FetchDataStateType.error,
    error,
  }
}

export type FetchDataState<T> = LoadingState | LoadedState<T> | ErrorState

export interface FetchDataUse<T> {
  fetch: () => Promise<void>
  fetchDataState: Ref<FetchDataState<T>>
  castToDataType: (data: unknown) => T
}

export const useFetchData = <T>(
  fetchFunction: () => Promise<T>
): FetchDataUse<T> => {
  const fetchDataState = shallowRef<FetchDataState<T>>(loadingState())

  const convertToError = (error: unknown): Error => {
    if (error instanceof Error) {
      return error
    } else {
      return new Error(JSON.stringify(error))
    }
  }
  const fetch = async () => {
    try {
      const data = await fetchFunction()
      fetchDataState.value = loadedState<T>(data)
    } catch (error) {
      fetchDataState.value = errorState(convertToError(error))
    }
  }
  const castToDataType = <T>(data: unknown): T => {
    return data as T
  }
  return {
    fetch,
    fetchDataState,
    castToDataType,
  }
}
