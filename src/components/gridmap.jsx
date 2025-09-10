const Maps = () => {
    const Service = [
        {
            title: "computer enginering ",
            description: "software engineering,networking and telecomunications are all branches of computer engineering",


        },
        {
            title: "web design",
            description: "web design and development and, mobile design and development",
        },

        {
            title: "software development",
            description: "the most used model in software development is the waterfall cycle",
        }
    ]


    return (
        <div>
            {
                Service.map((you, index) => (
                    <div className="grid-container" key={index}>
                        <div className="grid-item">{you.title}  {you.description}</div>
                      

                    </div>

                ))
            }

        </div>

    )
}

export default Maps 