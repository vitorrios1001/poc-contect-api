import React, { KeyboardEvent, MouseEvent } from 'react'
import { Drawer, makeStyles, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { ROUTES } from '../../../routes'
import { useHistory } from 'react-router-dom'

interface Props {
  isOpen: boolean
  setOpen: (value: boolean) => void
}

const DrawerMenu = ({ isOpen = false, setOpen }: Props) => {
  const classes = useStyles()
  const history = useHistory()

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open)
  }

  const goTo = (path: string) => {
    setOpen(false)
    history.push(path)
  }

  const menuList = (
    <div
      className={classes.list}
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
      role="presentation"
    >
      <List>
        {
          ROUTES.filter(route => route.isMenu)
            .map(({ key, path, icon: Icon }) => (
              <ListItem key={key} onClick={() => goTo(path)} button>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={key} />
              </ListItem>
            )
          )
        }
      </List>
    </div>
  )

  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
      {menuList}
    </Drawer>
  )
}

export default DrawerMenu

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});