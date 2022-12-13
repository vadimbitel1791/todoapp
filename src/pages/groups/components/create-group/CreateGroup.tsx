import { Button, Form, Input, Modal, Select, Typography } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useStore } from 'effector-react';
import { $groupStore } from '../../../../store/groups';
import { createGroupEV, toggleCreateGroupModalEV } from '../../../../store/groups/events';
import { $peopleStore } from '../../../../store/people';
import { useMemo } from 'react';

export const CreateGroup = () => {
    const form = useForm();
    const { createModalVisible } = useStore($groupStore);
    const { list: people } = useStore($peopleStore);

    const handleSubmit = (values: any) => {
        createGroupEV(values);
        form.reset({});
    };

    const peopleOptions = useMemo(
        () =>
            people.map((user: any) => ({
                label: `${user.firstname} ${user.lastname}`,
                value: `${user.firstname} ${user.lastname}`,
            })),
        []
    );

    return (
        <Modal
            title={<Typography.Title level={2}>Create group</Typography.Title>}
            centered
            open={createModalVisible}
            onCancel={() => toggleCreateGroupModalEV(false)}
            footer={null}
        >
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <Form.Item>
                    <label htmlFor="">Title</label>
                    <Controller
                        control={form.control}
                        name="title"
                        render={props => (
                            <Input onChange={props.field.onChange} value={props.field.value} />
                        )}
                    />
                </Form.Item>
                <Form.Item>
                    <label htmlFor="">People</label>
                    <Controller
                        control={form.control}
                        name="people"
                        render={props => (
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                onChange={props.field.onChange}
                                options={peopleOptions}
                            />
                        )}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" size="large" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </form>
        </Modal>
    );
};
