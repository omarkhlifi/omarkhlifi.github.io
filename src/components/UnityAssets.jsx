import React from 'react';
import { Box, ExternalLink, ShieldCheck } from 'lucide-react';
import { unityProjectData } from '../unityProjectData';

const UnityAssets = () => {
  return (
    <section id="unity-assets" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Unity Assets &amp; Tools
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-gold mx-auto"></div>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Published packages &amp; developer tools built for Unity Engine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {unityProjectData.map((asset) => (
            <article
              key={asset.id}
              className={`group rounded-2xl p-[1px] transition-all duration-300 ${
                asset.featured
                  ? 'bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-gold hover:shadow-[0_0_35px_rgba(0,240,255,0.35)]'
                  : 'bg-white/10 hover:bg-cyber-cyan/40'
              }`}
            >
              <div className="glass-effect rounded-2xl h-full p-5 sm:p-6 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full bg-space-dark/80 border border-cyber-cyan/30 text-cyber-cyan mb-3">
                      <Box size={14} />
                      <span>{asset.category}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight group-hover:text-cyber-cyan transition-colors">
                      {asset.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
                  {asset.description}
                </p>

                <div className="mb-6">
                  
                  <div className="flex flex-wrap gap-2">
                    {asset.tags.map((tag) => (
                      <span
                        key={`${asset.id}-${tag}`}
                        className="text-xs sm:text-sm px-3 py-1 rounded-full bg-space-dark border border-cyber-cyan/30 text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={asset.assetStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm sm:text-base font-semibold"
                  >
                    <ExternalLink size={16} />
                    View on Asset Store
                  </a>

                  {asset.documentationUrl && (
                    <a
                      href={asset.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border border-cyber-purple/50 text-cyber-purple hover:text-white hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all"
                    >
                      <ShieldCheck size={16} />
                      Documentation
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnityAssets;
