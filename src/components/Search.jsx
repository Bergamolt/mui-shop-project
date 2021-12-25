import { TextField } from '@mui/material'

const Search = ({ onChange, value }) => (
  <TextField
    label="Search"
    type="search"
    value={ value }
    onChange={ onChange }
    sx={ { mb: '1rem' } }
    fullWidth
  />
)

export default Search