import React from 'react'
import { Icon, Label, Menu, Table, Button, Segment,Container,Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Employee = () => {
  return (
    <Container text>
    <br></br>
 <div className="p-3 mb-2 bg-secondary text-white"><b>Employee Form</b></div>
 <Segment>
 <Form>
        <Form.Field>
          <label>Name</label>
          <input name='name' placeholder='Name' />
        </Form.Field>

        <Form.Field>
          <label>Designation</label>
          <input name='designation' placeholder='Designation' />
        </Form.Field>

        <Form.Field>
          <label>Location</label>
          <input name='location' placeholder='Location' />
        </Form.Field>

        <Form.Field>
          <label>Salary</label>
          <input name='salary' placeholder='Salary' />
        </Form.Field>

        <Button color='grey' type='submit'>Submit</Button>
        <Button color='grey'>
          <Link to='/' style={{ color: '#FFF' }}>Cancel</Link>
        </Button>
      </Form>
</Segment>
</Container>
  )
}

export default Employee