export const formatTimeWithPeriod = (time: string) => {
  const [hours, minutes] = time.split(':');

  const period = +hours >= 12 ? '오후' : '오전';
  const formatHours = String(+hours % 12 || 12).padStart(2, '0');
  const formatMinutes = minutes.padStart(2, '0');

  return `${period} ${formatHours}:${formatMinutes}`;
};
