export type Activity = {
  id: number;
  assignUser: AssignUser;
  timestamp: string; // Use Iso formate
  type: ActivityType;
  message: string;

};

export type AssignUser = {
  firstName:string;
  lastName: string;
}

export enum ActivityType {
  Message = 'Message',
  Phone = 'Phone',
  Coffee = 'Coffee',
  Person = 'Person',
  MeetingNote = 'Meeting Note',
}
