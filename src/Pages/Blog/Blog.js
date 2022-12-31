import React from 'react';

const Blog = () => {
    return (
        <div className='mt-12 mb-10'>
            <h1 className='text-center mb-8 text-3xl uppercase font-bold text-base-300'>Blog Section</h1>
            <div className="card w-11/12 md:w-11/12 lg:w-5/12 bg-red-100 shadow-xl mx-auto mb-8">
                <div className="card-body">
                    <h2 className="card-title">1. What are the different ways to manage a state in a React application?</h2>
                    <p><span className='font-bold'>Ans: </span>
                        The Four Kinds of React State to Manage
                        When we talk about state in applications, it’s important to be clear about what types of state actually matter. <br></br><br></br>

                        There are four main types of state need to properly manage in your React apps: <br></br><br></br>

                        1. Local state <br></br><br></br>
                        2. Global state <br></br><br></br>
                        3. Server state <br></br><br></br>
                        4. URL state <br></br><br></br>
                        Let's cover each of these in detail: <br></br><br></br>

                        <span className='font-bold'>Local state</span> – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br></br><br></br>

                        <span className='font-bold'>Global state</span> – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global. <br></br><br></br>

                        <span className='font-bold'>Server state</span> – Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br></br><br></br>

                        <span className='font-bold'>URL state</span>  – Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                </div>
            </div>
            <div className="card w-11/12 md:w-11/12 lg:w-5/12 bg-red-100 shadow-xl mx-auto mb-8">
                <div className="card-body">
                    <h2 className="card-title">2. How does prototypical inheritance work?</h2>
                    <p><span className='font-bold'>Ans: </span>
                        Prototype Inheritance in JavaScript: Following bullet points will try to analyze the basics behind Prototype Inheritance in JavaScript- <br></br><br></br>

                        # Under the classical inheritance phenomenon, we create a new class that actually extends or reuses the properties or functions, or methods of another class that are used by several programming languages (like C, C++, Java, etc.) <br></br><br></br>

                        # JavaScript doesn’t use classical inheritance instead it uses the phenomenon called Prototype Inheritance. <br></br><br></br>

                        # In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage. <br></br><br></br>

                        # All the JavaScript objects inherit properties and methods from a prototype (like Date objects inherit properties from Date.prototype and so on).</p>
                </div>
            </div>
            <div className="card w-11/12 md:w-11/12 lg:w-5/12 bg-red-100 shadow-xl mx-auto mb-8">
                <div className="card-body">
                    <h2 className="card-title">3. What is a unit test? Why should we write unit tests?</h2>
                    <p><span className='font-bold'>Ans: Unit Testing</span>  is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

                        In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing. <br></br><br></br>


                        <span className='font-bold'>Unit Testing is important because</span> software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end. <br></br><br></br>

                        Here, are the key reasons to perform unit testing in software engineering:

                        <br></br><br></br>
                        1. Unit tests help to fix bugs early in the development cycle and save costs. <br></br><br></br>
                        2. It helps the developers to understand the testing code base and enables them to make changes quickly. <br></br><br></br>
                        3. Good unit tests serve as project documentation. <br></br><br></br>
                        4. Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.
                    </p>
                </div>
            </div>
            <div className="card w-11/12 md:w-11/12 lg:w-5/12 bg-red-100 shadow-xl mx-auto mb-8">
                <div className="card-body">
                    <h2 className="card-title">4. React vs. Angular vs. Vue?</h2>
                    <p><span className='font-bold'>Ans:</span> Since 59% of the world’s population is online, you must be aware that the world is adapting to the latest technologies being invented. Web Development is one of them which has now become the trend and will be forever. Let’s also know that there are more than 1 billion websites and those are created by none other than the tech giants – Web Developers. <br></br><br></br>

                        While creating those beautiful websites, web developers require various tools and frameworks. There are several tools that can be used for the development of the website. Since frameworks play an important role in building an efficient, effective, and quick website there’s always a big confusion in choosing the framework for front-end development, as one prefers to choose the best framework in terms of performance, speed, and how best it is in making the UI attractive. There’s a big competition and huge demand among the most popular ones React, Angular, and VueJS which also offers excellent salary. Let’s discuss the differences between these frameworks (React VS Angular VS Vue). <br></br><br></br>

                        <span className='font-bold'>React</span> <br></br><br></br>
                        # React is the JavaScript library of User Interfaces. It is build single-page applications and also allows you to create reusable UI components. It is a front-end JavaScript framework, created by Facebook in 2011. The initial version (V0.3.0) was released in July 2013. The latest version is V5.0.1. It has a size of 31.8K. This complete guide on How To Learn ReactJS: A Complete Guide For Beginners will help in making your transition towards React if you’re a beginner. <br></br><br></br>

                        # Popularity – React has gained a lot of popularity in recent years and is considered one of the best frameworks for web development. There are more developers who keep React as a priority for creating wonderful websites. Companies like Uber, Airbnb, Netflix, Yahoo!, and The New York Times use React for their front-end development. <br></br><br></br>

                        # Architecture – It does not follow any specific pattern, developers have the freedom to choose any design pattern. It begins with a single root component. Each can be nested with another component. It can also include third-party components such as state management routing, animation, etc for specific purposes. Here, the components are the large building block that defines reusable items used through the application. <br></br><br></br>

                        # Ecosystem – React has excellent open-source packages that could be used for developing applications. Front-end applications rely on global state management (Redux) used to store information. Also, React has React Native which allows you to build native iOS and Android applications. React uses JavaScript which acts as a powerpack for the whole new application. It combines UI templates and JavaScript logic called JSX which is the scripting language for React. <br></br><br></br>

                        # Features – React follows the “Learn Once, Write Anywhere” feature which helps developers to integrate new features without the need of rewriting the existing code. It also has declarative views for each state which will efficiently update and render the components as per the change in data. It has virtual DOM (Document Object Model defines how the document is accessed and manipulated) which helps in updating the changes made by the developer quickly to the website keeping rest of the other things the same. Now, with all this information, if you are sure to move to React, React JS (Basic to Advanced) – Self-Paced will guide you through the theoretical knowledge along with having practical hands-on. <br></br><br></br>

                        <span className='font-bold'>Angular</span> <br></br><br></br>

                        # Angular, developed by Google, was released in the year 2010. It is a TypeScript-based framework that uses a regular DOM. Angular provides a set of tools using which a complex, reactive UI can be built. It is primarily aimed at creating SPAs (Single Page Applications) and performs various operations such as routing, state management, PWA, testing, and building, having a size of 143K. <br></br><br></br>

                        # Popularity – Angular is used by Google, Upwork, and MS Office and since this framework was implemented before React, it is more popular providing a highly functional framework to create larger applications. <br></br><br></br>

                        # Architecture – Angular follows MVC (Model-View-Controller) architecture, also you don’t have restrictions in following only MVC architecture. Since Angular is also component-based, you can choose any design pattern. The Angular framework contains modules, templates, services, and components in the architecture which follows several operations while implementing an application. <br></br><br></br>

                        # Ecosystem – Angular also performs state management, inspired by Redux in React. You can build cross-platform mobile applications using NativeScript. The technology MEAN is based on Angular which is the trendy one these days, used mostly by developers. Angular material fills all the needs of UI and helps developers in building an aesthetic, consistent, and fully functional UI. It uses templates with Angular directives. <br></br><br></br>

                        # Features – The new version of Angular8 comes with immense features such as it supports cross-platform, two-way data binding, a set of directives, declarative UI, a real DOM, CLI (Command Line Interface), and many more. <br></br><br></br> 
                       
                        <span className='font-bold'>Vue</span> <br></br><br></br>

                        # Vue was developed by a former Google employee and was released in the year 2014. It was developed to make the best version of Angular and make a custom tool. It is used for developing single-page engaging and high-quality web applications. It lets you extend directives (HTML with HTML attributes), and also provides built-in directives and user-defined directives. It is the lightest framework having a size of 23K. <br></br><br></br>

                        # Popularity – Vue has become so popular these days and it is one of the hottest topics in terms of technology. Companies that use Vue as their front-end development framework are UpWork, Netflix, and Nintendo. It has a good rating on GitHub making it so popular. <br></br><br></br>

                        # Architecture – Vue is called a progressive framework where you can extend functionality using third-party packages. It follows the MVVM (Model View ViewModel) pattern but is also not strictly linked to it. It also has SFCs (Single File Components) which can be transpiled into JS code using tools like Webpack. <br></br><br></br>

                        # Ecosystem – Vue comes with various libraries used for creating a full-fledged UI. Vuex is the state management library for Vue applications. To speed up your development, it has input components and advanced elements. It has a brilliant feature of integrating with Laravel. It can play a role of a library and a framework both depending on the project’s requirement. It uses HTML-based template syntax. <br></br><br></br>

                        # Features – Several features of Vue include two-way data binding for HTML interface manipulation, virtual DOM to update the changes made in the website quickly, custom directives for managing data changes, components for reusing codes, and transitions that provides methods when a UI element is removed or inserted in the DOM.

                        React, Angular, or Vue, all of these frameworks are based purely on JavaScript thus, they’re not dependent on any third-party tools. Each framework has unique features that can be used by developers whenever required. So, instead of giving a conclusion on going for one framework, it totally depends on you which framework you want to go for. Use the right framework based on the requirement of the project.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;