//theme.js is used to define custome containers using theme-ui

import { swiss } from '@theme-ui/presets'

const theme = {
  ...swiss,
  
  containers: {
    page: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      m: 0,
      mx: 'auto',
      px: '16em'
    },
    post: {
      alignItems: 'center',
      my: '1em',
      p: '1em',
      bg: 'highlight',
    }
  },
}
export default theme