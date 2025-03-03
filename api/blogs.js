const blogs = [
  {
    id: "1",
    title: "React Query Improvements",
    screens:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsVGplI_nKB-5PUb88ffkpru7G6wX1yruT2-JTKpRmsgw5nq6ao_-gUVPVQeQsFD3vtY&usqp=CAU",
    description:
      "A comparison of React Query and useEffect + useState, highlighting their differences in data fetching, state management, and performance.",
    author: "Fiaz",
    authorTitle: "Sineor Consultant",
    create_at: "25 Dec, 2020",
    blogSingleImg: "images/blog-details/img-1.jpg",
    comment: "35",
    blClass: "format-standard-image",
    blog: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Query vs useEffect + useState</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            max-width: 800px;
            margin: auto;
        }
        img {
            width: 100%;
            height: auto;
            margin: 10px 0;
        }
        pre {
            background: #bfbfbf;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

    <h1>React Query vs useEffect + useState</h1>

    <p>
        When working with data fetching in React, developers often rely on <code>useEffect</code> and <code>useState</code> 
        to manage API calls and state. However, React Query provides a more powerful and efficient alternative 
        for handling asynchronous data with built-in caching, background fetching, and automatic updates.
    </p>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsVGplI_nKB-5PUb88ffkpru7G6wX1yruT2-JTKpRmsgw5nq6ao_-gUVPVQeQsFD3vtY&usqp=CAU" alt="React Query vs useEffect">

    <p>
        Using <code>useEffect</code> and <code>useState</code>, we manually handle the loading state, errors, and updates. 
        React Query abstracts this complexity by offering automatic re-fetching, caching, and improved performance.
    </p>

    <pre>
        <code>
        // Using useEffect and useState
        function FetchData() {
            const [data, setData] = useState(null);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState(null);

            useEffect(() => {
                fetch("https://jsonplaceholder.typicode.com/todos/1")
                    .then((response) => response.json())
                    .then((data) => {
                        setData(data);
                        setLoading(false);
                    })
                    .catch((error) => setError(error));
            }, []);

            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error loading data.</p>;

            return <pre>{JSON.stringify(data, null, 2)}</pre>;
        }
        </code>
    </pre>

    <p>
        React Query simplifies this process using the <code>useQuery</code> hook, making API calls more efficient, 
        reducing boilerplate code, and improving data synchronization. If your project involves frequent data fetching, 
        React Query is a great choice over <code>useEffect</code> and <code>useState</code>.
    </p>

</body>
</html>`,
  },
  {
    id: "2",
    title: "Redux Usage in React and Next.js",
    screens: "https://redux.js.org/img/redux-logo-landscape.png",
    description:
      "Learn how to use Redux in React and Next.js for efficient state management, with a practical example and best practices.",
    author: "Konal Biry",
    authorTitle: "Creative Director",
    create_at: "13 Dec,2022",
    blogSingleImg: "images/blog-details/img-2.jpg",
    comment: "80",
    blClass: "format-standard-image",
    blog: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redux Usage in React and Next.js</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            max-width: 800px;
            margin: auto;
        }
        img {
            width: 100%;
            height: auto;
            margin: 10px 0;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
    </style>
</head>
<body>

    <h1>Redux Usage in React and Next.js</h1>

    <p>
        Redux is a state management library widely used in React and Next.js applications to manage complex application state efficiently. 
        It provides a centralized store that makes state changes predictable and easier to debug, helping developers build scalable applications.
    </p>

    <img src="https://redux.js.org/img/redux-logo-landscape.png" alt="Redux Logo">

    <p>
        In React, Redux is integrated using the <code>react-redux</code> library, which allows components to access and modify the global state.
        In Next.js, Redux can be used with <code>next-redux-wrapper</code> to manage state across server-side and client-side rendering.
    </p>

    <pre>
        <code>
// Redux store example
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Creating a counter slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1; },
        decrement: (state) => { state.value -= 1; }
    }
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        &lt;div&gt;
            &lt;p&gt;Count: {count}&lt;/p&gt;
            &lt;button onClick={() => dispatch(counterSlice.actions.increment())}&gt;+&lt;/button&gt;
            &lt;button onClick={() => dispatch(counterSlice.actions.decrement())}&gt;-&lt;/button&gt;
        &lt;/div&gt;
    );
}

function App() {
    return (
        &lt;Provider store={store}&gt;
            &lt;Counter /&gt;
        &lt;/Provider&gt;
    );
}
        </code>
    </pre>

    <p>
        Using Redux in React and Next.js provides better state management, improves performance, and allows easier debugging. 
        With tools like Redux Toolkit, integrating Redux has become simpler, making it a great choice for modern applications.
    </p>

</body>
</html>
`,
  },
  {
    id: "3",
    title: "Difference Between useCallback and useMemo.",
    screens: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLELCj7CVTPA1DDRepEzTWUy_O5IfFa6s9Mw&s",
    description:
      "Understand the key differences between useCallback and useMemo in React, their use cases, and how they optimize performance efficiently.",
    author: "Aliza Anny",
    authorTitle: "Art Director",
    create_at: "22 Dec,2022",
    blogSingleImg: "images/blog-details/img-3.jpg",
    comment: "95",
    blClass: "format-video",
    blog:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Difference Between useCallback and useMemo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            max-width: 800px;
            margin: auto;
        }
        img {
            width: 100%;
            height: auto;
            margin: 10px 0;
        }
    </style>
</head>
<body>

    <h1>Difference Between useCallback and useMemo</h1>

    <p>
        In React, optimizing performance is crucial for creating smooth and efficient applications. Two important hooks, <code>useCallback</code> and <code>useMemo</code>, help achieve this by preventing unnecessary re-renders and computations. While they serve different purposes, they are often confused. <code>useCallback</code> is used to memoize functions so that a new function instance is not created on every render unless dependencies change. This is useful when passing functions as props to child components to prevent unnecessary re-renders. On the other hand, <code>useMemo</code> is used to memoize the result of a computation, ensuring that expensive calculations are only re-executed when dependencies change.
    </p>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLELCj7CVTPA1DDRepEzTWUy_O5IfFa6s9Mw&s" alt="React Hooks useCallback and useMemo">

    <p>
        The primary difference between them lies in their return values. <code>useCallback</code> returns a memoized function, while <code>useMemo</code> returns a memoized value. For example, when optimizing a React component that contains an expensive calculation inside <code>useEffect</code> or a render function, <code>useMemo</code> ensures the calculation is only recomputed when necessary. Meanwhile, <code>useCallback</code> is useful when passing callbacks to optimized components wrapped in <code>React.memo</code>, ensuring they don’t re-render unless truly necessary. Understanding when to use which hook can significantly improve the performance of React applications by avoiding unnecessary re-renders and computations.
    </p>

    <p>
        In conclusion, both <code>useCallback</code> and <code>useMemo</code> play vital roles in React’s performance optimization strategy. <code>useCallback</code> is best for memoizing functions to prevent unnecessary re-renders, while <code>useMemo</code> is ideal for caching expensive calculations. Using them effectively can enhance performance, especially in large applications with frequent state updates and prop changes.
    </p>

</body>
</html>
`
  },
];
export default blogs;
