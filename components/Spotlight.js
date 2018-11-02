import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Centered from './styles/Centered';


const Spotlight = () => (
  <Centered>
    <Button isInverted>Download</Button>
    <Button>Documentation</Button>
  </Centered>
);

export default Spotlight;