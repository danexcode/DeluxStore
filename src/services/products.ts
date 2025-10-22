import { ProductResponse } from '@/types'
import { atomWithInfiniteQuery, atomWithQuery } from 'jotai-tanstack-query'

const API_URL = "https://fakestoreapi.in/api"

//TODO: Mejorar esta logica, la pagina deberia de estar en la URL
// Lee como se usa un atomWithInfinityQuery en la documentacion
export const productsAtom = atomWithInfiniteQuery(() => ({
  queryKey: ['products'],
  queryFn: async ({ pageParam }) => {
    const res = await fetch(`${API_URL}/products?page=${pageParam}&limit=20`)
    const json: ProductResponse = await res.json()
    return json.products;
  },
  getNextPageParam: (_lastPage, _allPages, lastPageParam) => lastPageParam + 1,
  initialPageParam: 1,
}))

export const searchProductsAtom = atomWithQuery(() => ({
  queryKey: ['searchProducts'],
  queryFn: async () => {
    const res = await fetch(`${API_URL}/products?limit=150`);
    const json: ProductResponse = await res.json()
    return json.products;
  }
}))
