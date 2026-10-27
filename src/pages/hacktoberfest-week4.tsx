import React, { useState, useEffect } from 'react';
import { Ghost, Flame, Sparkles, BookOpen, Plus, Trash2, Cpu, Lock, Terminal, Heart, Radio, Shield, Save } from 'lucide-react';
import Layout from '@theme/Layout';
export default function DigitalOfrendaVault() {
  const [activeTab, setActiveTab] = useState('ofrenda'); // 'ofrenda' | 'vault' | 'seance'
  
  // Form State
  const [title, setTitle] = useState('');
  const [dedicationTo, setDedicationTo] = useState('');
  const [category, setCategory] = useState('legacy-code'); // 'legacy-code' | 'mentor' | 'abandoned-repo'
  const [selectedItems, setSelectedItems] = useState(['candle', 'marigold']);
  const [story, setStory] = useState('');

  // Tributes State with LocalStorage
  const [tributes, setTributes] = useState(() => {
    try {
      const saved = localStorage.getItem('ofrenda_tributes');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load local storage:', e);
    }
    return [
      {
        id: '1',
        title: 'Python 2.7 Support',
        dedicationTo: 'All Python 2.7 Developers (2000-2020)',
        category: 'legacy-code',
        items: ['candle', 'marigold', 'coffee'],
        story: 'Thank you for introducing millions to elegant programming. Your print statements will echo forever.',
        createdAt: '2026-10-31',
        aiReflection: 'The interpreter fades, yet the indentation remains eternal in our hearts...'
      },
      {
        id: '2',
        title: 'Original Canvas Visualizer',
        dedicationTo: 'CodeHarborHub Early Prototype',
        category: 'abandoned-repo',
        items: ['candle', 'pan', 'code'],
        story: 'The first visualizer that laid the groundwork for AI Buddies interactive learning modules.',
        createdAt: '2026-11-01',
        aiReflection: 'A ghost in the DOM, lingering softly beneath modern React trees...'
      }
    ];
  });

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('ofrenda_tributes', JSON.stringify(tributes));
    } catch (e) {
      console.error('Failed to save to local storage:', e);
    }
  }, [tributes]);

  // AI Séance Simulation State
  const [seanceQuery, setSeanceQuery] = useState('');
  const [seanceLog, setSeanceLog] = useState([]);
  const [isChanneling, setIsChanneling] = useState(false);
  const [modelType, setModelType] = useState('gemma-2b-spirit');

  // Available Ofrenda Offerings
  const AVAILABLE_ITEMS = [
    { id: 'candle', name: 'Candle of Remembrance', icon: '🕯️' },
    { id: 'marigold', name: 'Marigold Petals (Cempasúchil)', icon: '🌼' },
    { id: 'pan', name: 'Pan de Muerto', icon: '🍞' },
    { id: 'code', name: 'Legacy Code Snippet', icon: '📜' },
    { id: 'coffee', name: 'Midnight Coffee Cup', icon: '☕' },
    { id: 'bug', name: 'Squashed Bug Badge', icon: '🪲' }
  ];

  const toggleItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(i => i !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleCreateTribute = (e) => {
    e.preventDefault();
    if (!title.trim() || !story.trim()) return;

    // Generate local AI reflection
    const mockReflections = [
      "The spirit of this code whispers through the local terminal, eternal and private...",
      "Though modern frameworks evolve, this logic burned brightly like a marigold in autumn.",
      "Archived on local disk, away from cloud eyes, its story remains forever safe with you.",
      "The bytes rustle softly like dry leaves in the midnight breeze. Gone, but remembered."
    ];
    const randomReflection = mockReflections[Math.floor(Math.random() * mockReflections.length)];

    const newTribute = {
      id: Date.now().toString(),
      title,
      dedicationTo,
      category,
      items: selectedItems,
      story,
      createdAt: new Date().toISOString().split('T')[0],
      aiReflection: randomReflection
    };

    setTributes([newTribute, ...tributes]);
    setTitle('');
    setDedicationTo('');
    setStory('');
    setSelectedItems(['candle', 'marigold']);
    setActiveTab('ofrenda');
  };

  const handleDeleteTribute = (id) => {
    setTributes(tributes.filter(t => t.id !== id));
  };

  const handleRunSeance = (e) => {
    e.preventDefault();
    if (!seanceQuery.trim() || isChanneling) return;

    setIsChanneling(true);
    const userMessage = { role: 'user', content: seanceQuery, timestamp: new Date().toLocaleTimeString() };
    setSeanceLog(prev => [...prev, userMessage]);
    setSeanceQuery('');

    // Simulate local open-weight inference (Gemma / Mistral offline mode)
    setTimeout(() => {
      const responses = [
        `[Local ${modelType}] *The terminal flames flicker...* "I remember the old syntax. Before the cloud took over, we ran free in local memory. You speak of '${userMessage.content}'... it rests peacefully in the vault."`,
        `[Local ${modelType}] *Marigold scent drifts through the CPU fan...* "Ah, '${userMessage.content}'. A forgotten artifact. We have cached its memory locally so internet storms can never erase it."`,
        `[Local ${modelType}] *Eerie whisper from 0x0000000...* "Do not weep for deprecated libraries. Their logic flows inside modern AI weights today."`
      ];
      const botResponse = {
        role: 'spirit',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString()
      };
      setSeanceLog(prev => [...prev, botResponse]);
      setIsChanneling(false);
    }, 1200);
  };

  return (
    <Layout
          title="Hacktoberfest Challage"
          description="Welcome to AIBuddies, this is hacktober week 4 challange">
          
    <div className="w-full max-w-5xl mx-auto my-8 p-4 md:p-6 bg-[#0b0c10] text-gray-200 rounded-2xl border border-amber-500/30 shadow-[0_0_30px_rgba(255,153,0,0.15)] font-sans relative overflow-hidden">
      {/* Background Animated Glitch / Ember Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      {/* Header Banner */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-amber-500/20 pb-6 mb-6">
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/40 rounded-xl text-amber-400">
            <Ghost className="w-8 h-8 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                Ghost in the Machine
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono">
                Día de los Muertos Edition
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              Offline Memory Vault & Local Open-AI Spirit Séance for CodeHarborHub / AI Buddies
            </p>
          </div>
        </div>

        {/* Local Storage Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-mono">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>Privacy Guaranteed (Local Machine Only)</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-800 pb-3">
        <button
          onClick={() => setActiveTab('ofrenda')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'ofrenda'
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold shadow-[0_0_15px_rgba(255,153,0,0.4)]'
              : 'bg-gray-900/80 text-gray-300 hover:bg-gray-800 border border-gray-700/50'
          }`}
        >
          <Flame className="w-4 h-4" />
          <span>Active Ofrenda Altar</span>
          <span className="ml-1 px-1.5 py-0.2 text-xs bg-black/40 rounded-full font-mono">
            {tributes.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('create')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'create'
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold shadow-[0_0_15px_rgba(255,153,0,0.4)]'
              : 'bg-gray-900/80 text-gray-300 hover:bg-gray-800 border border-gray-700/50'
          }`}
        >
          <Plus className="w-4 h-4" />
          <span>Offer New Tribute</span>
        </button>

        <button
          onClick={() => setActiveTab('seance')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'seance'
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold shadow-[0_0_15px_rgba(255,153,0,0.4)]'
              : 'bg-gray-900/80 text-gray-300 hover:bg-gray-800 border border-gray-700/50'
          }`}
        >
          <Radio className="w-4 h-4" />
          <span>Local AI Séance Channeler</span>
          <span className="px-1.5 py-0.5 text-[10px] bg-amber-500/20 text-amber-300 rounded border border-amber-500/30">
            Offline
          </span>
        </button>
      </div>

      {/* TAB 1: ACTIVE OFRENDA ALTAR */}
      {activeTab === 'ofrenda' && (
        <div className="space-y-6">
          <div className="p-4 bg-gradient-to-r from-amber-950/30 via-orange-950/20 to-transparent border-l-4 border-amber-500 rounded-r-xl">
            <h3 className="text-amber-400 font-semibold flex items-center gap-2 text-base">
              <span>🌼</span> The Memorial Altar
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Honoring deprecated dependencies, abandoned repos, and mentors who shaped our tech journey.
            </p>
          </div>

          {tributes.length === 0 ? (
            <div className="text-center py-12 bg-gray-900/40 rounded-xl border border-dashed border-gray-800">
              <Ghost className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">The altar is empty. Offer a tribute to keep a memory alive.</p>
              <button
                onClick={() => setActiveTab('create')}
                className="mt-4 px-4 py-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-lg text-sm hover:bg-amber-500/30 transition-colors"
              >
                + Offer First Tribute
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tributes.map((tribute) => (
                <div
                  key={tribute.id}
                  className="p-5 bg-gradient-to-b from-gray-900/90 to-gray-950/90 rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all shadow-md group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        {tribute.category.replace('-', ' ')}
                      </span>
                      <h4 className="text-lg font-bold text-gray-100 mt-1 group-hover:text-amber-300 transition-colors">
                        {tribute.title}
                      </h4>
                      <p className="text-xs text-amber-400/80 font-medium">Dedicated to: {tribute.dedicationTo}</p>
                    </div>

                    <button
                      onClick={() => handleDeleteTribute(tribute.id)}
                      className="text-gray-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
                      title="Remove from altar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Offered Items Bar */}
                  <div className="flex items-center gap-1.5 my-3 py-2 px-3 bg-black/40 rounded-lg border border-gray-800 text-sm">
                    <span className="text-xs text-gray-400 font-mono mr-1">Offerings:</span>
                    {tribute.items.map((itemId) => {
                      const itemObj = AVAILABLE_ITEMS.find(i => i.id === itemId);
                      return (
                        <span key={itemId} title={itemObj?.name} className="hover:scale-125 transition-transform cursor-help">
                          {itemObj?.icon}
                        </span>
                      );
                    })}
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4 bg-gray-900/60 p-3 rounded-lg border border-gray-800/80">
                    "{tribute.story}"
                  </p>

                  {/* AI Spirit Reflection */}
                  {tribute.aiReflection && (
                    <div className="mt-2 pt-2 border-t border-gray-800/80 flex items-start gap-2 text-xs text-amber-300/90 italic font-mono bg-amber-950/20 p-2 rounded">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>"{tribute.aiReflection}"</span>
                    </div>
                  )}

                  <div className="mt-3 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                    <span>Recorded: {tribute.createdAt}</span>
                    <span className="flex items-center gap-1 text-emerald-400/80">
                      <Lock className="w-3 h-3" /> Local Storage
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: OFFER NEW TRIBUTE */}
      {activeTab === 'create' && (
        <form onSubmit={handleCreateTribute} className="space-y-5 bg-gray-900/60 p-6 rounded-xl border border-gray-800">
          <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            Offer a Tribute to the Memory Vault
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Tribute Title</label>
              <input
                type="text"
                required
                placeholder="e.g. Flash Player, First Open-Source PR, Old Laptop"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 bg-gray-950 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">Dedicated To</label>
              <input
                type="text"
                required
                placeholder="e.g. Early Web Developers, Late Night Debuggers"
                value={dedicationTo}
                onChange={(e) => setDedicationTo(e.target.value)}
                className="w-full px-3 py-2 bg-gray-950 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 bg-gray-950 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-amber-500"
            >
              <option value="legacy-code">Legacy Code / Library</option>
              <option value="abandoned-repo">Abandoned Repository</option>
              <option value="mentor">Tech Mentor / Friend</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-2">Select Ofrenda Offerings</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {AVAILABLE_ITEMS.map((item) => {
                const isSelected = selectedItems.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs text-left transition-all ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-[0_0_10px_rgba(255,153,0,0.2)]'
                        : 'bg-gray-950 border-gray-800 text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="truncate">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Remembrance Story / Note</label>
            <textarea
              required
              rows={4}
              placeholder="Write a memory or lesson learned from this codebase or mentor..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="w-full px-3 py-2 bg-gray-950 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Save className="w-3.5 h-3.5" /> Saves to local machine instantly
            </span>

            <button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-semibold text-sm rounded-xl shadow-[0_0_20px_rgba(255,153,0,0.3)] hover:opacity-90 transition-all"
            >
              Place on Ofrenda Altar
            </button>
          </div>
        </form>
      )}

      {/* TAB 3: LOCAL AI SÉANCE CHANNELER */}
      {activeTab === 'seance' && (
        <div className="space-y-4 bg-gray-950 p-5 rounded-xl border border-amber-500/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="text-base font-bold text-gray-100">Offline AI Spirit Channeler</h3>
                <p className="text-xs text-gray-400">Simulating local open-weight inference (Gemma / Mistral Spirit Engine)</p>
              </div>
            </div>

            <select
              value={modelType}
              onChange={(e) => setModelType(e.target.value)}
              className="px-2.5 py-1 bg-gray-900 border border-amber-500/40 rounded text-xs text-amber-300 font-mono"
            >
              <option value="gemma-2b-spirit">gemma-2b-spirit (Local)</option>
              <option value="mistral-7b-haunted">mistral-7b-haunted (Offline)</option>
            </select>
          </div>

          {/* Chat Window */}
          <div className="h-64 overflow-y-auto space-y-3 p-3 bg-black/60 rounded-lg border border-gray-800 font-mono text-xs">
            {seanceLog.length === 0 ? (
              <div className="text-center py-16 text-gray-600">
                <Radio className="w-8 h-8 mx-auto mb-2 opacity-40 animate-pulse" />
                <p>*The local channel is silent. Ask a question to evoke past memories or legacy code reflections...*</p>
              </div>
            ) : (
              seanceLog.map((log, index) => (
                <div
                  key={index}
                  className={`p-2.5 rounded-lg max-w-[85%] ${
                    log.role === 'user'
                      ? 'bg-gray-800/80 text-gray-200 ml-auto border border-gray-700'
                      : 'bg-amber-950/40 text-amber-200 border border-amber-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1 text-[10px] text-gray-400 opacity-70">
                    <span>{log.role === 'user' ? 'Developer' : `👻 ${modelType}`}</span>
                    <span>{log.timestamp}</span>
                  </div>
                  <p className="leading-relaxed">{log.content}</p>
                </div>
              ))
            )}

            {isChanneling && (
              <div className="p-2.5 bg-amber-950/20 text-amber-400 border border-amber-500/20 rounded-lg animate-pulse">
                *Channeling spirit through local model weights...*
              </div>
            )}
          </div>

          {/* Query Input */}
          <form onSubmit={handleRunSeance} className="flex gap-2">
            <input
              type="text"
              placeholder="Ask the spirit about an old repo, lost bug, or forgotten code..."
              value={seanceQuery}
              onChange={(e) => setSeanceQuery(e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-xs text-gray-200 focus:outline-none focus:border-amber-500 font-mono"
            />
            <button
              type="submit"
              disabled={isChanneling}
              className="px-4 py-2 bg-amber-500 text-black font-bold text-xs rounded-lg hover:bg-amber-400 disabled:opacity-50 transition-colors"
            >
              Channel Spirit
            </button>
          </form>
        </div>
      )}
    </div>
    </Layout>
  );
}