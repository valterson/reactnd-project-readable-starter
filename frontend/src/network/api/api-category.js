import { apiFetch } from './';

export const apiGetCatAll = (vals = {action: 'category', type: 'all'}) => {
  return apiFetch(vals).then((res) => res);
};
