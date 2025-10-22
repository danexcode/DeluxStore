import { ProductCart } from "@/types";
import { atom } from "jotai";

// Used for sharing the current category filter
export const categoryAtom = atom(null)

export const cartAtom = atom<ProductCart[]>([])
