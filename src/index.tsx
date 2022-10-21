import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom'
import Routes from 'routes'
import { theme } from './theme'
import './styles.css'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Routes />
  </ChakraProvider>,
  document.getElementById('root')
)
