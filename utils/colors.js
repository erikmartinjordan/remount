/**
 * Color palette
 */
 const palette = [        
    ['#642b73', '#c6426e', '#d1678b'],
    ['#0f2027', '#203a43', '#2c5364'],
    ['#1b1b1b', '#3e3e3e', '#595959'],
    ['#380036', '#7b2e8e', '#945db7'],
    ['#9e768f', '#d6b4d0', '#e6ccd9'],
    ['#864ba2', '#c39ecb', '#d9c9dd'],
    ['#c6ffdd', '#fbd786', '#f7797d'],
    ['#b0f3f1', '#d9f9f9', '#eefdfd'],
    ['#aa4b6b', '#6b6b83', '#3b8d99']
]
/**
 * 
 * Palette style
 */
const stylePalette = (background) => ({
    background: background.filter(color => color !== '').length > 1 ? `linear-gradient(to right, ${background.filter(color => color !== '').join()})` : background[0],
})
/**
 * Drag style
 */
const styleDrag = (background, padding, position, width) => ({
    background: background.filter(color => color !== '').length > 1 ? `linear-gradient(to right, ${background.filter(color => color !== '').join()})` : background[0],
    padding: `${padding}px`,
    width: `${width}px`,
    paddingBottom: position === 'bottom' ? '0px' : `${padding}px`,
    paddingTop: position === 'top' ? '0px' : `${padding}px`
})
/**
 * Pic style
 */
const stylePic = (margin, position) => ({
    marginBottom: position === 'bottom' ? `${margin}px` : '0px',
    marginTop: position === 'top' ? `${margin}px` : '0px'
})

export { palette, styleDrag, stylePalette, stylePic }