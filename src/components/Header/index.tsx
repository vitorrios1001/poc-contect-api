import React, { useState, useEffect } from 'react'

import { ROUTES } from '../../routes'
import { useLocation } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import DrawerMenu from './DrawerMenu'

const Header = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [activeRoute, setActiveRoute] = useState('')
  const location = useLocation()

  useEffect(() => {
    const [routeDescription] = ROUTES.filter((item) => item.path === location.pathname)

    if (routeDescription) {
      setActiveRoute(routeDescription.key)
    }
  }, [location])

  const toggleOpenMenu = (value: boolean) => {
    setOpen(value)
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            onClick={() => toggleOpenMenu(true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {activeRoute}
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerMenu isOpen={open} setOpen={toggleOpenMenu} />
    </>
  )
}

export default Header

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
