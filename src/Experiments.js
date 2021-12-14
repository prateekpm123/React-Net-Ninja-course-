import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Experiments = () => {
    // Logic for increment part
    let [num, setNum] = useState(1);
    function incrementNumber() {
        num += 1;
        setNum(num);
        console.log(num);
    }
    
    // // Toggle changing the Users data just a small example 
    let [name, setName] = useState("Prateek");
    let [age, setAge] = useState(21);
    let name1 = "Prateek";
    let age1 = 21;
    let name2  = "Pooja";
    let age2  = 22;

    function changeName() {
        if(name === "Prateek") {
            setName(name2)
            setAge(age2)
        } else {
            setName(name1)
            setAge(age1)

        }
    }

    // CRUD example of dynamically making a list
    let [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
     ]);

   // Try to create a new store for Mario's blog part, as if you delete at one it gets deleted at other as well
    let [mBlogs, setMBlogs] = useState([...blogs]);
    function handleMDelete(id) {
        const newBlogs = mBlogs.filter((blog) => blog.id !== id);
        setMBlogs(newBlogs); 
    }
 

    function handleDelete(id) {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs); 
    }

    // SAMPLE CASE FOR useEffect HOOK
    const [PersonName, setPersonName] = useState("Prateek");

    useEffect(() => {
        console.log(PersonName);
        // console.log(blogs);
    }, [PersonName]);


    return (
        <div className="content">
            <h2>Experiments</h2>
            <p>{num}</p>
            <button onClick={() => incrementNumber()}>Increase me</button>

            <p>{name} is {age} years old </p>
            <button onClick={() => changeName()}>Show Partner </button>
            {blogs && <BlogList blogs={blogs} title="Alls Blogs" handleDelete={handleDelete} />}
            <BlogList blogs={mBlogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs" handleDelete = {handleMDelete} />
            <br />
            <br />
            <h2>UseEffect example</h2>
            <br />
            <button onClick={() => {setPersonName('Lucy')}}>ChangeName</button>
            <p>{PersonName}</p>

        </div>
    );
}
 
export default Experiments;