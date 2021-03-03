import { stringify } from 'qs';
import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function getclassinfo(params) {
  params.token= '54f4a679bb2e1674587af15398574455'
  return request(`/api/product/course?${stringify(params)}`);
}
