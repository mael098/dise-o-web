import { useMemo, useState, type ReactNode } from 'react'
import { branches, DEFAULT_BRANCH } from '../data/branches'
import { BranchContext, type BranchContextValue } from './branch-context'
import type { Branches } from '../types/types'

const STORAGE_KEY = 'dper-selected-branch'

function loadInitialBranch(): Branches {
  if (typeof window === 'undefined') return DEFAULT_BRANCH
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved) {
    const found = branches.find((b) => b.name === saved)
    if (found) return found
  }
  return DEFAULT_BRANCH
}

export function BranchProvider({ children }: { children: ReactNode }) {
  const [branch, setBranchState] = useState<Branches>(loadInitialBranch)

  const value = useMemo<BranchContextValue>(
    () => ({
      branch,
      setBranch: (name: string) => {
        const found = branches.find((b) => b.name === name)
        if (!found) return
        setBranchState(found)
        try {
          window.localStorage.setItem(STORAGE_KEY, found.name)
        } catch {
          // storage no disponible
        }
      },
    }),
    [branch],
  )

  return <BranchContext.Provider value={value}>{children}</BranchContext.Provider>
}
