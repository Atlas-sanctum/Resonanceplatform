import { GlassCard } from "./GlassCard";
import { motion, AnimatePresence } from "motion/react";
import {
  Users, TrendingUp, MessageCircle, Zap, Heart, Target,
  GitBranch, Award, AlertCircle, CheckCircle, ArrowRight,
  Clock, Activity, BarChart3, Network, Sparkles
} from "lucide-react";
import { useState } from "react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, ScatterChart, Scatter, ZAxis
} from "recharts";

export function TeamDynamics() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"network" | "timeline" | "matrix">("network");

  // Team members with emotional profiles
  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Team Lead",
      harmonyScore: 8.5,
      influence: 9.2,
      energy: 7.8,
      color: "#60a5fa",
      position: { x: 50, y: 30 }
    },
    {
      id: 2,
      name: "Sarah Kim",
      role: "Designer",
      harmonyScore: 9.1,
      influence: 7.5,
      energy: 8.9,
      color: "#2dd4bf",
      position: { x: 30, y: 60 }
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Engineer",
      harmonyScore: 7.2,
      influence: 6.8,
      energy: 6.5,
      color: "#a78bfa",
      position: { x: 70, y: 60 }
    },
    {
      id: 4,
      name: "Nina Patel",
      role: "Product Manager",
      harmonyScore: 8.8,
      influence: 8.9,
      energy: 8.2,
      color: "#f59e0b",
      position: { x: 50, y: 80 }
    }
  ];

  // Interaction strength matrix
  const interactions = [
    { from: 1, to: 2, strength: 8.5, quality: "high", exchanges: 127 },
    { from: 1, to: 3, strength: 6.2, quality: "medium", exchanges: 84 },
    { from: 1, to: 4, strength: 9.1, quality: "high", exchanges: 156 },
    { from: 2, to: 3, strength: 7.8, quality: "high", exchanges: 98 },
    { from: 2, to: 4, strength: 8.2, quality: "high", exchanges: 112 },
    { from: 3, to: 4, strength: 5.9, quality: "medium", exchanges: 71 }
  ];

  // Team dynamics over time
  const timelineData = [
    { week: "W1", cohesion: 6.8, productivity: 7.2, morale: 7.5 },
    { week: "W2", cohesion: 7.5, productivity: 7.8, morale: 8.1 },
    { week: "W3", cohesion: 7.2, productivity: 7.5, morale: 7.8 },
    { week: "W4", cohesion: 8.4, productivity: 8.9, morale: 8.7 }
  ];

  // Team competencies radar
  const competencyData = [
    { competency: "Communication", score: 8.5 },
    { competency: "Innovation", score: 7.8 },
    { competency: "Execution", score: 8.2 },
    { competency: "Collaboration", score: 9.1 },
    { competency: "Resilience", score: 7.5 },
    { competency: "Leadership", score: 8.0 }
  ];

  // Emotional patterns
  const emotionalPatterns = [
    {
      pattern: "Morning Synergy",
      description: "Peak alignment occurs between 9-11am when all members show high engagement",
      icon: Zap,
      strength: 9.2,
      color: "green"
    },
    {
      pattern: "Feedback Sensitivity",
      description: "Team responds positively to constructive criticism, improving by 12% post-feedback",
      icon: TrendingUp,
      strength: 8.5,
      color: "blue"
    },
    {
      pattern: "Conflict Recovery",
      description: "Quick emotional recovery (avg 14 minutes) after disagreements",
      icon: Heart,
      strength: 8.8,
      color: "teal"
    },
    {
      pattern: "Innovation Clusters",
      description: "Sarah-Nina pairing generates 40% more creative solutions",
      icon: Sparkles,
      strength: 7.9,
      color: "purple"
    }
  ];

  // Team health indicators
  const healthMetrics = [
    { metric: "Psychological Safety", score: 8.7, trend: "+5%", status: "excellent" },
    { metric: "Communication Quality", score: 8.2, trend: "+3%", status: "excellent" },
    { metric: "Shared Understanding", score: 7.5, trend: "+8%", status: "good" },
    { metric: "Conflict Resolution", score: 8.9, trend: "+2%", status: "excellent" },
    { metric: "Trust Level", score: 9.1, trend: "0%", status: "excellent" },
    { metric: "Energy Balance", score: 7.3, trend: "-2%", status: "good" }
  ];

  const getStatusColor = (status: string) => {
    if (status === "excellent") return "text-green-400";
    if (status === "good") return "text-blue-400";
    return "text-amber-400";
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 border border-white/20 mb-6">
            <Users className="text-blue-400" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight text-white mb-4">
            Team Dynamics Analyzer
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Deep insights into group interaction patterns, emotional flows, and collaborative health
          </p>
        </motion.div>

        {/* View Mode Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-8"
        >
          {(["network", "timeline", "matrix"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-6 py-3 rounded-xl transition-all capitalize ${
                viewMode === mode
                  ? "bg-gradient-to-br from-blue-500/30 to-teal-500/30 text-white border-2 border-blue-500/50"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              {mode}
            </button>
          ))}
        </motion.div>

        {/* Interactive Network Visualization */}
        <AnimatePresence mode="wait">
          {viewMode === "network" && (
            <motion.div
              key="network"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <GlassCard className="p-8">
                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                  <Network className="text-blue-400" size={24} />
                  Interaction Network Map
                </h2>
                <div className="relative h-96 bg-gradient-to-br from-slate-900/30 to-blue-900/20 rounded-xl overflow-hidden">
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {interactions.map((interaction, index) => {
                      const from = teamMembers.find(m => m.id === interaction.from);
                      const to = teamMembers.find(m => m.id === interaction.to);
                      if (!from || !to) return null;

                      return (
                        <motion.line
                          key={index}
                          x1={`${from.position.x}%`}
                          y1={`${from.position.y}%`}
                          x2={`${to.position.x}%`}
                          y2={`${to.position.y}%`}
                          stroke={
                            interaction.quality === "high" ? "rgba(45, 212, 191, 0.4)" :
                            "rgba(96, 165, 250, 0.3)"
                          }
                          strokeWidth={interaction.strength / 2}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        />
                      );
                    })}
                  </svg>

                  {/* Team member nodes */}
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="absolute cursor-pointer"
                      style={{
                        left: `${member.position.x}%`,
                        top: `${member.position.y}%`,
                        transform: "translate(-50%, -50%)"
                      }}
                      onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                    >
                      <div
                        className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all ${
                          selectedMember === member.id
                            ? "border-white scale-110"
                            : "border-white/40 hover:border-white/70"
                        }`}
                        style={{
                          backgroundColor: member.color,
                          boxShadow: `0 0 30px ${member.color}50`
                        }}
                      >
                        <div className="text-white text-2xl font-light">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </div>
                      </div>
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <div className="text-white text-sm font-medium">{member.name}</div>
                        <div className="text-white/60 text-xs text-center">{member.role}</div>
                      </div>

                      {/* Member stats tooltip */}
                      {selectedMember === member.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full mt-16 left-1/2 -translate-x-1/2 w-48 p-4 rounded-xl bg-slate-900/95 border border-white/20 backdrop-blur-xl z-10"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-white/60">Harmony</span>
                              <span className="text-sm text-white">{member.harmonyScore}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-white/60">Influence</span>
                              <span className="text-sm text-white">{member.influence}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-white/60">Energy</span>
                              <span className="text-sm text-white">{member.energy}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          )}

          {viewMode === "timeline" && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <GlassCard className="p-8">
                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                  <Clock className="text-teal-400" size={24} />
                  Team Evolution Timeline
                </h2>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={timelineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="week" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" domain={[0, 10]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="cohesion" stroke="#60a5fa" strokeWidth={3} name="Team Cohesion" />
                    <Line type="monotone" dataKey="productivity" stroke="#2dd4bf" strokeWidth={3} name="Productivity" />
                    <Line type="monotone" dataKey="morale" stroke="#a78bfa" strokeWidth={3} name="Morale" />
                  </LineChart>
                </ResponsiveContainer>
              </GlassCard>
            </motion.div>
          )}

          {viewMode === "matrix" && (
            <motion.div
              key="matrix"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <GlassCard className="p-8">
                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                  <BarChart3 className="text-purple-400" size={24} />
                  Interaction Quality Matrix
                </h2>
                <div className="grid grid-cols-5 gap-2">
                  {/* Header row */}
                  <div></div>
                  {teamMembers.map(member => (
                    <div key={member.id} className="text-xs text-white/60 text-center p-2">
                      {member.name.split(" ")[0]}
                    </div>
                  ))}

                  {/* Matrix rows */}
                  {teamMembers.map(fromMember => (
                    <>
                      <div key={`label-${fromMember.id}`} className="text-xs text-white/60 flex items-center p-2">
                        {fromMember.name.split(" ")[0]}
                      </div>
                      {teamMembers.map(toMember => {
                        if (fromMember.id === toMember.id) {
                          return <div key={`self-${fromMember.id}-${toMember.id}`} className="bg-white/5 rounded-lg" />;
                        }
                        const interaction = interactions.find(
                          i => (i.from === fromMember.id && i.to === toMember.id) ||
                               (i.from === toMember.id && i.to === fromMember.id)
                        );
                        const intensity = interaction ? (interaction.strength / 10) : 0;
                        return (
                          <motion.div
                            key={`${fromMember.id}-${toMember.id}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-lg p-2 text-center text-xs text-white cursor-pointer hover:scale-105 transition-transform"
                            style={{
                              backgroundColor: interaction?.quality === "high"
                                ? `rgba(45, 212, 191, ${intensity})`
                                : `rgba(96, 165, 250, ${intensity * 0.7})`
                            }}
                            title={interaction ? `${interaction.strength}/10 - ${interaction.exchanges} exchanges` : ""}
                          >
                            {interaction?.strength.toFixed(1) || "-"}
                          </motion.div>
                        );
                      })}
                    </>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Team Competencies & Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <Award className="text-amber-400" size={24} />
                Team Competencies
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={competencyData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="competency" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fill: 'rgba(255,255,255,0.5)' }} />
                  <Radar name="Team Score" dataKey="score" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <Activity className="text-green-400" size={24} />
                Team Health Indicators
              </h2>
              <div className="space-y-4">
                {healthMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white">{metric.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${getStatusColor(metric.status)}`}>
                          {metric.score}/10
                        </span>
                        <span className="text-xs text-white/60">{metric.trend}</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className={`h-full ${
                          metric.status === "excellent" ? "bg-green-400" :
                          metric.status === "good" ? "bg-blue-400" :
                          "bg-amber-400"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(metric.score / 10) * 100}%` }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Emotional Patterns Discovery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <GlassCard className="p-8">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
              <Sparkles className="text-purple-400" size={24} />
              Discovered Emotional Patterns
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emotionalPatterns.map((pattern, index) => {
                const Icon = pattern.icon;
                const colorClass = 
                  pattern.color === "green" ? "from-green-500/20 to-green-600/20 border-green-500/40" :
                  pattern.color === "blue" ? "from-blue-500/20 to-blue-600/20 border-blue-500/40" :
                  pattern.color === "teal" ? "from-teal-500/20 to-teal-600/20 border-teal-500/40" :
                  "from-purple-500/20 to-purple-600/20 border-purple-500/40";

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className={`p-6 rounded-xl bg-gradient-to-br border backdrop-blur-xl ${colorClass}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <Icon className={`text-${pattern.color}-400 flex-shrink-0`} size={24} />
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-2">{pattern.pattern}</h3>
                        <p className="text-sm text-white/70">{pattern.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/60">Pattern Strength</span>
                      <span className="text-sm text-white font-medium">{pattern.strength}/10</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* Action Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <GlassCard className="p-8 bg-gradient-to-br from-blue-500/10 to-teal-500/10 border-blue-500/30">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
              <Target className="text-blue-400" size={24} />
              AI-Generated Recommendations
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Leverage Morning Energy",
                  description: "Schedule complex collaborative tasks between 9-11am when team shows peak alignment",
                  priority: "high"
                },
                {
                  title: "Support Marcus's Engagement",
                  description: "Marcus shows lower energy (6.5). Consider 1-on-1 check-in or workload adjustment",
                  priority: "medium"
                },
                {
                  title: "Maximize Sarah-Nina Pairing",
                  description: "This combination generates exceptional creative output. Assign innovation projects together",
                  priority: "high"
                }
              ].map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {rec.priority === "high" ? (
                          <AlertCircle className="text-amber-400" size={16} />
                        ) : (
                          <CheckCircle className="text-blue-400" size={16} />
                        )}
                        <h3 className="text-white font-medium">{rec.title}</h3>
                      </div>
                      <p className="text-sm text-white/70">{rec.description}</p>
                    </div>
                    <ArrowRight className="text-white/40 group-hover:text-white/70 transition-colors ml-4" size={20} />
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
