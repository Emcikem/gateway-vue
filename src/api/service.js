import request from '@/utils/request'

export function serviceList(query) {
  return request({
    'url': '/service/service_list',
    method: 'get',
    params: query
  })
}

export function serviceDelete(id) {
  return request({
    url: '/service/service_delete',
    method: 'get',
    params: id
  })
}

export function serviceAddHttp(data) {
  return request({
    url: '/service/service_add_http',
    method: 'post',
    data
  })
}

export function serviceAddTcp(data) {
  return request({
    url: '/service/service_add_tcp',
    method: 'post',
    data
  })
}

export function serviceAddGrpc(data) {
  return request({
    url: 'service/service_add_grpc',
    method: 'post',
    data
  })
}

export function serviceDetail(id) {
  return request({
    url: 'service/service_detail_http',
    method: 'get',
    params: id
  })
}

export function serviceUpdateHttp(data) {
  return request({
    url: 'service/service_update_http',
    method: 'post',
    data
  })
}

export function serviceUpdateTcp(data) {
  return request({
    url: 'service/service_update_tcp',
    method: 'post',
    data
  })
}

export function serviceUpdateGrpc(data) {
  return request({
    url: 'service/service_update_grpc',
    method: 'post',
    data
  })
}

export function serviceStat(query) {
  return request({
    url: 'service/service_stat',
    method: 'get',
    params: query
  })
}
