import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import React, { useState } from 'react';

import PropTypes from 'prop-types';

function CoursesDropDown({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem>Bar Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

CoursesDropDown.propTypes = {
  direction: PropTypes.string,
};

export default CoursesDropDown;