import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import { logo } from '../utilities/constants.js'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <Stack
      direction='row'
      align-items='center'
      p={2}
      // sx prop allows us to give it our own styles
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
      spacing={4}
    >
      <Link to='/' style={{ display: 'flex, alignItems: center' }}>
        <img src={logo} alt='logo' height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default NavBar
