// src/utils/withPageLoader.jsx
import React, { useEffect, useState } from 'react';
import LoaderScreen from './LoadingScreen';
const withPageLoader = (Component, loaderText) => {
    return function WrappedComponent(props) {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => setIsLoading(false), 1500); // Customize duration here
            return () => clearTimeout(timer);
        }, []);

        return (
            
            <div className="relative">
        
                <LoaderScreen isLoading={isLoading} text={loaderText} />
                <div
                    className={`transition-all duration-1000 ease-in-out ${isLoading ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                        }`}
                >
                    <Component {...props} />
                </div>
            </div>
        );
    };
};

export default withPageLoader;
