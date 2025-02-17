import { ProductResponse } from '@/types'
import { atom } from 'jotai'
import { atomWithQuery } from 'jotai-tanstack-query'

const API_URL = "https://fakestoreapi.in/api"

export const pageAtom = atom(1)
export const productsAtom = atomWithQuery((get) => ({
  queryKey: ['products', get(pageAtom)],
  queryFn: async ({ queryKey: [, pageAtom] }) => {
    const res = await fetch(`${API_URL}/products?page=${pageAtom}&limit=20`)
    const json: ProductResponse = await res.json()
    return json.products;
  },
}))
