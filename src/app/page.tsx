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
        const [loading, setLoading] = useState(false);
        const [email, setEmail] = useState("");


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
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white">

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

                <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 p-4 rounded-2xl font-semibold shadow-lg hover:scale-105">
                    Start Free Audit
                </button>

            </section>

            {/*Features Section*/}
            <section className="py-28 space-y-8 px-8 bg-zinc-950">

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
                            Get better pricing suggestions and alternative AI tools to reduce your monthly costs.
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
            <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800">

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

                        <button className="w-full bg-slate-700 hover:bg-slate-600 transition-all duration-300 p-4 rounded-2xl font-semibold">
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
                    className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 p-4 rounded-2xl font-semibold shadow-lg hover:scale-105">
                        Start Pro Plan
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
   
                <button className="w-full bg-slate-700 hover:bg-slate-600 transition-all duration-300 p-4 rounded-2xl font-semibold">
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
          <option>Perplexity</option>
          <option>Midjourney</option>
          <option>Notion AI</option>
          <option>Canva AI</option>
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
      {/* Email Input */}
      <div>
        <label className="block mb-2 text-sm text-gray-300">
          Email Address
        </label>

        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white"/>
        </div>
      
      {/* Button */}
     <button
  onClick={() => {

    setLoading(true);

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

    else if (selectedTool === "Cursor") {
      calculatedSavings = Math.floor(spend * 0.20);
      recommendationText = "Cursor Pro";
      score = 84;
    }

    else if (selectedTool === "GitHub Copilot") {
      calculatedSavings = Math.floor(spend * 0.12);
      recommendationText = "Copilot Individual";
      score = 82;
    }

    else if (selectedTool === "OpenAI API") {
      calculatedSavings = Math.floor(spend * 0.18);
      recommendationText = "Token Optimization";
      score = 86;
    }

    else if (selectedTool === "Anthropic API") {
      calculatedSavings = Math.floor(spend * 0.17);
      recommendationText = "Claude API Starter";
      score = 81;
    }

    else if (selectedTool === "Windsurf") {
      calculatedSavings = Math.floor(spend * 0.16);
      recommendationText = "Windsurf Starter";
      score = 79;
    }

    else if (selectedTool === "v0") {
      calculatedSavings = Math.floor(spend * 0.14);
      recommendationText = "v0 Standard";
      score = 77;
    }

    else if (selectedTool === "Perplexity") {
      calculatedSavings = Math.floor(spend * 0.13);
      recommendationText = "Perplexity Pro";
      score = 78;
    }

    else if (selectedTool === "Midjourney") {
      calculatedSavings = Math.floor(spend * 0.15);
      recommendationText = "Basic Creator Plan";
      score = 76;
    }

    else if (selectedTool === "Notion AI") {
      calculatedSavings = Math.floor(spend * 0.10);
      recommendationText = "Notion AI Plus";
      score = 75;
    }

    else if (selectedTool === "Canva AI") {
      calculatedSavings = Math.floor(spend * 0.11);
      recommendationText = "Canva Pro";
      score = 74;
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

      setTimeout(() => {
        setLoading(false);
        setShowResults(true);
        }, 1500);

  } }

        className="w-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 p-4 rounded-2xl font-semibold shadow-lg hover:scale-105">
          {loading ? "Generating..." : "Generate Audit"}
       </button>

       <button
        className="w-full mt-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 p-4 rounded-2xl font-semibold shadow-lg">
          Save Audit
       </button>

    </div>
    <button
  onClick={() => {
    navigator.clipboard.writeText("http://localhost:3000/results");
    alert("Share link copied!");
  }}
  className="mt-6 bg-white text-black hover:bg-gray-200 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg"
>
  {/*Copy Share Link*/}
</button>

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
               <span className="text-cyan-400 font-bold">
                ${annualSavings}
              </span>
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
            <span className="text-cyan-400 font-bold">
              {efficiencyScore}%
            </span>
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
<footer className="mt-24 border-t border-cyan-500/20 bg-black/20 backdrop-blur-md py-12 text-center">

  <h2 className="text-3xl font-bold text-cyan-400 mb-6">
    Contact Us
  </h2>

  <div className="space-y-3 text-gray-300 text-lg">
    <p>
      Email:
      <span className="text-cyan-300"> support@credexai.com</span>
    </p>

    <p>
      Phone:
      <span className="text-cyan-300"> +91 9876543210</span>
    </p>

    <p>
      Location:
      <span className="text-cyan-300"> Kolkata, India</span>
    </p>
  </div>

  <div className="flex justify-center gap-8 mt-8 text-gray-400 font-medium">
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

  <div className="mt-8 text-sm text-gray-500">
    © 2026 Credex AI Audit. All rights reserved.
  </div>

</footer>
        </main>
    );
}