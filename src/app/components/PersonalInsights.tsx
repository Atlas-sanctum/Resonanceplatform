import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import {
  User, Heart, TrendingUp, Award, Target, Calendar,
  Clock, Zap, Users, MessageCircle, Brain, Sparkles,
  ArrowUp, ArrowDown, Minus, CheckCircle, AlertCircle
} from "lucide-react";
import { useState } from "react";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";

export function PersonalInsights() {
  const [timeRange, setTimeRange] = useState<"week" | "month" | "year">("month");

  // Personal emotional journey data
  const journeyData = [
    { date: "Week 1", calm: 7.2, stress: 3.8, joy: 6.5, focus: 7.0 },
    { date: "Week 2", calm: 7.8, stress: 3.2, joy: 7.1, focus: 7.5 },
    { date: "Week 3", calm: 6.9, stress: 4.5, joy: 6.2, focus: 6.8 },
    { date: "Week 4", calm: 8.1, stress: 2.9, joy: 7.8, focus: 8.2 }
  ];

  // Peak performance windows
  const performanceWindows = [
    { hour: "6am", energy: 6.5, focus: 5.8, creativity: 4.2 },
    { hour: "9am", energy: 8.5, focus: 9.2, creativity: 7.8 },
    { hour: "12pm", energy: 7.2, focus: 6.8, creativity: 6.5 },
    { hour: "3pm", energy: 5.8, focus: 5.2, creativity: 7.5 },
    { hour: "6pm", energy: 6.8, focus: 4.5, creativity: 8.2 },
    { hour: "9pm", energy: 4.2, focus: 3.8, creativity: 6.5 }
  ];

  // Interaction patterns
  const interactionPatterns = [
    { context: "1-on-1s", harmony: 8.8, growth: "+12%" },
    { context: "Small Groups", harmony: 7.9, growth: "+8%" },
    { context: "Large Meetings", harmony: 6.2, growth: "-3%" },
    { context: "Presentations", harmony: 7.1, growth: "+15%" },
    { context: "Brainstorms", harmony: 8.5, growth: "+10%" }
  ];

  // Growth metrics
  const growthMetrics = [
    {
      metric: "Emotional Regulation",
      current: 8.4,
      previous: 7.2,
      change: "+16%",
      trend: "up",
      description: "Improved stress response time"
    },
    {
      metric: "Social Harmony",
      current: 7.8,
      previous: 7.9,
      change: "-1%",
      trend: "down",
      description: "Slight dip in group cohesion"
    },
    {
      metric: "Focus Resilience",
      current: 8.1,
      previous: 7.6,
      change: "+7%",
      trend: "up",
      description: "Better sustained attention"
    },
    {
      metric: "Recovery Speed",
      current: 7.5,
      previous: 7.5,
      change: "0%",
      trend: "stable",
      description: "Consistent bounce-back rate"
    }
  ];

  // Personalized recommendations
  const recommendations = [
    {
      icon: Clock,
      title: "Optimize Your Peak Hours",
      insight: "Your focus peaks at 9am (9.2/10). Schedule complex work during this window.",
      action: "Block 9-11am for deep work"
    },
    {
      icon: Users,
      title: "Leverage Small Group Dynamics",
      insight: "You thrive in 1-on-1 conversations (8.8 harmony) but struggle in large meetings (6.2).",
      action: "Request smaller breakout sessions"
    },
    {
      icon: Heart,
      title: "Evening Creativity Surge",
      insight: "Your creative energy spikes at 6pm (8.2/10). Use this for ideation.",
      action: "Schedule creative work after 5pm"
    },
    {
      icon: Target,
      title: "Recovery Pattern Alert",
      insight: "You need 18 minutes average to recover from stressful interactions.",
      action: "Add buffer time between meetings"
    }
  ];

  // Achievements
  const achievements = [
    { 
      title: "Stress Master", 
      description: "7 consecutive days below 3.0 stress threshold",
      icon: Award,
      unlocked: true,
      date: "March 3, 2026"
    },
    {
      title: "Harmony Builder",
      description: "Maintained 8.0+ harmony score for 2 weeks",
      icon: Users,
      unlocked: true,
      date: "February 28, 2026"
    },
    {
      title: "Focus Champion",
      description: "Peak focus session over 3 hours",
      icon: Target,
      unlocked: true,
      date: "March 1, 2026"
    },
    {
      title: "Empathy Leader",
      description: "Helped 5 team members navigate difficult moments",
      icon: Heart,
      unlocked: false,
      progress: 4
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 flex items-center justify-center">
              <User className="text-purple-400" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-extralight text-white mb-2">
                Personal Insights
              </h1>
              <p className="text-xl text-white/60">
                Your emotional patterns, growth, and personalized guidance
              </p>
            </div>
          </div>

          {/* Time Range Selector */}
          <div className="flex gap-2">
            {(["week", "month", "year"] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  timeRange === range
                    ? "bg-white/10 text-white border border-white/20"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Avg. Calm Level", value: "7.5", change: "+8%", icon: Heart, color: "blue" },
            { label: "Peak Focus Time", value: "9am", change: "Consistent", icon: Zap, color: "teal" },
            { label: "Social Harmony", value: "7.8", change: "-1%", icon: Users, color: "purple" },
            { label: "Growth Rate", value: "+12%", change: "This month", icon: TrendingUp, color: "green" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <GlassCard className="p-6" hover>
                  <Icon className={`text-${stat.color}-400 mb-3`} size={24} />
                  <div className="text-3xl font-light text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60 mb-2">{stat.label}</div>
                  <div className="text-xs text-white/50">{stat.change}</div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Emotional Journey Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <GlassCard className="p-8">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
              <TrendingUp className="text-blue-400" size={24} />
              Your Emotional Journey
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={journeyData}>
                <defs>
                  <linearGradient id="calmGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="joyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="focusGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#a78bfa" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Legend />
                <Area type="monotone" dataKey="calm" stroke="#60a5fa" fill="url(#calmGradient)" name="Calm" />
                <Area type="monotone" dataKey="joy" stroke="#2dd4bf" fill="url(#joyGradient)" name="Joy" />
                <Area type="monotone" dataKey="focus" stroke="#a78bfa" fill="url(#focusGradient)" name="Focus" />
              </AreaChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>

        {/* Peak Performance & Growth Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <Clock className="text-teal-400" size={24} />
                Peak Performance Windows
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={performanceWindows}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="hour" stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                  <YAxis stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="energy" fill="#60a5fa" name="Energy" />
                  <Bar dataKey="focus" fill="#2dd4bf" name="Focus" />
                  <Bar dataKey="creativity" fill="#a78bfa" name="Creativity" />
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <Sparkles className="text-purple-400" size={24} />
                Growth Metrics
              </h2>
              <div className="space-y-4">
                {growthMetrics.map((metric, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-medium">{metric.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-light text-white">{metric.current}</span>
                        <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-lg ${
                          metric.trend === "up" ? "bg-green-500/20 text-green-400" :
                          metric.trend === "down" ? "bg-red-500/20 text-red-400" :
                          "bg-gray-500/20 text-gray-400"
                        }`}>
                          {metric.trend === "up" ? <ArrowUp size={12} /> :
                           metric.trend === "down" ? <ArrowDown size={12} /> :
                           <Minus size={12} />}
                          {metric.change}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-white/60">{metric.description}</div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${(metric.current / 10) * 100}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Interaction Patterns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <GlassCard className="p-8">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
              <MessageCircle className="text-blue-400" size={24} />
              Interaction Patterns
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {interactionPatterns.map((pattern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 border border-white/10"
                >
                  <div className="text-sm text-white/70 mb-2">{pattern.context}</div>
                  <div className="text-3xl font-light text-white mb-1">{pattern.harmony}</div>
                  <div className="text-xs text-teal-400">{pattern.growth}</div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Personalized Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-8"
        >
          <GlassCard className="p-8">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
              <Brain className="text-purple-400" size={24} />
              Personalized Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((rec, index) => {
                const Icon = rec.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30"
                  >
                    <Icon className="text-purple-400 mb-3" size={20} />
                    <h3 className="text-white font-medium mb-2">{rec.title}</h3>
                    <p className="text-sm text-white/70 mb-4">{rec.insight}</p>
                    <button className="text-xs px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-2">
                      <Target size={12} />
                      {rec.action}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <GlassCard className="p-8">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
              <Award className="text-amber-400" size={24} />
              Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                    className={`p-4 rounded-xl border ${
                      achievement.unlocked
                        ? "bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/40"
                        : "bg-white/5 border-white/10 opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Icon className={achievement.unlocked ? "text-amber-400" : "text-white/40"} size={24} />
                      {achievement.unlocked ? (
                        <CheckCircle className="text-green-400" size={16} />
                      ) : (
                        <div className="text-xs text-white/60">{achievement.progress}/5</div>
                      )}
                    </div>
                    <h3 className="text-white text-sm font-medium mb-1">{achievement.title}</h3>
                    <p className="text-xs text-white/60 mb-2">{achievement.description}</p>
                    {achievement.unlocked && achievement.date && (
                      <div className="text-xs text-white/50 flex items-center gap-1">
                        <Calendar size={10} />
                        {achievement.date}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
