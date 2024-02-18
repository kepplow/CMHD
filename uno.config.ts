
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */ }),
    presetUno(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e91a3e',
      },
    },
  },
  rules: [
    ['border', { 'border': '1px solid #ccc' }],
    ['flex-center', { 
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center',
   }],
  ]
})