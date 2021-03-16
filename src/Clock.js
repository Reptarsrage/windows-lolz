import React, { useEffect, useCallback, useState } from 'react';
import moment from 'moment';

export default function Clock() {
  const [formatted, setFormatted] = useState('');

  const updateTime = useCallback(() => {
    setFormatted(moment().format('LT'));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [updateTime]);

  return <span>{formatted}</span>;
}
