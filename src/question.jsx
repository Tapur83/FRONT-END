import React from 'react'
import { Form, Button, TextArea, Input, Label } from 'semantic-ui-react'
const Question = () => {
  return (
    <Form>
        <div style={{backgroundColor:'grey', padding:'5px'}}>
            <h3>What do you want to ask or share </h3>
        </div>
        <Form.Field>
            <label>Title</label>
            <Input placeholder='Start your question with how, what, why, etc.'/>
        </Form.Field>

        <Form.Field>
            <Label>Describe your problem</Label>
            <TextArea rows={7} />
        </Form.Field>

        <Form.Field>
            <label>Tags</label>
            <Input placeholder='Please add up to 3 tags' />
        </Form.Field>

        <Button type='submit'>Post</Button>
    </Form>
  )
}

export default Question
