import { useQuery } from 'react-query';
import { fetchValidSession } from '../apis/auth';

const useFetchSession = (): { data: any; isLoading: any; error: any } => {
  const { data, isLoading, error } = useQuery('user', fetchValidSession);
  return { data, isLoading, error };
};

export default useFetchSession;
