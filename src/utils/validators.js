export const required = (value) => {
   if (value) return undefined;
   return 'Required field!'   
}

export const maxLengthCreater = (maxLength) => {
   return (value) => {
      if (value.length > maxLength) return `Must be ${maxLength} characters or less!`;
      return undefined;
   }
}

export const minLengthCreater = (minLength) => {
   return (value) => {
      if (value.length < minLength) return `Must be ${minLength} characters or more!`;
      return undefined;
   }
}