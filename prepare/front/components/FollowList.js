import React from 'react';
import { List, Button, Card } from 'antd';
import PropTypes from 'prop-types';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({ header, data }) => {
    return (
            <List
            style={{ marginBottom: 20 }}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style={{ textAlign: 'center', margin: '10px 0'}}><Button>더 보기</Button></div>}
            bordered
            dataSource={data}
            // 더미데이터 배열들을 받아오고 반복문을 통해서 하단의 items에 들어간다.
            renderItem={(item) => (
            <List.Item style={{ marginTop: 20 }}>
                <Card actions={[<StopOutlined key="stop" />]}>
                <Card.Meta description={item.nickname} />
                </Card>
            </List.Item>
            )}
        />
    )
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default FollowList;

