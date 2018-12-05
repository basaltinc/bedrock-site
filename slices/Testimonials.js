import styled from 'styled-components';
import Testimonial from '../components/Testimonial';
import { Flex } from './styles/SliceStyles';
import { testimonials } from '../data/testimonials';

const TestimonialsWrapper = styled.div`
  background: ${props => props.theme.lightGrey};
  color: ${props => props.theme.primary};
  text-align: center;
  p {
    font-size: 4rem;
  }
  figure {
    margin: 2rem 1rem;
  }
  &:before {
    content: '';
    display: block;
    height: 125px;
    width: 100%;
    margin: 0 50px 0 0;
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      color-stop(49.9%, ${props => props.theme.primary}),
      color-stop(50.1%, transparent)
    );
    background: linear-gradient(
      to right bottom,
      ${props => props.theme.primary} 49.9%,
      transparent 50.1%
    );
  }
`;

const Inner = styled.div`
  padding: 5rem 1rem;
`;

const Testimonials = () => (
  <TestimonialsWrapper>
    <Inner>
      <h2>What are people saying about Bedrock?</h2>
      <Flex>
        {testimonials.map(testimonial => (
          <Testimonial
            key={testimonial.quote}
            img={testimonial.img}
            quote={testimonial.quote}
            name={testimonial.name}
          />
        ))}
      </Flex>
    </Inner>
  </TestimonialsWrapper>
);

export default Testimonials;
