import { Role } from '../interfaces/Role';

interface RoadmapProps {
    roles: Role[];
}

const Roadmap: React.FC<RoadmapProps> = ({ roles }) => {
    return (
        <div className="flex flex-col">
            <p className='text-6xl font-extra font-mono ml-10 lg:mt-36 mb-8'>Work Experience</p>

            {/* Experience Cards Flex Box */}
            <div className="relative max-w-6xl mx-auto mb-16">
                <div className="lg:flex-row flex flex-col  relative lg:space-x-16 lg:-ml-20">
                    {roles.map((role, index) => (
                        <div key={index} className="flex flex-col items-center relative w-96 h-100">
                            <div className="flex flex-col items-center mb-8">
                                {index < roles.length - 1 && (
                                    true
                                    //<div className="absolute mt-6 transform -translate-y-1/2 w-96 h-1 bg-gray-300"></div>
                                )}
                            </div>
                            <div className="flex flex-col items-start justify-start  p-4 rounded-lg shadow-lg  breathing-shadow w-full h-full mx-2 ">
                                <h3 className="text-xl font-semibold">{role.title}</h3>
                                <p className="text-yellow-400 text-xl">{role.company}</p>
                                <p className="text-gray-300 text-sm">{role.duration}</p>
                                <p className='text-sm text-gray-400'>{role.projectName}</p>
                                <ul className="list-disc ml-6 mt-2">
                                    {role.workItems.map((item, idx) => (
                                        <li key={idx} className="text-gray-500 mb-2 text-sm">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>

    );
};

export default Roadmap;
