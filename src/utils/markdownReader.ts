// Utility to read and parse markdown files for blog posts
export interface BlogPostData {
  id: number;
  title: string;
  createdAt: string;
  content: string;
  authorName: string;
  published: boolean;
  image: string;
  category?: string;
  eventDate?: string;
}

// Function to parse markdown content and extract metadata
export function parseMarkdownContent(content: string): Partial<BlogPostData> {
  const lines = content.split('\n');
  let title = '';
  let authorName = 'QSEC Team';
  let eventDate = '';
  let category = '';
  let image = '';
  
  // Extract title from first line (remove # and trim)
  if (lines[0]?.startsWith('#')) {
    title = lines[0].replace(/^#+\s*/, '').trim();
  }
  
  // Look for metadata in the content
  for (const line of lines) {
    if (line.startsWith('**Event Date:**')) {
      eventDate = line.replace('**Event Date:**', '').trim();
    }
    if (line.startsWith('**Author:**')) {
      authorName = line.replace('**Author:**', '').trim();
    }
    if (line.startsWith('**Category:**')) {
      category = line.replace('**Category:**', '').trim();
    }
    if (line.startsWith('**Featured Image:**')) {
      image = line.replace('**Featured Image:**', '').trim().replace(/`/g, '');
    }
  }
  
  return {
    title,
    authorName,
    eventDate,
    category,
    image
  };
}

// Template blog posts data with references to markdown files
export const templatePostsData: Omit<BlogPostData, 'content'>[] = [
  {
    id: 1,
    title: "Quantum Computing Workshop - A Deep Dive into the Future",
    createdAt: "2024-10-10T00:00:00Z",
    authorName: "QSEC Team",
    published: true,
    image: "/images/IMG_4164.JPG",
    category: "Workshop, Quantum Computing",
    eventDate: "October 10, 2024"
  },
  {
    id: 2,
    title: "Google's Cubit Game: Making Quantum Computing Fun and Accessible",
    createdAt: "2025-02-13T00:00:00Z",
    authorName: "QSEC Team",
    published: true,
    image: "/images/IMG_4176.JPG",
    category: "Workshop, Quantum Gaming, Beginner-Friendly",
    eventDate: "February 13, 2025"
  },
  {
    id: 3,
    title: "Quantum Opportunities Panel: Insights from Industry Leaders",
    createdAt: "2024-11-12T00:00:00Z",
    authorName: "QSEC Team",
    published: true,
    image: "/images/IMG_4177.JPG",
    category: "Panel Discussion, Career Development, Industry Insights",
    eventDate: "November 12, 2024"
  }
];

// Function to get markdown content (in a real app, this would fetch from files)
export async function getMarkdownContent(postId: number): Promise<string> {
  // In a real implementation, this would read from the actual markdown files
  // For now, we'll return the content that should be in the markdown files
  const markdownContents: { [key: number]: string } = {
    1: `# Quantum Computing Workshop - A Deep Dive into the Future

**Event Date:** October 10, 2024  
**Author:** QSEC Team  
**Category:** Workshop, Quantum Computing  
**Featured Image:** \`../src/assets/IMG_4164.JPG\`

---

## Event Overview

Join us for an immersive exploration into the fascinating world of quantum computing! This workshop is designed for both beginners and those with some background in computer science who want to understand the fundamentals of quantum computing and its real-world applications.

## What You'll Learn

### Core Concepts
- **Quantum Bits (Qubits)**: Understanding the fundamental building blocks of quantum computers
- **Superposition and Entanglement**: The quantum phenomena that make quantum computing possible
- **Quantum Gates**: The basic operations that manipulate quantum information
- **Quantum Algorithms**: Introduction to algorithms like Shor's and Grover's

### Practical Applications
- Cryptography and quantum security
- Optimization problems
- Drug discovery and molecular simulation
- Financial modeling and risk analysis
- Machine learning and AI applications

## Workshop Structure

### Session 1: Quantum Fundamentals (45 minutes)
- Introduction to quantum mechanics basics
- Classical vs. quantum computing comparison
- Hands-on demonstration with quantum simulators

### Session 2: Quantum Programming (60 minutes)
- Introduction to Qiskit (IBM's quantum programming framework)
- Writing your first quantum program
- Running circuits on real quantum hardware

### Session 3: Real-World Applications (45 minutes)
- Case studies from industry leaders
- Discussion of current limitations and challenges
- Future prospects and career opportunities

## Key Takeaways

By the end of this workshop, participants will:

1. **Understand** the fundamental principles of quantum computing
2. **Experience** hands-on quantum programming
3. **Explore** real-world applications
4. **Connect** with like-minded individuals in the quantum community
5. **Discover** potential career paths in quantum technology

## Registration and Details

- **Date:** October 10, 2024
- **Time:** 4:00 PM - 5:00 PM
- **Location:** TMU Science Building, Room 201
- **Cost:** Free
- **Registration:** Contact qsectmus@gmail.com or join our Discord community

Don't miss this opportunity to be part of the quantum computing community at TMU. Register today and prepare to explore the quantum realm!

*For questions about this event, please contact us at qsectmus@gmail.com or join our Discord community.*`,

    2: `# Google's Cubit Game: Making Quantum Computing Fun and Accessible

**Event Date:** February 13, 2025  
**Author:** QSEC Team  
**Category:** Workshop, Quantum Gaming, Beginner-Friendly  
**Featured Image:** \`../src/assets/IMG_4176.JPG\`

---

## Game On: Learning Quantum Through Play

Get ready to dive into the quantum world through Google's innovative Cubit Game! This beginner-friendly introduction to quantum computing uses gaming mechanics to make complex quantum concepts accessible and fun for everyone.

## What is Cubit?

Cubit is Google's educational game designed to teach quantum computing concepts through interactive gameplay. Instead of diving straight into complex mathematics and physics, Cubit uses visual puzzles and game mechanics to help players intuitively understand quantum principles.

## Why Gaming for Quantum Education?

### The Challenge with Quantum Learning
- Traditional quantum education requires heavy mathematics
- Abstract concepts are difficult to visualize
- Many students get discouraged by the complexity

### The Gaming Solution
- **Visual Learning**: See quantum states and operations in action
- **Progressive Difficulty**: Start simple, build complexity gradually
- **Immediate Feedback**: Learn from mistakes in a safe environment
- **Engagement**: Gamification increases motivation and retention

## Workshop Agenda

### Part 1: Quantum Technology Basics (60 minutes)
- **Introduction to Quantum Computing**: What makes quantum computers different
- **Quantum Bits (Qubits)**: Understanding the fundamental building blocks
- **Superposition and Entanglement**: The quantum phenomena that enable quantum computing
- **Quantum Gates**: Basic operations that manipulate quantum information
- **Real-World Applications**: How quantum technology is being used today
- **Current Limitations**: Challenges and what the future holds

### Part 2: Google's Cubit Game Workshop (60 minutes)
- **Game Introduction**: Overview of Cubit's interface and controls
- **Quantum Basics in Cubit**: Learn quantum states through visual puzzles
- **Measurement Games**: Understand quantum measurement through gameplay
- **Circuit Building**: Create quantum circuits using game blocks
- **Entanglement Challenges**: Solve puzzles involving quantum entanglement
- **Algorithm Design**: Build simple quantum algorithms in the game

## Learning Outcomes

By the end of this workshop, participants will:

1. **Understand** basic quantum computing concepts through gameplay
2. **Experience** quantum algorithms in an interactive environment
3. **Build** confidence in quantum computing fundamentals
4. **Connect** with a community of quantum learners
5. **Discover** pathways to deeper quantum education

## Registration Information

- **Date:** February 13, 2025
- **Time:** 4:00 PM - 5:00 PM
- **Location:** TMU Science Building, Room 201
- **Cost:** Free
- **Registration:** Contact qsectmus@gmail.com or join our Discord community
- **Equipment:** Bring your own laptop/tablet

Don't let the complexity of quantum computing intimidate you! Google's Cubit Game makes learning quantum concepts fun, visual, and accessible. Whether you're a student, professional, or simply curious about quantum technology, this workshop will give you a solid foundation in quantum computing through an engaging, game-based approach.

*Ready to start your quantum gaming journey? Contact us at qsectmus@gmail.com or join our Discord community to learn more.*`,

    3: `# Quantum Opportunities Panel: Insights from Industry Leaders

**Event Date:** November 12, 2024  
**Author:** QSEC Team  
**Category:** Panel Discussion, Career Development, Industry Insights  
**Featured Image:** \`../src/assets/IMG_4177.JPG\`

---

## A Panel of Quantum Excellence

Join us for an exclusive panel discussion featuring leading professionals from the quantum computing industry. This event brings together experts from University of Toronto, IBM, and TMU to share insights about career opportunities, industry trends, and the future of quantum technology.

## Panel Discussion Topics

### 1. Current State of Quantum Computing (20 minutes)
- **Industry Overview**: Where quantum computing stands today
- **Key Players**: Major companies and research institutions
- **Recent Breakthroughs**: Latest developments and achievements
- **Market Trends**: Investment and growth in quantum technology

### 2. Career Opportunities in Quantum (30 minutes)
- **Academic Paths**: Research positions and PhD opportunities
- **Industry Roles**: Jobs in quantum companies and tech firms
- **Startup Ecosystem**: Entrepreneurship in quantum technology
- **Skill Requirements**: What employers are looking for
- **Salary Expectations**: Compensation in quantum careers

### 3. Educational Pathways (25 minutes)
- **Undergraduate Preparation**: What to study for quantum careers
- **Graduate Programs**: Best quantum computing programs
- **Online Learning**: MOOCs and self-study resources
- **Certifications**: Professional credentials in quantum computing
- **Research Opportunities**: Getting involved in quantum research

### 4. Industry Challenges and Opportunities (25 minutes)
- **Technical Challenges**: Current limitations and bottlenecks
- **Business Applications**: Real-world use cases and ROI
- **Regulatory Landscape**: Policy and security considerations
- **Future Outlook**: Predictions for the next 5-10 years

## What You'll Learn

### Industry Insights
- **Market Analysis**: Understanding the quantum computing market
- **Company Profiles**: What it's like to work at major quantum companies
- **Research Directions**: Current and future research priorities
- **Investment Trends**: Where money is flowing in quantum technology

### Career Guidance
- **Job Market**: Current and projected job opportunities
- **Skill Development**: Building quantum computing skills
- **Networking**: Building professional relationships in quantum
- **Career Planning**: Strategic steps for quantum career development

## Registration and Event Details

- **Date:** November 12, 2024
- **Time:** 4:00 PM - 5:00 PM
- **Location:** TMU Science Building, Room 201
- **Cost:** Free
- **Registration:** Contact qsectmus@gmail.com or join our Discord community
- **Dress Code:** Business casual

The quantum computing industry is rapidly evolving, and this panel offers a unique opportunity to learn from those at the forefront of this revolution. Whether you're planning a quantum career or simply curious about the field, this event will provide valuable insights, connections, and guidance for your quantum journey.

*Ready to explore quantum career opportunities? Contact us at qsectmus@gmail.com or join our Discord community to learn more about this and other quantum events.*`
  };

  return markdownContents[postId] || '';
}
