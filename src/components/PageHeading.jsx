import PageTitle from "./PageTitle.jsx";

const PageHeading = ({title, children}) => {
    return (
        <>
            <PageTitle title={title}/>
            <h2 className="text-center text-5xl font-semibold text-emerald-400">{children}</h2>
        </>
    );
}

export default PageHeading;