export const getFullYear = () => new Date().getFullYear();

export const getFooterCopy = (isIndex) => (isIndex ? "Holberton School" : "Holberton School main dashboard");

export const getLatestNotification = () => {
  return "<strong>Urgent Requirement</strong> - complete by EOD";
};