

const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/');
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};

const getDateStatus = (dateString: string): "expired" | "warning" | "valid" => {
  const today = new Date();
  const targetDate = parseDate(dateString);

  const diffInMonths = targetDate.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInMonths / (1000 * 60 * 60 * 24));

  if (diffInDays < 0) return "expired";
  if (diffInDays <= 10) return "warning";
  return "valid";
};

const getClosestDate = (dates: string[]): string => {
  return dates.reduce((closest, current) => {
    const currentDate = parseDate(current);
    const closestDate = parseDate(closest);
    return currentDate < closestDate ? current : closest;
  })
};

export {
  parseDate,
  getDateStatus,
  getClosestDate
};