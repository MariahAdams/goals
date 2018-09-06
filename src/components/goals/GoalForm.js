import React, { Component } from 'react';
import FormControl from '../shared/FormControl';

class GoalForm extends Component {
  
  render() { 

    return (
      <section>
        <h2>Add a New Goal</h2>
        <form>
          
          <FormControl label="Name">
            <input name="name"/>
          </FormControl>

          <FormControl label="Complete?">
            <input type="checkbox"/>
          </FormControl>

          <button>Add</button>

        </form>
      </section>
    );
  }
}
 
export default GoalForm;