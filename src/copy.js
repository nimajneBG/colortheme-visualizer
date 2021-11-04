export default (el) => {
    return subject => {
        if (typeof subject === 'object') {
            // Magic called without any parameters 
            // -> Copy the content of the element it's called from
            navigator.clipboard.writeText(el.textContent)
        } else {
            // Magic called with a parameter/argument
            // -> Copy `subject` into the clipboard
            navigator.clipboard.writeText(subject)
        }
        console.log('copied')
    }
}