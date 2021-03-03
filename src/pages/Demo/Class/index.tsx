import React from 'react';
import { Grid } from 'antd-mobile';
import PageWrapper from '@/components/PageWrapper';
import CustomIcon from '@/components/CustomIcon';
import Avatar from '@/components/Avatar';

const data = [
  {
    icon: <Avatar size='large' icon="user" />,
  },
]

class AvatarDemo extends React.PureComponent<any> {
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

export default AvatarDemo;
