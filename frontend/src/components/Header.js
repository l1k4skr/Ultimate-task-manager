import { Link } from 'react-router-dom';

export default function Header(){ 
    return <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
            <div className="flex">
                <div className="shrink-0 flex items-center">
                    <Link to="/" className="text-xl font-bold text-gray-900">
                        GetEazy
                    </Link>
                </div>
                <div className="hidden sm:-my-px sm:ml-1 sm:flex ">
                    <Link
                        to="/dashboard"
                        className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 content-center"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Link
                    to="/login"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover: hover:bg-indigo-500"
                >
                    Register
                </Link>
            </div>
        </div>
    </div>
</nav> }  