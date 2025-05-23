import React from 'react'
import { getDateStatus } from '../utils/DateTransform';
import styled from 'styled-components';

interface DateStampProps {
  date: string;
}

const DateWrapper = styled.span<{ status: string }>`
  padding: 0.2rem 0.5rem;
  margin: 0 0.2rem;
  border-radius: 0.3rem;
  background-color: ${({ status }) =>
    status === "expired"
      ? "#ff4d4d"
      : status === "warning"
      ? "#ffd633"
      : "#4dff88"};
  color: #000;
  font-weight: 600;
  border: 2px solid #000;
`;

const DateStamp: React.FC<DateStampProps> = ({ date }) => {

  const status = getDateStatus(date);

  return <DateWrapper status={status}>{date}</DateWrapper>;
}

export default DateStamp