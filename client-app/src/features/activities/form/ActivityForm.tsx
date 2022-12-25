import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({
    activity: selectedActivity,
    closeForm,
    createOrEdit
}: Props) {
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: '',
    };

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input
                    placehlder='Title'
                    value={activity.title}
                    name='title'
                    onChange={handleInputChange}
                />
                <Form.TextArea
                    placehlder='Description'
                    value={activity.description}
                    name='description'
                    onChange={handleInputChange}
                />
                <Form.Input
                    placehlder='Category'
                    value={activity.category}
                    name='category'
                    onChange={handleInputChange}
                />
                <Form.Input
                    placehlder='Date'
                    value={activity.date}
                    name='date'
                    onChange={handleInputChange}
                />
                <Form.Input
                    placehlder='City'
                    value={activity.city}
                    name='city'
                    onChange={handleInputChange}
                />
                <Form.Input
                    placehlder='Venue'
                    value={activity.venue}
                    name='venue'
                    onChange={handleInputChange}
                />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button
                    onClick={closeForm}
                    floated='right'
                    type='button'
                    content='Cancel'
                />
            </Form>
        </Segment>
    );
}
