import { mount } from '@vue/test-utils'
import VerPeliculas from '@/pages/VerPeliculas.vue'

describe('VerPeliculas', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(VerPeliculas)
    expect(wrapper.vm).toBeTruthy()
  })
})
