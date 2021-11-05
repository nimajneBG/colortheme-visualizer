import tinycolor from 'tinycolor2'

const lightTextColor = '#fff'
const darkTextColor = '#1d2834ff'

function handleResize() {
    /* Max 3 columns for a screen size over 700px 2 columns for everything 
       below that and one for anything below 450px */
    const width = window.innerWidth
    if (width < 700) {
        if (width > 450) {
            return 2
        } else {
            return 1
        }
    } else {
        return 3
    }
}

export default function() { 
    return {
        newColor: tinycolor.random().toHexString(),
        colors: this.$persist([]),
        errorMsg: null,
        maxColumns: null,

        init() {
            window.onresize = () => { this.maxColumns = handleResize() }

            this.maxColumns = handleResize()
        },

        addColor() {
            const color = tinycolor(this.newColor)
            
            if (color.isValid()) {
                this.colors.push(color.toHexString())
                this.newColor = ''
            } else {
                this.errorMsg = 'Invalid color code'
            }
        },

        deleteAll() {
            this.colors = []
            this.newColor = ''
        },

        deleteColor(index) { this.colors.splice(index, 1) },

        getTextColor(color) {
            return tinycolor.mostReadable(color, [lightTextColor, darkTextColor])
                .toHexString();
        },

        randomColor() { this.newColor = tinycolor.random().toHexString() },

        get colorColumns() {
            if (this.maxColumns === 1) {
                return '1fr'
            }

            if (this.colors != null) {
                if (this.colors.length === 1) {
                    return '1fr'
                } else if (this.colors.length === 2) {
                    return '1fr 1fr'
                } else if (this.colors.length > 2 && this.maxColumns === 3) {
                    return '1fr 1fr 1fr'
                } else {
                    return '1fr 1fr'
                }
            } else {
                return '1fr'
            }
        },

        get inputIsValid() { return tinycolor(this.newColor).isValid() }
    }
}