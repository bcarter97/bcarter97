export const encodeForm = (data: { [key: string]: string }): string =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export const messages = [
  "I use coding and algorithms to turn bugs into money",
  "I write code and sometimes it works",
  "I've run out of funny things to say",
];
