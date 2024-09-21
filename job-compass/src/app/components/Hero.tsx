export default function Hero() {
    return (
        <section className="py-12">
            <h1 className="text-4xl font-bold text-center">
                Navigate your career!
            </h1>
            <p className="text-center text-gray-700">
                Navigating your career is about embracing opportunities, learning from challenges, and steadily moving toward your dream job. It requires persistence, adaptability, and a clear sense of your goals to turn aspirations into reality. 
            </p>
            <input
                type="search"
                className="border border-gray-400 w-full py-2 px-3 rounded-md"
                placeholder="Start your journey here...">
            </input>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                Search
            </button>
        </section>
    );
} 