import _ from "lodash";

const messages = [
  "I use coding and algorithms to turn bugs into money",
  "I write code and sometimes it works",
];

const lastMessage = "I've run out of funny things to say";

const messageList = [..._.shuffle(messages), lastMessage];

export default messageList;
