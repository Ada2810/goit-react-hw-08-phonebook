import { useSelector } from 'react-redux';
import {
  selectedUser,
  selectedIsLoggedIn,
  selectedIsRefreshing,
} from '../redux/auth/selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectedUser),
    isLoggedIn: useSelector(selectedIsLoggedIn),
    isRefreshing: useSelector(selectedIsRefreshing),
  };
};
