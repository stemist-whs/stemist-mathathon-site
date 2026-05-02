export type ScheduleItem = {
  time: string;
  title: string;
  highlight?: boolean;
  description?: string;
};

export const schedule: ScheduleItem[] = [
  { time: "1:00 PM", title: "Opening Ceremony", description: "Welcome, rules overview, and round previews." },
  { time: "1:30 PM", title: "Individual Round", highlight: true, description: "40 minutes — solve independently. Tests your own reasoning and problem solving." },
  { time: "2:30 PM", title: "Lunch", description: "Lunch provided for all participants." },
  { time: "3:00 PM", title: "Power Round", highlight: true, description: "45 minutes — teams of four collaborate on a chained problem set." },
  { time: "4:00 PM", title: "Activity", description: "A fun group activity while scores are tallied." },
  { time: "4:15 PM", title: "Countdown Round", highlight: true, description: "15 minutes — top four individual scorers face off, buzzer-style." },
  { time: "4:30 PM ", title: "Award Ceremony", description: "Recognition and awards for top performers." },
];
