"use client";
import { useState, useEffect, use } from "react";

export default function Home() {
    const [showResults, setShowResults] = useState(false);

        const [monthlySpend, setMonthlySpend] = useState("");
        const [recommendation, setRecommendation] = useState("");
        const [savings, setSavings] = useState(0);
        const [selectedTool, setSelectedTool] = useState("ChatGPT");
        const [currentPlan, setCurrentPlan] = useState("");
        const [teamSize, setTeamSize] = useState("");
        const [useCase, setUseCase] = useState("Coding");
        const [annualSavings, setAnnualSavings] = useState(0);
        const [efficiencyScore, setEfficiencyScore] = useState(0);
        const [summary, setSummary] = useState("");


        useEffect(() => {       //load data
            const savedTool = localStorage.getItem("selectedTool");
            const savedPlan = localStorage.getItem("currentPlan");
            const savedSpend = localStorage.getItem("monthlySpend");
            const savedTeamSize = localStorage.getItem("teamSize");
            const savedUseCase = localStorage.getItem("useCase");

           setSelectedTool(savedTool || "ChatGPT");
           setCurrentPlan(savedPlan || "");
           setMonthlySpend(savedSpend || "");
           setTeamSize(savedTeamSize || "");
           setUseCase(savedUseCase || "Coding");
        }, []); 

        useEffect(() => {
  localStorage.setItem("selectedTool", selectedTool);
  localStorage.setItem("currentPlan", currentPlan);
  localStorage.setItem("monthlySpend", monthlySpend);
  localStorage.setItem("teamSize", teamSize);
  localStorage.setItem("useCase", useCase);
}, [selectedTool, currentPlan, monthlySpend, teamSize, useCase]);

    return (
        <main className="min-h-screen bg-black text-white">

            {/*NAVBAR*/}
            <nav className="flex justify-between items-center px-4 md:px-8 py-5 border-b border-gray-800">

                <h1 className="text-2xl font-bold text-white">
                    Credex AI Audit
                </h1>

                <div className="flex gap-8 text-gray-300 text-sm font-medium">
                    <a href="#" className="hover:text-white transition duration-300">
                        Features
                        </a>
                    <a href="#" className="hover:text-white transition duration-300">
                        Pricing
                        </a>
                    <a href="#" className="hover:text-white transition duration-300">
                        Contact
                        </a>
                </div>

            </nav>

            {/*HERO SECTION*/}
            <section className="flex flex-col items-center justify-center px-6 text-center">

                <h1 className="text-4xl md:text-6xl font-bold ">
                    Stop Overpaying for AI Tools
                </h1>

                <p className="text-gray-400 text-base md:text-lg px-4">
                    Analyze your AI stack, uncover unnecessary spending,
                    and discover smarter pricing options instantly.
                </p>

                <button className="mt-8 bg-white text-black px-4 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 hover:scale-105 transition duration-300">
                    Start Free Audit
                </button>

            </section>

            {/*Features Section*/}
            <section className="py-20 px-8 bg-zinc-950">

                <h2 className="text-4xl font-bold text-center mb-14">
                    Features
                </h2>

                <div className="grid grid-cols-1 md:grid-col-3 gap-8">

                    {/*Card*/}
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4">
                            AI Cost Analysis
                        </h3>

                        <p className="text-gray-400">
                            Track how much you're spending on AI tools and discover unnecessary expenses instantly.
                        </p>
                    </div>

                    {/*Card 2*/}
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hgover:border-blue-500 hover:-translate-y-2 transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4">
                            Smart Recommendations
                        </h3>

                        <p className="text-gray-400">
                            Get better pricing suggetions and alternative AI tools to reduce your monthly costs.
                        </p>
                    </div>

                    {/*Card 3*/}
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300">
                        <h3 className="text-2xl font-semibold mb-4">
                            Real-time Insights
                        </h3>

                        <p className="text-gray-400">
                            View detailed analytics and insights about your AI usage in one simple dashboard.
                        </p>
                    </div>

            {/* Pricing Section */}
            <section className="py-24 px-4 md:px-8 bg-black">

                        <h2 className="text-4xl font-bold text-center mb-14">
                             Pricing Plans
                        </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-8 max-w-6xl mx-auto">

            {/* Starter Plan */}
                <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900 min-h-[500px] flex flex-col justify-between">

                        <h3 className="text-2xl font-bold mb-4">
                            Starter
                        </h3>

                        <p className="text-4xl font-bold mb-6">
                            $9<span className="text-lg text-gray-400">/month</span>
                        </p>

                        <ul className="space-y-3 text-gray-400">
                         <li>✔ Basic AI Audit</li>
                         <li>✔ Monthly Reports</li>
                         <li>✔ Email Support</li>
                        </ul>

                        <button className="mt-8 w-full bg-white text-black py-3 rounded-lg font-semibold">
                        Choose Plan
                        </button>

                     </div>

                {/* Pro Plan */}
                    <div className="border border-blue-500 rounded-2xl p-8 bg-zinc-900 md:scale-105 min-h-[500px] flex flex-col justify-between">

                     <h3 className="text-2xl font-bold mb-4 text-blue-400">
                        Pro
                     </h3>

                        <p className="text-4xl font-bold mb-6">
                         $29<span className="text-lg text-gray-400">/month</span>
                        </p>

                    <ul className="space-y-3 text-gray-400">
                        <li>✔ Advanced AI Analytics</li>
                        <li>✔ Real-Time Insights</li>
                        <li>✔ Smart Recommendations</li>
                        <li>✔ Priority Support</li>
                    </ul>

                <button
                    onClick={() => {

                    const spend = Number(monthlySpend || "0");
                    const team = Number(teamSize || "1");

                    let calculatedSavings = 0;
                    let recommendationText = "";
                    let score = 0;
                    let summaryText = "";
                    let reason = "";

                     if (selectedTool === "ChatGPT") {

                     if (team <= 2 && spend > 40) {
                        calculatedSavings = 25;
                        recommendationText = "Switch to ChatGPT Plus";
                        reason =
                          "Small teams usually don't need Team plans.";
                      } else {
                        calculatedSavings = 10;
                        recommendationText = "Optimize usage";
                        reason =
                          "Your current setup is mostly efficient.";
                      }

                      score = 85;
                    }

                    else if (selectedTool === "Claude") {

                      calculatedSavings = Math.floor(spend * 0.18);
                      recommendationText = "Claude Pro";
                      reason =
                        "Claude Pro fits smaller research teams better.";

                      score = 80;
                    }

                    else if (selectedTool === "Gemini") {

                      calculatedSavings = Math.floor(spend * 0.15);
                      recommendationText = "Gemini Advanced";
                        reason =
                        "Gemini Advanced provides similar features at lower cost.";

                      score = 78;
                    }

                    else if (selectedTool === "GitHub Copilot") {

                      calculatedSavings = Math.floor(spend * 0.12);
                      recommendationText = "Copilot Individual";
                      reason =
                        "Business plans are unnecessary for smaller engineering teams.";

                      score = 82;
                    }

                    else {

                      calculatedSavings = Math.floor(spend * 0.10);
                      recommendationText = "Standard Optimized Plan";
                      reason =
                        "Moderate savings possible with usage optimization.";

                      score = 75;
                    }

                    summaryText = `
                    Your ${team}-person team appears to be overspending on ${selectedTool}.
                    Based on your usage pattern and current spend, switching to ${recommendationText}
                    could save approximately $${calculatedSavings} per month.
                    ${reason}
                    `;

                    setSavings(calculatedSavings);
                    setAnnualSavings(calculatedSavings * 12);
                    setRecommendation(recommendationText);
                    setEfficiencyScore(score);
                    setSummary(summaryText);

                    setShowResults(true);

                    }}
 
                    className="w-full bg-blue-600 hover:bg-blue-700 transition p-4 rounded-xl font-semibold">
                        Generate Audit
                </button>       
                </div>

            {/* Enterprise Plan */}
                     <div className="border border-zinc-800 rounded-2xl p-8 bg-zinc-900 min-h-[500px] flex flex-col justify-between">

                    <h3 className="text-2xl font-bold mb-4">
                        Enterprise
                    </h3>

                    <p className="text-4xl font-bold mb-6">
                        Custom
                    </p>

                    <ul className="space-y-3 text-gray-400">
                     <li>✔ Unlimited Audits</li>
                     <li>✔ Dedicated Dashboard</li>
                     <li>✔ Team Collaboration</li>
                     <li>✔ 24/7 Support</li>
                    </ul>    
   
                <button className="mt-8 w-full bg-white text-black py-3 rounded-lg font-semibold">
                    Contact Sales
                </button>
            </div>

        </div>

            </section>
                    
                </div>
            </section>

            {/* Spend Audit Form Section */}

            <section className="w-full py-20 px-6">
             <div className="max-w-3xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-10">
      AI Spend Audit
    </h2>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">

      {/* Tool Name */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          AI Tool
        </label>

       <select
            value={selectedTool}
            onChange={(e) => setSelectedTool(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"
>
          <option>ChatGPT</option>
          <option>Claude</option>
          <option>Cursor</option>
          <option>GitHub Copilot</option>
          <option>Gemini</option>
          <option>OpenAI API</option>
          <option>Anthropic API</option>
          <option>Windsurf</option>
          <option>v0</option>
        </select>
      </div>

      {/* Plan */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          Current Plan
        </label>

        <input
            type="text"
            placeholder="Example: Pro Plan"
            value={currentPlan}
            onChange={(e) => setCurrentPlan(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"/>
      </div>

      {/* Monthly Spend */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          Monthly Spend ($)
        </label>

        <input
            type="number"
            placeholder="Example: 99"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"
        />
      </div>

      {/* Team Size */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          Team Size
        </label>


        <input
          type="number"
          placeholder="Example: 10"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"
        />
      </div>

      {/* Use Case */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          Primary Use Case
        </label>

        <select
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"> 
          <option>Coding</option>
          <option>Writing</option>
          <option>Research</option>
          <option>Data Analysis</option>
          <option>Mixed</option>
        </select>
      </div>
      
      {/* Button */}
<button
  onClick={() => {
   const spend = Number(monthlySpend || "0");
const team = Number(teamSize || "1");

let calculatedSavings = 0;
let recommendationText = "";
let score = 0;
let summaryText = "";

if (selectedTool === "ChatGPT") {
  calculatedSavings = Math.floor(spend * 0.2);
  recommendationText =
    spend > 100 ? "ChatGPT Team Plan" : "ChatGPT Plus";
  score = 82;
}

else if (selectedTool === "Claude") {
  calculatedSavings = Math.floor(spend * 0.15);
  recommendationText = "Claude Pro";
  score = 78;
}

else if (selectedTool === "Gemini") {
  calculatedSavings = Math.floor(spend * 0.18);
  recommendationText = "Gemini Advanced";
  score = 80;
}

else {
  calculatedSavings = Math.floor(spend * 0.12);
  recommendationText = "Optimized Standard Plan";
  score = 75;
}

summaryText = `
Your team of ${team} users appears to be overspending on ${selectedTool}.
Based on your current usage, switching to ${recommendationText}
could save approximately $${calculatedSavings} per month.
`;

setSavings(calculatedSavings);
setAnnualSavings(calculatedSavings * 12);
setRecommendation(recommendationText);
setEfficiencyScore(score);
setSummary(summaryText);

setShowResults(true);
  }}
  className="w-full bg-blue-600 hover:bg-blue-700 transition p-4 rounded-xl font-semibold"
>
  Generate Audit
</button>

    </div>
  </div>
</section>
           {showResults && (
  <div className="mt-10 max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500 rounded-3xl p-10 text-center hover:scale-[1.01] transition-duration-300">
    
    <h2 className="text-4xl font-bold mb-8 text-cyan-400">
      Audit Results
    </h2>

    <div className="space-y-4 text-gray-200">
        <div>
            Estimated Monthly Savings:
              <span className="text-cyan-400 font-bold">
                ${savings}
              </span>
              <div className="text-xl text-gray-300 mt-4">
              Annual Savings:
            </div>
        </div>

        <p>
            Better Plan Recommendation:
            <span className="text-cyan-400 font-bold">
                {" "} {recommendation}
            </span>
        </p>

        <p className="text-xl text-gray-300 mt-4">
            Efficiency Score:
            <span className="text-cyan-400 font-bold"> 82%</span>
        </p>

        <div className="mt-8 bg-black/40 rounded-xl p-6 border-cyan-500/20">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">
          AI Summary
        </h3>

        <p className="text-gray-300 leading-7">
          {summary}
        </p>
        </div>

    </div>


  </div>
)}
{/* Footer */}
<footer className="mt-24 border-t border-gray-800 py-10 px-8 text-center text-gray-400">

  <h2 className="text-2xl font-bold text-white mb-4">
    Contact Us
  </h2>

  <p className="mb-2">
    Email: support@credexai.com
  </p>

  <p className="mb-2">
    Phone: +91 9876543210
  </p>

  <p className="mb-6">
    Kolkata, India
  </p>

  <div className="flex justify-center gap-6 text-sm">
    <a href="#" className="hover:text-cyan-400 transition">
      LinkedIn
    </a>

    <a href="#" className="hover:text-cyan-400 transition">
      Twitter
    </a>

    <a href="#" className="hover:text-cyan-400 transition">
      GitHub
    </a>
  </div>

  <p className="mt-6 text-xs text-gray-500">
    © 2026 Credex AI Audit. All rights reserved.
  </p>

</footer>
        </main>
    );
}