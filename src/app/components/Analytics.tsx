import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { TrendingDown, TrendingUp, Activity, Users } from "lucide-react";

export function Analytics() {
  const stressTrendData = [
    { time: "9:00", value: 2.1 },
    { time: "10:00", value: 2.8 },
    { time: "11:00", value: 4.2 },
    { time: "12:00", value: 3.1 },
    { time: "13:00", value: 2.5 },
    { time: "14:00", value: 3.9 },
    { time: "15:00", value: 5.1 },
    { time: "16:00", value: 3.4 },
  ];

  const conversationRhythm = [
    { time: "9:00", intensity: 45 },
    { time: "10:00", intensity: 62 },
    { time: "11:00", intensity: 78 },
    { time: "12:00", intensity: 35 },
    { time: "13:00", intensity: 48 },
    { time: "14:00", intensity: 85 },
    { time: "15:00", intensity: 71 },
    { time: "16:00", intensity: 53 },
  ];

  const socialCohesion = [
    { metric: "Trust", value: 8.2, fullMark: 10 },
    { metric: "Empathy", value: 7.5, fullMark: 10 },
    { metric: "Collaboration", value: 8.8, fullMark: 10 },
    { metric: "Communication", value: 7.9, fullMark: 10 },
    { metric: "Respect", value: 8.6, fullMark: 10 },
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
            <h1 className="text-4xl font-light text-white mb-3">Emotional Field Analytics</h1>
            <p className="text-white/60">Time-based emotional trends and patterns</p>
          </div>

          {/* Top Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-amber-500/20">
                  <Activity className="text-amber-400" size={24} />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm">
                  <TrendingDown size={16} />
                  <span>12%</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-white mb-1">2.8</h3>
              <p className="text-sm text-white/60">Emotional Volatility</p>
              <p className="text-xs text-white/40 mt-2">Avg over last 8 hours</p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-teal-500/20">
                  <Users className="text-teal-400" size={24} />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm">
                  <TrendingUp size={16} />
                  <span>8%</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-white mb-1">8.1</h3>
              <p className="text-sm text-white/60">Group Harmony Score</p>
              <p className="text-xs text-white/40 mt-2">Current status</p>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-500/20">
                  <Activity className="text-blue-400" size={24} />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm">
                  <TrendingUp size={16} />
                  <span>15%</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-white mb-1">7.4</h3>
              <p className="text-sm text-white/60">Atmosphere Stability</p>
              <p className="text-xs text-white/40 mt-2">Consistency index</p>
            </GlassCard>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Stress Trend */}
            <GlassCard className="p-6">
              <h3 className="text-lg text-white mb-6">Stress Trend Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={stressTrendData}>
                  <defs>
                    <linearGradient id="stressGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.9)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    fill="url(#stressGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </GlassCard>

            {/* Conversation Rhythm */}
            <GlassCard className="p-6">
              <h3 className="text-lg text-white mb-6">Conversation Rhythm Analysis</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={conversationRhythm}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(15, 23, 42, 0.9)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="intensity"
                    stroke="#14b8a6"
                    strokeWidth={3}
                    dot={{ fill: "#14b8a6", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </GlassCard>
          </div>

          {/* Social Cohesion Index */}
          <GlassCard className="p-6">
            <h3 className="text-lg text-white mb-6">Social Cohesion Index</h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={socialCohesion}>
                  <PolarGrid stroke="rgba(255,255,255,0.2)" />
                  <PolarAngleAxis dataKey="metric" stroke="rgba(255,255,255,0.7)" />
                  <PolarRadiusAxis angle={90} domain={[0, 10]} stroke="rgba(255,255,255,0.5)" />
                  <Radar
                    name="Cohesion"
                    dataKey="value"
                    stroke="#60a5fa"
                    fill="#60a5fa"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          {/* Insights Panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <GlassCard className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Activity className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-2">Peak Stress Period</h4>
                  <p className="text-sm text-white/60 mb-2">Detected at 15:00 with level 5.1/10</p>
                  <p className="text-xs text-white/40">Recommend scheduled break or environment adjustment</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-500/20">
                  <Users className="text-teal-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-2">Optimal Collaboration Window</h4>
                  <p className="text-sm text-white/60 mb-2">14:00-15:00 shows highest group harmony</p>
                  <p className="text-xs text-white/40">Best time for team decisions and creative work</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
