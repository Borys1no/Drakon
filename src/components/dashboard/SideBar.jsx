import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Button, IconButton } from '@mui/material';
import { Package, Combine, LogOut, Menu, House } from 'lucide-react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

const menuItems = [

  { title: 'Inicio', icon: <House />, path: '/dashboard/AdminHome' },
  { title: 'Pedidos', icon: <Package />, path: '/dashboard/PedidosAdmin' },
  { title: 'Estados pedidos', icon: <Combine />, path: '/dashboard/StatusOrder' }
  

];

const SideBar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false); // Estado para el menú en móviles

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Sesión cerrada correctamente');
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); // Alterna el estado del sidebar en móviles
  };

  const drawerContent = (
    <Box sx={{ width: 240, bgcolor: '#1E1E1E', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h6">Panel de Administración</Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, mt: 'auto', textAlign: 'center' }}>
        {currentUser ? <Typography variant="body2">Bienvenido, {currentUser.email}</Typography> : <Typography variant="body2">Cargando...</Typography>}
        <Button variant="contained" color="error" startIcon={<LogOut />} onClick={handleLogout} sx={{ mt: 2 }}>
          Cerrar sesión
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Botón para abrir el menú en móviles */}
      <IconButton
        sx={{ position: 'absolute', top: 15, left: 15, zIndex: 10, display: { xs: 'block', md: 'none' }, color: 'black' }}
        onClick={handleDrawerToggle}
      >
        <Menu />
      </IconButton>

      {/* Sidebar en escritorio (siempre visible en pantallas grandes) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Sidebar en móviles (se abre y cierra con el botón) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default SideBar;
