export const settingsStore = {
    init() {
        this.darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches
    },

    colorFormate: 'hex',
    darkmode: false,

    // Functions
    toggleDarkmode() { this.darkmode = !this.darkmode }
}

export const settingsView = () => ({
    open: false,
})