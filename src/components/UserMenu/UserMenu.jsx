import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actions } from '../../redux/authSlice';
import { Box, Button, Text } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(actions.logout());
    navigate('/login'); 
  };

  return (
    <Box>
      {authState && authState.user && <Text color="blue">Welcome, {authState.user.name}</Text>}
      {authState && authState.user && <Button onClick={handleLogout} colorScheme="blue">Logout</Button>}
    </Box>
  );
};

export default UserMenu;