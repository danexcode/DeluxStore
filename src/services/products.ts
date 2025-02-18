import { ProductResponse } from '@/types'
import { atom } from 'jotai'
import { atomWithQuery } from 'jotai-tanstack-query'

const API_URL = "https://fakestoreapi.in/api"

//TODO: Mejorar esta logica, la pagina deberia de estar en la URL
// Lee como se usa un atomWithInfinityQuery en la documentacion
export const pageAtom = atom(1)
export const productsAtom = atomWithQuery((get) => ({
  queryKey: ['products', get(pageAtom)],
  queryFn: async ({ queryKey: [, pageAtom] }) => {
    const res = await fetch(`${API_URL}/products?page=${pageAtom}&limit=20`)
    const json: ProductResponse = await res.json()
    return json.products;
  }
}))
/* export const searchQueryAtom = atom('')

export const filteredProductsAtom = atomWithQuery((get) => ({
  queryKey: ['filteredProducts', get(searchQueryAtom)],
  queryFn: async ({ queryKey: [, searchQuery] }) => {
    const res = await fetch(`${API_URL}/products?search=${searchQuery}`)
    const json: ProductResponse = await res.json()
    return json.products;
  }
})) */
export const searchProductsAtom = atomWithQuery(() => ({
  queryKey: ['searchProducts'],
  queryFn: async () => {
    const res = await fetch(`${API_URL}/products?limit=150`);
    const json: ProductResponse = await res.json()
    return json.products;
  }
}))
