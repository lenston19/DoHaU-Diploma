import { api } from 'boot/axios';

export const graphqlRequest = async (query: string) => {
  const { data } = await api.post('graphql/', {
    query: query,
  });
  return data;
};
