import React, { ReactNode, useState } from 'react'
import Button, { ButtonElement } from '../Button'
import { Container } from '../Container'
import 'twin.macro'

const APROVED_KEY = 'isAproved'

type isAproved = boolean

const isSSR = typeof window === 'undefined'

const getAprovedFromStorage = (): isAproved => {
  if (!isSSR) {
    const val = localStorage.getItem(APROVED_KEY)

    return val === 'true'
  }

  return true
}

const setAprovedFromStorage = (isAproved: isAproved) => {
  if (!isSSR) {
    localStorage.setItem(APROVED_KEY, isAproved ? 'true' : 'false')
  }
}

export const CookieConsent = () => {
  const [isAproved, setAproved] = useState<isAproved>(getAprovedFromStorage())
  return (
    <>
      {!isAproved && (
        <div tw="bg-dark fixed bottom-0 w-full z-10">
          <Container tw="p-2 flex flex-row items-center">
            <div tw="flex-1">
              Táto stránka používa súbory cookies a iné technológie pre správne fungovanie a zlepšenie chodu stránky.
            </div>
            <Button
              element={ButtonElement.BUTTON}
              onClick={() => {
                setAproved(true)
                setAprovedFromStorage(true)
              }}
            >
              Rozumiem
            </Button>
          </Container>
        </div>
      )}
    </>
  )
}
