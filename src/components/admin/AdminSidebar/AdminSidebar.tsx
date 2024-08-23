import { Collapse, List, ListItem } from '@mui/material';
import * as S from './AdminSidebar.styled';
import routeChildrenByAdmin from '@/routes/routeChildrenByAdmin';
import { NavLink } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const AdminSidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState<Record<string, boolean>>({});

  const handleToggleSubmenu = (path: string) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  return (
    <S.StyledAdminSidebar>
      <List>
        {routeChildrenByAdmin
          .filter((route) => route.isInNav)
          .map((route) => {
            const hasChildren = route.children && route.children.filter((v) => v.isInNav).length > 0;

            return (
              <Fragment key={route.path ?? '/admin'}>
                <ListItem onClick={() => hasChildren && handleToggleSubmenu(route.path ?? '/admin')}>
                  <NavLink to={route.path ?? '/admin'} end={!route?.path}>
                    {route.name}
                  </NavLink>
                  {hasChildren && (openSubMenu[route.path ?? '/admin'] ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>

                {hasChildren && (
                  <Collapse in={openSubMenu[route.path ?? '/admin']} timeout="auto" unmountOnExit>
                    <List disablePadding>
                      {route.children
                        ?.filter((childrenRoute) => childrenRoute.isInNav)
                        .map((childrenRoute) => (
                          <ListItem key={childrenRoute.path ?? '/admin'} sx={{ pl: 4 }}>
                            <NavLink to={`${route.path}/${childrenRoute.path}`}>{childrenRoute.name}</NavLink>
                          </ListItem>
                        ))}
                    </List>
                  </Collapse>
                )}
              </Fragment>
            );
          })}
      </List>
    </S.StyledAdminSidebar>
  );
};

export default AdminSidebar;
