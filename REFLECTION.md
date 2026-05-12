# REFLECTION

## 1. The hardest bug I hit this week

The hardest bug I faced was JSX nesting and button syntax issues inside the audit results section. At one point the entire app showed multiple TypeScript and JSX errors because a button tag and div structure were incorrectly closed. I initially thought the issue was related to React state logic, but after checking the error lines carefully I realized the issue was caused by incorrect nesting and missing closing tags. I debugged it by isolating sections one by one and testing after every small change. This taught me the importance of checking component structure carefully in React applications.


## 2. A decision I reversed mid-week

Initially I planned to keep the website in a plain dark black theme. After testing the UI, I realized it looked too basic and visually crowded. I changed the design into a navy-blue gradient SaaS style interface with improved spacing, cards, and better buttons. This significantly improved the overall feel of the project and made it look more professional and product-oriented.


## 3. What I would build in week 2

If I had another week, I would implement a real backend using Supabase or Firebase for storing audit reports and captured leads. I would also add authentication, PDF export, benchmark comparisons, and a fully dynamic AI-generated report using the OpenAI or Anthropic API. Another major improvement would be adding analytics dashboards and better visualization charts for spend tracking.


## 4. How I used AI tools

I used AI tools mainly for debugging, UI improvement ideas, Tailwind CSS styling help, and improving the audit logic. I also used AI assistance for generating documentation structures and refining user experience ideas. However, I did not blindly trust all AI-generated code. In several cases the generated JSX structure caused syntax issues and broken layouts, so I manually corrected and tested the code step-by-step. This helped me understand the importance of reviewing AI outputs carefully instead of directly copying everything.


## 5. Self-rating

### Discipline — 8/10
I consistently worked on the project under heavy time pressure and completed the core MVP features.

### Code Quality — 7/10
The project structure and functionality are good for an MVP, although some areas could be refactored further for scalability.

### Design Sense — 8/10
I improved the UI significantly using better themes, spacing, cards, and responsive styling.

### Problem Solving — 8/10
I faced multiple JSX, deployment, and logic issues and solved them through debugging and testing.

### Entrepreneurial Thinking — 7/10
I focused on making the tool feel like a real SaaS product with pricing insights, audit logic, and lead capture features.