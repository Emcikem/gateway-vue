import request from '@/utils/request'

export function serviceList(query) {
  return request({
    'url': 'service/service_list',
    method: 'get',
    params: query
  })
}

export function serviceDelete(id) {
  return request({
    'url': 'service/service_delete',
    method: 'get',
    params: id
  })
}

