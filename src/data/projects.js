const projects = [
  {
    id: 1,
    title: "SnapLearn",
    tech: "Python • OCR • OpenAI API • HTML • CSS • JavaScript",
    description:
       "AI-powered learning assistant that converts handwritten or printed notes into digital study material using OCR. Integrated AI-powered summarization, question generation, and chatbot support to help students learn more effectively.",
    github: "https://github.com/SaiHemanth2005/SnapLearn",
    image: `${import.meta.env.BASE_URL}projects/snaplearn.png`,
  },

  {
    id: 2,
    title: "AI-Based Height Estimation",
    tech: "Python • OpenCV • MediaPipe • NumPy",
    description:
      "Real-time height estimation using pose detection with posture validation.",
    github:
      "https://github.com/SaiHemanth2005/ai-height-estimator",
    image: `${import.meta.env.BASE_URL}projects/height.png`,
  },

  {
    id: 3,
    title: "Sudoku Solver",
    tech: "C++ • DSA • Backtracking",
    description:
      "Console-based Sudoku Solver using Backtracking Algorithm.",
    github:
      "https://github.com/SaiHemanth2005/SCT_SD_4",
    image: `${import.meta.env.BASE_URL}projects/sudoku.png`,
  },

  {
    id: 4,
    title: "Python Web Scraper",
    tech: "Python • BeautifulSoup • Pandas",
    description:
      "Automated e-commerce web scraper exporting data into CSV.",
    github:
      "https://github.com/SaiHemanth2005/SCT_SD_3",
    image: `${import.meta.env.BASE_URL}projects/scraper.png`,
  },
];

export default projects;