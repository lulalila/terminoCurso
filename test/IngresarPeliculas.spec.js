import { mount } from '@vue/test-utils'
import IngresarPeliculas from '@/pages/IngresarPeliculas.vue'

describe('IngresarPeliculas', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IngresarPeliculas)
    expect(wrapper.vm).toBeTruthy()
  })
})
