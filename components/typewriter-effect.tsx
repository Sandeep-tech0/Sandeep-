"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: string[]
  delay?: number
}

export function TypewriterEffect({ words, delay = 150 }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentWord = words[currentWordIndex]

        if (isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length - 1))
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 500)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
        }
      },
      isDeleting ? delay / 2 : delay,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, delay])

  return <span className="text-white">{currentText}</span>
}

