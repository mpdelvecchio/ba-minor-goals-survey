// The 15 short, Bloom's-style learning goals shown in the survey.
// Edit the text here and both the survey and the results page update.
// "level" is the Bloom's taxonomy level, shown as a small tag on each goal.
const GOALS = [
  { id: "G01", level: "Understand", text: "Explain how data can help answer everyday business questions." },
  { id: "G02", level: "Understand", text: "Identify what data is needed to answer a specific business question." },
  { id: "G03", level: "Apply",      text: "Clean and organize messy, real-world data so it is ready to analyze." },
  { id: "G04", level: "Apply",      text: "Use spreadsheets and statistical software (e.g., Excel, R, Stata, SPSS) to work with data." },
  { id: "G05", level: "Apply",      text: "Summarize data with basic descriptive statistics." },
  { id: "G06", level: "Analyze",    text: "Interpret statistical results and explain what they mean for a business." },
  { id: "G07", level: "Analyze",    text: "Measure relationships between business variables (e.g., price and sales) using regression." },
  { id: "G08", level: "Apply",      text: "Forecast future business outcomes such as sales, demand, or customer value." },
  { id: "G09", level: "Analyze",    text: "Group customers or markets into meaningful segments." },
  { id: "G10", level: "Analyze",    text: "Apply analytics to their own business area (marketing, finance, HR, accounting, or supply chain)." },
  { id: "G11", level: "Evaluate",   text: "Judge the strengths, limitations, and reliability of a data source or analysis." },
  { id: "G12", level: "Evaluate",   text: "Recommend a business decision that is backed by data." },
  { id: "G13", level: "Create",     text: "Design a study or survey that collects useful business data." },
  { id: "G14", level: "Create",     text: "Build clear charts and visuals, and present findings to non-technical audiences." },
  { id: "G15", level: "Evaluate",   text: "Recognize ethical and privacy issues in collecting and using data." }
];

const SCALE = [
  { value: 1, label: "Strongly dislike", quip: "Oh I know. That one is really not the best!" },
  { value: 2, label: "Dislike",          quip: "Yeah, me neither!" },
  { value: 3, label: "Indifferent",      quip: "Well Rome wasn't built in a day!" },
  { value: 4, label: "Like",             quip: "Yeah, that one's not bad." },
  { value: 5, label: "Strongly like",    quip: "I know right!!" }
];
