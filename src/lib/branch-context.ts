import { createContext, useContext } from 'react'
import type { Branches } from '../types/types'

export type BranchContextValue = {
  branch: Branches
  setBranch: (name: string) => void
}

export const BranchContext = createContext<BranchContextValue | null>(null)

export function useBranch(): BranchContextValue {
  const ctx = useContext(BranchContext)
  if (!ctx) throw new Error('useBranch debe usarse dentro de <BranchProvider>')
  return ctx
}
