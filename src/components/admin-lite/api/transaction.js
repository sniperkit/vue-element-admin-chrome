import request from '@/components/admin-lite/utils/request'

export function fetchList (query) {
  return request({
    url: '/transaction/list',
    method: 'get',
    params: query
  })
}
