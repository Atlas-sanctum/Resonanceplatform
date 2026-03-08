import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { useState } from "react";
import { Sliders, Focus, Lightbulb, MessageCircle } from "lucide-react";

export function AtmosphereMap() {
  const [sensitivity, setSensitivity] = useState(50);
  const [focusMode, setFocusMode] = useState(false);
  const [insightMode, setInsightMode] = useState(true);
  const [guidanceMode, setGuidanceMode] = useState(false);
  const [hoveredPerson, setHoveredPerson] = useState<number | null>(null);

  const people = [
    { id: 1, x: 20, y: 25, emotion: "calm", color: "rgba(96, 165, 250, 0.6)", label: "Calm", metrics: { stress: 2, engagement: 7, energy: 5 } },
    { id: 2, x: 45, y: 40, emotion: "engaged", color: "rgba(45, 212, 191, 0.6)", label: "Engaged", metrics: { stress: 3, engagement: 9, energy: 8 } },
    { id: 3, x: 70, y: 30, emotion: "tension", color: "rgba(251, 191, 36, 0.6)", label: "Mild Tension", metrics: { stress: 6, engagement: 5, energy: 6 } },
    { id: 4, x: 30, y: 65, emotion: "calm", color: "rgba(96, 165, 250, 0.6)", label: "Calm", metrics: { stress: 1, engagement: 6, energy: 4 } },
    { id: 5, x: 60, y: 70, emotion: "stress", color: "rgba(251, 146, 60, 0.6)", label: "Stress", metrics: { stress: 8, engagement: 4, energy: 7 } },
    { id: 6, x: 85, y: 55, emotion: "engaged", color: "rgba(45, 212, 191, 0.6)", label: "Engaged", metrics: { stress: 2, engagement: 8, energy: 7 } },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-light text-white mb-3">Emotional Atmosphere Map</h1>
            <p className="text-white/60">Augmented reality emotional field visualization</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Control Panel */}
            <div className="lg:col-span-1 space-y-4">
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Sliders className="text-white/60" size={20} />
                  <h3 className="text-white">Controls</h3>
                </div>

                {/* Sensitivity Slider */}
                <div className="mb-6">
                  <label className="text-sm text-white/70 mb-2 block">Sensitivity</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sensitivity}
                    onChange={(e) => setSensitivity(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-400 [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="text-xs text-white/50 mt-1">{sensitivity}%</div>
                </div>

                {/* Toggle Switches */}
                <div className="space-y-4">
                  <button
                    onClick={() => setFocusMode(!focusMode)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      focusMode ? "bg-blue-500/20 border border-blue-500/30" : "bg-white/5 border border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Focus size={18} className={focusMode ? "text-blue-400" : "text-white/60"} />
                      <span className={focusMode ? "text-white" : "text-white/70"}>Focus Mode</span>
                    </div>
                    <div
                      className={`w-10 h-6 rounded-full transition-all ${
                        focusMode ? "bg-blue-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform ${
                          focusMode ? "translate-x-5" : "translate-x-0.5"
                        } mt-0.5`}
                      />
                    </div>
                  </button>

                  <button
                    onClick={() => setInsightMode(!insightMode)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      insightMode ? "bg-teal-500/20 border border-teal-500/30" : "bg-white/5 border border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Lightbulb size={18} className={insightMode ? "text-teal-400" : "text-white/60"} />
                      <span className={insightMode ? "text-white" : "text-white/70"}>Insight Mode</span>
                    </div>
                    <div
                      className={`w-10 h-6 rounded-full transition-all ${
                        insightMode ? "bg-teal-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform ${
                          insightMode ? "translate-x-5" : "translate-x-0.5"
                        } mt-0.5`}
                      />
                    </div>
                  </button>

                  <button
                    onClick={() => setGuidanceMode(!guidanceMode)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      guidanceMode ? "bg-purple-500/20 border border-purple-500/30" : "bg-white/5 border border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle size={18} className={guidanceMode ? "text-purple-400" : "text-white/60"} />
                      <span className={guidanceMode ? "text-white" : "text-white/70"}>Guidance Mode</span>
                    </div>
                    <div
                      className={`w-10 h-6 rounded-full transition-all ${
                        guidanceMode ? "bg-purple-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform ${
                          guidanceMode ? "translate-x-5" : "translate-x-0.5"
                        } mt-0.5`}
                      />
                    </div>
                  </button>
                </div>
              </GlassCard>

              {/* Color Legend */}
              <GlassCard className="p-6">
                <h3 className="text-white mb-4 text-sm">Emotional States</h3>
                <div className="space-y-3">
                  {[
                    { color: "bg-blue-400", label: "Calm" },
                    { color: "bg-teal-400", label: "Engaged" },
                    { color: "bg-yellow-400", label: "Mild Tension" },
                    { color: "bg-orange-400", label: "Stress" },
                    { color: "bg-red-400", label: "Conflict" },
                  ].map((state) => (
                    <div key={state.label} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${state.color}`} />
                      <span className="text-sm text-white/70">{state.label}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Atmosphere Map Visualization */}
            <div className="lg:col-span-3">
              <GlassCard className="p-8">
                <div className="relative h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/50 to-blue-900/30">
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-10 grid-rows-10 h-full">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div key={i} className="border border-white/10" />
                      ))}
                    </div>
                  </div>

                  {/* People with Emotional Halos */}
                  {people.map((person) => (
                    <motion.div
                      key={person.id}
                      className="absolute cursor-pointer"
                      style={{
                        left: `${person.x}%`,
                        top: `${person.y}%`,
                      }}
                      onHoverStart={() => setHoveredPerson(person.id)}
                      onHoverEnd={() => setHoveredPerson(null)}
                      whileHover={{ scale: 1.1 }}
                    >
                      {/* Emotional Halo */}
                      <motion.div
                        className="absolute -inset-12 rounded-full"
                        style={{
                          background: `radial-gradient(circle, ${person.color} 0%, transparent 70%)`,
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3 + person.id * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Person Silhouette */}
                      <div
                        className="relative w-10 h-14 rounded-full"
                        style={{ backgroundColor: person.color }}
                      />

                      {/* Metrics Popup */}
                      {hoveredPerson === person.id && insightMode && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-32 left-1/2 -translate-x-1/2 w-48"
                        >
                          <GlassCard className="p-4">
                            <div className="text-xs text-white mb-2">{person.label}</div>
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between text-xs text-white/60 mb-1">
                                  <span>Stress</span>
                                  <span>{person.metrics.stress}/10</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-amber-400 rounded-full"
                                    style={{ width: `${person.metrics.stress * 10}%` }}
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-xs text-white/60 mb-1">
                                  <span>Engagement</span>
                                  <span>{person.metrics.engagement}/10</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-teal-400 rounded-full"
                                    style={{ width: `${person.metrics.engagement * 10}%` }}
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-xs text-white/60 mb-1">
                                  <span>Energy</span>
                                  <span>{person.metrics.energy}/10</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-blue-400 rounded-full"
                                    style={{ width: `${person.metrics.energy * 10}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </GlassCard>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}

                  {/* Guidance Message */}
                  {guidanceMode && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-6 left-6 right-6"
                    >
                      <GlassCard className="p-4">
                        <div className="flex items-start gap-3">
                          <MessageCircle className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
                          <div>
                            <div className="text-sm text-white mb-1">Guidance Active</div>
                            <div className="text-xs text-white/60">
                              Overall atmosphere is positive. One individual showing elevated stress in bottom-right quadrant.
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  )}
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
