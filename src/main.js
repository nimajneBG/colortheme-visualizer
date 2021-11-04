import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'

import copy from './copy'
import { settingsStore, settingsView } from './settings'
import visualizer from './visualizer'

Alpine.plugin(persist)

Alpine.magic('copy', copy)

Alpine.data('visualizer', visualizer)
Alpine.data('settings', settingsView)
Alpine.store('settings', settingsStore)

window.Alpine = Alpine
Alpine.start()