import styled from 'styled-components';

export const Flex = styled.div`
  &:not(.inline) {
    display: flex;
  }

  &.inline {
    display: inline-flex;
  }

  &[aria-orientation="vertical"],
  &.column {
    flex-direction: column;
  }

  &.column-reverse {
    flex-direction: column-reverse;
  }

  &.row-reverse {
    flex-direction: row-reverse;
  }

  &.wrap {
    flex-wrap: wrap;
  }

  &.start {
    justify-content: flex-start;
  }

  &.end {
    justify-content: flex-end;
  }

  &.space-between {
    justify-content: space-between;
  }

  &.space-around {
    justify-content: space-around;
  }

  &.center {
    justify-content: center;
    align-items: center;
  }

  &.x-center {
    justify-content: center;
  }

  &.y-center {
    align-items: center;
  }
`;