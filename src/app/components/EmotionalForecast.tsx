import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import { 
  CloudRain, Sun, Cloud, Wind, Zap, TrendingUp, TrendingDown,
  Calendar, Clock, AlertTriangle, CheckCircle, Info, Brain,
  Activity, Users, Target, Sparkles
} from "lucide-react";
import { useState } from "react";
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts";

export function EmotionalForecast() {
  const [selectedPeriod, setSelectedPeriod] = useState<"today" | "week" | "month">("week");
  const [showConfidence, setShowConfidence] = useState(true);

  // Forecast data for the next 7 days
  const forecastData = [
    {
      time: "Mon 9am",
      harmony: 7.8,
      stress: 3.2,
      engagement: 6.5,
      confidence: 92,
      event: "Team Standup"
    },
    {
      time: "Mon 2pm",
      harmony: 6.2,
      stress: 5.1,
      engagement: 7.8,
      confidence: 88,
      event: "Design Review"
    },
    {
      time: "Tue 10am",
      harmony: 8.4,
      stress: 2.8,
      engagement: 8.2,
      confidence: 94,
      event: "Workshop"
    },
    {
      time: "Wed 11am",
      harmony: 5.8,
      stress: 6.4,
      engagement: 6.1,
      confidence: 78,
      event: "Budget Meeting"
    },
    {
      time: "Thu 9am",
      harmony: 7.5,
      stress: 3.5,
      engagement: 7.2,
      confidence: 91,
      event: "Brainstorm"
    },
    {
      time: "Fri 3pm",
      harmony: 8.9,
      stress: 2.1,
      engagement: 6.8,
      confidence: 95,
      event: "Team Social"
    },
    {
      time: "Sat",
      harmony: 9.2,
      stress: 1.5,
      engagement: 5.5,
      confidence: 89,
      event: "Weekend"
    }
  ];

  // Historical pattern data
  const patternData = [
    { category: "Morning Energy", current: 8.2, average: 7.5, optimal: 9.0 },
    { category: "Afternoon Focus", current: 6.8, average: 7.2, optimal: 8.5 },
    { category: "Meeting Harmony", current: 7.4, average: 6.9, optimal: 8.0 },
    { category: "Stress Recovery", current: 8.1, average: 7.8, optimal: 9.0 },
    { category: "Team Cohesion", current: 7.9, average: 7.6, optimal: 8.5 }
  ];

  // Weather-style emotional forecasts
  const emotionalWeather = [
    {
      day: "Monday",
      icon: Cloud,
      condition: "Partly Focused",
      description: "Morning clarity with afternoon complexity",
      harmony: 7.0,
      color: "blue"
    },
    {
      day: "Tuesday",
      icon: Sun,
      condition: "Clear & Engaged",
      description: "High energy collaborative atmosphere",
      harmony: 8.5,
      color: "teal"
    },
    {
      day: "Wednesday",
      icon: CloudRain,
      condition: "Tension Expected",
      description: "Challenging conversations likely",
      harmony: 6.0,
      color: "amber"
    },
    {
      day: "Thursday",
      icon: Wind,
      condition: "Variable Energy",
      description: "Mixed emotional currents",
      harmony: 7.2,
      color: "blue"
    },
    {
      day: "Friday",
      icon: Sun,
      condition: "Bright & Calm",
      description: "Optimistic collaborative mood",
      harmony: 8.8,
      color: "green"
    }
  ];

  // Predictive insights
  const insights = [
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Tension Spike Predicted",
      time: "Wednesday 11am",
      description: "Budget meeting shows 78% probability of elevated stress. Consider pre-meeting alignment.",
      action: "Schedule 15-min pre-brief"
    },
    {
      type: "success",
      icon: CheckCircle,
      title: "Optimal Collaboration Window",
      time: "Tuesday 10am",
      description: "Workshop timing aligns with peak team harmony (94% confidence).",
      action: "Maximize this window"
    },
    {
      type: "info",
      icon: Info,
      title: "Energy Recovery Needed",
      time: "Thursday afternoon",
      description: "Post-meeting fatigue pattern detected. Low-intensity activities recommended.",
      action: "Schedule buffer time"
    }
  ];

  const getWeatherColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/40",
      teal: "from-teal-500/20 to-teal-600/20 border-teal-500/40",
      amber: "from-amber-500/20 to-amber-600/20 border-amber-500/40",
      green: "from-green-500/20 to-green-600/20 border-green-500/40"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 mb-6">
            <CloudRain className="text-blue-400" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight text-white mb-4">
            Emotional Weather Forecast
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Predictive analytics for emotional atmospheres based on historical patterns, calendar events, and behavioral signals
          </p>
        </motion.div>

        {/* Period Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-8"
        >
          {(["today", "week", "month"] as const).map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedPeriod === period
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* 5-Day Weather Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <GlassCard className="p-8">
            <h2 className="text-2xl font-light text-white mb-6">5-Day Emotional Climate</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {emotionalWeather.map((day, index) => {
                const Icon = day.icon;
                return (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${getWeatherColor(day.color)} border backdrop-blur-xl`}
                  >
                    <div className="text-center mb-3">
                      <div className="text-sm text-white/70 mb-2">{day.day}</div>
                      <Icon className={`text-${day.color}-400 mx-auto mb-2`} size={32} />
                      <div className="text-lg font-light text-white mb-1">{day.condition}</div>
                      <div className="text-xs text-white/60">{day.description}</div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">Harmony</span>
                        <span className="text-sm text-white font-medium">{day.harmony}/10</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* Detailed Forecast Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GlassCard className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-light text-white">Predicted Emotional Dynamics</h2>
                <button
                  onClick={() => setShowConfidence(!showConfidence)}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 transition-colors"
                >
                  {showConfidence ? "Hide" : "Show"} Confidence
                </button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={forecastData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="time" 
                    stroke="rgba(255,255,255,0.5)"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.9)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="harmony" 
                    stroke="#2dd4bf" 
                    strokeWidth={2}
                    dot={{ fill: '#2dd4bf', r: 4 }}
                    name="Harmony"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="stress" 
                    stroke="#f59e0b" 
                    strokeWidth={2}
                    dot={{ fill: '#f59e0b', r: 4 }}
                    name="Stress"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="engagement" 
                    stroke="#60a5fa" 
                    strokeWidth={2}
                    dot={{ fill: '#60a5fa', r: 4 }}
                    name="Engagement"
                  />
                </LineChart>
              </ResponsiveContainer>
              {showConfidence && (
                <div className="mt-4 text-xs text-white/60 flex items-center gap-2">
                  <Activity size={14} />
                  <span>Average prediction confidence: 89.5%</span>
                </div>
              )}
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-light text-white mb-6">Pattern Recognition Analysis</h2>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={patternData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis 
                    dataKey="category" 
                    tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 10]}
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }}
                  />
                  <Radar 
                    name="Current" 
                    dataKey="current" 
                    stroke="#60a5fa" 
                    fill="#60a5fa" 
                    fillOpacity={0.3}
                  />
                  <Radar 
                    name="Average" 
                    dataKey="average" 
                    stroke="#94a3b8" 
                    fill="#94a3b8" 
                    fillOpacity={0.2}
                  />
                  <Radar 
                    name="Optimal" 
                    dataKey="optimal" 
                    stroke="#2dd4bf" 
                    fill="#2dd4bf" 
                    fillOpacity={0.1}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>
        </div>

        {/* Predictive Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="text-purple-400" size={24} />
              <h2 className="text-2xl font-light text-white">AI-Generated Insights</h2>
            </div>
            <div className="space-y-4">
              {insights.map((insight, index) => {
                const Icon = insight.icon;
                const borderColor = 
                  insight.type === "warning" ? "border-amber-500/30" :
                  insight.type === "success" ? "border-green-500/30" :
                  "border-blue-500/30";
                const bgColor = 
                  insight.type === "warning" ? "bg-amber-500/10" :
                  insight.type === "success" ? "bg-green-500/10" :
                  "bg-blue-500/10";
                const iconColor = 
                  insight.type === "warning" ? "text-amber-400" :
                  insight.type === "success" ? "text-green-400" :
                  "text-blue-400";

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className={`p-4 rounded-xl ${bgColor} border ${borderColor} backdrop-blur-xl`}
                  >
                    <div className="flex items-start gap-4">
                      <Icon className={iconColor} size={20} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-medium">{insight.title}</h3>
                          <span className="text-xs text-white/60 flex items-center gap-1">
                            <Clock size={12} />
                            {insight.time}
                          </span>
                        </div>
                        <p className="text-sm text-white/70 mb-3">{insight.description}</p>
                        <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-2">
                          <Target size={12} />
                          {insight.action}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* Confidence Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <GlassCard className="p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-purple-400" size={24} />
              <h2 className="text-2xl font-light text-white">Forecast Methodology</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-sm text-white/60">Data Sources</div>
                <ul className="space-y-1 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Historical atmosphere patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    Calendar event analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Behavioral trend signals
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-white/60">ML Models</div>
                <ul className="space-y-1 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    LSTM time-series prediction
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Transformer context models
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    Ensemble averaging
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-white/60">Accuracy Metrics</div>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white/70">7-day accuracy</span>
                      <span className="text-xs text-white">89%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-green-400 w-[89%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white/70">Event correlation</span>
                      <span className="text-xs text-white">94%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-teal-400 w-[94%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
