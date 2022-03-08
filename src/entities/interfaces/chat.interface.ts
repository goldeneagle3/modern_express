export interface IChat {
  chatName: string;
  users:[string];
  messages: [
    {
      sender: string,
      text: string,
      date: string,
    }
  ];
}