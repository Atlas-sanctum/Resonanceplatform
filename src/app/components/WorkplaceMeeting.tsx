import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { AlertTriangle, TrendingUp, Users, Activity } from "lucide-react";

export function WorkplaceMeeting() {
  const participants = [
    { id: 1, x: 25, y: 30, name: "Alex", intensity: 6, emotion: "engaged" },
    { id: 2, x: 45, y: 25, name: "Jordan", intensity: 8, emotion: "intense" },
    { id: 3, x: 65, y: 30, name: "Sam", intensity: 4, emotion: "calm" },
    { id: 4, x: 35, y: 55, name: "Casey", intensity: 7, emotion: "engaged" },
    { id: 5, x: 55, y: 55, name: "Taylor", intensity: 5, emotion: "calm" },
  ];

  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case "calm":
        return "rgba(96, 165, 250, 0.6)";
      case "engaged":
        return "rgba(45, 212, 191, 0.6)";
      case "intense":
        return "rgba(251, 191, 36, 0.6)";
      default:
        return "rgba(156, 163, 175, 0.6)";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-light text-white mb-3">Workplace Meeting Interface</h1>
            <p className="text-white/60">Real-time emotional radar for collaborative discussions</p>
          </div>

          {/* Alert Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <GlassCard className="p-4 border-amber-500/30 bg-amber-500/10">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-amber-400 flex-shrink-0" size={24} />
                <div>
                  <div className="text-white mb-1">Conversation Intensity Rising</div>
                  <p className="text-sm text-white/60">
                    Detected increased tension between participants. Consider a brief pause or topic shift.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Meeting Radar */}
            <div className="lg:col-span-2">
              <GlassCard className="p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl text-white mb-1">Q1 Strategy Meeting</h2>
                    <p className="text-sm text-white/50">Conference Room B • 5 Participants</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
                    <TrendingUp className="text-amber-400" size={16} />
                    <span className="text-amber-400 text-sm">Intensity Rising</span>
                  </div>
                </div>

                {/* Meeting Room Visualization */}
                <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/50 to-blue-900/30 mb-6">
                  {/* Conference Table */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 rounded-3xl border-2 border-white/10 bg-white/5" />

                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-10 grid-rows-10 h-full">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div key={i} className="border border-white/10" />
                      ))}
                    </div>
                  </div>

                  {/* Participants */}
                  {participants.map((person) => (
                    <motion.div
                      key={person.id}
                      className="absolute cursor-pointer group"
                      style={{
                        left: `${person.x}%`,
                        top: `${person.y}%`,
                      }}
                      whileHover={{ scale: 1.15 }}
                    >
                      {/* Emotional Halo */}
                      <motion.div
                        className="absolute -inset-16 rounded-full"
                        style={{
                          background: `radial-gradient(circle, ${getEmotionColor(person.emotion)} 0%, transparent 70%)`,
                        }}
                        animate={{
                          scale: [1, 1.2 + person.intensity * 0.05, 1],
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                          duration: 2 + person.intensity * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Person Indicator */}
                      <div
                        className="relative w-12 h-16 rounded-full"
                        style={{ backgroundColor: getEmotionColor(person.emotion) }}
                      />

                      {/* Intensity Ring */}
                      <svg className="absolute -inset-2 w-20 h-20" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="2"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={
                            person.emotion === "intense"
                              ? "rgba(251, 191, 36, 0.8)"
                              : "rgba(45, 212, 191, 0.6)"
                          }
                          strokeWidth="3"
                          strokeDasharray={`${person.intensity * 28.3} 283`}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                          animate={{ strokeDasharray: [`${person.intensity * 28.3} 283`] }}
                          transition={{ duration: 0.5 }}
                        />
                      </svg>

                      {/* Name Label */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <div className="px-2 py-1 rounded bg-slate-900/90 text-xs text-white/80">
                          {person.name}
                        </div>
                      </div>

                      {/* Hover Details */}
                      <div className="absolute -top-24 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <GlassCard className="p-3 w-40">
                          <div className="text-xs text-white mb-2">{person.name}</div>
                          <div className="text-xs text-white/60 mb-2">
                            Intensity: {person.intensity}/10
                          </div>
                          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-amber-400 rounded-full"
                              style={{ width: `${person.intensity * 10}%` }}
                            />
                          </div>
                        </GlassCard>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Emotion Legend */}
                <div className="flex flex-wrap gap-4 text-xs">
                  {[
                    { color: "bg-blue-400", label: "Calm" },
                    { color: "bg-teal-400", label: "Engaged" },
                    { color: "bg-yellow-400", label: "Intense Discussion" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-white/60">{item.label}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Metrics Panel */}
            <div className="space-y-6">
              {/* Conversation Intensity */}
              <GlassCard className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-amber-500/20">
                    <Activity className="text-amber-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Conversation Intensity</h3>
                    <p className="text-sm text-white/50">Current level</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-4xl font-light text-white mb-2">7.2</div>
                  <div className="text-xs text-white/50">out of 10</div>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "72%" }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
                <div className="mt-3 text-xs text-white/50">
                  Rising steadily over last 10 minutes
                </div>
              </GlassCard>

              {/* Conflict Risk */}
              <GlassCard className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-red-500/20">
                    <AlertTriangle className="text-red-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Conflict Risk Gauge</h3>
                    <p className="text-sm text-white/50">Potential for escalation</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-4xl font-light text-white mb-2">4.5</div>
                  <div className="text-xs text-white/50">out of 10</div>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "45%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </div>
                <div className="mt-3 text-xs text-white/50">Moderate - Monitor closely</div>
              </GlassCard>

              {/* Harmony Indicator */}
              <GlassCard className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-teal-500/20">
                    <Users className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Harmony Indicator</h3>
                    <p className="text-sm text-white/50">Group cohesion</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-4xl font-light text-white mb-2">6.8</div>
                  <div className="text-xs text-white/50">out of 10</div>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "68%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <div className="mt-3 text-xs text-white/50">Good - Despite high intensity</div>
              </GlassCard>

              {/* Suggestions */}
              <GlassCard className="p-6 bg-blue-500/10 border-blue-500/30">
                <h3 className="text-white mb-3 text-sm">AI Suggestion</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Consider introducing a brief pause or shifting to a more collaborative discussion format
                  to reduce intensity while maintaining engagement.
                </p>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
