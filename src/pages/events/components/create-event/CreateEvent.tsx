import {
    Col,
    Row,
    Card,
    Button,
    Form,
    TimePicker,
    DatePicker,
    Input,
    Modal,
    Select,
    Typography,
} from 'antd';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { createEventEV, toggleCreateEventModal } from '../../../../store/events/events';
import { useStore } from 'effector-react';
import { $eventsStore } from '../../../../store/events';
import { $peopleStore } from '../../../../store/people';
import { useMemo } from 'react';
import { $groupStore } from '../../../../store/groups';

export const CreateEvent = () => {
    const form = useForm();
    const { createModalVisible } = useStore($eventsStore);
    const { list: people } = useStore($peopleStore);
    const { list: groups } = useStore($groupStore);

    const dateFormat = 'DD.MM.YYYY';
    const timeFormat = 'HH:mm';

    const handleSubmit = (values: any) => {
        const date = `${dayjs(values.date).format(dateFormat)}`;
        const timeFrom = `${dayjs(values.time[0]).format(timeFormat)}`;
        const timeTo = `${dayjs(values.time[1]).format(timeFormat)}`;
        const time = `${timeFrom}-${timeTo}`;
        const payload = {
            ...values,
            date,
            time,
            tags: '',
            people: '',
            groups: '',
        };

        createEventEV(payload);

        form.reset();
    };

    const peopleOptions = useMemo(
        () =>
            people.map((user: any) => ({
                label: `${user.firstname} ${user.lastname}`,
                value: `${user.firstname} ${user.lastname}`,
            })),
        []
    );

    const groupsOptions = useMemo(
        () =>
            groups.map((group: any) => ({
                label: group,
                value: group,
            })),
        []
    );

    return (
        <Modal
            title={<Typography.Title level={2}>Create event</Typography.Title>}
            centered
            open={createModalVisible}
            onCancel={() => toggleCreateEventModal(false)}
            width={1000}
            footer={null}
        >
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <Form.Item>
                    <Row gutter={25}>
                        <Col lg={16}>
                            <Card>
                                <Form.Item>
                                    <label htmlFor="">Title</label>
                                    <Controller
                                        control={form.control}
                                        name="title"
                                        render={props => (
                                            <Input
                                                onChange={props.field.onChange}
                                                value={props.field.value}
                                            />
                                        )}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <label htmlFor="">Description</label>
                                    <Controller
                                        control={form.control}
                                        name="description"
                                        render={props => (
                                            <Input
                                                onChange={props.field.onChange}
                                                value={props.field.value}
                                            />
                                        )}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Row gutter={25}>
                                        <Col>
                                            <div>
                                                <label htmlFor="">Date</label>
                                            </div>
                                            <Controller
                                                control={form.control}
                                                name="date"
                                                render={props => (
                                                    <DatePicker
                                                        format={dateFormat}
                                                        onChange={props.field.onChange}
                                                        value={props.field.value}
                                                    />
                                                )}
                                            />
                                        </Col>
                                        <Col>
                                            <div>
                                                <label htmlFor="">Time</label>
                                            </div>
                                            <Controller
                                                control={form.control}
                                                name="time"
                                                render={props => (
                                                    <TimePicker.RangePicker
                                                        format={timeFormat}
                                                        onChange={props.field.onChange}
                                                        value={props.field.value}
                                                    />
                                                )}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item>
                                    <label htmlFor="">Location</label>
                                    <Controller
                                        control={form.control}
                                        name="location"
                                        render={props => (
                                            <Input
                                                onChange={props.field.onChange}
                                                value={props.field.value}
                                            />
                                        )}
                                    />
                                </Form.Item>
                            </Card>
                        </Col>
                        <Col lg={8}>
                            <Form.Item>
                                <Card>
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
                                </Card>
                            </Form.Item>
                            <Form.Item>
                                <Card>
                                    <label htmlFor="">Groups</label>
                                    <Controller
                                        control={form.control}
                                        name="groups"
                                        render={props => (
                                            <Select
                                                mode="multiple"
                                                allowClear
                                                style={{ width: '100%' }}
                                                placeholder="Please select"
                                                onChange={props.field.onChange}
                                                options={groupsOptions}
                                            />
                                        )}
                                    />
                                </Card>
                            </Form.Item>
                            <Form.Item>
                                <Card>
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
                                </Card>
                            </Form.Item>
                        </Col>
                    </Row>
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
