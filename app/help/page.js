export default function HelpPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white pt-14">
            <div className="max-w-6xl mx-auto px-6 py-20">

                <div className="text-center mb-20">
                    <p className="text-green-400 font-medium tracking-widest uppercase">
                        Support Center
                    </p>

                    <h1 className="text-7xl font-bold mt-4 leading-tight">
                        How can we
                        <span className="text-green-400"> help?</span>
                    </h1>

                    <p className="text-zinc-400 text-xl mt-6 max-w-2xl mx-auto">
                        Find answers, troubleshoot issues, and get support for your
                        Social profile.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-green-400 transition-all">
                        <h2 className="text-2xl font-bold mb-4">
                            🚀 Getting Started
                        </h2>
                        <p className="text-zinc-400">
                            Create your Social profile, customize your page and share your
                            unique link everywhere.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-green-400 transition-all">
                        <h2 className="text-2xl font-bold mb-4">
                            🔗 Managing Links
                        </h2>
                        <p className="text-zinc-400">
                            Add and organize links to showcase your content.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-green-400 transition-all">
                        <h2 className="text-2xl font-bold mb-4">
                            👤 Account Management
                        </h2>
                        <p className="text-zinc-400">
                            Update your profile information, username and account settings anytime.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-green-400 transition-all">
                        <h2 className="text-2xl font-bold mb-4">
                            💬 Contact Support
                        </h2>
                        <p className="text-zinc-400">
                            pkjpk07@gmail.com
                            <br />
                            Average response time: 24 hours.
                        </p>
                    </div>

                </div>

                <div className="mt-24 text-center bg-gradient-to-r from-green-500 to-lime-400 rounded-[40px] p-14 text-black">
                    <h2 className="text-5xl font-bold">
                        Still need help?
                    </h2>

                    <p className="mt-4 text-lg opacity-80">
                        Our team is ready to assist you.
                    </p>

                    <a
                        href="mailto:pkjpk07@gmail.com"
                        className="inline-block mt-8 bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
                    >
                        Contact Us
                    </a>
                </div>

            </div>
        </main>
    );
}