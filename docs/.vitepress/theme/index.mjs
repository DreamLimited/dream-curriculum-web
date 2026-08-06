import DefaultTheme from 'vitepress/theme'
import DreamHiveLayout from './DreamHiveLayout.vue'
import './custom.css'
import './dh-appearance.css'

export default {
  extends: DefaultTheme,
  Layout: DreamHiveLayout,
}