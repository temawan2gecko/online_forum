import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

// Расширяем expect с помощью matchers из jest-dom
expect.extend(matchers)

// Автоматическая очистка после каждого теста
afterEach(() => {
  cleanup()
})