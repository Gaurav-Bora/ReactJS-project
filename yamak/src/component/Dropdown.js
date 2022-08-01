import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasicButtonExample({name}) {
  return (
    < >
    <div style={{display:'flex',margin:'10px'}}>
    <p style={{marginRight:'10px'}}>{name}</p>
    <DropdownButton id="dropdown-basic-button" title="Select">
      <Dropdown.Item href="#/action-1">Select</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    </div>
    </>
  );
}

export default BasicButtonExample;