import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';
import * as api from '@/services/api';
import { setAuthority } from '@/utils/authority';
export interface ClassState {
  status?: any;
}

export default {
  namespace: 'class',

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log(pathname)
        if (pathname.indexOf('/class') >= 0) {
          dispatch({ type: 'query', payload: query });
        }
      });
    },
  },

  state: {
    status: undefined,
  },

  effects: {
    *query({ payload }, { call, put }) {
      let response = {
        status: 'ok',
        currentAuthority: 'admin',
      }

      // if (process.env.NODE_ENV !== 'production') {
      //   response = yield call(fakeAccountLogin, payload);
      // }
      let res = yield call(api.getclassinfo, payload);

      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // setAuthority(response.currentAuthority);
      // if (response.status === 'ok') {
      //   yield put(routerRedux.replace('/'));
      // } else {
      //   Toast.fail('帐号或密码错误！');
      // }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};
