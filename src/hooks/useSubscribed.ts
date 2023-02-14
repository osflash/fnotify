import useSWR from 'swr'

export const useSubscribed = (url: string, init?: RequestInit | undefined) => {
  return useSWR<boolean, Error>(url, async url => {
    const response = await fetch(url, init)

    const data = await response.json()

    return data
  })
}
