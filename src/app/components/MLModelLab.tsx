import { GlassCard } from "./GlassCard";
import { motion } from "motion/react";
import {
  Brain, Cpu, Layers, Zap, TrendingUp, Activity, GitBranch,
  Settings, Play, Pause, RotateCcw, Download, Upload,
  CheckCircle, AlertCircle, Info, Database, Network
} from "lucide-react";
import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend, Cell
} from "recharts";

export function MLModelLab() {
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [selectedModel, setSelectedModel] = useState<"lstm" | "transformer" | "ensemble">("transformer");

  // Training progress over epochs
  const trainingData = [
    { epoch: 1, accuracy: 0.45, loss: 0.89, valAccuracy: 0.42 },
    { epoch: 5, accuracy: 0.68, loss: 0.62, valAccuracy: 0.65 },
    { epoch: 10, accuracy: 0.78, loss: 0.41, valAccuracy: 0.74 },
    { epoch: 15, accuracy: 0.84, loss: 0.29, valAccuracy: 0.81 },
    { epoch: 20, accuracy: 0.89, loss: 0.21, valAccuracy: 0.86 },
    { epoch: 25, accuracy: 0.92, loss: 0.16, valAccuracy: 0.88 },
    { epoch: 30, accuracy: 0.94, loss: 0.12, valAccuracy: 0.91 }
  ];

  // Model performance comparison
  const modelComparison = [
    { model: "LSTM", accuracy: 87.2, speed: 245, memory: 1.2 },
    { model: "Transformer", accuracy: 91.5, speed: 189, memory: 2.8 },
    { model: "Ensemble", accuracy: 93.8, speed: 156, memory: 3.5 },
    { model: "CNN-LSTM", accuracy: 85.6, speed: 278, memory: 1.8 }
  ];

  // Feature importance
  const featureImportance = [
    { feature: "Voice Tone", importance: 0.92, category: "Audio" },
    { feature: "Facial Expression", importance: 0.88, category: "Visual" },
    { feature: "Body Language", importance: 0.85, category: "Visual" },
    { feature: "Speech Tempo", importance: 0.79, category: "Audio" },
    { feature: "Proximity", importance: 0.72, category: "Spatial" },
    { feature: "Heart Rate", importance: 0.68, category: "Biometric" },
    { feature: "Movement Sync", importance: 0.65, category: "Behavioral" },
    { feature: "Conversation Flow", importance: 0.61, category: "Behavioral" }
  ];

  // Model architectures
  const models = [
    {
      id: "lstm" as const,
      name: "LSTM Time-Series",
      description: "Recurrent network for temporal emotional patterns",
      layers: [
        { type: "Input", neurons: 128, activation: "None" },
        { type: "LSTM", neurons: 256, activation: "tanh" },
        { type: "LSTM", neurons: 128, activation: "tanh" },
        { type: "Dense", neurons: 64, activation: "ReLU" },
        { type: "Output", neurons: 10, activation: "Softmax" }
      ],
      params: "2.4M",
      accuracy: "87.2%"
    },
    {
      id: "transformer" as const,
      name: "Transformer Attention",
      description: "Multi-head attention for contextual understanding",
      layers: [
        { type: "Embedding", neurons: 512, activation: "None" },
        { type: "Multi-Head Attention", neurons: 512, activation: "None" },
        { type: "Feed Forward", neurons: 2048, activation: "GELU" },
        { type: "Layer Norm", neurons: 512, activation: "None" },
        { type: "Output", neurons: 10, activation: "Softmax" }
      ],
      params: "8.7M",
      accuracy: "91.5%"
    },
    {
      id: "ensemble" as const,
      name: "Ensemble Model",
      description: "Weighted combination of multiple architectures",
      layers: [
        { type: "LSTM Branch", neurons: 256, activation: "tanh" },
        { type: "Transformer Branch", neurons: 512, activation: "None" },
        { type: "CNN Branch", neurons: 128, activation: "ReLU" },
        { type: "Fusion Layer", neurons: 256, activation: "ReLU" },
        { type: "Output", neurons: 10, activation: "Softmax" }
      ],
      params: "12.1M",
      accuracy: "93.8%"
    }
  ];

  const handleTraining = () => {
    setIsTraining(!isTraining);
    if (!isTraining) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 2;
        setTrainingProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          setTrainingProgress(0);
        }
      }, 100);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Audio: "#60a5fa",
      Visual: "#2dd4bf",
      Spatial: "#a78bfa",
      Biometric: "#f59e0b",
      Behavioral: "#ec4899"
    };
    return colors[category] || "#94a3b8";
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20 mb-6">
            <Brain className="text-purple-400" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight text-white mb-4">
            ML Model Laboratory
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Train, visualize, and optimize the AI models powering emotional atmosphere sensing
          </p>
        </motion.div>

        {/* Model Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-8"
        >
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => setSelectedModel(model.id)}
              className={`px-6 py-3 rounded-xl transition-all ${
                selectedModel === model.id
                  ? "bg-gradient-to-br from-purple-500/30 to-blue-500/30 text-white border-2 border-purple-500/50"
                  : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
              }`}
            >
              {model.name}
            </button>
          ))}
        </motion.div>

        {/* Training Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <GlassCard className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light text-white flex items-center gap-3">
                <Cpu className="text-blue-400" size={24} />
                Training Control Panel
              </h2>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 transition-colors">
                  <Settings size={20} />
                </button>
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 transition-colors">
                  <Upload size={20} />
                </button>
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 transition-colors">
                  <Download size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <div className="text-sm text-white/60 mb-1">Model Architecture</div>
                <div className="text-2xl font-light text-white">{models.find(m => m.id === selectedModel)?.name}</div>
                <div className="text-xs text-white/50 mt-2">{models.find(m => m.id === selectedModel)?.params} parameters</div>
              </div>
              <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30">
                <div className="text-sm text-white/60 mb-1">Current Accuracy</div>
                <div className="text-2xl font-light text-white">{models.find(m => m.id === selectedModel)?.accuracy}</div>
                <div className="text-xs text-white/50 mt-2">Validation set performance</div>
              </div>
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                <div className="text-sm text-white/60 mb-1">Training Status</div>
                <div className="text-2xl font-light text-white">{isTraining ? "Running" : "Idle"}</div>
                <div className="text-xs text-white/50 mt-2">{isTraining ? `${trainingProgress}% complete` : "Ready to train"}</div>
              </div>
            </div>

            {isTraining && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-6"
              >
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    style={{ width: `${trainingProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            )}

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleTraining}
                className={`px-8 py-4 rounded-xl font-medium transition-all flex items-center gap-3 ${
                  isTraining
                    ? "bg-amber-500/20 border-2 border-amber-500/50 text-amber-300"
                    : "bg-gradient-to-r from-purple-500/30 to-blue-500/30 border-2 border-purple-500/50 text-white hover:from-purple-500/40 hover:to-blue-500/40"
                }`}
              >
                {isTraining ? (
                  <>
                    <Pause size={20} />
                    Pause Training
                  </>
                ) : (
                  <>
                    <Play size={20} />
                    Start Training
                  </>
                )}
              </button>
              <button className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 transition-colors flex items-center gap-2">
                <RotateCcw size={20} />
                Reset Model
              </button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Model Architecture Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <GlassCard className="p-8">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
              <Layers className="text-purple-400" size={24} />
              Network Architecture
            </h2>
            <div className="space-y-4">
              {models.find(m => m.id === selectedModel)?.layers.map((layer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20 flex items-center justify-center text-white/70 text-sm font-mono">
                      {index + 1}
                    </div>
                    <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-white font-medium mb-1">{layer.type}</div>
                          <div className="text-sm text-white/60">
                            {layer.neurons} neurons • {layer.activation} activation
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Network className="text-blue-400" size={20} />
                          <span className="text-xs text-white/50">{layer.neurons}d</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < (models.find(m => m.id === selectedModel)?.layers.length ?? 0) - 1 && (
                    <div className="ml-6 h-6 w-0.5 bg-gradient-to-b from-purple-500/50 to-blue-500/50" />
                  )}
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Training Progress & Feature Importance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <TrendingUp className="text-green-400" size={24} />
                Training Progress
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trainingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="epoch" 
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
                    dataKey="accuracy" 
                    stroke="#2dd4bf" 
                    strokeWidth={2}
                    name="Train Accuracy"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="valAccuracy" 
                    stroke="#60a5fa" 
                    strokeWidth={2}
                    name="Val Accuracy"
                  />
                </LineChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <Zap className="text-amber-400" size={24} />
                Feature Importance
              </h2>
              <div className="space-y-3">
                {featureImportance.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getCategoryColor(feature.category) }}
                        />
                        <span className="text-sm text-white">{feature.feature}</span>
                      </div>
                      <span className="text-sm text-white/60">{(feature.importance * 100).toFixed(0)}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: getCategoryColor(feature.category) }}
                        initial={{ width: 0 }}
                        animate={{ width: `${feature.importance * 100}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Model Performance Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <GlassCard className="p-8">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
              <GitBranch className="text-teal-400" size={24} />
              Model Performance Comparison
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={modelComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="model" stroke="rgba(255,255,255,0.5)" style={{ fontSize: '12px' }} />
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
                <Bar dataKey="accuracy" fill="#2dd4bf" name="Accuracy %" />
                <Bar dataKey="speed" fill="#60a5fa" name="Speed (ms)" />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>

        {/* System Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <GlassCard className="p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30">
            <div className="flex items-start gap-4">
              <Info className="text-purple-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-light text-white mb-3">Training Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <span>Transformer model shows best accuracy (91.5%) with multimodal attention</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <span>Voice tone and facial expressions are strongest predictive features</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-amber-400 flex-shrink-0 mt-0.5" size={16} />
                    <span>Biometric data improves accuracy by 4.2% but requires consent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Activity className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                    <span>Ensemble methods achieve highest performance at cost of inference speed</span>
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
          className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.2, 1],
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
