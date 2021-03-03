import React from 'react';
import { connect } from 'dva';
import { Grid } from 'antd-mobile';
import { Dispatch, ConnectState } from '@/models/connect';
import PageWrapper from '@/components/PageWrapper';
import CustomIcon from '@/components/CustomIcon';
import Avatar from '@/components/Avatar';


const data = [
  {
    icon: <Avatar size='large' icon="user" />,
  },
]

export interface LoginProps {
  form: any;
  dispatch: Dispatch;
  login: any;
  loading: boolean;
}

export interface CenterProps {
  dispatch: Dispatch;
}

class Class extends React.PureComponent<CenterProps> {

  handleClick = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'class/query',
    });
  };

  render() {
    return (
      <PageWrapper title='表单' backable>
        <Grid
          data={data}
          square={false}
        />
      </PageWrapper>
    );
  }
}

export default connect()(Class);
