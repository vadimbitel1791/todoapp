import { Button, Form, Input, Modal, Select, Typography } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useStore } from 'effector-react';
import { createPeopleEV, toggleCreatePeopleModalEV } from '../../../../store/people/events';
import { $peopleStore } from '../../../../store/people';

export const CreatePeople = () => {
    const form = useForm();
    const { createModalVisible } = useStore($peopleStore);

    const handleSubmit = (values: any) => {
        createPeopleEV(values);
        form.reset({});
    };

    return (
        <Modal
            title={<Typography.Title level={2}>Create people</Typography.Title>}
            centered
            open={createModalVisible}
            onCancel={() => toggleCreatePeopleModalEV(false)}
            footer={null}
        >
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <Form.Item>
                    <label htmlFor="">Firstname</label>
                    <Controller
                        control={form.control}
                        name="firstname"
                        render={props => (
                            <Input onChange={props.field.onChange} value={props.field.value} />
                        )}
                    />
                </Form.Item>
                <Form.Item>
                    <label htmlFor="">Lastname</label>
                    <Controller
                        control={form.control}
                        name="lastname"
                        render={props => (
                            <Input onChange={props.field.onChange} value={props.field.value} />
                        )}
                    />
                </Form.Item>
                <Form.Item>
                    <label htmlFor="">Email</label>
                    <Controller
                        control={form.control}
                        name="email"
                        render={props => (
                            <Input onChange={props.field.onChange} value={props.field.value} />
                        )}
                    />
                </Form.Item>
                <Form.Item>
                    <label htmlFor="">Phone</label>
                    <Controller
                        control={form.control}
                        name="phone"
                        render={props => (
                            <Input onChange={props.field.onChange} value={props.field.value} />
                        )}
                    />
                </Form.Item>
                <Form.Item>
                    <label htmlFor="">Tags</label>
                    <Controller
                        control={form.control}
                        name="tags"
                        render={props => (
                            <Select
                                mode="tags"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                onChange={props.field.onChange}
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
