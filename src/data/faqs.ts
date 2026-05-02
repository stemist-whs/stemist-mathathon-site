// Edit this file to manage FAQs. Each entry shows up in the FAQ accordion on the homepage.

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Who can participate in the STEMist Mathathon?",
    answer:
      "The Mathathon is open to middle school students (grades 6–8) interested in math. Students of all skill levels are welcome — whether you're new to math competitions or a seasoned competitor.",
  },
  {
    question: "How much does it cost to participate?",
    answer:
      "Participation is completely free. STEMist Education is a 501(c)(3) nonprofit and we believe great STEM opportunities should be accessible to everyone.",
  },
  {
    question: "Do I need to bring a team or can I sign up individually?",
    answer:
      "You can sign up individually! The Individual and Countdown rounds are solo, and we'll group solo participants into teams of four for the Power Round on the day of the event.",
  },
  {
    question: "What should I bring to the event?",
    answer:
      "Bring pencils, scratch paper, and a positive attitude. Calculators are not permitted on any round. Lunch and snacks will be provided.",
  },
  {
    question: "Will food be provided?",
    answer:
      "Yes — lunch is included at 2:30 PM, along with light snacks and drinks throughout the day.",
  },
  {
    question: "How are winners decided?",
    answer:
      "Top performers in each round receive recognition. Overall winners are determined by combined scores across the Individual, Power, and Countdown rounds. The top four individual scorers compete in the Countdown finale.",
  },
  {
    question: "Where do I find more information about STEMist Education?",
    answer:
      "Visit joinstemist.org for more about our courses, competitions, and community events worldwide.",
  },
];
