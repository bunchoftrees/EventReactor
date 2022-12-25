import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function ActivityForm() {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placehlder='Title' />
                <Form.TextArea placehlder='Description' />
                <Form.Input placehlder='Category' />
                <Form.Input placehlder='Date' />
                <Form.Input placehlder='City' />
                <Form.Input placehlder='Venue' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}