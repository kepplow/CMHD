/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

// 客户录入接口
export async function customerInput(
  params: {
    brand: string;
    demand: string;
    phoneNumber: string;
    username: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/v1/customerInput', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

