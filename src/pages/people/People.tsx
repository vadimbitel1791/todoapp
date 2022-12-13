import { useStore } from 'effector-react';
import { Typography, Button, List } from 'antd';
import { CreatePeople } from './components/create-people/CreatePeople';
import { $peopleStore } from '../../store/people';
import { toggleCreatePeopleModalEV } from '../../store/people/events';

export const People = () => {
    const { list } = useStore($peopleStore);

    const handleButtonClick = () => toggleCreatePeopleModalEV(true);

    return (
        <>
            <Typography.Title>
                People{' '}
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
                renderItem={(user: any) => (
                    <List.Item>
                        {user.firstname} {user.lastname}
                    </List.Item>
                )}
            />
            <CreatePeople />
        </>
    );
};
