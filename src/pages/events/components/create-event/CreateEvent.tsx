import { Col, Row, Card, Button, Form, TimePicker, DatePicker, Input, Modal } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { createEventEV, toggleCreateEventModal } from '../../../../store/events/events';
import { useStore } from 'effector-react';
import { $eventsStore } from '../../../../store/events';

export const CreateEvent = () => {
    const form = useForm();
    const { createModalVisible } = useStore($eventsStore);
    const dateFormat = 'DD.MM.YYYY';
    const timeFormat = 'HH:mm';

    const handleSubmit = (values: any) => {
        const date = `${dayjs(values.date).format(dateFormat)}`;
        const timeFrom = `${dayjs(values.time[0]).format(timeFormat)}`;
        const timeTo = `${dayjs(values.time[1]).format(timeFormat)}`;
        const time = `${timeFrom}-${timeTo}`;

        createEventEV({
            ...values,
            date,
            time,
        });
    };

    return (
        <Modal
            title="Create event"
            centered
            open={createModalVisible}
            onCancel={() => toggleCreateEventModal(false)}
            width={1000}
            footer={null}
        >
            <form onSubmit={form.handleSubmit(handleSubmit)}>
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
                        <Card>
                            <Button type="primary" htmlType="submit">
                                Create
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </form>
        </Modal>
    );
};
