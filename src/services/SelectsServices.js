import { api } from '../api';

const SelectsServices = {
  getSelects: async () => {
    const response = await api.get('properties/select-filters');
    return { data: response.data };
  },

  getCommunesByStateId: async (stateId) => {
    const response = await api.get(`properties/communes?stateId=${stateId}`);
    return { data: response.data };
  },
};

export default SelectsServices;
