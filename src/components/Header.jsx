import { AppBar, IconButton, Toolbar, Typography, Badge } from '@mui/material'
import { ShoppingBasket } from '@mui/icons-material'

const Header = ({ handlerCart, orderLen }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="span" sx={ { flexGrow: 1 } }>
        Mui Shop
      </Typography>
      <IconButton color="inherit" onClick={ handlerCart }>
        <Badge color="secondary" badgeContent={ orderLen }>
          <ShoppingBasket/>
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
)

export default Header