import IconArrowRight from "../icons/arrow-right";
import Link from "next/link";

const CourseItem = ({ data }) => {

    return (
        <div className="container py-24 mx-auto">
            <h1 className="font-bold text-3xl py-2 text-black underline decoration-wavy decoration-pink-400 decoration-1 dark:text-white">Course</h1>
            <div>
                <div className="flex flex-col mt-4">
                    {data.map((data) => (
                        <div key={data.fields.CourseName} className="-m-1 flex items-center flex-col lg:flex-row justify-between py-8">
                            <div>
                                <p className="text-gray-400 dark:text-stone-700">{data.fields.CourseDate}</p>
                            </div>
                            <div className="flex flex-col items-center lg:items-end">
                                <Link href={data.fields.CourseLink}>
                                    <a className="text-xl font-bold text-gray-700 dark:text-stone-500" target="_blank">
                                        {data.fields.CourseName}
                                        <IconArrowRight className="inline-block w-4 h-4 ml-2" />
                                    </a>
                                </Link>
                                <p className="text-gray-300 dark:text-stone-700">{data.fields.CourseTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CourseItem;