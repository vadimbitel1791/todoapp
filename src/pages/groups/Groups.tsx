import { useStore } from 'effector-react';
import { Typography, Button, List, Tag } from 'antd';
import { CreateGroup } from './components/create-group/CreateGroup';
import { $groupStore } from '../../store/groups';
import { toggleCreateGroupModalEV } from '../../store/groups/events';

export const Groups = () => {
    const { list } = useStore($groupStore);

    const handleButtonClick = () => toggleCreateGroupModalEV(true);

    return (
        <>
            <Typography.Title>
                Groups{' '}
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
                renderItem={(group: any) => (
                    <List.Item>
                        <div>{group.title}</div>
                        <div>
                            {group.people.map((user: any) => (
                                <Tag color="green" key={user}>
                                    {user}
                                </Tag>
                            ))}
                        </div>
                    </List.Item>
                )}
            />
            <CreateGroup />
        </>
    );
};
