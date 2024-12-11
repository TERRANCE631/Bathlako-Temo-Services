export function InserviceTrainingStudents() {
    const students = [
        {
            img: `./imgs/student5.jpg`,
        },
        {
            img: `./imgs/student3.jpg`,
        },
        {
            img: `./imgs/student6.jpg`,
        },
        {
            img: `./imgs/student1.jpg`,
        },
        {
            img: `./imgs/student7.jpg`,
        },
        {
            img: `./imgs/student2.jpg`,
        },
    ];

  return (
    <div>
        <h5 className="text-center text-gray-700 dark:text-gray-300 p-10 mt-10 text-3xl font-bold underline underline-offset-8">In-service training students</h5>
        <p className="text-center text-gray-700 dark:text-gray-300">We take students from different universities and colleges to do their Work Integrated Learning and some for internship</p>
        <section className="mb-10 flex justify-center items-center pb-10 border-b-4">
            <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-8 ">
                    {students.map((student) => (
                        <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                            <img decoding="async" src={student.img} alt="Gallery" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}
