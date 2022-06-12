import { graphqlRequest } from 'src/utils/crud';
import { ref, onMounted } from 'vue';
import { User } from 'src/@types';

export function useClientBase() {
  const data = ref<User[]>([]);

  const read = async () => {
    data.value = await graphqlRequest(`query {
      showUserInfo {
        id
        name
        email
        phoneNumber
        birthDate
        address
        orgId
      }
  }`);
  };
  onMounted(() => {
    read();
  });
  return {
    data,
  };
}
