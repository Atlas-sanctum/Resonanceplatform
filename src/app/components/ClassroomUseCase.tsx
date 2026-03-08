import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { Lightbulb, Users, AlertCircle } from "lucide-react";

export function ClassroomUseCase() {
  const zones = [
    { id: 1, x: 15, y: 20, type: "calm", label: "Calm Learning Zone", students: 8 },
    { id: 2, x: 60, y: 25, type: "disengaged", label: "Disengaged Cluster", students: 5 },
    { id: 3, x: 75, y: 65, type: "stress", label: "Stress Hotspot", students: 3 },
    { id: 4, x: 30, y: 70, type: "calm", label: "Calm Learning Zone", students: 6 },
  ];

  const students = [
    { id: 1, x: 12, y: 18, emotion: "calm" },
    { id: 2, x: 18, y: 22, emotion: "calm" },
    { id: 3, x: 15, y: 28, emotion: "engaged" },
    { id: 4, x: 60, y: 22, emotion: "disengaged" },
    { id: 5, x: 63, y: 28, emotion: "disengaged" },
    { id: 6, x: 57, y: 32, emotion: "disengaged" },
    { id: 7, x: 75, y: 62, emotion: "stress" },
    { id: 8, x: 78, y: 68, emotion: "stress" },
    { id: 9, x: 30, y: 68, emotion: "calm" },
    { id: 10, x: 33, y: 72, emotion: "engaged" },
    { id: 11, x: 27, y: 75, emotion: "calm" },
    { id: 12, x: 45, y: 50, emotion: "engaged" },
  ];

  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case "calm":
        return "rgba(96, 165, 250, 0.6)";
      case "engaged":
        return "rgba(45, 212, 191, 0.6)";
      case "disengaged":
        return "rgba(156, 163, 175, 0.6)";
      case "stress":
        return "rgba(251, 146, 60, 0.6)";
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
            <h1 className="text-4xl font-light text-white mb-3">Classroom Use Case</h1>
            <p className="text-white/60">Teacher view - Real-time classroom emotional mapping</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Classroom Map */}
            <div className="lg:col-span-2">
              <GlassCard className="p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl text-white mb-1">Period 3 - Mathematics</h2>
                    <p className="text-sm text-white/50">Room 204 • 24 Students Present</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-white">7.2</div>
                    <div className="text-xs text-white/50">Class Engagement</div>
                  </div>
                </div>

                <div className="relative h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/50 to-blue-900/30 mb-6">
                  {/* Classroom Grid */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-8 h-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-white/10" />
                      ))}
                    </div>
                  </div>

                  {/* Teacher Position */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm">
                      Teacher
                    </div>
                  </div>

                  {/* Zone Overlays */}
                  {zones.map((zone) => (
                    <motion.div
                      key={zone.id}
                      className="absolute rounded-2xl border-2 border-dashed"
                      style={{
                        left: `${zone.x}%`,
                        top: `${zone.y}%`,
                        width: "200px",
                        height: "150px",
                        borderColor:
                          zone.type === "calm"
                            ? "rgba(96, 165, 250, 0.5)"
                            : zone.type === "disengaged"
                            ? "rgba(156, 163, 175, 0.5)"
                            : "rgba(251, 146, 60, 0.5)",
                        backgroundColor:
                          zone.type === "calm"
                            ? "rgba(96, 165, 250, 0.1)"
                            : zone.type === "disengaged"
                            ? "rgba(156, 163, 175, 0.1)"
                            : "rgba(251, 146, 60, 0.1)",
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: zone.id * 0.3,
                      }}
                    >
                      <div className="absolute -top-8 left-0">
                        <div className="text-xs text-white/70 bg-slate-900/80 px-2 py-1 rounded">
                          {zone.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Student Dots */}
                  {students.map((student) => (
                    <motion.div
                      key={student.id}
                      className="absolute w-6 h-8 rounded-full cursor-pointer"
                      style={{
                        left: `${student.x}%`,
                        top: `${student.y}%`,
                        backgroundColor: getEmotionColor(student.emotion),
                      }}
                      whileHover={{ scale: 1.3 }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2 + student.id * 0.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 text-xs">
                  {[
                    { color: "bg-blue-400", label: "Calm & Focused" },
                    { color: "bg-teal-400", label: "Engaged" },
                    { color: "bg-gray-400", label: "Disengaged" },
                    { color: "bg-orange-400", label: "Stress/Anxiety" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-white/60">{item.label}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Insights Panel */}
            <div className="space-y-6">
              <GlassCard className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Lightbulb className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Suggested Action</h3>
                    <p className="text-sm text-white/50">AI-powered recommendation</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-sm text-white/80 leading-relaxed">
                    "Slow speaking tempo to stabilize room energy. Consider a 2-minute breathing exercise to re-engage disengaged cluster."
                  </p>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/20">
                    <AlertCircle className="text-orange-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Attention Needed</h3>
                    <p className="text-sm text-white/50">High-stress students</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <div className="text-sm text-white/80 mb-1">Back-right corner</div>
                    <p className="text-xs text-white/50">3 students showing elevated stress levels</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-teal-500/20">
                    <Users className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Class Metrics</h3>
                    <p className="text-sm text-white/50">Current session overview</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-white/70 mb-2">
                      <span>Engagement Level</span>
                      <span>72%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full" style={{ width: "72%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-white/70 mb-2">
                      <span>Average Stress</span>
                      <span>3.4/10</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" style={{ width: "34%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-white/70 mb-2">
                      <span>Focus Quality</span>
                      <span>68%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{ width: "68%" }} />
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
