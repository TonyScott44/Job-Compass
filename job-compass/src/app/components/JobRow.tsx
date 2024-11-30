export default function JobRow() {
    return (
        <>
            <div className = "bg-white p-4 rounded-lg shadow-sm flex gap-4">
                <div className="content-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" 
                    className="size-12"/>
                </div>
                <div className="grow">
                    <div className="text-gray-500 text-sm">Meta</div>
                    <div className="text-lg font-bold mb-1">Senior Engineering Manager</div>
                    <div className="text-sm text-gray-400">Remote &middot; Atlanta, GA US &middot; Full-time</div>
                </div>
                <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
            </div>
        </>
    );
}