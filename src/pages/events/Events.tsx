import { useStore } from 'effector-react';
import { Typography, Button, List, Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { $eventsStore } from '../../store/events';
import { toggleCreateEventModal } from '../../store/events/events';
import { CreateEvent } from './components/create-event/CreateEvent';

export const Events = () => {
    const { list } = useStore($eventsStore);

    const handleButtonClick = () => toggleCreateEventModal(true);

    return (
        <>
            <Typography.Title>
                Events{' '}
                <Button
                    onClick={handleButtonClick}
                    type="primary"
                    style={{ verticalAlign: 'middle', marginLeft: 15 }}
                >
                    New +
                </Button>
            </Typography.Title>
            <List
                size="large"
                bordered
                dataSource={list}
                renderItem={(item: any) => (
                    <List.Item>
                        <span style={{ marginRight: 10 }}>{item.title} </span>
                        <Badge
                            count={
                                <span style={{ color: '#faad14' }}>
                                    <ClockCircleOutlined />
                                    <span style={{ marginLeft: '5px' }}>
                                        {item.date} {item.time}
                                    </span>
                                </span>
                            }
                        />
                    </List.Item>
                )}
            />
            <CreateEvent />
        </>
    );
};
