import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="w-full h-full bg-[#131720] flex items-center justify-center min-h-screen text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
                <p className="text-xl mt-4">Something went wrong.</p>
                {error && (
                    <p className="text-sm text-gray-500 mt-2">
                        <i>{error.statusText || error.message}</i>
                    </p>
                )}
                <a href="/" className="mt-6 inline-block text-blue-500 underline">
                    Go back to Home
                </a>
            </div>
        </div>
    );
}

export default ErrorPage;