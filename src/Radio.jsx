import React, { Component } from 'react'
import { Form, Radio, Container } from 'semantic-ui-react'
import Article from './Article'
import Question from './question'

export default class Signal extends Component {
    state = {
        value: ''
    };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        const { value } = this.state;

        return (
            <Container>
                <Form>
                    <div>
                        <h1> Welcome To Task 5.1C </h1>
                    </div>
                    <div style={{ backgroundColor: 'grey', padding: '5px' }}>
                        <h3> New Post</h3>
                    </div>
                    <Form.Field>
                        <b>Select Post type:</b> {value}
                    </Form.Field>

                    <Form.Field>
                        <Radio label='Question' name='postType' value='Question' checked={value === 'Question'} onChange={this.handleChange} />
                    </Form.Field>

                    <Form.Field>
                        <Radio label='Article' name='postType' value='Article' checked={value === 'Article'} onChange={this.handleChange} />
                    </Form.Field>
                </Form>
                {value === 'Question' && <Question />}
                {value === 'Article' && <Article />}
            </Container>
        );
    }
}