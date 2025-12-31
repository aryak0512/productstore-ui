const Spinner = ({message}) => {
    return (

        <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
            <span className="loader"/>
            <span className="text-sm text-gray-600 dark:text-gray-300">
                    {message}
                </span>
        </div>
    );
}

export default Spinner;