import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { Navigation, MapPin, AlertCircle } from "lucide-react";

export function SocialNavigation() {
  const calmPaths = [
    { id: 1, points: "M 100 300 Q 150 250 200 200 T 300 150" },
    { id: 2, points: "M 100 300 Q 120 280 140 250 T 180 200 Q 220 170 260 150" },
  ];

  const stressZones = [
    { id: 1, x: 60, y: 40, radius: 80 },
    { id: 2, x: 75, y: 65, radius: 60 },
  ];

  const calmZones = [
    { id: 1, x: 20, y: 30, radius: 50 },
    { id: 2, x: 30, y: 70, radius: 45 },
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
            <h1 className="text-4xl font-light text-white mb-3">Social Anxiety Navigation</h1>
            <p className="text-white/60">Find calm paths through crowded spaces</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Navigation Map */}
            <div className="lg:col-span-2">
              <GlassCard className="p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl text-white mb-1">Central Train Station</h2>
                    <p className="text-sm text-white/50">Peak hours • High traffic</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                    <Navigation className="text-blue-400" size={16} />
                    <span className="text-blue-400 text-sm">Calm Route Active</span>
                  </div>
                </div>

                {/* Map Visualization */}
                <div className="relative h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/50 to-blue-900/30 mb-6">
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-12 grid-rows-12 h-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border border-white/10" />
                      ))}
                    </div>
                  </div>

                  {/* Stress Zones */}
                  {stressZones.map((zone) => (
                    <motion.div
                      key={zone.id}
                      className="absolute rounded-full"
                      style={{
                        left: `${zone.x}%`,
                        top: `${zone.y}%`,
                        width: `${zone.radius}px`,
                        height: `${zone.radius}px`,
                        transform: "translate(-50%, -50%)",
                        background: "radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.1) 70%, transparent 100%)",
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 0.8, 0.6],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: zone.id * 0.5,
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <AlertCircle className="text-red-400" size={24} />
                      </div>
                    </motion.div>
                  ))}

                  {/* Calm Zones */}
                  {calmZones.map((zone) => (
                    <motion.div
                      key={zone.id}
                      className="absolute rounded-full"
                      style={{
                        left: `${zone.x}%`,
                        top: `${zone.y}%`,
                        width: `${zone.radius}px`,
                        height: `${zone.radius}px`,
                        transform: "translate(-50%, -50%)",
                        background: "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(96, 165, 250, 0.1) 70%, transparent 100%)",
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 0.7, 0.5],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: zone.id * 0.3,
                      }}
                    />
                  ))}

                  {/* Calm Path Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(96, 165, 250, 0.8)" />
                        <stop offset="100%" stopColor="rgba(45, 212, 191, 0.8)" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M 15% 85% L 20% 75% L 25% 60% L 28% 45% L 30% 30% L 32% 20%"
                      stroke="url(#pathGradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="10 5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </svg>

                  {/* Navigation Arrow */}
                  <motion.div
                    className="absolute"
                    style={{ left: "32%", top: "20%" }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-xl w-16 h-16 -translate-x-1/2 -translate-y-1/2" />
                      <Navigation className="text-blue-400 relative" size={32} />
                    </div>
                  </motion.div>

                  {/* Start Point */}
                  <div className="absolute" style={{ left: "15%", top: "85%" }}>
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-teal-400/40 w-12 h-12 -translate-x-1/2 -translate-y-1/2"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <MapPin className="text-teal-400 relative" size={28} />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="px-2 py-1 rounded bg-slate-900/90 text-xs text-white/80">
                        Your Location
                      </div>
                    </div>
                  </div>

                  {/* Destination Point */}
                  <div className="absolute" style={{ left: "32%", top: "20%" }}>
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-400/40 w-12 h-12 -translate-x-1/2 -translate-y-1/2"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      />
                      <MapPin className="text-blue-400 relative" size={28} />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="px-2 py-1 rounded bg-slate-900/90 text-xs text-white/80">
                        Platform 3
                      </div>
                    </div>
                  </div>

                  {/* People Clusters */}
                  <div className="absolute" style={{ left: "60%", top: "40%" }}>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="w-2 h-3 bg-red-400/60 rounded-full" />
                      ))}
                    </div>
                  </div>
                  <div className="absolute" style={{ left: "75%", top: "65%" }}>
                    <div className="flex gap-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="w-2 h-3 bg-red-400/60 rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map Legend */}
                <div className="flex flex-wrap gap-4 text-xs">
                  {[
                    { color: "bg-blue-400", label: "Calm Zones" },
                    { color: "bg-red-400", label: "High Stress Zones" },
                    { color: "bg-gradient-to-r from-blue-400 to-teal-400", label: "Recommended Path" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-white/60">{item.label}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Route Info Panel */}
            <div className="space-y-6">
              {/* Route Summary */}
              <GlassCard className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Navigation className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Recommended Route</h3>
                    <p className="text-sm text-white/50">Lowest stress path</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-white/70">Distance</span>
                    <span className="text-sm text-white">180m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-white/70">Est. Time</span>
                    <span className="text-sm text-white">3 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-white/70">Crowd Level</span>
                    <span className="text-sm text-teal-400">Low</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-white/70">Stress Score</span>
                    <span className="text-sm text-blue-400">2.1/10</span>
                  </div>
                </div>
              </GlassCard>

              {/* Alternative Route */}
              <GlassCard className="p-6 opacity-60">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-500/20">
                    <Navigation className="text-gray-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Alternative Route</h3>
                    <p className="text-sm text-white/50">Faster but busier</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-white/70">Distance</span>
                    <span className="text-sm text-white">120m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-white/70">Est. Time</span>
                    <span className="text-sm text-white">2 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-white/70">Crowd Level</span>
                    <span className="text-sm text-orange-400">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-white/70">Stress Score</span>
                    <span className="text-sm text-red-400">6.8/10</span>
                  </div>
                </div>
              </GlassCard>

              {/* Tips */}
              <GlassCard className="p-6 bg-blue-500/10 border-blue-500/30">
                <h3 className="text-white mb-3 text-sm flex items-center gap-2">
                  <AlertCircle size={16} />
                  Navigation Tips
                </h3>
                <ul className="space-y-2 text-xs text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Follow the blue path for minimal crowd exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Avoid red zones showing elevated stress levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>Current route keeps you in calm zones (blue areas)</span>
                  </li>
                </ul>
              </GlassCard>

              {/* Live Updates */}
              <GlassCard className="p-6">
                <h3 className="text-white mb-3 text-sm">Live Atmosphere</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-white/60 mb-2">
                      <span>Overall Crowd Density</span>
                      <span>78%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-500 to-red-400 rounded-full" style={{ width: "78%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white/60 mb-2">
                      <span>Average Stress Level</span>
                      <span>5.6/10</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" style={{ width: "56%" }} />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
