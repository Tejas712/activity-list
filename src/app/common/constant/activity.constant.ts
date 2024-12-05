import { ActivityType, Activity } from '../../model/activity.model';

export const ActivityTypeAndIconName: Record<ActivityType, string> = {
  [ActivityType.Message]: 'chat_bubble',
  [ActivityType.Phone]: 'call',
  [ActivityType.Coffee]: 'local_cafe',
  [ActivityType.Person]: 'person',
  [ActivityType.MeetingNote]: 'list',
};

export const ActivityTypeAndSchedulingContent: Record<ActivityType, string> = {
  [ActivityType.Message]: '',
  [ActivityType.Phone]: 'had call with',
  [ActivityType.Coffee]: 'had coffee with',
  [ActivityType.Person]: 'had meeting with',
  [ActivityType.MeetingNote]: 'add note to',
};

export const ActivityTypeOptions = [
  {
    type: ActivityType.Phone,
    icon: ActivityTypeAndIconName[ActivityType.Phone],
  },
  {
    type: ActivityType.Coffee,
    icon: ActivityTypeAndIconName[ActivityType.Coffee],
  },
  {
    type: ActivityType.Person,
    icon: ActivityTypeAndIconName[ActivityType.Person],
  },
  {
    type: ActivityType.MeetingNote,
    icon: ActivityTypeAndIconName[ActivityType.MeetingNote],
  },
];
