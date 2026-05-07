const ProjectCard = ({ title, description, tags, link }) => (
    <div className="group relative bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 hover:bg-slate-900/60 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] flex flex-col h-full">
        {/* Top Row: Icon & Action */}
        <div className="flex items-center justify-between mb-10">
            <div className="text-emerald-500 group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-git-2">
                    <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/>
                    <circle cx="13" cy="12" r="2"/>
                    <path d="M18 19c-2.8 0-5-2.2-5-5"/>
                    <circle cx="20" cy="19" r="2"/>
                </svg>
            </div>
            <a href={link} className="h-10 w-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                </svg>
            </a>
        </div>

        {/* Content */}
        <div className="flex-grow space-y-3">
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
                {description}
            </p>
        </div>

        {/* Footer: Tech Stack */}
        <div className="mt-8 flex gap-3 flex-wrap">
            {tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 bg-slate-950 border border-slate-800 text-slate-500 rounded-lg group-hover:border-emerald-500/20 group-hover:text-slate-300 transition-colors">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

export default ProjectCard;
