import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10">
            <h4>Sorry</h4>
            <p>This page can not be found</p>
            <h6>Go back to the <Link href='/' className="btn btn-outline btn-primary">Homepage</Link> </h6>
        </div>
    );
};

export default NotFound;