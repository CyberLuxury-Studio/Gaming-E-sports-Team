"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../animations/ScrollReveal";
import { Trophy, Swords, Calendar } from "lucide-react";

const matches = [
  {
    id: 1,
    game: "VALORANT",
    tournament: "VCT Masters Tokyo",
    home: "VOID SYNDICATE",
    homeScore: 13,
    away: "SENTINELS",
    awayScore: 11,
    status: "FINAL",
    win: true
  },
  {
    id: 2,
    game: "CS2",
    tournament: "IEM Katowice",
    home: "VOID SYNDICATE",
    homeScore: 16,
    away: "NAVI",
    awayScore: 14,
    status: "FINAL",
    win: true
  },
  {
    id: 3,
    game: "LEAGUE OF LEGENDS",
    tournament: "Worlds 2024",
    home: "VOID SYNDICATE",
    homeScore: 0,
    away: "T1",
    awayScore: 0,
    status: "LIVE - 24:12",
    win: null
  }
];

export function LiveScoresSection() {
  const [activeMatch, setActiveMatch] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMatch((prev) => (prev + 1) % matches.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] pointer-events-none -z-10 rounded-full"></div>
      
      <ScrollReveal>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-500 font-mono text-xs uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Live Intel Feed
            </div>
            <h2 className="text-4xl md:text-5xl font-black headline-font uppercase tracking-tighter text-white">
              Combat <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Telemetry</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
            <Calendar className="w-4 h-4" /> Full Schedule
          </button>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-zinc-950 border border-white/10 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMatch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-12 relative z-10 h-full flex flex-col justify-center min-h-[350px]"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                  {matches[activeMatch].game}
                </span>
                <span className="text-sm font-mono text-primary uppercase tracking-widest">
                  {matches[activeMatch].tournament}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                {/* Home */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <div className={`w-24 h-24 mb-6 flex items-center justify-center rounded-xl border-2 ${matches[activeMatch].win ? 'border-primary shadow-[0_0_30px_rgba(0,255,255,0.2)]' : 'border-white/10'}`}>
                    <Trophy className={`w-10 h-10 ${matches[activeMatch].win ? 'text-primary' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black headline-font uppercase text-white tracking-wider">
                    {matches[activeMatch].home}
                  </h3>
                </div>

                {/* Score */}
                <div className="flex flex-col items-center px-4 md:px-8">
                  <div className="text-5xl md:text-7xl font-black headline-font tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    {matches[activeMatch].homeScore} <span className="text-gray-600 font-light">-</span> {matches[activeMatch].awayScore}
                  </div>
                  <div className={`mt-6 px-4 py-1.5 rounded text-xs font-mono uppercase tracking-widest font-bold ${
                    matches[activeMatch].status.includes('LIVE') ? 'bg-red-500 text-white animate-pulse' : 'bg-white/10 text-gray-400'
                  }`}>
                    {matches[activeMatch].status}
                  </div>
                </div>

                {/* Away */}
                <div className="flex-1 flex flex-col items-center text-center">
                  <div className={`w-24 h-24 mb-6 flex items-center justify-center rounded-xl border-2 ${matches[activeMatch].win === false ? 'border-primary shadow-[0_0_30px_rgba(0,255,255,0.2)]' : 'border-white/10'}`}>
                    <Swords className={`w-10 h-10 ${matches[activeMatch].win === false ? 'text-primary' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black headline-font uppercase text-white tracking-wider">
                    {matches[activeMatch].away}
                  </h3>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          {matches.map((match, idx) => (
            <button
              key={match.id}
              onClick={() => setActiveMatch(idx)}
              className={`p-6 text-left border rounded-xl transition-all duration-300 flex items-center justify-between group ${
                activeMatch === idx 
                  ? "bg-primary/10 border-primary" 
                  : "bg-zinc-950 border-white/5 hover:border-white/20"
              }`}
            >
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">
                  {match.game}
                </div>
                <div className="font-bold headline-font uppercase tracking-wide text-white group-hover:text-primary transition-colors">
                  VS {match.away}
                </div>
              </div>
              <div className={`text-lg font-black headline-font ${activeMatch === idx ? 'text-primary' : 'text-gray-600'}`}>
                {match.homeScore}-{match.awayScore}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
