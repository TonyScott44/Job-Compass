
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function JobRow() {
    return (
        <>
            <div className = "bg-white p-4 rounded-lg shadow-sm relative">
                <div className="absolute top-4 right-4">
                    <FontAwesomeIcon className="size-4 cursor-pointer text-gray-300" icon={faHeart} />
                </div>
                <div className = "flex grow gap-4">
                    <div className="content-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" 
                        className="size-12"/>
                    </div>
                    <div className="grow sm:flex">
                        <div className="grow">
                            <div className="text-gray-500 text-sm">Meta</div>
                            <div className="text-lg font-bold mb-1">Senior Engineering Manager</div>
                            <div className="text-sm text-gray-400">Remote &middot; Atlanta, GA US &middot; Full-time</div>
                        </div>
                        <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
                    </div>
                </div>
                
            </div>
        </>
    );
}