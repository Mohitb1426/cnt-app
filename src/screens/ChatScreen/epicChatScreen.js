import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, map, takeUntil, catchError
} from 'rxjs/operators'
import Config from '../../common/Config'
import { GET_CHAT_DATA, GET_CHAT_DATA_BY_ROOM, gotChatData, gotChatDataByRoom, onError } from './actionChatScreen'
import { makeGetRequest } from '../../common/NetworkOps'

const onGetChatData = async (data) => {
  const res = await makeGetRequest(`${Config.groupAndCommunity.editGroup}${data}`)
  return res
}

export const epicGetChatData = (action$, state$) => action$.pipe(
  ofType(GET_CHAT_DATA),
  pluck('payload'),
  mergeMap((data) => {
    return from(onGetChatData(data)).pipe(
      map((res) => {
        if (res) {
          return gotChatData(res)
        }
        return gotChatData({})
      }),
      takeUntil(action$.pipe(ofType(GET_CHAT_DATA))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const onGetChatDataRoom = async (data) => {
  const res = await makeGetRequest(`${Config.chat.messageByRoomId}${data}/`)
  return res
}

export const epicGetChatDataRoom = (action$, state$) => action$.pipe(
  ofType(GET_CHAT_DATA_BY_ROOM),
  pluck('payload'),
  mergeMap((data) => {
    return from(onGetChatDataRoom(data)).pipe(
      map((res) => {
        if (res) {
          return gotChatDataByRoom(res?.results)
        }
        return gotChatDataByRoom([])
      }),
      takeUntil(action$.pipe(ofType(GET_CHAT_DATA_BY_ROOM))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)
