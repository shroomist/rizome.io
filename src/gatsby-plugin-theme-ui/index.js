// // example theme
import theme from '@theme-ui/preset-deep'

export default {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#0b0917',
  },
  // background: '-webkit-canvas(stars)',
  styles: {
    ...theme,
    root:
    {
      ...theme.styles.root,
      space: { margin:0 },
    }
  },
}
