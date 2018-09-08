import React, { PureComponent } from 'react';
import FormControl from '../shared/FormControl';

class GoalForm extends PureComponent {
  
  render() { 

    return (
      <section>
        <h2>Add a New Goal!</h2>
        <form>
          
          <FormControl label="Name">
            <input name="name"/>
          </FormControl>

          <button>Add</button>

        </form>
      </section>
    );
  }
}
 
export default GoalForm;