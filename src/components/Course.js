import React from 'react'

const Header = ({text}) => {
    return (
        <h1>{text}</h1>
    ) 
}

const Sumexercises = ({course}) => {
    return (
        <h4>
            total of {' '}
            {course.parts.reduce((sum,p) => {
                const returns=sum+p.exercises
                // console.log(returns)
                return sum+=p.exercises},0
            )}
            {' '} exercises
        </h4>
    )
}

const Courseid = ({course}) => {
    return (
        <div>
            {course.parts.map(part => 
                <div key={part.id}>
                    {part.name} {part.exercises}
                </div>
            )}
        </div>
    )
}

const Content = ({course}) => {
    console.log({course})
    return (
        <>
             <Courseid course={course} />
            
            <Sumexercises course={course} />

            
        </>
    )
}

const Course = ({courses}) => {
    console.log(courses)
    return (
        <>
            <div> {courses.map(course => 
                // console.log(course)
                <div key ={course.id}>
                    <Header text={course.name} />
                    <Content course={course} />
                </div>
            )}
            </div>
        </>
    )
}

export default Course 