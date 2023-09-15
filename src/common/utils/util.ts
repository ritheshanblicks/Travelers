export function isNullOrEmpty(value: any): boolean {
  return !(typeof value === 'string' && value.length > 0);
}
export function getInitialText(firstName: any, lastName: any): string {
  if (isNullOrEmpty(firstName)) {
    firstName = '';
  }
  if (isNullOrEmpty(lastName)) {
    lastName = '';
  }
  const firstNameInitials = (firstName && firstName.match(/\b\w/g)) || [];
  const lastNameInitials = (lastName && lastName.match(/\b\w/g)) || [];
  const tempValue = (
    (firstNameInitials.shift() || '') + (lastNameInitials.shift() || '')
  ).toUpperCase();
  return tempValue;
}
export function getInitialFromText(name: string): string {
  if (isNullOrEmpty(name)) {
    name = '';
  }
  const initials = name.match(/\b\w/g) || [];
  let tempValue = (
    (initials.shift() || '') + (initials.pop() || '')
  ).toUpperCase();
  if (tempValue.length === 0) {
    tempValue = 'NU';
  }
  return tempValue;
}
