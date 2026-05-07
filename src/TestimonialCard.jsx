const TestimonialCard = ({ item }) => (
    <div className="w-[400px] md:w-[500px] group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl flex flex-col justify-between shrink-0 hover:border-emerald-500/40 transition-all duration-500">
        {/* Decorative Quote Mark */}
        <div className="absolute top-6 right-8 text-slate-800 group-hover:text-emerald-500/10 transition-colors duration-500">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V6C10.017 4.89543 10.9124 4 12.017 4H19.017C21.2261 4 23.017 5.79086 23.017 8V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V6C-1.017 4.89543 -0.121573 4 0.983 4H8.017C10.2261 4 12.017 5.79086 12.017 8V15C12.017 18.3137 9.33072 21 6.017 21H3.017Z" />
            </svg>
        </div>

        <p className="relative z-10 text-lg text-slate-300 leading-relaxed italic mb-8 whitespace-normal">
            "{item.quote}"
        </p>

        <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-slate-950 font-bold text-xl shadow-lg shadow-emerald-500/20">
                {item.author.charAt(0)}
            </div>
            <div>
                <h4 className="font-bold text-white text-base tracking-wide">
                    {item.author}
                </h4>
                <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest">
                    {item.role}
                </p>
            </div>
        </div>
    </div>
);

export default TestimonialCard;
