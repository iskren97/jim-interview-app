const dateFormatter = (date) => {
  const formattedDate = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date
    .getDate()
    .toString()
    .padStart(2, '0')}/${date.getFullYear()} ${date
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    .toString()}`;

  return formattedDate;
};

export default dateFormatter;
