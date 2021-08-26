const months = [
   'Jan', 'Feb', 'Mar', 'Apr',
   'May', 'Jun', 'Jul', 'Aug',
   'Sep', 'Oct', 'Nov', 'Dec'
];

const dateConverter = (dateObject) => {
   const date = new Date(dateObject);
   const today = new Date();

   if (today.getDate() - date.getDate() === 1) return 'yesterday';
   if (today.getDate() - date.getDate() === 0) return date.toLocaleTimeString();

   return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
window.dateConverter = dateConverter;


export default dateConverter;